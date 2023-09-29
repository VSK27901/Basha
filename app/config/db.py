from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

MONGODB_URL=os.getenv("MONGODB_URL")



conn = MongoClient(MONGODB_URL)

# MongoDB setup
client = conn
db = client["user_db"]  # db name
users_collection = db["users"]
shipments_collection = db["Users_shipment"]
verification_collection = db["verification_data"]
device_collection = db["device_data"]

