import React from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer"




function App() { 
    return (
       <div className="container">
       <Header title="Galería de Imágenes con React"/>
      
   <div className="galeria">
       <Cards image="https://acegif.com/wp-content/uploads/gifs/spongebob-rainbow-1.gif" alt="esponja animada amarilla con movimiento"
        title= "Bob Esponja"
        description= "Esponja, es divertido, trabajador, digno de confianza."
        />
   </div>.

   <div className="galeria">
        <Cards image="https://c.tenor.com/614p1TOzTWMAAAAC/patrick-star-sponge-bob-square-pants.gif" alt="estrlla de mar animada, color rosa, con movimiento"
        title= "Patricio Estrella"
        description= "Estrella de mar, es perezoso, olvidadizo, inmaduro, gracioso."/>
   </div>

   <div className="galeria">
        <Cards image="https://i.gifer.com/H92s.gif" alt="pulpo animado, con movimiento"
        title= "Calamardo"
        description= "Pulpo, es amargado, pesimista y obsesionado con ser músico, pintor y bailarín."/>
   </div>
   <Footer  footer= "Galería de Imagenes de Bob Esponja"
   button= " Ver mas Imágenes" />
        </div>
      
       
    );
    }
    export default App;