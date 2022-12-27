import React from 'react';
import data from '../data.json'

class Slug extends React.Component {
    constructor(props){
        super(props)
        this.setState = {
            
        }
    }

    render(){
        return(
            <>
                
           {
            data.map((item) => 
            <h1>
                {item.slug}
            </h1>
            )
           }
           
            </>
        )
    }
}

export default Slug