import { http } from "@google-cloud/functions-framework";

http("BChandler", (req, res) => {
  const pubSubMessage = req.body.message;
  const order = pubSubMessage.data
    ? Buffer.from(pubSubMessage.data, "base64").toString().trim()
    : "World";
  console.log("🚀 ~ file: index.js:5 ~ http ~ order:", order);

  // if (order.scope == "store/order/statusUpdated") {
  //   console.log(
  //     `*~*~*~*~*~*Order ${order.data.id} is heading from BC to Monday!*~*~*~*~*~*`
  //   );
  //   return orderUpdated(order);
  // } else {
  //    res.status(200).send();
  //   // console.log(order.scope);
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify(order.scope),
  //   };
  // }
  res.status(200);
});

const orderUpdated = async ({ data }) => {
  let orderId = data.id;
  const fullOrder = await getOrderInfo(orderId);
  return BCToMondayProcessor(fullOrder);
};
