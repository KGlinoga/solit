import React, { useState, useEffect } from "react";
import Shelf from "../../components/shelfCarousel/Shelf";
import Api from "../../utils/Api";


const Shelves = (props)=>{
    const [shelves, setShelves]= useState('')

    useEffect(()=>{
        Api.getShelf(props.user.id).then(res=>res.json().then(data=>{
            setShelves(data.shelves);
        }))
    },[props.user.id])
    
   return(
    <div>
        <Shelf/>
    </div>
   )
}

export default Shelves;