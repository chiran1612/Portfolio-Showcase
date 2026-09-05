from pathlib import Path
import fitz

pdf_path = Path("attached_assets/chiranjeev_resume_with_BISAG_(1)_1788609766030.pdf")
output_dir = Path(".agents/outputs/resume-render-latest")
output_dir.mkdir(parents=True, exist_ok=True)

document = fitz.open(pdf_path)
print(f"pages={document.page_count}")
for page_number, page in enumerate(document, start=1):
    pixmap = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
    output_path = output_dir / f"page-{page_number}.png"
    pixmap.save(output_path)
    print(output_path)