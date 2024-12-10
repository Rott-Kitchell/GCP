import { getOrderInfo } from "./src/bcFuncs.mjs";
import BCToMondayProcessor from "./utils/BCToMondayProcessor.mjs";

export async function mainHandler(event, context) {
  let order = JSON.parse(event.body);

  if (order.scope == "store/order/statusUpdated") {
    console.log(
      `*~*~*~*~*~*Order ${order.data.id} is heading from BC to Sheets!*~*~*~*~*~*`
    );
    //return orderUpdated(order);
    return {
      statusCode: 200,
      body: JSON.stringify(order.scope),
    };
  } else {
    // res.status(200).send();
    // console.log(order.scope);
    return {
      statusCode: 200,
      body: JSON.stringify(order.scope),
    };
  }
}

const orderUpdated = async ({ data }) => {
  let orderId = data.id;
  const fullOrder = await getOrderInfo(orderId);
  return BCToMondayProcessor(fullOrder);
};
