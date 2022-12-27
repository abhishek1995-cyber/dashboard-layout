import React from 'react';
import data from '../data.json'

class Author extends React.Component {
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
                {item.author}
            </h1>
            )
           }
           
            </>
        )
    }
}

export default Author