import React, { Component } from 'react';

class Product extends Component {
    render(){
    let buyButton = this.props.inCart ? null : <button onClick={() => this.props.buyProduct(this.props.index)}>Buy</button>

        return (
            <div className="product">
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