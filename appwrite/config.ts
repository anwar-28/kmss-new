import { Client, Databases, Storage } from "appwrite";

export const client = new Client();

export const appwriteConfig = {
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
  endpointUrl: process.env.NEXT_PUBLIC_ENDPOINT_ID as string,
  databaseId: process.env.NEXT_PUBLIC_DATABASE_ID as string,
  bucketId: process.env.NEXT_PUBLIC_BUCKET_ID as string,
  articlesCollection: process.env.NEXT_PUBLIC_ARTICLES_COLLECTION_ID as string,
};

client.setEndpoint("https://cloud.appwrite.io/v1");
client.setProject(appwriteConfig.projectId);

export const storage = new Storage(client);
export const databases = new Databases(client);
