import os

from flask import Flask, render_template, redirect
from flask_sitemapper import Sitemapper
app = Flask(__name__)
ASSETS_DIR = os.path.dirname(os.path.abspath(__file__))
sitemapper = Sitemapper()
sitemapper.init_app(app)

@sitemapper.include(lastmod="2024-06-5")
@app.route('/')
def index():
    return render_template('index.html')
@sitemapper.include(lastmod="2024-06-5")
@app.route('/walls')
def walls():
    return render_template('walls.html')

@sitemapper.include(lastmod="2024-06-5")
@app.route('/wd2024')
def wd2024():
    return redirect("https://forms.gle/387UorEh44HUrNj17", code="301")

@app.route("/sitemap.xml")
def sitemap():
  return sitemapper.generate()

context = ('server.crt', 'server.key')
if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
