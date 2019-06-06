import React from 'react';
import Item from "./Item"
import "../../../style/menupage.css"


export default class CategoryItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "products" : null,
            "resto": null
        }
    }

    componentDidMount(){
        this.setState({
            "products": this.props.products,
            "title":this.props.title,
            "restoId":this.props.restoId
        })
    }

    render(){
        if(this.state.products!=null){
            return(
                <div className='menu_section'>
                <div className='menu_title'>
                    <h3><a name={this.state.title}>{this.state.title}</a></h3>
                </div>
                    <div className="menu_items">
                        {this.state.products.map(product => {
                            return (
                                <Item restoId={this.state.restoId} setNewAmt={this.props.setNewAmt } product={product} />
                                    )
                        })}
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