import React, { useState,useEffect} from "react";
import Footer from "./Footer";

function AddCar() {
  
  const [carMake, setCarMake] = useState([])
  
   const url = "http://localhost:9292/cars";

   function fetcher() {
     fetch(url)
       .then((res) => res.json())
       .then((result) => {
         setCarMake(result);
       })

       .catch((error) => {
         console.error("console error:", error);
         console.log("Error!");
       });
   }  

   const makeList = carMake.map((car) => (
    <div className="api" key={car.id}>
      <img src={car.image_url} alt='car'/>
       <label id="product">
      {car.make}
     </label>
     <label id="product">
      {car.model}
     </label>

     <label id="product">
      {car.price}
     </label>
    </div>
   ));

   useEffect(() => {
     fetcher();
   }, []);

  return (
    <div className="form">
      <div>
        <h2 className="browse">Browse Our Categories</h2>
        <div className="browser-section">
          <div className="api">
            {makeList}
          </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}
export default AddCar;
