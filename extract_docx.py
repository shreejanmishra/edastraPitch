import zipfile
import xml.etree.ElementTree as ET

z = zipfile.ZipFile(r'd:\practice\edastraPitch\public\graphs\pitchdeck text.docx')
doc = z.read('word/document.xml')
root = ET.fromstring(doc)

for t in root.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t'):
    if t.text:
        print(t.text, end='')
    else:
        print()
