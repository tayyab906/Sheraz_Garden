import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "./Images/huose.webp";

function Home() {
    return (
       <>
       <section id="header" className="d-flex align-items-center">
           <div className="container-fluid nav_bg">
               <div className="row">
                   <div className="col-10 mx-auto">
                       <div className="row">
                       <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                           <h1>Welcome to <br></br><strong className="brand-name">Sheraz Garden</strong></h1>
                           <h2 className="my-3">
                           strong Infrastructure, Facilities and Amenities designed at par with global preferences.
                            In light of the same MAS Group have standardized every facility.every amenity and every 
                            corner of the infrastructure to ensure your desired living experience.
                           </h2>
                           <div className="mt-3">
                               <NavLink to="/" className="btn-get-started">Read More</NavLink>
                           </div>
                         

                       </div>
                       
                       <div className="col-lg-6 order-1 order-lg-2 header-img">
                           <img src={web} className="img-fluid animated" alt="Home" />
                       </div>
                       </div>
                   </div>
               </div>
           </div>

       </section>
       </>

    )
}

export default Home
