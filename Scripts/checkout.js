import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js'
// import '../data/backend.js'

async function loadPage(){
  console.log('load page');
  try{
    // throw 'error1';

    await loadProductsFetch();
  
    const value = await new Promise((resolve, reject)=>{
      // throw 'error2';

      loadCart(()=>{
        // reject();
        resolve('value3');
      });
    });

  } catch(error){
    console.log("Unexpected error. Please try again later.");
  }

  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

/*
Promise.all([
  loadProductsFetch(),

  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })

]).then((value)=>{
  console.log(value);
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve)=>{
  loadProducts(()=>{
    resolve('value1');
  })

}).then((value)=>{
  console.log(value);

  return new Promise((resolve)=>{
    loadCart(()=>{
      resolve('value2');
    });

  }).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/

/*
loadProducts(()=>{
  loadCart(()=>{
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/