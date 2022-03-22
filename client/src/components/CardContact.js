import React from "react"
import {Button, Card} from "react-bootstrap"
import { useDispatch } from "react-redux"
import {deletecontact, getonecontact , toggletrue} from "../redux/actions/ContactAction"
function CardContact({contact}){
  const dispatch = useDispatch();
  const navigate = useDispatch()
  const handleDelete= () =>{
    if (window.confirm("are you sure?"))  dispatch(deletecontact(contact._id));
  }
    return (
        <div>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{contact.name[0]}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">
        {contact.name}
        </Card.Subtitle>
    <Card.Text>
    email:{contact.email}
    <br></br>
    age:{contact.age}
    </Card.Text>
    <Button variant="danger" onClick={handleDelete}>Delete</Button>
    <Button variant="info" 
    onClick={() => {
      dispatch(toggletrue());
      navigate("/form");
      dispatch(getonecontact(contact._id));
    }}>
      Edit
    </Button>

      </Card.Body> 

</Card>
        </div>
    )
}
export default CardContact