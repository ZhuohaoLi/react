import React,{useContext} from 'react';
import UserContext from './userContext';
import CartContext from './cartContext'

function MovieRow(props) {
    const userContext=useContext(UserContext);//returns our UserContext object
    const cartContext=useContext(CartContext);
    //console.log("context",userContext.currentUser.name);
    console.log("Cart Context",cartContext)
    return (
        <div>
            Movie Row {userContext.currentUser?userContext.currentUser.name:""}
        </div>
    );
}

export default MovieRow;