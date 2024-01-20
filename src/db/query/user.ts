import { drizzle } from 'drizzle-orm/node-postgres';
import { InferModel, eq } from 'drizzle-orm';
import { pgTable, serial, text } from 'drizzle-orm/pg-core';
import {users} from "../schema"
import { Pool } from 'pg';
import 'dotenv/config';

export type User = InferModel<typeof users>;
export type NewUser = InferModel<typeof users, 'insert'>;

const pool = new Pool({
    connectionString: process.env.DB,
});
const db = drizzle(pool);
export const userData=async ()=>{
    try{
        return await db.select().from(users);        
    }
    catch(err)
    {
        console.log("err",err)
        return err
    }
}
export const registerUser=async(data:User)=>{
  try{
    console.log("daatis",data)
    return await db
    .insert(users)
    .values(data)
    .returning();
   
}
  catch(err){
    console.log("data is",data)
    console.log("err isfff",err)
  }
} 



