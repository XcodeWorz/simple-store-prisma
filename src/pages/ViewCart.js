import React, {Component} from 'react'

import Cart from '../components/cart/Cart'
import CartButton from '../components/cart/CartButton'

export default class extends Component {
  render(){
    return(
      <main>
        <CartButton label="Clear Cart"/>
        <Cart/>
        <CartButton label="Checkout"/>
      </main>
    )
  }
}
