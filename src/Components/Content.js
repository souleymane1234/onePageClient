import React, { useEffect, useState } from 'react';

  function Content() {
   const [backendData, setBackendData] = useState([{}])
   const [id, setId] = useState('');

   React.useEffect(() => {
      const path = window.location.pathname;
      console.log("first", path);

   }, [])


   
   const newurl = window.location.protocol + "//" + window.location.host;
   window.history.pushState({path:newurl});

//    React.useEffect(() => {

// var formdata = new FormData();
// formdata.append("id", "63ccb405e6a78db81cc5cdcc");

// fetch("/api/singlebackendDatas/63ccb405e6a78db81cc5cdcc")
//   .then(response => response.json())
//   .then(data => {
//    setBackendData(data)
//    console.log("ma dataaaaaaaaaaa", data)
// })
//   .catch(error => console.log('error', error));
// }, [])
   useEffect(() => {
   var formdata = new FormData();
   formdata.append("id", window.location.pathname);
      fetch("/api/singleUsers/" + window.location.pathname)
      .then(
         Response => Response.json()
      )
      .then(data => {
         setBackendData(data)
         console.log("ma dataaaaaaaaaaa", data)
      })
   }, [])

   useEffect(() => {
      setId(window.location.pathname);

   }, [])
    return (
       <div>
            <div>
              
         <section className="">
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                     <img className="d-block w-100" src={backendData.imageCouverture} alt="First slide" style={{height:"auto"}}/>
                  </div>
                  <div className="carousel-item">
                     <img className="d-block w-100" src={backendData.imageCouverture} alt="Second slide" style={{height:"auto"}}/>
                  </div>
                  <div className="carousel-item">
                     <img className="d-block w-100" src={backendData.imageCouverture} alt="Third slide" style={{height:"auto"}}/>
                  </div>
                </div>
               </div>
        </section>   

        <section className="bg-light" id="about">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                 <h3 className="text-center mt-4 text-secondary">Know about us</h3>
               </div>
              </div>
             <div className="row">
                <p className="mt-4 mb-5">{backendData.textBienvenue}</p>
             </div>   
          </div>   
        </section>   

        <section className="" id="destinations">   
         <div className="container">
             <div className="row">
              <div className="col-sm-12 col-md-12">
                 <h3 className="text-center mt-4 text-secondary">Favourite Destinations</h3>
               </div>
              </div>
              <div className="row">
                 <div className="col-sm-4 mb-5">
                    <div className="card mt-4">
                       <img className="card-img-top" src={backendData.presentation1Image} alt=""/>
                       <div className="card-body">
                          <h4 className="card-title text-secondary">{backendData.presentation1Titre}</h4>
                          <p className="card-text text-secondary">{backendData.presentation1Description}</p>
                       </div>
                       <div className="card-footer">
                          <a href="#" className="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 <div className="col-sm-4 mb-5">
                    <div className="card mt-4">
                       <img className="card-img-top" src={backendData.presentation2Image} alt=""/>
                       <div className="card-body">
                          <h4 className="card-title text-secondary">{backendData.presentation2Titre}</h4>
                          <p className="card-text text-secondary">{backendData.presentation2Description}</p>
                       </div>
                       <div className="card-footer">
                          <a href="#" className="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 <div className="col-sm-4 mb-5">
                    <div className="card mt-4">
                       <img className="card-img-top" src={backendData.presentation3Image} alt=""/>
                       <div className="card-body">
                          <h4 className="card-title text-secondary">{backendData.presentation3Titre}</h4>
                          <p className="card-text text-secondary">{backendData.presentation3Description}</p>
                       </div>
                       <div className="card-footer">
                          <a href="#" className="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
              </div>
        </div>
       </section>  


   </div>
   </div>
    );
  }
  
  export default Content;