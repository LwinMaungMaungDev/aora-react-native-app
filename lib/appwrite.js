import { Account, Client, ID } from "react-native-appwrite";
import config from "./appwriteConfig";

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID

const account = new Account(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};
