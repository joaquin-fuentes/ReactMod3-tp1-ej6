import {Form, Button} from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import { useState, useEffect } from 'react';

const Formulario = () => {

    const [tarea, setTarea] = useState("");
    let tareasLocalstorage = JSON.parse(localStorage.getItem("listaTareas") || [])
    const [listadoTareas, setListadoTareas] = useState(tareasLocalstorage);

    // aqui van las funciones

    useEffect(()=>{
        // console.log(tarea)
        // console.log(listadoTareas)
        localStorage.setItem("listaTareas", JSON.stringify(listadoTareas))
    }, [listadoTareas])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (tarea.trim() !== "") {
        setListadoTareas([...listadoTareas, tarea]);
        setTarea("");
        }
    };

    const borrarTarea = (nombreTarea)=>{
        let arregloFiltrado = listadoTareas.filter((itemTarea)=>itemTarea !== nombreTarea)
        setListadoTareas(arregloFiltrado)
    }

    return (
        <section>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex" controlId="tarea">
                    <Form.Control type="text"  placeholder="Ingrese una tarea"
                    onChange={(e)=> setTarea(e.target.value)}
                    value={tarea} />
                 
                    <Button variant="primary" type="submit" className='mx-2'>
                       Enviar
                    </Button>
                </Form.Group>
            </Form>
            <ListaTareas borrarTarea={borrarTarea} listadoTareas={listadoTareas}></ListaTareas>
        </section>
    );
};

export default Formulario;