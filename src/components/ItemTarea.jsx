import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({itemTarea, borrarTarea}) => {
    return (
            <ListGroup.Item className="d-flex justify-content-between">
                {itemTarea}
                <Button onClick={()=>borrarTarea(itemTarea)} variant="danger">Borrar</Button>
            </ListGroup.Item>
    );
};

export default ItemTarea;