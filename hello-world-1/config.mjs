const secretName = "/BCtoMondayInteg/MondaySecrets";
const url = `http://localhost:2773/secretsmanager/get?secretId=${secretName}`;
const headers = {
  "X-Aws-Parameters-Secrets-Token": process.env.AWS_SESSION_TOKEN,
};
console.log(headers);

const response = await fetch(url, { headers });
if (!response.ok) {
  throw new Error(
    `Error occured while requesting secret ${secretName}. Response status was ${response.status}`
  );
}
const secretContent = await response.json();
const secrets = JSON.parse(secretContent.SecretString);
const {
  BCACCESSTOKEN,
  BCCLIENTID,
  BCSTOREHASH,
  MONDAYORDERBOARDID,
  MONDAYTOKEN,
  KITTOKEN,
} = secrets;
export {
  BCACCESSTOKEN,
  BCCLIENTID,
  BCSTOREHASH,
  MONDAYORDERBOARDID,
  MONDAYTOKEN,
  KITTOKEN,
};
