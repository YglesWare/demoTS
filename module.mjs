/** 
 * @module billing
 * @see https://stripe.com/docs/api/customers/create
 */
/**
 * Add new customer into external billing service
 * @deprecated Please use module_ts file
 * @param {string} firstName - Customer first name
 * @param {string} lastName - Customer last name
 * @param {string} email - Customer email for invoice
 * @param {object} address - Customer address
 * 
 * @returns {string}
 */
const createCustomer = (firstName, lastName, email, address) => {
  const id = 'cus_MlLPCeaAuWNjDu';

  return id;
}

/**
 * Create a subscription to default price and return subId or errorMsg 
 * @param {string} id - Customer id 
 * @param {number} quantity - Subscription quantity
 * @returns {object} Object which contains a boolean 'hasError' key and subId or error message
 * 
 * @example
 * const sub = subscribeToDefaultPrice(id, 42)
 */
const subscribeToDefaultPrice = (id, quantity) => {
  const subId = 'sub_1M6diJFnCmYGpjOJfkibDChS';

  return {
    subId,
    hasError: false,
  }
}

export {
  createCustomer,
  subscribeToDefaultPrice,
}
