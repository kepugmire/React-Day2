import React, { Component } from 'react';

class Product extends Component {
    constructor(){
        super()

        this.state = {
            color: 'white'
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.inCart) {
            this.setState({
                color: 'lightblue'
            })
        }
    }



    render(){
    let buyButton = this.props.inCart ? null 
        : <button onClick={() => this.props.buyProduct(this.props.index)}>
            Buy
        </button>

        let bgObj = {
            backgroundColor: this.state.color
        }

        return (
            <div className="product" style={bgObj}>
                <h1>{this.props.imageUrl}</h1>
                <h2>{this.props.title}</h2>
                <h3>{this.props.description}</h3>
                <h4>{this.props.price}</h4>
                <h4>{this.props.isInCart}</h4>
                {buyButton}
            </div>
        )
    }
}

export default Product