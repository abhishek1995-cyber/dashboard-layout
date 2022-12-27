import React from 'react';
import {link} from 'react-router-dom'

class Sidebar extends React.Component {
    constructor(props){
        super(props)
        this.setState = {
            
        }
    }

    render(){
       return (
        <>
             <ul>
                <a  href='/'>
                      <li>Home</li>
                </a>
                <a href='/article'>
                        <li>Article</li>
                </a>
                <a href='/author'>
                        <li>Author</li>
                </a>
                <a href='/slug'>
                        <li>Slug</li>
                </a>
            </ul>
        </>
       )
    }
}

export default Sidebar