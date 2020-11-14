
import React, { Component } from 'react';
import { Link} from "react-router-dom";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { connect } from 'react-redux';
import { set_name} from './action';
import firebase from '../firebase/firebase'
import './Ads.css';



class Attribute extends Component {
  constructor(){
    super()
 this.state = {
name: "",
price:"",
image:"",
location:"",
description:"",
category:"",
    }
  }

   set_name = () =>{
console.log("NAME==>",this.state.name)
console.log("PRICE==>",this.state.price)
console.log("IMAGE==>",this.state.image)
console.log("CATEGORY==>",this.state.category)
console.log("LOCATION==>",this.state.location)
console.log("DESCRIPTION==>",this.state.description)


let key = firebase.database().ref('Product').push().key;
let users = {
  name:this.state.name ,
  price:this.state.price,
  image:this.state.image,
  location:this.state.location,
  description:this.state.description,
   key:key
}
 firebase.database().ref('Product').child(key).set(users) 
 
 firebase.database().ref("Product").on("value", (data) =>{
  console.log(data)
  })

   }

 

  handleNameChange = (e) =>{
  
    this.setState({
   name:e.target.value
   
})
  }


  handlePriceChange = (e) =>{
  
    this.setState({
   price:e.target.value
   
})
  }

  
  handleImageChange = (e) =>{
  
    this.setState({
   image:e.target.value
})
  }

  
  handleLocationChange = (e) =>{
  
    this.setState({
   location:e.target.value
   
})
  }

  
  handleDescriptionChange = (e) =>{
  
    this.setState({
  description:e.target.value
   
})
  }


  handleCategoryChange = (e) =>{
  
    this.setState({
  category:e.target.value
   
})
  }









  render() {
 
    return (
   
   
   <>  
 <div className="container-fluid text-center">
    <div className="row">
        <div className="col-md-12 py-2">
       <h4><b>POST YOUR AD</b></h4>
       
        </div>
        
</div>
 </div>


  

 <div className="container ">
    <div className="row">
        <div className="col-md-12 bop ">
 
<div>
  <div class="card-body ">
  <span className="categry">SELECTED CATEGORY</span> <br/>
 
  </div>
  </div>


</div>
</div>
</div>
 
 
<div className="container ">
    <div className="row">
        <div className="col-md-12 bop ">
 
<div>
  <div class="card-body ">
  
  <label>Item Name:-</label> <br/>
<input className="inputname"  onChange={this.handleNameChange}  type="text"   />
<br/><br/>
 <label>Item Price:-</label> <br/>
<input className="inputname" onChange={this.handlePriceChange}   type="text"  />
<br/><br/>
<label>Item image:-</label> <br/>
<input className="inputname"  onChange={this.handleImageChange}  type="text"   />
<br/><br/>
<label>Location:-</label> <br/>
<input className="inputname"  onChange={this.handleLocationChange}  type="text" />
<br/><br/>
<select class="inputname" onChange={this.handleCategoryChange} >
      <option>Mobile Phones</option>
      <option>Car</option>
      <option>Motorcycles</option>
      <option>Houses</option>
      <option> TV-Video-Audio</option>
      <option> Land & Plots</option>
    </select>
    <br/><br/>
<label>Item Description:-</label><br/>	 

<textarea className="inputname" onChange={this.handleDescriptionChange}  rows="4" >
  
</textarea> 
<br/><br/>
<button  className="btn btn-warning" onClick={this.set_name}>Post Now</button>

  </div>
  </div>


</div>
</div>
</div>
 





 <div className="container-fluid footer ">
            
            <div className="row py-3">
            <div className="col-md-3">
    <span>Sitemap</span>
 </div>
 <div className="col-md-4"></div> 
 <div className="col-md-5">
 <span><b>Free Classifieds in Pakistan.</b> © 2006-2020 OLX</span>
 </div>
 
 
 </div>
 </div>

 
 
     
            </>
        );
    }
}



const mapStateToProps =(state)=>({
  current_card:state.current_card,
       
   })


const mapDispatchToProps = (dispatch) => {
   return{
set_name: () => dispatch(set_name()),
}

}
 



export default connect(mapStateToProps, mapDispatchToProps)(Attribute);

