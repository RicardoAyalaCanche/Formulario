import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import logo from './logo.svg';
import InputGroup from 'react-bootstrap/InputGroup'
import Formulario from './components/Formulario'
import Formulariocss from './components/Formulario.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


class App extends Component {
	
	
	
	render(){

		return (
			<div className="contMain">
				<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="/">
					<img
					alt=""
					src="/logo.svg"
					width="30"
					height="30"
					className="d-inline-block align-top"
					/>{' '}
					Formulario Registro
				</Navbar.Brand>
				</Navbar>

				<section className="propContenedor">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Formulario />} />
					</Routes>
				</BrowserRouter>
				
				</section>
		  	</div>
		);	
	}
}export default App;