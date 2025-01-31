// src/appwrite/config.ts
import { Client, Storage } from "appwrite";

const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)  
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); 
 
export const storage = new Storage(client);
 