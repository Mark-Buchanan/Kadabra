from fastapi import APIRouter, UploadFile, File
import requests
import os

router = APIRouter()

AUDD_API_TOKEN = os.getenv('AUDD_API_TOKEN', 'YOUR_AUDD_API_TOKEN')

@router.post('/recognize')
async def recognize(audio: UploadFile = File(...)):
    files = {'file': (audio.filename, await audio.read(), audio.content_type)}
    data = {'api_token': AUDD_API_TOKEN}
    response = requests.post('https://api.audd.io/', data=data, files=files)
    return response.json()
