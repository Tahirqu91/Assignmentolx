import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo/down.png'
import logo1 from './logo/downn.png'
class Footer extends Component {
    render() {
        return (
           <>
           <center>
           <div className="container-fluid footernew ">
            
               <div className="row py-3">
               <div className="col-md-3">
         
            
           <span><b>POPULAR CATEGORIES</b> </span>  <br/>   
               <span>Cars</span>    <br/>
               <span>Flats for rent </span> <br/>    
               <span>Jobs </span>    <br/>
               <span>Mobile Phones </span>    
           
            
            
           
           
               </div>
               <div className="col-md-3">
           
           <span><b>TRENDING SEARCHES</b> </span>  <br/>   
               <span>Watches</span>    <br/>
               <span>Books </span> <br/>    
               <span>Dogs </span>    <br/>
               <span>Bike </span>    
           
            
            
           
           
               </div>
               <div className="col-md-2">
         
        
           <span><b>ABOUT US</b> </span>  <br/>   
               <span>About OLX Group</span>    <br/>
               <span>OLX Blog </span> <br/>    
               <span>Contact us </span>    <br/>
               <span>OLX for Businesses </span>    
           
            

 
           
               </div>

               <div className="col-md-2">
          
               <span><b>OLX</b> </span>  <br/>   
               <span>Help</span>    <br/>
               <span>Sitemap </span> <br/>    
               <span>Legal & Privacy information </span>    <br/>
              

               </div>  
              
                 <div className="col-md-2  ">
           
           
              <span><b>FOLLOW US</b> </span>  <br/>
      <span>     <i className="fa fa-twitter ml-2 "></i>  </span>
      <span>     <i className="fa  fa-youtube ml-2"> </i></span>
      <span>     <i className="fa  fa-instagram ml-2"> </i></span>
      <span>     <i className="fa  fa-facebook ml-2"> </i> <br /></span>
           <Link to="/itunes.apple.com/app/olx-pakistan/id1119081665?mt=8" target="_blank"> <img src={logo}width="110px" /> </Link>
               <img src={logo1}width="110px" />
           

           
            
            
           
               </div>


               </div>
              </div>

<div className="container-fluid footernew1 ">
<div className="row p-3">
  <div className="col-5 "><b>Other Countries</b> &nbsp;&nbsp; India - South Africa - Indonesia
  </div>
  <div className="col-2">  
  </div>

  <div className="col-5"><b>Free Classifieds in Pakistan.</b> © 2006-2020 OLX
  </div>


</div>
</div>
</center>



            </>
        );
    }
}

export default Footer;