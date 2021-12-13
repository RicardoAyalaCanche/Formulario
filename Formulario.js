import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'


export default class Formulario extends Component {

	state = {
        datos: {
			nombre:'',
			edad:'',
			fechaNacimiento: Date,
			pasaTiempo:''
		}
    } 

	gedDatosUsuario=_=>{
		const {datos}=this.state;
		// Fecha de nacimiento
		var fechaIni = new Date(datos.fechaNacimiento);
		// Crear objeto de fecha final (actual)
		var fechaFin = new Date();
		// Calcular diferencia en milisegundos
		var diff = fechaFin - fechaIni;
		console.log(diff);

		// Calcular días
		var diferenciaDias = Math.floor(diff / (1000 * 60 * 60 * 24));
		console.log(diferenciaDias);
		//Calculo de horas
		var diferenciaHora = Math.floor(diff / (1000 * 60 * 60));
		//calculo de minutos
		var diferenciaMinuto = Math.floor(diff / (1000 * 60));

		//Calculo de fecha faltante
		
		var days = Math.floor(diff / (1000 * 60 * 60 * 24));

		alert("El ser humano "+ datos.nombre + " ha vivido un total de:\n"
				+ diferenciaDias + " dias\n" 
				+ diferenciaHora + " Horas\n"
				+ diferenciaMinuto + " Minutos\n"
				+ "Su hobbie favorito es " + datos.pasaTiempo
				+ "\nFaltan "+ days + " dias," + diferenciaHora + " horas para su cumpleaños"
				);
	}

	render(){
		const {datos}=this.state;

		return (

			<div className="FormGrop">
		
				<Form>
					  <Form.Group controlId="">
						<Form.Label>Nombre</Form.Label>
						<Form.Control type="text" 
							placeholder="Ingrese su nombre completo" 
							value={datos.nombre}
                            onChange={e => this.setState({ datos:{...datos,nombre:e.target.value} })}
							/>
					  </Form.Group>
		
					  <Form.Group controlId="">
						<Form.Label>Edad</Form.Label>
						<Form.Control 
							type="text" 
							placeholder="Ingrese su Edad"
							value={datos.edad}
                            onChange={e => this.setState({ datos:{...datos,edad:e.target.value} })} />
					  </Form.Group>

					  <Form.Group controlId="">
						<Form.Label>Fecha de nacimiento</Form.Label>
						<Form.Control 
							type="date" 
							placeholder="" 
							value={datos.fechaDeNacimiento}
                            onChange={e => this.setState({ datos:{...datos,fechaNacimiento:e.target.value} })}
							/>
					  </Form.Group>

					  <Form.Group controlId="">
						<Form.Label>Pasatiempo</Form.Label>
						<Form.Control 
							type="text" 
							placeholder="Tu hobbie favorito es...." 
							value={datos.pasatiempo}
                            onChange={e => this.setState({ datos:{...datos,pasaTiempo:e.target.value} })}/>
						</Form.Group>

						<Button type="submit" onClick={this.gedDatosUsuario}  >Mostrar Datos</Button>
				</Form>
			</div>
		
		  );
	}
}