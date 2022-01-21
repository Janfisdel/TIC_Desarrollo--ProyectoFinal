from flask import Flask, request
from flask_mysqldb import MySQL
from flask import jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)

cors = CORS(app, resources={r"/*": {"origins": "*"}})

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'fullstack'
app.config['MYSQL_DB'] = 'FisdelJana'
mysql = MySQL(app)

@app.route('/nuevo', methods=['POST'])	
@cross_origin()	
def nuevo():
		if request.method == 'POST':
			request_data = request.get_json()
			nombre = request_data['nombre']
			email =request_data['email']
			serie=request_data['serie']
			comentario=request_data['comentario']
			cur = mysql.connection.cursor()
			cur.execute('INSERT INTO contacto (nombre,email,serie,comentario) VALUES (%s, %s, %s,%s)', (nombre,email,serie,comentario) )			
			mysql.connection.commit()
			return "Guardado OK"
					
			
if __name__	== '__main__':
			app.run(host = '0.0.0.0',port=4007)
			

