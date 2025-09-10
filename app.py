import re
import pdfplumber
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file and file.filename.endswith('.pdf'):
        try:
            with pdfplumber.open(file) as pdf:
                text = ""
                for page in pdf.pages:
                    text += page.extract_text()

            # Regex to find dimensions. This is a simple example and might need to be improved.
            # It looks for patterns like: 10m, 20ft, 15'6", 12' 6", 12'6in, etc.
            dimensions = re.findall(r'\d+(?:\.\d+)?\s*(?:m|ft|in|[\'"])\s*(?:\d+\s*(?:in|"))?', text)
            dimensions = [d.strip() for d in dimensions]

            return jsonify({'dimensions': dimensions})
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    else:
        return jsonify({'error': 'Invalid file type, please upload a PDF'}), 400

if __name__ == '__main__':
    app.run(debug=True)
