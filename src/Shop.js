import apple from './assests/apple.jpeg';
import orange from './assests/orange.jpeg';
import mango from './assests/mango.jpeg';
import watermelon from './assests/watermelon.jpeg';
import grapes from './assests/grapes.jpeg';
import banana from './assests/banana.jpeg';



import React from 'react';
import { useState, useReducer } from 'react';


const fruits = [
  { name: 'appleCount', price: 120 },
  { name: 'orangeCount', price: 80 },
  { name: 'mangoCount', price: 100 },
  { name: 'bananaCount', price: 59 },
  { name: 'watermelonCount', price: 49 },
  { name: 'grapesCount', price: 149 },
];

const initialState = {
  appleCount: 0,
  orangeCount: 0,
  mangoCount: 0,
  bananaCount: 0,
  watermelonCount: 0,
  grapesCount: 0,
  totalCount: 0,
  totalPrice: 0,
  purchasedFruits: [],
};

function Welcome(state, action) {
  switch (action.category) {
    case 'increment':
      return {
        ...state,
        [action.product]: state[action.product] + 1,
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + fruits.find(fruit => fruit.name === action.product).price,
      };
    case 'decrement':
      return {
        ...state,
        [action.product]:  state[action.product] >0 ?state[action.product] - 1 :0,
        totalCount: state.totalCount - 1 >0 ? state.totalCount - 1 :0,
        totalPrice:  state.totalPrice >0 ?state.totalPrice - fruits.find(fruit => fruit.name === action.product).price :0,
      };
    case 'reset':
      return {
        ...state,
        [action.product]: 0,
        totalCount: 0,
        totalPrice: 0,
        purchasedFruits: [],
      };
    
    default:
      console.error('Unknown action category:', action.category);
      return state; 
  }
}

export default function Shopping() {
  const [state, dispatch] = useReducer(Welcome, initialState);

  const handleBuy = (fruitName) => {
    const count = state[`${fruitName}Count`];
    if (count !== undefined) {
      alert(`You bought ${count} ${fruitName}(s)!`);
      dispatch({ category: 'buy', product: `${fruitName}Count` });
    } else {
      console.error(`Invalid fruit name: ${fruitName}`);
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <div className=" row">
          <div className="col-9">
        <h1 className="text-center mb-5">FRUIT SHOP</h1></div>
        <div class="col-3">
          <h3 class="text-dark">Total Count: {state.totalCount}</h3>
          <h3 class="text-dark">Total Price: ${state.totalPrice.toFixed(2)}</h3>
         
        </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={apple} className="card-img-top" alt="Apple" />
              <div className="card-body">
                <h5 className="card-title text-center">Apple</h5>
                <h5 className="card-title text-center">Price:$120/kg</h5>
                <div className="d-flex justify-content-center">
                  <button  class=" btn bg-primary text-white me-1" 
                  onClick={() => dispatch({ category: 'increment', product: 'appleCount' })}>+</button>
                  <p>Qty: {state.appleCount}</p>
                  <button  class="btn bg-primary text-white ms-2"
                  onClick={() => dispatch({ category: 'decrement', product: 'appleCount' })}>-</button>
                  <div className="ms-3">
                  <button class="btn bg-success text-white" onClick={() => handleBuy('apple')}>Buy</button></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-4">
      <div className="card" style={{ width: "18rem" }}>
      <img src={orange} className="card-img-top" alt="..." /> 
     <div className="card-body">
           <h5 className="card-title text-center">Orange</h5>
           <h5 className="card-title text-center">Price:$80/kg</h5>
     <div className="d-flex justify-content-center">
              <button class=" btn bg-primary text-white me-1"
                onClick={() => dispatch({ category: 'increment', product: 'orangeCount' })}
            >
               +
             </button>
             <p>Qty: {state.orangeCount}</p>
            <button class="btn bg-primary text-white ms-2"
               onClick={() => dispatch({ category: 'decrement', product: 'orangeCount' })}
             >
               -
            </button>
            <div className="ms-3 ">
            <button   class="btn bg-success text-white" onClick={() => handleBuy('orange')}>Buy</button></div>
      </div>
      </div>
      </div>
      </div> 
      <div class="col-12 col-sm-12 col-md-6 col-lg-4">
      <div className="card" style={{ width: "18rem" }}>
      <img src={mango} className="card-img-top" alt="..." /> 
     <div className="card-body">
           <h5 className="card-title text-center">Mango</h5>
           <h5 className="card-title text-center">Price:$100/kg</h5>
      <div className="d-flex justify-content-center">
              <button class=" btn bg-primary text-white me-1"
                onClick={() => dispatch({ category: 'increment', product: 'mangoCount' })}
            >
               +
             </button>
             <p>Qty: {state.mangoCount}</p>
            <button class="btn bg-primary text-white ms-2"
               onClick={() => dispatch({ category: 'decrement', product: 'mangoCount' })}
             >
               -
            </button>
            <div className="ms-3 ">
            <button class="btn bg-success text-white" onClick={() => handleBuy('mango')}>Buy</button></div>
      </div>
      </div>
      </div>
      </div> 
    </div>
    <div className="row mt-3">

<div class="col-12 col-sm-12 col-md-6 col-lg-4">
      <div className="card" style={{ width: "18rem" }}>
      <img src={banana} className="card-img-top" alt="..." /> 
     <div className="card-body">
           <h5 className="card-title text-center">Banana</h5>
           <h5 className="card-title text-center">Price:$59/kg</h5>
      <div className="d-flex justify-content-center">
              <button class=" btn bg-primary text-white me-1"
                onClick={() => dispatch({ category: 'increment', product: 'bananaCount' })}
            >
               +
             </button>
             <p>Qty: {state.bananaCount}</p>
            <button class=" btn bg-primary text-white ms-2"
               onClick={() => dispatch({ category: 'decrement', product: 'bananaCount' })}
             >
               -
            </button>
            <div className="ms-3">
            <button class="btn bg-success text-white" onClick={() => handleBuy('banana')}>Buy</button></div>
      </div>
      </div>
      </div>
      </div> 
      <div class="col-12 col-sm-12 col-md-6 col-lg-4">
      <div className="card" style={{ width: "18rem" }}>
      <img src={watermelon} className="card-img-top" alt="..." /> 
     <div className="card-body">
           <h5 className="card-title text-center">Water Melon</h5>
           <h5 className="card-title text-center">Price:$49/kg</h5>
      <div className="d-flex justify-content-center">
              <button class="btn bg-primary text-white me-1"
                onClick={() => dispatch({ category: 'increment', product: 'watermelonCount' })}
            >
               +
             </button>
             <p>Qty: {state.watermelonCount}</p>
            <button class="btn bg-primary text-white ms-2"
               onClick={() => dispatch({ category: 'decrement', product: 'watermelonCount' })}
             >
               -
            </button>
            <div className="ms-3">
            <button class="btn bg-success text-white" onClick={() => handleBuy('watermelon')}>Buy</button></div>
      </div>
      </div>
      </div>
      </div> 
      <div class="col-12 col-sm-12 col-md-6 col-lg-4">
      <div className="card" style={{ width: "18rem" }}>
      <img src={grapes} className="card-img-top" alt="..." /> 
     <div className="card-body">
           <h5 className="card-title text-center">Grapes</h5>
           <h5 className="card-title text-center">Price:$149/kg</h5>
      <div className="d-flex justify-content-center">
              <button  class="btn bg-primary text-white me-1"
                onClick={() => dispatch({ category: 'increment', product: 'grapesCount' })}
            >
               +
             </button>
             <p> Qty : {state.grapesCount}</p>
            <button  class="btn bg-primary text-white ms-2"
               onClick={() => dispatch({ category: 'decrement', product: 'grapesCount' })}
             >
               -
            </button>
            <div className="ms-3">
            <button class="btn bg-success text-white" onClick={() => handleBuy('grapes')}>Buy</button></div>
      </div>
      </div>
      </div>
      </div> 
    </div>
      </div>
    </div>
  );
}
