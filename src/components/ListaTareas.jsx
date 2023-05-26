import { ListGroup } from 'react-bootstrap';
import ItemTarea from './ItemTarea';

const ListaTareas = ({listadoTareas, borrarTarea}) => {



    return (
        <>
            <ListGroup>
                {
                    //si tengo un id lo uso.
                    listadoTareas.map((itemTarea, indice)=>{
                    return <ItemTarea borrarTarea={borrarTarea} key={indice} itemTarea={itemTarea}></ItemTarea>
                    })
                }
            </ListGroup>
        </>
    );
};

export default ListaTareas;