import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import Card from "react-bootstrap/Card"; //  npm install --save react-bootstrap bootstrap

class App extends React.Component {
  
  constructor(props){

    super(props)

    this.state={

      products:[
        {name:'Black TShirt',price:110,src:'shirt01'},
        {name:'Black TShirt',price:110,src:'shirt01'}
      ]
    }
  }

  render(){
    return (
      <React.Fragment>
        hi
        
        <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>

      <p style={{textDecoration: "line-through"}}> Strikethrough text</p>

      <button type="button" class="btn btn-primary">bootstrap is working</button>


      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>

      {
        this.state.products.map(item=>{

          var random = Math.floor(Math.random()*50)
          var discount = parseInt(random/(item.price+random) *100 )

        return(
<React.Fragment>



<h1>{item.name}</h1>

        <h2>Original Price: <h2 style={{textDecoration: "line-through"}}>{item.price+random}</h2></h2>
        <h2>Price: {item.price}</h2>
        <h2>Discount: {discount}</h2>
        
        <img src={require(`./components/imgs/${item.src}.jpg`)} ></img>
        </React.Fragment>
        )
        })
      }

      </React.Fragment>
    );
  }
}

export default App;
