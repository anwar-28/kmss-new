import { Client, Databases, Storage } from "appwrite";

// Initialize the Appwrite client
export const client = new Client();

// Configuration object for Appwrite
export const appwriteConfig = {
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
  endpointUrl: process.env.NEXT_PUBLIC_ENDPOINT_ID as string,
  databaseId: process.env.NEXT_PUBLIC_DATABASE_ID as string,
  bucketId: process.env.NEXT_PUBLIC_BUCKET_ID as string,
  articlesCollection: process.env.NEXT_PUBLIC_ARTICLES_COLLECTION_ID as string,
};

// Set the Appwrite client configuration
client
  .setEndpoint(appwriteConfig.endpointUrl) // Set endpoint from config
  .setProject(appwriteConfig.projectId); // Set project ID from config

// Initialize and export Appwrite services
export const storage = new Storage(client);
export const databases = new Databases(client);
