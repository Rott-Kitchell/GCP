import { http } from "@google-cloud/functions-framework";

http("BChandler", (event) => {
  let order = JSON.parse(event.body);
  console.log("🚀 ~ file: index.js:5 ~ http ~ order:", order);

  if (order.scope == "store/order/statusUpdated") {
    console.log(
      `*~*~*~*~*~*Order ${order.data.id} is heading from BC to Monday!*~*~*~*~*~*`
    );
    return orderUpdated(order);
  } else {
    // res.status(200).send();
    // console.log(order.scope);
    return {
      statusCode: 200,
      body: JSON.stringify(event),
    };
  }
});
