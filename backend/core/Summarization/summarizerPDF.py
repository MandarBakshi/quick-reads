import PyPDF2

def fGetSummaryPDF(path, length):
    pdf = PyPDF2.PdfFileReader(path)
    print(pdf.documentInfo)
    n = pdf.numPages
    txt = ''

    for i in range (0, n):
        page = pdf.getPage(i)
        # txt += f'---------------------- Page #{i+1} ---------------------------'
        txt += page.extract_text()

    # txtFile = open('extracted_text.txt', 'w', encoding='utf-8')
    # txtFile.write(txt)
    # txtFile.close()
    txt1 = txt.strip()
    # print(txt1)
    print("\n\npdf extracted... now generating summary\n\n")
    from core.Summarization.summarizerText import fGenarateSummary
    summary = fGenarateSummary(txt1, length)
    print("summary generated...\n\n")
    # print(summary)
    return summary