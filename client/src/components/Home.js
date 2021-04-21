import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"


function Home() {
    return (
      
       <div className="contaner" style={{color:"white",backgroundImage: 'url(/bg.png) ',backgroundPosition: 'center',
       backgroundSize: 'cover',height:"100vh",
       backgroundRepeat: 'no-repeat'}}>
         

       <div className="container" style={{paddingTop:"12rem",paddingLeft:"2rem"}}>
         <h4>WELCOME TO </h4>
         <h1 style={{fontSize:"6rem"}}><strong>TSF BANK</strong> </h1>
         </div>   
         <div className="buttons" style={{paddingLeft:"25rem"}}>
        <Link to="/customers" id="download-button" class="btn-large waves-effect waves-light orange">Get Started</Link>
      </div>
         </div>
         
      
     
    
     

    

        
    );
}

export default Home
