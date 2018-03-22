import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import gql from 'graphql-tag'
import {graphql, compose} from 'react-apollo'
import IconButton from 'material-ui/IconButton'
import AddShoppingCartIcon from 'material-ui-icons/AddShoppingCart';
import RemoveShoppingCartIcon from 'material-ui-icons/RemoveShoppingCart'

import {ModalButton} from '../buttons'
import UpdateProduct from '../forms/UpdateProduct'

import {user_id} from '../../config/auth'

class Product extends Component {
  render(){
    const {addToCart, removeFromCart, product} = this.props
  
    //cart functions
    const AddToCart = async () => {
      await addToCart({variables:{product_id:product.id}}).then(r => console.log(r))
      window.location.replace('/cart')
    }
    const RemoveFromCart = async () => {
      await removeFromCart({variables:{product_id: product.cart_product_id}}).then(r => console.log(r))
      window.location.replace('/cart')
    }
    
    // const DeleteProduct = () => (
    //   <RaisedButton label="Confirm Delete"
    //                 onClick={handleClick}
    //   />
    // )
    // const handleClick = async (e) => {
    //   e.preventDefault()
    //   await this.props.mutate()
    //   window.location.replace('/')
    // }
    return(
      <Paper className='product' zDepth={2}>
        <h2>{product.name}</h2>
        <img src={product.imgURL} alt={'Not Available'}/>
        <div>{product.price}</div>
        <p>{product.desc}</p>
  
        {this.props.cartView?
          <div>
            <IconButton onClick={() => RemoveFromCart()}><RemoveShoppingCartIcon/></IconButton>
            <div>Quantity: {product.quantity}</div>
          </div>
          :
          <span className="buttons">
            <ModalButton label='Update' display={<UpdateProduct product={product} />} />
            {/*<ModalButton label="Delete" display={DeleteProduct()} color="secondary"/>*/}
            <span className="modal">
               <IconButton onClick={() => AddToCart()}><AddShoppingCartIcon/></IconButton>
            </span>
          </span>
        }
      </Paper>
    )
  }
}

const ADD_TO_CART = gql`
  mutation($user_id:ID!, $product_id:ID!){
    addProductToCart(
      user_id: $user_id
      product_id: $product_id
    ){
      cart{
        id
        products{
          product{
            id
            name
          }
        }
      }
    }
  }
`
const REMOVE_FROM_CART = gql`
  mutation($user_id:ID!, $product_id:ID!){
    removeProductFromCart(
      user_id: $user_id
      product_id: $product_id
    ){
      cart {
        id
        products{
          product{
            id
            name
          }
        }
      }
    }
  }
`
// const DELETE_PRODUCT_MUTATION = gql`
//   mutation($id: ID!) {
//     deleteProduct(
//       id: $id
//     ){
//       id
//     }
//   }
// `
export default compose(
  graphql(ADD_TO_CART,{name:'addToCart', options: () => ({variables:{user_id}})}),
  graphql(REMOVE_FROM_CART,{name:'removeFromCart', options: () => ({variables:{user_id}})})
  // graphql(DELETE_PRODUCT_MUTATION, {options: (props) => ({variables: {id: props.product.id}})})
)(Product)
