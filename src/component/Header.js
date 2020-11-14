import React, { Component } from 'react';
import logo from './logo/logo1.png'
import {Link} from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import ChatIcon from '@material-ui/icons/Chat';
import { facebook_login} from './Redux/action'
import { facebook_logout} from './Redux/action'
import { connect } from 'react-redux';
class Header extends Component {
 

 componentDidMount(){
   this.props.facebook_login()
 } 
  render() {
      let user = this.props.current_user;
    //  console.log("userrrr",user)
    
     
 
     
     return (

<>

   <div className="container-fluid  Header align-items-center text-center   ">
              <div className="row ">
               <div className="col-md-1   ">

     <Link to="/"> <img src={logo} width="58px" /></Link>
</div>

<div className="col-md-7 form-group has-search   header-size">
<form className="example">
<span className="fa fa-search py-1 form-control-feedback"></span>
<input type="text" list="location" className=" formcontrol inpt-size  " placeholder="Search city, area or locality"/>
<datalist id="location">
  <option>Karachi</option>
  <option>Pakistan</option>
  <option>North Karachi</option>
  <option>Larakana</option>
</datalist>





  <input className="inputsize" type="text" placeholder="Find Cars, Mobile Phones and more..." name="search" />
  <button><i className="fa fa-search "></i></button>
</form>
</div> 
 
<div className="col-md-4  ">



 

 { user ?  (<div>  <span className=" dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <img className="rounded-circle profile" src={user.profile} alt=""/>  
  </span><ChatIcon  />
  <div className="dropdown-menu">
     <Link className="dropdown-item" ><img className="rounded-circle " src={user.profile} alt=""/> {user.name}</Link>
    <Link className="dropdown-item" ><button className="btn btn-secondary" onClick={()=>this.props.facebook_logout()}>logout</button></Link>
     
    
    
  </div>

      </div> )
 : ( <button  onClick={()=>this.props.facebook_login(this.props.history)} className="login1 btn btn-secondary">  Login </button>) }


 {user ?  (<div><span><button className="sell1"> <Link to="/attribute"><AddIcon />Sell</Link> </button></span> </div>) 
 : (<span> <button className="sell1"> <Link to="/attribute"><AddIcon />Sell</Link> </button></span>)}
 
    
</div>

 </div>  




 










 </div>

<div className="container-fluid nav-full">
<div className="row">
<div className="col-md-12">

<div className="  navbar navbar-light  navbar-expand-md">
  
   
      <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
       
      <li className="dropdown Fullmenu nav-item"> <a href="#"  className="dropdown-toggle nav-link" data-toggle="dropdown"><b>All Categories</b> </a>
                  <ul className="dropdown-menu newmenu">
                      <div className="row">
                          <li className="col-md-3 dropdown-item">
                              <ul>
                         <li className="dropdown-header">Vehicles</li>
                    <li> 
                        <a href="#"> Tractors & Trailers</a>
                      </li>
                      <li className="disabled"><a href="#">Boats</a>
                      </li>
                      <li><a href="#">Other Vechiles</a>
                      </li>
                      <li><a href="#">Rickshaw & Chingchi</a>
                      </li>
                      <li><a href="#">Buses, Vans & Trucks</a>
                      </li>
                      <li><a href="#">Spare Parts</a>
                      </li>
                      <li><a href="#">Cars Accessories</a>
                      </li>
                      <li><a href="#">Cars on Installments</a>
                      </li>
                      <li><a href="#">Cars</a>
                      </li>



                      <li className="dropdown-header">Mobiles</li>
                      <li><a href="#">Mobile Phones</a>
                      </li>
                      <li><a href="#">Accessories</a>
                      </li>
                      <li><a href="#">Tablets</a>
                      </li>
                   
                      <li className="dropdown-header">  Electronics & Home <br/> Appliances</li>
                      <li><a href="#">Washing Machines & Dryers</a>
                      </li>
                      <li><a href="#">Fridges & Freezers</a>
                      </li>
                      <li><a href="#">AC & Coolers</a>
                      </li>
                      <li><a href="#">Kitchen Appliances</a>
                      </li>
                      <li><a href="#">Generators, UPS & Power Solutions</a>
                      </li>
                      <li><a href="#">Other Home Appliances</a>
                      </li>
                      <li><a href="#">Games & Entertainment</a>
                      </li>
                      <li><a href="#">Cameras & Accessories</a>
                      </li>
                      <li><a href="#">TV-Video-Audio</a>
                      </li>
                      <li><a href="#">Computers & Accessories</a>
                      </li>
                     
                      <li className="dropdown-header">Property for Sale</li>
                      <li><a href="#">Portions & Floors</a>
                      </li>
                      <li><a href="#">Shops - Offices - Commercial Space</a>
                      </li>
                      <li><a href="#">Apartments & Flats</a>
                      </li>
                      <li><a href="#">Houses
 </a>
                      </li>
                      <li><a href="#">Land & Plots</a>
                      </li>
        
                  </ul>
              </li>
              <li className="col-md-3 dropdown-item">
                  <ul>
                      <li className="dropdown-header"> Animals</li>
                      <li><a href="#">Other Animals</a>
                      </li>
                      <li><a href="#">Pet Food & Accessories</a>
                      </li>
                      <li><a href="#">Horses</a>
                      </li>
                      <li><a href="#">Livestock</a>
                      </li>
                      <li><a href="#">Dogs</a>
                      </li>
                        <li><a href="#">Hens & Aseel</a>
                      </li>
                      <li><a href="#">Cats</a>
                      </li>
                      <li><a href="#">Fish & Aquariumsogs</a>
                      </li>
                      <li><a href="#">Birds</a>
                      </li>
                     
                      <li className="dropdown-header">  Furniture & Home Decor</li>
                      <li><a href="#">Other Household Items</a>
                      </li>
                      <li><a href="#">Office Furniture</a>
                      </li> 
                       <li><a href="#">Curtains & Blinds</a>
                      </li> 
                       <li><a href="#">Rugs & Carpets</a>
                      </li>
                      <li><a href="#">Painting & Mirrors</a>
                      </li>
                      <li><a href="#">Garden & Outdoor</a>
                      </li>
                      <li><a href="#">Tables & Dining </a>
                      </li>
                      <li><a href="#">Home Decoration</a>
                      </li>
                      <li><a href="#">Sofa & Chairs  </a>
                      </li>
                      <li><a href="#">Beds & Wardrobes</a>
                      </li>
                      <li className="dropdown-header">  Business, Industrial <br/> & Agriculture</li>
                      <li><a href="#">Medical & Pharma</a>
                      </li>
                       <li><a href="#">Other Business & Industry</a>
                      </li> 
                      <li><a href="#">Agriculture</a>
                      </li> 
                      <li><a href="#">Construction & Heavy Machinery</a>
                      </li> 
                      <li><a href="#">Trade & Industrial</a>
                      </li> 
                      <li><a href="#">Food & Restaurants</a>
                      </li>
                      <li><a href="#">Business for Sale</a>
                      </li>

                      <li className="dropdown-header"> Bikes</li>
                      <li><a href="#">Scooters</a>
                      </li>
                       <li><a href="#">ATV & Quads</a>
                      </li> 
                      <li><a href="#">Bicycles</a>
                      </li> 
                      <li><a href="#">Spare Parts</a>
                      </li> 
                      <li><a href="#">Motorcycles</a>
                      </li>
        
                  </ul>
              </li>
              <li className="col-md-3 dropdown-item">
                  <ul>
                      <li className="dropdown-header">Fashion & Beauty</li>
                      <li><a href="#">Other Fashion</a>
                      </li>
                      <li><a href="#">Couture</a>
                      </li>
                      <li><a href="#">Wedding</a>
                      </li>
                      <li><a href="#">Watches</a>
                      </li>
                      <li><a href="#">Skin & hairs</a>
                      </li>
                      <li><a href="#">Make up</a>
                      </li>
                      <li><a href="#">Jewellery</a>
                      </li>
                      <li><a href="#">Footwear</a>
                      </li>
                      <li><a href="#">Clothes</a>
                      </li>
                      <li><a href="#">Accessories</a>
                      </li>
                      

                     







                      <li className="dropdown-header"> Property for Rent</li>
                      <li><a href="#">Land & Plots</a>
                      </li>
                      <li><a href="#">Vacation Rentals - Guest Houses</a>
                      </li>
                      <li><a href="#">Roommates & Paying Guests </a>
                      </li>
                      <li><a href="#">Rooms </a>
                      </li>
                      <li><a href="#">Shops - Offices - Commercial Space</a>
                      </li>
                      <li><a href="#">Portions & Floors </a>
                      </li>
                      <li><a href="#">Apartments & Flats </a>
                      </li>
                      <li><a href="#">Houses</a>
                      </li>
   </ul>
              </li>
              <li className="col-md-3 dropdown-item">
                  <ul>
                   
                  <li className="dropdown-header">  Services</li>                
<li><a href="#"> Farm & Fresh Food</a> </li>            
<li><a href="#">Catering & Restaurant</a></li>
<li><a href="#">Home & Office Repair</a></li>
<li><a href="#">Movers & Packers</a></li>
<li><a href="#">Maids & Domestic Help</a></li>
<li><a href="#">Health & Beauty</a></li>
<li><a href="#">Event Services</a></li>
<li><a href="#">Electronics & Computer Repair</a></li>
<li><a href="#">Other Services</a></li>
<li><a href="#">Web Development</a></li>
<li><a href="#">Drivers & Taxi</a></li>
<li><a href="#">Car Rental</a></li>
<li><a href="#">Travel & Visa</a></li>
<li><a href="#">Education & Classes</a></li>






Books & Magazines

<li className="dropdown-header">  Books, Sports <br/> & Hobbies</li>                
<li><a href="#">Other Hobbies</a> </li>            
<li><a href="#">Gym & Fitness</a></li>
<li><a href="#">Sports Equipment</a></li>
<li><a href="#">Movers & Packers</a></li>
<li><a href="#">Musical Instruments</a></li>
<li><a href="#">Books & Magazines</a></li>              
                   
                   
                  </ul>
           
 </li>

             
                
                   
      


          </div>
      </ul>
  </li>
          </ul>
          
            <Link to="#"><span className="span1">Mobile Phones </span>  	  </Link>  &nbsp;&nbsp;&nbsp;
            <Link to="#"> <span className="span2">Cars </span>    </Link> &nbsp;&nbsp;&nbsp;
            <Link to="#"><span className="span3">Motorcycles</span>    </Link> &nbsp;&nbsp;&nbsp;
            <Link to="#"><span className="span4">Houses</span>         </Link> &nbsp;&nbsp;&nbsp;
            <Link to="#"><span className="span5">TV-Video-Audio</span> </Link> &nbsp;&nbsp;&nbsp;
            <Link to="#"><span className="span6">Tablets</span> </Link> &nbsp;&nbsp;&nbsp;
            <Link to="#"><span className="span7"> Land & Plots </span></Link>

      </div>
 
  </div>
 
    </div>
         
         
         
         
         
  <div>
    

    
    </div>       
         
    

</div>

</div>

 

 </>
        );
    }
}


const mapStateToProps = (state) =>({
    user:state.user_name,
  current_user: state.current_user,
})

 const mapDispatchToProps = (dispatch) =>({
      facebook_login: (history) => dispatch(facebook_login(history)),
      facebook_logout: () => dispatch(facebook_logout())
  })


export default connect(mapStateToProps, mapDispatchToProps) (Header);