import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm } from './CheckoutForm'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const PUBLIC_KEY = 'pk_test_51JMEM9GiKJlGwlMthvJcFviFNcw5RjwFPBW2QyqHB2YykU3S5hdtH8oDJ0c4sZnnITRl25QI2JtzhLKi8uNKG0t500n1MG4ewm';
const stripePromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;