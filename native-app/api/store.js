import _store from "./store.json";


const TIMEOUT = 100;

function getRestaurants(cb, timeout){
    setTimeout(() => cb(_store), timeout || TIMEOUT)
}

function getRestaurantById(id, cb, timeout){
    _store.map(restaurant => {
        if(restaurant.id == id){
            setTimeout(() => cb(restaurant), timeout || TIMEOUT)
        }
    })
}

function getCategoryById(restoId, catId, cb, timeout){
    getRestaurantById(restoId, resto => {
        resto['menuCategory'].map(cat => {
            if(cat.id == catId){
                setTimeout(() => cb(cat), timeout || TIMEOUT)
            }
        })
    })
}

function getItemById(restoId, catId, ItemId, cb, timeout){
    getCategoryById(restoId,catId, category => {
        category['items'].map(item => {
            if(item.id == ItemId){
                setTimeout(() => cb(item), timeout || TIMEOUT)
            }
        })

    })
}


export default {
    getRestaurants,
    getRestaurantById,
    getItemById,
    getCategoryById
}

