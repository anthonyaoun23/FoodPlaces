import { createStore} from "redux";

import cartItems from "../reducers/cartItems";

export default createStore(cartItems);