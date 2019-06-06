import React from 'react';
import shop from '../../../api/shop'



export default class CartItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            product:null
        }
    }

    
  componentDidMount() {
            this.setState({
                product: this.props.product
                  })
            
        }

//   componentDidUpdate(props) {
//       if(props.product!=undefined){
//           console.log('here')
//           this.setState({
//               product:props.product
//           })
//       }

//   }


    render(){
        if(this.state.product==null){
            return (
                <h1>fetching products...</h1>
            )
        }else {

            return (
                <div className="cart__item item">
        <div className="item__img img-container">
          <img className="img-container__img" src="../../../assets/thomas-tucker-391058-unsplash.jpg" alt=""/>
        </div>
        <div className="item__info info">
          <p className="info__name">place</p>
          <h4 className="info__title">{this.state.product.title}</h4>
          <div className="information">
            <div className="info__price">
              <div className="price">
                <p className="price__text">${this.state.product.price}</p>
              </div>
            </div>
            <button className="info__details" onClick={() => {
            }}>
              <div className="details">
                <p className="price__text2">
                  Details<i className="fas fa-angle-down details__angle" />
                </p>
              </div>
            </button>
          </div>
        </div>
        <div className="item__actions">
          <button className="action-button" onClick={() => {
              this.props.itemRemove()
            }}>
            <i className="far fa-times-circle" />
          </button>
        </div>
      </div>

)
}
}
}