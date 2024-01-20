import { drizzle } from 'drizzle-orm/node-postgres';
import { InferModel, eq } from 'drizzle-orm';
import { pgTable, serial, text } from 'drizzle-orm/pg-core';
import {publicFile,agents,users} from "../schema"
import { Pool } from 'pg';
import 'dotenv/config';


export const users1 = pgTable('users', {
    first_name:text('first_name'),
 });

export type Agent =InferModel<typeof agents>; 
export type NewAgent=InferModel<typeof agents,'insert'>;
export type User = InferModel<typeof users>;
export type NewUser = InferModel<typeof users, 'insert'>;
export type PublicFile=InferModel<typeof publicFile>;
export type NewPublicFile=InferModel<typeof publicFile,'insert'>; 
const pool = new Pool({
    connectionString: process.env.DB,
});
const db = drizzle(pool);
export const getPublicFiles=async ()=>{
    try{
        return await db.select().from(publicFile);        
    }
    catch(err)
    {
        console.log("err",err)
        return err
    }
}
export const createPublicFiles=async(newPublicFile:NewPublicFile)=>{
  try{
    return await db
    .insert(publicFile)
    .values(newPublicFile)
    .returning({id:publicFile.id, fileName: publicFile.fileName, url: publicFile.url, upload_date: publicFile.uploadDate, lastUsed:publicFile.lastUsed});
   
}
  catch(err){
    return err
    console.log("err is",err)
  }
} 

export const updatePublicFiles=async(updatePublicFile:NewPublicFile)=>{
    try{
       return await db.update(publicFile)
        .set(updatePublicFile)
        .where(eq(publicFile.id, updatePublicFile.id))
        .returning({ updatedId: publicFile.id });
  }
    catch(err){
      console.log("err is",err)
    }
  } 

  export const deletePublicFiles=async(updatePublicFile:NewPublicFile)=>{
    try{
       return await db.delete(publicFile)
        .where(eq(publicFile.id, updatePublicFile.id))
        .returning({ updatedId: publicFile.id });
  }
    catch(err){
      console.log("err is",err)
    }
  } 


export const createAgent=async(newAgent:NewAgent)=>{
    try{
        console.log("newAgnent is ",newAgent)
      let t= await db
      .insert(agents)
      .values(newAgent)
      .returning();    
         console.log('t=>>>>>>>>>>',t)
         return t
  
    }
    catch(err){
      console.log("err is",err)
    }
  } 
  
  export const getAgents=async ()=>{
    try{
        return await db.select().from(agents);        
    }
    catch(err)
    {
        console.log("err",err)
        return err
    }
}

// export const getUsers = async () =>
//     await db.select({ first_name: users1.first_name}).from(users);
// export const getUserByEmail = async (email: string) =>
//     await db.select().from(users).where(eq(users.email, email));
// export const getUserBySessionToken = async (sessionToken: string) =>
//     await db.select().from(users).where(eq(users.sessiontoken, sessionToken));
// export const createUser = async (newUser: NewUser) =>
//     await db
//         .insert(users)
//         .values(newUser)
//         .returning({ id: users.id, username: users.username, email: users.email });
// export const updateUserById = async (id: number, updatedUser: User) =>
//     await db
//         .update(users)
//         .set(updatedUser)
//         .where(eq(users.id, id))
//         .returning({ id: users.id, username: users.username, email: users.email });
