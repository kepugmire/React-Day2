import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Product from './Product';


class App extends Component {
  constructor(){
    super();

    this.state = {
      products: [
        {
          imageUrl: '',
          title: "Coconuts",
          description: "Tasty fruit",
          price: "3.50",
          isInCart: false
        },
        {
          imageUrl: '',
          title: "Coco puffs",
          description: "Tasty cereal",
          price: "6.50",
          isInCart: false
        },
        {
          imageUrl: '',
          title: "Coco butter",
          description: "Skin care product",
          price: "7.50",
          isInCart: false
        },
        {
          imageUrl: '',
          title: "Cocoa, hot",
          description: "Tasty beverage",
          price: "1.50",
          isInCart: false
        },
        {
          imageUrl: '',
          title: "Cocoa powder",
          description: "Tasty beverage",
          price: "5.50",
          isInCart: false
        }
      ]
    }

    this.buyProduct = this.buyProduct.bind(this)
  }

  buyProduct(index){
    let productsCopy = this.state.products.slice();
    productsCopy[index].isInCart = true;
    this.setState({
      products: productsCopy
    })
  }


  render() {
    let products = [];

    for (var i = 0; i < this.state.products.length; i++) {
      var product = this.state.products[i];
      products.push(<Product  imageUrl={product.imageUrl}
                              title = {product.title}
                              description = {product.description}
                              price = {product.price}
                              inCart = {product.isInCart}
                              index = {i}
                              buyProduct = {this.buyProduct}
                              />);
    }

      
    return (
      <div className="App">
        {
          products
        }
      </div>
    );
  }
}

export default App;
