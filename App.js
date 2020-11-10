import React, {useState} from 'react';
import Coin from './Coins';
import Snack from './vend'
function App(){

  const[cokeCount, setCoke] = useState(10);
  const[spriteCount, setSprite] = useState(10);
  const[stoneyCount, setStoney] = useState(10);
  const[waterCount, setWater] = useState(10);

  const[change, setChange] = useState(0);
  const[sum, setSum] = useState(0);

 const increment10 = () => {
   setSum(sum + 10);
 }
 const increment5 = () => {
  setSum(sum + 5);
}

const increment2 = () => {
  setSum(sum + 2);
}
const increment1 = () => {
 setSum(sum + 1);
}
/*var iSum = 0;
function calculateSum(amount)
{
  iSum = iSum + amount;
  <h3>Money added: R{iSum}</h3>
}*/
//functions to keep track of purchases, available units and change needed
const unitsCoke = () => {
  if(cokeCount === 0){
    alert("Coke is sold out. Please choose another.");
  } else if(sum === 0)
  {
    alert("Please enter money before choosing a drink");
  } else if(sum < 13)
  {
    alert("Insufficient funds. Please insert more money");
  }else if(sum == 13) {
    alert("Your Coke has been served.");
    setChange(0);
    setCoke(cokeCount - 1);
    setSum(0);

  } else
  {
    alert("Your Coke has been served. Collect your change at the bottom")
    setCoke(cokeCount - 1);
    setChange(sum-13);
    setSum(0);
  }
  
}
const unitsSprite = () => {
  if(spriteCount === 0){
    alert("Sprite is sold out. Please choose another.");
  } else if(sum === 0)
  {
    alert("Please enter money before choosing a drink");
  } else if(sum < 13)
  {
    alert("Insufficient funds. Please insert more money");
  }else if(sum == 13) {
    alert("Your Sprite has been served.");
    setChange(0);
    setSprite(spriteCount - 1);
  
    setSum(0);

  } else
  {
    alert("Your Sprite has been served. Collect your change at the bottom")
    setSprite(spriteCount - 1);
    setChange(sum-13);
    setSum(0);
  }
  
}

const unitsWater = () => {
  if(waterCount === 0){
    alert("Aquelle is sold out. Please choose another.");
  } else if(sum === 0)
  {
    alert("Please enter money before choosing a drink");
  } else if(sum < 13)
  {
    alert("Insufficient funds. Please insert more money");
  }else if(sum == 13) {
    alert("Your Aquelle has been served.");
    setChange(0);
    setWater(waterCount - 1);
    setSum(0);

  } else
  {
    alert("Your Aquelle has been served. Collect your change at the bottom")
    setWater(waterCount - 1);
    setChange(sum-11);
    setSum(0);
  }
}

const unitsStoney = () => {
  if(stoneyCount === 0){
    alert("Stoney is sold out. Please choose another.");
  } else if(sum === 0)
  {
    alert("Please enter money before choosing a drink");
  } else if(sum < 13)
  {
    alert("Insufficient funds. Please insert more money");
  }else if(sum == 13) {
    alert("Your Stoney has been served.");
    setChange(0);
    setStoney(stoneyCount - 1);
    setSum(0);

  } else
  {
    alert("Your Stoney has been served. Collect your change at the bottom")
    setStoney(stoneyCount - 1);
    setChange(sum-13);
    setSum(0);
    
  }
  
}

const restockUnits = () => {
  setWater(10);
  setCoke(10);
  setSprite(10);
  setStoney(10);
  alert("All products have been restocked");
}

const cancelOrder = () => {
  
  setChange(sum);
  setSum(0);
  alert("Your money has been returned. Insert cash to start a new purchase.");
}

const refreshMachine = () => {
  setWater(10);
  setCoke(10);
  setSprite(10);
  setStoney(10);
  setSum(0);
  setChange(0);
  alert("Machine is being reset. Press 'okay'");
}


//visual of the vending machine
  return(
    
    <div className ="app">
      <header>
        <h1>Vending Machine</h1>
        <button type = "button" onClick={refreshMachine}>Refresh Machine</button>
      </header>
     
      <h2>Please select snack</h2> 
        
        
       <section id= "section-right">
         <button id = "button-drink" type= "button" onClick={unitsCoke}>Coke</button>
          <h3>Price: R13</h3>
            <p>Units available: {cokeCount}</p>
       
          <button id = "button-drink" type= "button" onClick={unitsSprite}>Sprite</button><br/>
            <h3>Price: R13</h3>
            <p>Units available: {spriteCount}</p>
         
          <button id = "button-drink" type= "button" onClick={unitsWater}>Aquelle</button>
            <h3>Price: R11</h3>
            <p>Units available: {waterCount}</p>
          
          <button id = "button-drink" type= "button" onClick={unitsStoney}>Stoney</button>
            <h3>Price: R13</h3>
            <p>Units available: {stoneyCount}</p>

            <button id = "button-products" type = "button" onClick={restockUnits}>Restock</button>
            </section>  
                        
        
            
        
       
     <section id = "section-left">
     <h3>Insert Money</h3>
          <button onClick={increment10}>R10</button>
          <button onClick={increment5}>R5</button>
          <button onClick={increment2}>R2</button>
          <button onClick={increment1}>R1</button>
          <h3>Money inserted: R{sum}</h3>
          <button type="button" onClick={cancelOrder}>Return money</button>
     </section>
          
       
      <footer>
        <h2>Change returned: R{change}</h2>
      </footer>
    </div>

  )
}

export default App;