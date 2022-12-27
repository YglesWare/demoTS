import {createCustomer, subscribeToDefaultPrice} from "./module_ts.mjs";

const firstName = 'Foo';
const lastName = 'Bar';
const email = 'foo.bar@gmail.com';

/** @type {tBillingAddress} */
const address = {
  line1: 'Here',
  zipCode: 42,
  city: '',
  state: 'Mouarf',
  country: 'US',
};

const customerId = createCustomer(firstName, lastName, email, address);

if (customerId.id) {
  let subscriptionResult = subscribeToDefaultPrice(customerId.id, 5);
  console.log(subscriptionResult);
}

/**
 * @typedef { import("./module_ts.mjs").tAddress } tBillingAddress - Imported from module billingTs
 */

/** @tutorials test a la con */
/** @tutorial test a la con */