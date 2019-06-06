import React from "react";
import shop from '../../../api/shop'
import Resto from './Resto';
import '../../../style/restoListPage.css';
import { Link } from 'react-router-dom';


class RestoContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            'restaurants': []
        }
        shop.getRestaurants(restaurants => {
            this.setState({
                'restaurants':restaurants
            })
        })
    }

    render() {
        return (
            <div>
            {this.state.restaurants.map(restaurant => {
                return (
                    <Link to={{
                        pathname: restaurant.title,
                        state: {
                            title: restaurant.title
                        }
                    }}>
                        <Resto title={restaurant.title} address ={restaurant.address} foodType={restaurant.foodType} rating={restaurant.rating} priceLow={restaurant.priceLow} priceHigh={restaurant.priceHigh} pictureSource={restaurant.pictureSource} />
                    </Link>
                )
            })}
            </div>
            )
    }

}

export default RestoContainer;