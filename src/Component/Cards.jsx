import React from "react"
import Cardui from "./Cardui";
import img from "../card.webp";
import img2 from "../card2.webp";
import img3 from "../card3.webp";
class Cards extends React.Component{
    render(){
        return (
            <div className="container-fluid d-flex justify-content-center">
               <div className="row">
                   <div className="col-md-4">
                       <Cardui imgsrc={img} />
                   </div>
                   <div className="col-md-4">
                   <Cardui imgsrc={img} />
                   </div>
                   <div className="col-md-4">
                   <Cardui imgsrc={img}/>
                   </div>
               </div>
            </div>
        );
    }
}

export default Cards;