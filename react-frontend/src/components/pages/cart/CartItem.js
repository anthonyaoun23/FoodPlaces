import React from 'react';
import shop from '../../../api/shop'



export default class CartItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item: null,
            product:null
        }
    }

    
  componentDidMount() {
            this.setState({
                item: this.props.item,
                product: this.props.product
                  })
            
        }

    UNSAFE_componentWillReceiveProps(){
        this.setState({
            item: this.props.item,
            product: this.props.product
          })
}

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
          <h4 className="info__title">{this.props.product.title}</h4>
          <div className="information">
            <div className="info__price">
              <div className="price">
                <p className="price__text">${this.props.product.price}</p>
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
              console.log('clicked on' , this.state.item.id,this.state.item.restoId)
              this.props.itemRemove(this.props.item.id,this.props.item.restoId)
            }}>
            <i className="far fa-times-circle" />
          </button>
        </div>
      </div>

)
}
}
}