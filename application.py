from flask import Flask, render_template, request

app = Flask(__name__)

#@app.route("/")
#def index():
#	return "<p><b>Hello, World!!!</b></p>"

#@app.route("/<string:name>")
#def makako(name):
#	return "<p><b>Hello, {}!!!</b></p>".format(name)

@app.route("/")
def index():
	return render_template("index.html")

@app.route("/curriculum", methods=["POST"])
def curriculum():
	name=request.form.get("name")
	name1=request.form.get("name1")
	fecha=request.form.get("fecha")
	ocupacion=request.form.get("ocupacion")

	#Separar lista de habilidades
	habilidades=request.form.get("hx") + ","
	habilist = []
	x = 0
	y = 0
	for n in habilidades:
		x = x + 1
		if n == ',':
			habilist.append(habilidades[y:x-1])
			y = x
	
	email=request.form.get("email")
	telefono=request.form.get("phone")
	nacionalidad=request.form.get("nacionalidad")
	ingles=request.form.get("ingles")
	lenguaje=request.form.get("python")
	aptitudes=request.form.get("Aptitudes")
	lenguajes=request.form.get("px") + ","
	lenguajeslist = []
	x = 0
	y = 0
	for n in lenguajes:
		x = x + 1
		if n == ',':
			lenguajeslist.append(lenguajes[y:x-1])
			y = x

	perfil=request.form.get("perfil")
	return render_template("Curriculum.html", 
		newname=name,
		newfecha=fecha,
		newocupacion=ocupacion,
		newhabilidades=habilist,
		newlenguajes=lenguajeslist,
		newemail=email,
		newtelefono=telefono,
		newnacionalidad=nacionalidad,
		newingles=ingles,
		newlenguaje=lenguaje,
		newaptitudes=aptitudes,
		newperfil=perfil)
