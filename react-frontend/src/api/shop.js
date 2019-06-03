/**
 * Mocking client-server processing
 */
import _restaurants from './restaurants.json';

const TIMEOUT = 100;

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_restaurants), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}