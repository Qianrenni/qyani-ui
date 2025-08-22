import json
import  os

src_dir = r'D:\webstorm\workdir\qyani-ui-docs\src\display'
result = []
for root, dirs, files in os.walk(src_dir):
    for file in files:
        full_path = os.path.join(root, file)
        fileName = file.split('.')[0]
        category = full_path.replace(src_dir, '').replace(file, '').replace('\\', '/')
        docPath = full_path.replace(src_dir, '').replace('.vue','.md').replace('.ts','.md').replace('\\', '/')
        docPath = f'/docs{docPath}'
        result.append({
            "name": fileName,
            "displayName": fileName,
            "category": category,
            "docPath": docPath,
        })

print(json.dumps(result, indent=4))