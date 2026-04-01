#!/usr/bin/env python3
"""
PDF Content Extractor
Extracts text and images from the pitch deck PDF
"""

import sys
import os

def extract_with_pypdf2():
    """Extract text using PyPDF2"""
    try:
        import PyPDF2
        
        pdf_path = 'Uncompressed 2.2.pdf'
        
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            num_pages = len(pdf_reader.pages)
            
            print(f"Total pages: {num_pages}\n")
            print("=" * 80)
            
            for page_num in range(num_pages):
                page = pdf_reader.pages[page_num]
                text = page.extract_text()
                
                print(f"\n--- PAGE {page_num + 1} ---")
                print(text)
                print("-" * 80)
                
    except ImportError:
        print("PyPDF2 not installed. Install with: pip install PyPDF2")
        return False
    except Exception as e:
        print(f"Error with PyPDF2: {e}")
        return False
    
    return True

def extract_with_pdfplumber():
    """Extract text using pdfplumber (better for complex PDFs)"""
    try:
        import pdfplumber
        
        pdf_path = 'Uncompressed 2.2.pdf'
        
        with pdfplumber.open(pdf_path) as pdf:
            num_pages = len(pdf.pages)
            
            print(f"Total pages: {num_pages}\n")
            print("=" * 80)
            
            for page_num, page in enumerate(pdf.pages):
                text = page.extract_text()
                
                print(f"\n--- PAGE {page_num + 1} ---")
                print(text if text else "[No text found - likely image-based]")
                print("-" * 80)
                
                # Try to extract tables
                tables = page.extract_tables()
                if tables:
                    print(f"Found {len(tables)} table(s) on this page")
                    for i, table in enumerate(tables):
                        print(f"\nTable {i + 1}:")
                        for row in table:
                            print(row)
                
    except ImportError:
        print("pdfplumber not installed. Install with: pip install pdfplumber")
        return False
    except Exception as e:
        print(f"Error with pdfplumber: {e}")
        return False
    
    return True

def extract_images():
    """Extract images from PDF"""
    try:
        import fitz  # PyMuPDF
        
        pdf_path = 'Uncompressed 2.2.pdf'
        pdf_document = fitz.open(pdf_path)
        
        # Create images directory if it doesn't exist
        os.makedirs('public/images', exist_ok=True)
        
        for page_num in range(len(pdf_document)):
            page = pdf_document[page_num]
            images = page.get_images()
            
            print(f"Page {page_num + 1}: Found {len(images)} image(s)")
            
            for img_index, img in enumerate(images):
                xref = img[0]
                base_image = pdf_document.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]
                
                image_filename = f"public/images/page_{page_num + 1}_img_{img_index + 1}.{image_ext}"
                
                with open(image_filename, "wb") as image_file:
                    image_file.write(image_bytes)
                    print(f"  Saved: {image_filename}")
        
        pdf_document.close()
        print("\nImages extracted successfully!")
        
    except ImportError:
        print("PyMuPDF not installed. Install with: pip install PyMuPDF")
        return False
    except Exception as e:
        print(f"Error extracting images: {e}")
        return False
    
    return True

def main():
    print("PDF Content Extractor")
    print("=" * 80)
    
    if not os.path.exists('Uncompressed 2.2.pdf'):
        print("Error: 'Uncompressed 2.2.pdf' not found in current directory")
        return
    
    print("\nChoose extraction method:")
    print("1. Extract text with PyPDF2")
    print("2. Extract text with pdfplumber (recommended)")
    print("3. Extract images")
    print("4. Extract both text and images")
    
    choice = input("\nEnter choice (1-4): ").strip()
    
    if choice == '1':
        extract_with_pypdf2()
    elif choice == '2':
        extract_with_pdfplumber()
    elif choice == '3':
        extract_images()
    elif choice == '4':
        print("\n--- EXTRACTING TEXT ---")
        extract_with_pdfplumber()
        print("\n\n--- EXTRACTING IMAGES ---")
        extract_images()
    else:
        print("Invalid choice")

if __name__ == "__main__":
    main()
