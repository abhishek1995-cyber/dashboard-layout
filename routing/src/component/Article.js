import React from 'react';
import data from '../data.json'

class Article extends React.Component {
    state = {
       
    }

    render(){
      return (
           <>
           {
            data.map((item) => 
            <h1>
                {item.title}
            </h1>
            )
           }
           </>
      )
    }
}

export default Article