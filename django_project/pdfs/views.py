from django.http import HttpResponse
import pymongo
from bson.objectid import ObjectId

def fetch_book(request, pdf_id):
    client = pymongo.MongoClient("mongodb://localhost:27017")
    db = client["Readverse-app"]
    collection = db["pdfs"]

    # Fetch the book document using its ID
    book = collection.find_one({'_id': ObjectId(pdf_id)})

    # Assuming the PDF is stored in a 'pdf_data' field as binary data
    pdf_data = book['pdf_data']

    # Set the response content type to 'application/pdf'
    response = HttpResponse(pdf_data, content_type='application/pdf')

    # Set the Access-Control-Allow-Origin header to allow cross-origin requests
    response['Access-Control-Allow-Origin'] = 'http://192.168.56.1:3000'  # Replace with your frontend URL
    return response
