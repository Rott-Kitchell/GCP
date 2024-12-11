import { SecretManagerServiceClient } from "@google-cloud/secret-manager";
const client = new SecretManagerServiceClient();
const parent = "projects/947387702458";

const secrets = client
  .listSecretsAsync({
    parent: parent,
  })
  .then((s) => console.log("secrets" + s));
