import os
from flask import Flask, render_template, url_for, request, session, redirect
app = Flask(__name__)
ASSETS_DIR = os.path.dirname(os.path.abspath(__file__))

@app.route('/')
def index():
    return render_template(
        'index.html'
        )
context = ('server.crt', 'server.key')
if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
