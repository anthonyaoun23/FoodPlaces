import React from 'react'
import "../../../style/menupage.css";

export default class Item extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveClick = this.handleRemoveClick.bind(this)
        this.handleAddClick = this.handleAddClick.bind(this)
        this.state = {
            "resto" : null,
            "product" : null,
            "isInCart" : 0
        }
    }

    componentDidMount(){
        let prev = JSON.parse(localStorage.getItem('cart'));
        let amt=0;
        if(prev!=null && prev.length!=0){
            prev.map(obj => {
                if(obj.id == this.props.product.id && obj.restoId == this.props.restoId){
                    amt = obj.amt
                }
            })

        }
        this.setState({
            "restoId" : this.props.restoId,
            "product": this.props.product,
            "isInCart": amt
        })
    }

    handleAddClick(e){
        e.preventDefault()
        let newamt = this.state.isInCart+=1;
        this.setState({
            "isInCart":newamt

        }, () => this.props.setNewAmt(this.state.product.id,this.state.isInCart))
    }

    handleRemoveClick(e){
        e.preventDefault()
        let newamt = this.state.isInCart-=1;
        this.setState({
            "isInCart":newamt

        }, () => this.props.setNewAmt(this.state.product.id,this.state.isInCart))
    }

    render(){
        if(this.state.product!=null){
            return (
            <div className='menu_item'>
                <h4>{this.state.product.title}</h4>
                <p>{this.state.product.description}</p>
                <div className='price_cart'>
                        <p style={{padding: '3px',background: '#57a772', width:'10%', color: 'white', borderRadius: '10px',fontWeight: 500}}>{this.state.product.price}$</p>
                        <button className="remove_from_cart" disabled={this.state.isInCart ? "": "disabled"} onClick={this.handleRemoveClick} style={{padding:'3px', background: '#57a772', width: '10%', color:'white', borderRadius: '10px', fontWeight: 500}}>{this.state.isInCart > 0 ? "Remove from Cart" : "Not in cart"}</button>
                        <button className="add_to_cart" onClick={this.handleAddClick} style={{padding:'3px', background: '#57a772', width: '10%', color:'white', borderRadius: '10px', fontWeight: 500}}> Add to cart</button>
            
                </div>
            </div>

            )
        } else {
            return(
                <h1>Loading</h1>

            )
        }
    }
}