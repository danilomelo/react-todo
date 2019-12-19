import React from 'react'
import {Link} from 'react-router-dom';

export default function(){
    return(
        <aside>
            <ul>
                <li>
                    <Link to="/todo">Todo list</Link>
                    <Link to="/about">About </Link>
                </li>
            </ul>
        </aside>
    )
}