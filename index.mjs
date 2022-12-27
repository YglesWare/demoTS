import {createCustomer, subscribeToDefaultPrice} from "./module.mjs";

const firstName = 'Foo';
const lastName = 'Bar';
const email = 'foo.bar@gmail.com';
const address = {
  line1: 'Here',
  zipCode: 42,
  city: '',
  state: 'Mouarf',
  country: 'US',
};

const customerId = createCustomer(firstName, lastName, email, address);
const subscriptionResult = subscribeToDefaultPrice(customerId, 5);

console.log(subscriptionResult);