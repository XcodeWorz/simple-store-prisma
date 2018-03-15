import React, {Component} from 'react'
import Paper from 'material-ui/Paper'

import {ModalButton} from '../buttons'
import UpdateProduct from '../forms/UpdateProduct'

export default class extends Component {
  render(){
    const {product} = this.props
    return(
      <Paper className='product' zDepth={2}>
        <h2>{product.name}</h2>
        <img src={product.imgURL} alt={'Not Available'}/>
        <div>{product.price}</div>
        <p>{product.desc}</p>
        <ModalButton label="Update" display={<UpdateProduct product={product}/>}/>
      </Paper>
    )
  }
}
