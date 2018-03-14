import React, {Component} from 'react'
import { ModalButton } from '../components/buttons'

import AllProducts from '../components/products/AllProducts'

const ProdList = () => (<h2>Products</h2>)

export default class extends Component {
  render () {
    return (
      <div>
        <ModalButton label="Add Product" display={ProdList()}/>
        <AllProducts/>
      </div>
    );
  }
}
