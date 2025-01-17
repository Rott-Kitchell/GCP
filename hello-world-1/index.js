const functions = require("@google-cloud/functions-framework");

functions.http("BChandler", (event) => {
  let order = event.body;
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
      body: JSON.stringify(order.scope),
    };
  }
});

const orderUpdated = async ({ data }) => {
  let orderId = data.id;
  const fullOrder = await getOrderInfo(orderId);
  return BCToMondayProcessor(fullOrder);
};
