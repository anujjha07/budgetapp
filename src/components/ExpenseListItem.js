import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({ dispatch, id ,  description, amount, createdat}) => {
    return (
      <div> 
        <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        </Link>
        

    <p>{amount} - {createdat}</p>
    
    
      </div>
    )
}

export default (ExpenseListItem);