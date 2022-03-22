
import React from "react"
import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { get_contact, togglefalse } from "../redux/actions/ContactAction";

function Home (){
    const dispatch = useDispatch();

    return (
        <div>
        <Link to='/list'>
            {" "}
            <Button onClick={()=> dispatch(get_contact())}>
                 Contacts</Button>{" "}
            </Link>
       <Link to='/form'> 
            {" "}
       <Button onClick={()=>dispatch(togglefalse())} > 
       {" "}
       Add New contact</Button>{" "}
       </Link>

        </div>
    )
}
export default Home