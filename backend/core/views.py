from flask import Blueprint, render_template, url_for, request, jsonify
import os
from werkzeug.utils import secure_filename

views = Blueprint('views', __name__)

@views.route('/api/tools/summarizer/pdf', methods=['POST'])
def SummarizationPDF():
    if request.method == 'POST':
        f = request.files['pdfInput']
        l = request.form.get('length')
        filename = secure_filename(f.filename)  # type: ignore
        f.save(os.path.join("core\\storage", filename))
        from core.Summarization.summarizerPDF import fGetSummaryPDF
        summary = fGetSummaryPDF(f"core\\storage\\{filename}", l)
        return jsonify(summary)

    
    return ("<h1>YOU DO NOT HAVE ACCESS!</h1>")



@views.route('/api/tools/summarizer/text/', methods=['POST'])
def SummarizationText():
    if request.method == 'POST':
        formData = request.get_json()
        if formData != None:
            txt = formData['textInput']
            length = formData['length']

            from core.Summarization.summarizerText import fGenarateSummary
            summaryText = fGenarateSummary(txt, length)
            return jsonify(summaryText)
    
    return ("<h1>YOU DO NOT HAVE ACCESS!</h1>")



@views.route('/api/tools/summarizer/url', methods=['GET', 'POST'])
def SummarizationURL():
    if request.method == 'POST':
        urlInput = request.form.get('urlInput')

    
    return 'hello'


