import React, { useState } from "react";
import "../style/App.css";
import { createStore } from "redux";

function Cards({ ProductDetails }) {
  const [price, setPrice] = useState({
    Price: `${ProductDetails.price}`,
  });
  let Price = price.Price;
  let stocks = ProductDetails.stock;
  const [stock, setStock] = useState(stocks);
  const [pri1, setPri1] = useState(Price);
  
  let price2;
  let stock1;
  const priceReducer = (state=Price, action) => {
    let count = action.type;
    price2 = state * count;
    console.log(price2)
  }
  const stockReducer = (state=stocks, action) => {
    let count = action.type;
    stock1 = state - count;
    console.log(stock1)
  }
  const pricestore = createStore(priceReducer);
  const stockstore = createStore(stockReducer);
  
  const handleCount = (event) => {
    let stoks = stocks;
    let price1 = Price;
    let count = event.target.value;
    pricestore.dispatch({
      type:`${count}`
    })
    stockstore.dispatch({
      type:`${count}`
    })
    setStock(stoks - count);
    setPri1(price1 * count);
    price1 = '';
    stoks = '';

    // const totstock = document.getElementById('stocks');
    // totstock.innerText =`${stock}`
  };
  return (
    <div id='listcontainer'>
      <div id="container">
        <div id="product">
          <div class="row">
            <div class="col-2">
              <img src={ProductDetails.thumbnail} />
            </div>
            <div class="col-6">
              <div class="row">
                <h3>{ProductDetails.title}</h3>
              </div>
              <div class="row">
                <p>Details & Core :</p>
              </div>
              <div class="row">
                <p>{ProductDetails.description}</p>
              </div>
              <div class="row">
                <p>Sustanability</p>
              </div>
            </div>
            <div id='stock' class="col-2">
              {/* <select onChange={handleSelect}>
                {stocklist.map((stock) => (
                  <option>{stock}</option>
                ))}
              </select> */}
              <lable>count:</lable>
              <input onChange={handleCount} id='count' type='number' />
            </div>
            <div id='pandr'class="col">
              <div class="row">
                <p>${pri1}</p>
              </div>
              <div class="row">
                <p id="remove" class="text-danger">
                  REMOVE
                </p>
              </div>
            </div>
          <hr></hr>
          </div>
          <div class='row'>
            <div id='middle' class='row-2'>
              <div>SUBTOTAL :</div>
              <div>${pri1 }</div>
            </div>
            <div id='middle1' class='row-2'>
              <div >SHIPPING :</div>
              <div>FREE</div>
            </div>
          </div>
          <hr></hr>
          <div id='end' class='row-4'>
            <h6 >TOTAL :</h6>
            <div class='row-6'>
              <div id='price'>${pri1}</div>
              <div class='text-danger' id="offer" >Get Daily Cash with Nespola Card</div>
              <p id='stocks'>TotalStock:{stock }</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
