import React from 'react';
import PropTypes from "prop-types"

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:"https://m.jnmall.kr/web/product/big/201910/4b83072de272a51edffa420ab3b2fa98.jpg",
    rating: 5
  },
  {
    id:2,
    name:"Bibimbap",
    image:"https://recipe1.ezmember.co.kr/cache/recipe/2018/10/03/355b5cd5c3beb1a775c82ee425dcd1931.jpg",
    rating: 4.9
  }
];

function Food({name, picture, rating}){
  return (
    <div>
     <h2>I like {name}</h2>
     <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );  
}

Food.propTypes = {

}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name = {dish.name} picture={dish.image} rating ={dish.rating}/>
      ))}
    </div>
  );
}

export default App;
