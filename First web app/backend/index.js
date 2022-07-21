import app from "./server";
import mongodb from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
     process.env.OUTSITE_DB_URI,
          {
               PoolSize: 50,
               wtimeout: 2500,
               useNewUrlParse: true,
          }.catch(err)


     }
)

