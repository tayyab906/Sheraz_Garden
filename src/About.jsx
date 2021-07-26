import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "./Images/about.png";

function About() {
    return (
       <>
       <section id="header" className="d-flex align-items-center">
           <div className="container-fluid nav_bg">
               <div className="row">
                   <div className="col-10 mx-auto">
                       <div className="row">
                       <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                           <h1><strong className="brand-name">Sheraz Garden</strong></h1>
                           <h2 className="my-3">
                           The groups aims to develop communities where residents are addressed for their needs
                            and their satisfaction is ensured and further has set out a mission to develop 100,000
                             units Homes, Apartments, Plots by the year 2025.<br></br>
                           </h2>
                           <h5> If you have any problem, please complains to us.</h5>
                           <div className="mt-3">
                               <NavLink to="/compalains" className="btn-get-started">Click Here</NavLink>
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

export default About;
