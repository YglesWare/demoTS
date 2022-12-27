/**
 * @module billingTs
 * @see https://stripe.com/docs/api
 */
/**
 * Add new customer into external billing service
 * 
 * @param {string} firstName - Customer first name
 * @param {string} lastName - Customer last name
 * @param {string} email - Customer email for invoice
 * @param {tAddress} address - Customer address
 * @returns {tBillingReturn} Object which contains a boolean 'hasError' key and customerId or error message
 */
const createCustomer = (firstName, lastName, email, address) => {
  const id = 'cus_MlLPCeaAuWNjDu';

  return {
    id,
    hasError: false,
  };
}

/**
 * Create a subscription to default price and return subId or errorMsg 
 * 
 * @param {string} id - Customer id 
 * @param {number} quantity - Subscription quantity
 * @returns {tBillingReturn} - Object which contains a boolean 'hasError' key and subId or error message
 */
const subscribeToDefaultPrice = (id, quantity) => {
  const subId = 'sub_1M6diJFnCmYGpjOJfkibDChS';

  return {
    id: subId,
    hasError: false,
  }
}

export {
  createCustomer,
  subscribeToDefaultPrice,
}

/** @type {tBonjour} */
let bonjour = 'Hello';
bonjour = 'Hi';


/**
 * @typedef {object} tAddress - Address object for billing
 * @property {string} [line1] - Address line
 * @property {string} [line2] - Address line complement
 * @property {number} [zipCode] - City zip code
 * @property {string} [city] - City name
 * @property {string} [state] - State name
 * @property {string} country - Country name
 */

/**
 * @typedef {object} tBillingReturn
 * @property {boolean} hasError - True if function exit on error else false
 * @property {string} [errorMsg] - Error message if exit on error
 * @property {string} [id] - The element ID
 */

/**
 * @typedef {"Hi" | "Hello"} tBonjour
 */