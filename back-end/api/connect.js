// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";
const db_password = "123Carinha123";
// ${db_password}

const URI =
  `mongodb+srv://alexus:${db_password}@cluster0.rn0sk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(URI);

export const db = client.db("SpotifyDB");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
