import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Article from './Article';
import Author from './Help';
import Slug from './Slug';


class Header extends React.Component {
    state = {

    }

    render(){
     
     return (
        <header>
            <Author/>
            <Article/>
       
            <Slug/>
        </header>
     )
    }
}

export default Header