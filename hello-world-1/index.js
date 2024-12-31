const functions = require("@google-cloud/functions-framework");

functions.http("BChandler", (req, res) => {
  let order = req.body;
  console.log("🚀 ~ file: index.js:5 ~ http ~ order:", order);

  if (
    typeof order.scope !== "undefined" &&
    order.scope == "store/order/statusUpdated"
  ) {
    console.log(
      `*~*~*~*~*~*Order ${order.data.id} is heading from BC to Monday!*~*~*~*~*~*`
    );
    res.send("OK");
    //return orderUpdated(order);
  } else {
    // res.status(200).send();
    // console.log(order.scope);
    res.status(200).send("OK");
  }
});
