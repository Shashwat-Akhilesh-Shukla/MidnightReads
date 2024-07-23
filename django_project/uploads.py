# Assuming you have a MongoDB connection already set up
from pymongo import MongoClient

# Connect to your MongoDB instance
client = MongoClient("mongodb://localhost:27017")
db = client["Readverse-app"]
collection = db["pdfs"]

# Read the PDF file as binary data
with open("C:/Users/passi/OneDrive/Desktop/my codes/EchoReads/books on database/Haunting Adeline (H. D. Car_ (Z-Library).pdf", "rb") as pdf_file:
    pdf_data = pdf_file.read()

# Insert the PDF data into the collection
collection.insert_one({"filename": "Haunting Adeline", "pdf_data": pdf_data})
