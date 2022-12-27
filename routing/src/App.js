import React from 'react';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import data from './data.json'



class App extends React.Component {
   constructor(props){
    super(props)
    this.setState = {
     
    }
   }



    render(){

   
    
       return(
    <>
    <Sidebar />
        <Header/>
      
    
    
    
    </>
       )
    }
}

export default App
