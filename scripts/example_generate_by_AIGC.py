import json
import os


def read_file(file_path, mode='r', encoding='utf-8'):
    """
    读取文件内容，支持字符和字节两种方式。

    :param file_path: 文件路径
    :param mode: 读取模式，默认为 'r'（字符模式），可选 'rb'（字节模式）
    :param encoding: 编码格式，默认为 'utf-8'，仅在字符模式下有效
    :return: 文件内容
    """
    if mode == 'rb':
        with open(file_path, mode) as f:
            return f.read()
    else:
        with open(file_path, mode, encoding=encoding) as f:
            return f.read()


def write_file(file_path, content, mode='w', encoding='utf-8'):
    """
    写入文件内容，支持字符和字节两种方式。

    :param file_path: 文件路径
    :param content: 文件内容
    :param mode: 写入模式，默认为 'w'（字符模式），可选 'wb'（字节模式）
    :param encoding: 编码格式，默认为 'utf-8'，仅在字符模式下有效
    """
    if mode == 'wb':
        with open(file_path, mode) as f:
            f.write(content)
    else:
        with open(file_path, mode, encoding=encoding) as f:
            f.write(content)


def get_system_prompt(file_path='scripts/system_prompt.json', type='soft'):
    """
    从指定文件中读取系统提示信息并返回指定类型的提示内容

    :param file_path: 系统提示信息文件路径，默认为'system_prompt.json'
    :param type: 提示类型，可选值为'soft'或'strict'，默认为'soft'
    :return: 指定类型的系统提示内容
    """
    # 读取并解析系统提示文件
    system_prompt = json.loads(read_file(file_path))
    # 返回指定类型的提示内容
    return system_prompt[type]

def rpc(model='qwen-plus',system_prompt=None, message='请你自我介绍'):
    import dashscope
    import os
    messages = [
        {'role': 'system', 'content': system_prompt},
        {'role': 'user', 'content': message}
    ]
    response = dashscope.Generation.call(
        # 若没有配置环境变量，请用百炼API Key将下行替换为：api_key="sk-xxx",
        api_key=os.getenv('DASHSCOPE_API_KEY'),
        model=model,
        # 此处以qwen-plus为例，可按需更换模型名称。模型列表：https://help.aliyun.com/zh/model-studio/getting-started/models
        messages=messages,
        result_format='message'
    )
    if response.status_code == 200:
        return ''.join(map(lambda choice: choice.message.content, response.output.choices))
    else:
        raise Exception(f"Error: {response.status_code}, {response.message}")


def filter_file(file_path, ignore_fields=None):
    if ignore_fields is None:
        ignore_fields = ['Sql', 'types', 'style', 'scripts', 'index', 'DemoBlock']
    if any(field in file_path for field in ignore_fields):
        return True


def validate_file(file_path):
    if os.path.exists(file_path):
        print(f'已存在{file_path}')
    else:
        write_file(file_path, '')
        print(f'已创建文件：{file_path}')


target_display_path = r'F:\eclipse\worakjava\qyani-ui-docs\src\display'
target_docs_path = r'F:\eclipse\worakjava\qyani-ui-docs\public\docs'
src_vue_path = r'F:\eclipse\worakjava\qyani-components\src'

def main():
    system_prompt = get_system_prompt(type='strict')
    example_md = read_file('scripts/example.md.txt')
    example_vue = read_file('scripts/example.vue.txt')
    for root, dirs, files in os.walk(src_vue_path):
        for file in files:
            full_path = os.path.join(root, file)
            if filter_file(full_path):
                continue
            docs_path = (full_path
                         .replace(src_vue_path, target_docs_path)
                         .replace('\\', '/')
                         .replace('.vue', '.md')
                         .replace('.ts', '.md'))
            display_path = (full_path
                            .replace(src_vue_path, target_display_path)
                            .replace('\\', '/')
                            .replace('.ts', '.vue')
                            )
            validate_file(docs_path)
            validate_file(display_path)
            src_content = read_file(full_path)
            if os.path.getsize(docs_path) == 0:
                message = f'阅读下面这个vue文件或者ts文件内容${src_content},并按照我给你的md模板${example_md}生成对应的文档,如何你阅读着是一个ts文件,那么你就不需要按照模板生成说明而是说明函数,类,参数,返回值,Expose的方法必须是有defineExpose定义的否则没有,' \
                          f'如果你觉得这个模板与当前的文件内容不太匹配你可以自我发挥,' \
                          f'不要有你自己的解释多余的话'
                result = rpc(model='qwen-plus',system_prompt=system_prompt, message=message)
                write_file(docs_path, result)
                print(f'为{docs_path}添加文档说明')
            if os.path.getsize(display_path) == 0:
                message = f'阅读下面这个vue文件或者ts文件内容${src_content},并按照我给你的vue模板${example_vue}生成对应的vue文件,所有除了与vue相关的的导入其他的都是都是from "qyani-components"的命名导入'
                result = rpc(model='qwen-plus',system_prompt=system_prompt, message=message)
                write_file(display_path, result)
                print(f'为{display_path}添加vue文件')

if __name__ == '__main__':
    main()
