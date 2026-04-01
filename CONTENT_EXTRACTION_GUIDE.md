# Content Extraction Guide

Since your PDF contains images, here's how to extract the content:

## Method 1: Manual Extraction (Recommended)

1. Open `Uncompressed 2.2.pdf` in Adobe Acrobat Reader or your PDF viewer
2. Go through each page and note down:
   - Page title/heading
   - Main content/bullet points
   - Any statistics or numbers
   - Images that need to be exported

3. For each page, take a screenshot or export the image:
   - Right-click on the page → Save as Image
   - Or use a screenshot tool
   - Save images to `public/images/` folder with descriptive names

## Method 2: Online OCR Tools

If the PDF has text embedded in images, use an OCR tool:

1. Go to one of these free services:
   - https://www.onlineocr.net/
   - https://www.i2ocr.com/
   - https://www.newocr.com/

2. Upload `Uncompressed 2.2.pdf`
3. Select output format as Text
4. Download the extracted text
5. Copy relevant sections to the components

## Method 3: Use Python Script (If you have Python installed)

```bash
# Install required package
pip install PyPDF2 pdfplumber

# Run the extraction script (create this file)
python extract_pdf_content.py
```

## Typical Pitch Deck Structure

Your PDF likely contains these sections (in order):

1. **Cover/Title Slide** → Hero component
2. **Problem Statement** → Problem component
3. **Solution** → Solution component
4. **Market Size/Opportunity** → Market component
5. **Product/Demo** → Product component
6. **Business Model** → BusinessModel component
7. **Traction/Metrics** → Traction component
8. **Team** → Team component
9. **Financials/Projections** → Financials component
10. **Ask/Contact** → Contact component

## Content Mapping Template

For each PDF page, fill out this template:

```
PAGE X: [Title]
---
Component: [Which React component this goes to]
Heading: [Main heading]
Content:
- [Bullet point 1]
- [Bullet point 2]
- [etc.]

Images: [List any images to export]
Stats/Numbers: [Any key metrics]
```

## Next Steps

1. Extract content using one of the methods above
2. Use the template to organize your content
3. Update the React components with your actual content
4. Export and add images to `public/images/`
5. Test the website and adjust layout as needed
