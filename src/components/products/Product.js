import React, {Component} from 'react'
import Paper from 'material-ui/Paper'

export default class extends Component {
  render(){
    const {product} = this.props
    return(
      <Paper className='product' zDepth={2}>
        <h2>{product.name}</h2>
        <img width="40%" height="40%" src={product.imgURL} alt={'Not Available'}/>
        <div>{product.price}</div>
        <p>{product.desc}</p>
      </Paper>
    )
  }
}
