#!/usr/bin/env python3
"""
Extract text from images using OCR
"""

import os
from PIL import Image
import pytesseract

def extract_text_from_images():
    """Extract text from all images in public/images/"""
    
    images_dir = 'public/images'
    
    if not os.path.exists(images_dir):
        print("Error: public/images directory not found")
        return
    
    # Get all image files
    image_files = sorted([f for f in os.listdir(images_dir) if f.endswith(('.png', '.jpg', '.jpeg'))])
    
    print(f"Found {len(image_files)} images\n")
    print("=" * 80)
    
    for image_file in image_files:
        image_path = os.path.join(images_dir, image_file)
        
        try:
            # Open image
            img = Image.open(image_path)
            
            # Extract text using OCR
            text = pytesseract.image_to_string(img)
            
            page_num = image_file.split('_')[1]
            
            print(f"\n--- PAGE {page_num} ({image_file}) ---")
            print(text.strip() if text.strip() else "[No text detected]")
            print("-" * 80)
            
        except Exception as e:
            print(f"Error processing {image_file}: {e}")

if __name__ == "__main__":
    try:
        extract_text_from_images()
    except ImportError:
        print("pytesseract not installed.")
        print("\nInstall with:")
        print("  pip install pytesseract")
        print("\nAlso install Tesseract OCR:")
        print("  Windows: https://github.com/UB-Mannheim/tesseract/wiki")
        print("  Mac: brew install tesseract")
        print("  Linux: sudo apt-get install tesseract-ocr")
