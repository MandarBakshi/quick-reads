import uuid
from flask import Blueprint, render_template, url_for, request, jsonify
import os
import pickle
from werkzeug.utils import secure_filename

views = Blueprint('views', __name__)

@views.route('/api/tools/summarizer/pdf', methods=['POST'])
def SummarizationPDF():
    if request.method == 'POST':
        f = request.files['pdfInput']
        l = request.form.get('length')
        # filename = secure_filename(f.filename)  # type: ignore

        # save the file with a unique file name
        filename = str(uuid.uuid4())
        f.save(os.path.join("core\\storage", filename))

        from core.Summarization.summarizerPDF import fGetSummaryPDF
        summary = fGetSummaryPDF(f"core\\storage\\{filename}", l)

        # now delete the uploaded file
        os.remove(os.path.join("core\\storage", filename))

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



@views.route('/api/tools/summarizer/url', methods=['POST'])
def SummarizationURL():
    if request.method == 'POST':
        urlInput = request.form.get('urlInput')

    
    return 'hello'



@views.route('/api/tools/ml/models/spamdetection/', methods=['POST'])
def DetectSpam():
    if request.method == 'POST':
        formData = request.get_json()
        text = formData['text']
        inputData = [text]

        vectorizer = pickle.load(open('./core/models/VectorizerModel.model', 'rb'))
        classifier = pickle.load(open('./core/models/SpamClassifierSimple.model', 'rb'))

        inputData_converted = vectorizer.transform(inputData)
        y = classifier.predict(inputData_converted)

        return jsonify(str(y[0]))
    
    else:
        return "you do not have access"