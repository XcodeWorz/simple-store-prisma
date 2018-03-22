const cart = {
  addProductToCart(parent, { user_id, product_id }, ctx, info) {
    return ctx.db.mutation.updateUser(
      {
        data: {
          cart: { update: {
              products: { create: {
                  product: { connect: { id: product_id } }
                } }
            }
          }
        },
        where: { id: user_id },
      }, info, )
  },
  async removeProductFromCart(parent, { user_id, product_id }, ctx, info) {
    return ctx.db.mutation.updateUser(
      {
        data: {
          cart: { update: {
            products: { delete : { id: product_id}}
            }}
        },
        where: {id: user_id}
      }, info,
    )
    // const user = await ctx.db.query.user(
    //   { where: { id: user_id } },
    //   info
    // )
    // console.log(user)
    // const cart_id = user.cart.id
    // console.log("---------------------------------")
    // console.log(cart_id)
    // console.log("---------------------------------")
    // let products = user.cart.products
    // console.log("---------------------------------")
    // console.log(products)
    // console.log("---------------------------------")
    // const product = products.filter(cartProduct => (cartProduct.product.id === product_id)).pop()
    // console.log("---------------------------------")
    // console.log(product)
    // console.log("---------------------------------")
    // const index = products.indexOf(product)
    // console.log("---------------------------------")
    // console.log(index)
    // console.log("---------------------------------")
    // products.splice(index, 1)
    // console.log("---------------------------------")
    // console.log(products)
    // console.log("---------------------------------")
    // const cart = await ctx.db.mutation.updateCart(
    //   {
    //     data: {
    //       products:
    //           products
    //     },
    //     where: { id: cart_id }
    //   }, info, )
    // console.log("---------------------------------")
    // console.log(cart)
    // console.log("---------------------------------")
    // return cart
  },
  clearCart(parent, { user_id }, ctx, info) {
    return ctx.db.mutation.updateUser(
      {
        where: { id: user_id },
        data: {
          cart:{
            create:{}
          }
        }
      }, info,
    )
  },
}

module.exports = { cart }
