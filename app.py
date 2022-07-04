from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
	weak_lengths = []
	strong_lengths = []
	unbelievable_lengths = []
	
	for i in range(6, 16):
		weak_lengths.append(i)

	for i in range(16, 129):
		strong_lengths.append(i)

	n = 128
	for i in range(4):
		n += n
		unbelievable_lengths.append(n)

	return render_template("index.html", weak_lengths=weak_lengths, strong_lengths=strong_lengths,
	 unbelievable_lengths=unbelievable_lengths)