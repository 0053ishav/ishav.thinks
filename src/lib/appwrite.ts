"use server";
import { Client, Databases, Query } from "node-appwrite";

async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
    .setKey(process.env.APPWRITE_API_KEY!);
  return new Databases(client);
}

export const newsletterSubscription = async (email: string, action: "subscribe" | "unsubscribe") => {
  if (!email || !email.includes("@")) {
    return { success: false, message: "Invalid email address." };
  }

  const database = await createAdminClient();

  const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
  const newsletterCollectionId = process.env.NEXT_PUBLIC_APPWRITE_NEWSLETTER_COLLECTION_ID!;

  try {
    const listResponse = await database.listDocuments(databaseId, newsletterCollectionId, [
      Query.equal("email", email)
    ]);

    if (listResponse.total > 0) {
      const existingDoc = listResponse.documents[0];

      if (action === "subscribe") {
        await database.updateDocument(databaseId, newsletterCollectionId, existingDoc.$id, { subscribed: true });
        return { success: true, message: "Successfully subscribed!" };
      } else if (action === "unsubscribe") {
        await database.updateDocument(databaseId, newsletterCollectionId, existingDoc.$id, { subscribed: false });
        return { success: true, message: "Successfully unsubscribed!" };
      } else {
        throw new Error("Invalid action provided.");
      }
    } else {
      if (action === "subscribe") {
        await database.createDocument(databaseId, newsletterCollectionId, "unique()", { email, subscribed: true });
        return { success: true, message: "Thank you for subscribing!" };
      } else {
        throw new Error("Email not found for unsubscribing.");
      }
    }
  } catch (error: unknown) {
    let message = "An error occurred.";
    if (error instanceof Error) {
      message = error.message;
    }
    return { success: false, message };
  }
};