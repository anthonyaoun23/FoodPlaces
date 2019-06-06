import React from "react";
import shop from '../../../api/shop'
import '../../../style/restoListPage.css';
import CategoryItem from "./CategoryItem"
import { FaAddressCard } from "react-icons/fa";


export default class RestoMenu extends React.Component {
    constructor(props) {
        super(props);
        this.setNewAmt = this.setNewAmt.bind(this);
        this.state = {
            'restaurant':null,
            'cart':[]     
        }
    }



    componentDidMount(){
        let cart = JSON.parse(localStorage.getItem('cart'))
        if(this.props.match.params!=undefined){
            var restoName = this.props.match.params
        } else {
            var restoName = null
        }
        
        shop.getRestaurant(restoName, restaurant => {
            this.setState({
                'restaurant':restaurant,
                'cart':cart==null?[]:cart
            })
        })
    }

    setNewAmt(id, newamt){
        let { cart } = this.state;
        let found = false;
        if(cart.length != 0){
            cart.map(obj => {
                if(obj.id == id && obj.restoId == this.state.restaurant.id){
                    obj.amt = newamt
                    found= true;
                }
            })
            if(!found) {
                shop.getProductById(this.state.restaurant.id, id, product => {
                    cart.push({id: id, restoId: this.state.restaurant.id,amt: newamt,product:product})
                })
            }
        } else {
            shop.getProductById(this.state.restaurant.id, id, product => {
                cart.push({id: id, restoId: this.state.restaurant.id,amt: newamt,product:product})
            })
        }
        

        this.setState({
            "cart":cart
        })
    }

    componentWillUnmount(){
        console.log(this.state.cart)
        localStorage.setItem('cart', JSON.stringify(this.state.cart))
    }

    render() {
        if(this.state.restaurant!=null){
            return (
                <div className="menu">
                {this.state.restaurant.menuCategory.map(category => {
                    return (

                        <CategoryItem setNewAmt={this.setNewAmt} restoId={this.state.restaurant.id} title={category.title} products={category.items}/>
    
                    )
                })
            }</div>       
            )

        }else {
            return (
                <h3>Loading</h3>
            )
        }
    }

}