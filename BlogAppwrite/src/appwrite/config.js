import { Client, Databases,Storage, ID, Query } from "appwrite";
import conf from "../conf/conf";
export class Config{
    client=new Client()
    storage;
    databases;
    constructor(){
        this.client
            .setEndpoint(conf.VITE_APPWRITE_URL)
            .setProject(conf.VITE_APPWRITE_PROJECT_ID)
        this.databases=new Databases(this.client);
        this.storage=new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
           return await this.databases.createDocument(
                conf.VITE_APPWRITE_DATABASE_ID,
                conf.VITE_APPWRITE_COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,userId,

                }
            )
            
        } catch (error) {
            console.log("appwrite Service ::getCurrentUser :: error",error);
        }

    }
    async updatePost(slug,{title,content,featuredImage,status,userId}){
        try {
            return await this.databases.updateDocument(
                conf.VITE_APPWRITE_DATABASE_ID,
                conf.VITE_APPWRITE_COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }

            )
            
        } catch (error) {
            console.log("appwrite Service ::getCurrentUser :: error",error);
            
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.VITE_APPWRITE_DATABASE_ID,
                conf.VITE_APPWRITE_COLLECTION_ID,
                slug
            )
            return true;
            
        } catch (error) {
            console.log("appwrite Service ::getCurrentUser :: error",error);
            return false;
        }
    }
    async getPost(slug){
        try {
           return await this.databases.getDocument(conf.VITE_APPWRITE_DATABASE_ID,
            conf.VITE_APPWRITE_COLLECTION_ID,
            slug
           )
            
        } catch (error) {
            console.log("appwrite Service ::getCurrentUser :: error",error);
            return false;
            
        }
    }
     async getposts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(conf.VITE_APPWRITE_DATABASE_ID,
                conf.VITE_APPWRITE_COLLECTION_ID,
                queries,
            )
            
        } catch (error) {
            console.log("appwrite Service ::getCurrentUser :: error",error);
            return false;
            
        }
     }

     //fileUploadService 
     async uploadFile(file){
       try {
        return await this.storage.createFile(
            conf.VITE_APPWRITE_BUCKET_ID,
            ID.unique(),
            file
        )
       } catch (error) {
        console.log("appwrite Service ::getCurrentUser :: error",error);
        return false;
       }
     }
     async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                conf.VITE_APPWRITE_BUCKET_ID,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.storage.getFilePreview(
            conf.VITE_APPWRITE_BUCKET_ID,
            fileId
        )
    }


}
const config=new Config();
export default config;