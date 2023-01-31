import React, { useEffect, useState  } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';



  function Content() {
   const [backendData, setBackendData] = useState([{}])
   const [userId, setUserId] = useState('');
   const [loading, setLoading] = useState(true);

   React.useEffect(() => {
      const path = new URLSearchParams(window.location.search);
      console.log(path.get('nom'));

   }, [userId])


//    React.useEffect(() => {

// var formdata = new FormData();
// formdata.append("id", userId);

// fetch("/api/singleUsers/" + userId)
//   .then(response => response.json())
//   .then(data => {
//    setBackendData(data)
//    console.log("ma dataaaaaaaaaaa", data)
// })
//   .catch(error => console.log('error', error));
// }, [])
   useEffect(() => {
   var formdata = new FormData();
   const path = new URLSearchParams(window.location.search);
   const val = (path.get('nom'));
    formdata.append("nom", val);
      fetch("https://pleasant-shirt-bass.cyclic.app/api/singleUsers/" + val)
      .then(
         Response => Response.json()
      )
      .then(data => {
         setBackendData(data)
         console.log("ma dataaaaaaaaaaa", data)
         console.log("mo ", val)
         setLoading(!loading)
      })
   }, [])

   // useEffect(() => {
   //    setId(window.location.pathname);

   // }, [])
   useEffect(()=> {
    setTimeout(() => {
      setLoading(!loading);
    }, 3000);
   }, []);
   const load =  <ClipLoader
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    return (
       <div>
             <Navbar>
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <div style={{marginLeft: "20px"}}>
            <a href="#home"><img href="#home" src={require('./face.png')} alt="First slide" style={{width:"25px"}}/></a>
            <a href="#home"><img href="#home" src={require('./insta.png')} alt="First slide" style={{width:"25px"}}/></a>
        </div>
      </Container>
    </Navbar>
              
         <section className="">
              <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={backendData.imageCouverture1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={backendData.imageCouverture1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={backendData.imageCouverture1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
        </section>   

        <section className="section1">
          <div className="container">
            <div className='containerSection1'>
            <div className="textBienvenueDiv">
               <p className='textBienvenue'>
                  La Fondation Donwahi pour l’Art Contemporain est un lieu de rencontre entre les personnes et l’art,
                  espace d’expression pour tous ceux qui aiment à s’y retrouver. En son sein, Le Lounge, 
                  lieu emblématique tout aussi singulier, espace de détente et de rencontres... On peut y déjeuner,
                  dîner, danser, boire un cocktail, mais aussi travailler. Le Lounge offre une palette de saveurs et
                  fait rimer nature avec architecture… C’est, en quelques mots, un espace de démonstration et de création, 
                  de formation et d’échange, de partage et d’enrichissement...</p>
            </div>
            <div style={{marginBottom: "30px"}}>
               <img className='w-25 p-3' src={require('./banner-2.jpg')} alt="First slide" />
               <img className='w-25 p-3' src={require('./banner-2.jpg')} alt="First slide" />
               <img className='w-25 p-3' src={require('./banner-2.jpg')} alt="First slide" />
               <img className='w-25 p-3' src={require('./banner-2.jpg')} alt="First slide" />
            </div>
            <div style={{marginBottom: "30px"}}>
               <div className='boutonPdf'>Envoyer</div>
               <div className='boutonPdf'>Envoyer</div>
               <div className='boutonPdf'>Envoyer</div>
            </div>
            <div className="row">
               <div className="col-sm-8 col-md-8">
                  <img className='w-75 h-auto p-3' src={require('./banner-2.jpg')} alt="First slide" />
               </div>
               <div className="col-sm-4 col-md-4">
                  <h2>HORAIRES</h2>
                  <div className="d-flex flex-row mb-3">
                     <div className='me-4'>
                        <h5>LUNDI</h5>
                     </div>
                     <div>
                        <p>fermé</p>
                     </div>
                  </div>
                  <div className="d-flex flex-row mb-3">
                     <div className='me-4'>
                        <h5>MARDI</h5>
                     </div>
                     <div>
                        <p>10:00-3:00</p>
                     </div>
                  </div>
                  <div className="d-flex flex-row mb-3">
                     <div className='me-1'>
                        <h5>MERCREDI</h5>
                     </div>
                     <div>
                        <p>10:00-3:00</p>
                     </div>
                  </div>
                  <div className="d-flex flex-row mb-3">
                     <div className='me-5'>
                        <h5>JEUDI</h5>
                     </div>
                     <div>
                        <p>10:00-3:00</p>
                     </div>
                  </div>
                  <div className="d-flex flex-row mb-3">
                     <div className='me-4'>
                        <h5>VENDREDI</h5>
                     </div>
                     <div>
                        <p>10:00-3:00</p>
                     </div>
                  </div>
                  <div className="d-flex flex-row mb-3">
                     <div className='me-4'>
                        <h5>SAMEDI</h5>
                     </div>
                     <div>
                        <p>10:00-3:00</p>
                     </div>
                  </div>
                  <div className="d-flex flex-row mb-3">
                     <div className='me-4'>
                        <h5>DIMANCHE</h5>
                     </div>
                     <div>
                        <p>fermé</p>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <h3 className='contactText'>CONTACT</h3>
               <p className='infoReserve'>Information & réservation</p>
               <p className='number'>+225 27 22 41 35 42</p>
               <p className='number'>+225 27 22 11 46 45</p>
            </div>
            <div>
               <h3 className='contactText'>Lieu</h3>
               <p className='infoReserve'>Cocody Danga</p>
            </div>
            </div>
          </div>   
        </section>


   </div>
    );
  }
  
  export default Content;