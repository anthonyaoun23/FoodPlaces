/**
 * Mocking client-server processing
 */
import _restaurants from './restaurants.json';

const TIMEOUT = 100;


export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_restaurants), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT),
  getRestaurants: (cb, timeout) => setTimeout(() => cb(_restaurants), timeout || TIMEOUT),
  getRestaurant: (title, cb, timeout) => {
    _restaurants.map(restaurant => {
      if (restaurant.title == title.handle) {
        setTimeout(() => cb(restaurant), timeout || TIMEOUT)
      }
    })
  },
  getRestaurantById: (id, cb, timeout) => {
    _restaurants.map(restaurant => {
      if (restaurant.id == id) {
        setTimeout(() => cb(restaurant), timeout || TIMEOUT)
      }
    })
  },
  getProductById: (restoId, id, cb, timeout) => {
    _restaurants.map(restaurant => {
      if (restaurant.id == restoId) {
        restaurant["menuCategory"].map(cat => {
          cat.items.map(item => {
            if (item.id === id) {
              setTimeout(() => cb(item), timeout || TIMEOUT)
            }
          })
        })
      }
    })
  }

}