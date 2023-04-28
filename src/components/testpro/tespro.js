import React from 'react'
import { Link } from "react-router-dom";

const Tespro = ({X}) => {
  return (
    <div className="small-banner position-relative">
                <img
                  src={X.image}
                  className="img-fluid rounded-3"
                  style={{position:"relative",left:"10px",top:"15pt"}}
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                
                  <h4>Nouvel arrivage</h4>
                  <h5>ddd  <br/>Sous Vide<br/> À Chambre Unique</h5>
                  <p>
                    From $9999 <br /> or $41.62/mo.
                  </p>
                  <Link className="button"
                  style={{position:"relative",zIndex:"1",height:"auto",top:"45pt"}}
                  >Acheter</Link>
                 
                  
                  
                </div>
              </div>
  )
}

export default Tespro
