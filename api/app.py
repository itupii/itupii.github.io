from flask import Flask, app, render_template, request, redirect, url_for, flash, session, jsonify, make_response, send_from_directory, abort, send_file, Response, stream_with_context, send_file

@app.route('/')
def index():
    return render_template('/templates/index.html')

@app.route('/certificados')
def certificado():
    return render_template('/templates/certificados.html')

@app.route('/contatos')
def contatos():
    return render_template('/templates/contatos.html')

@app.route('/projects')
def projects():
    return render_template('/templates/projects.html')

@app.route('/sobremim')
def sobremim():
    return render_template('/templates/sobremim.html')

if __name__ == '__main__':
    app.run(debug=True)