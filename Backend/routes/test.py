from app import app
from flask import render_template

@app.route("/test")
def test():
    return {"status":"success"}

@app.route("/test1")
def test1():
    return  "<h2>Hello, World!</h2>"

@app.route("/test2")
def test2():
    return  render_template("temp1.html", t="test2")