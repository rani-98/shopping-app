from flask import Flask, make_response, request, jsonify
from flask_jwt_extended import (
    JWTManager,
    create_access_token,
    jwt_required,
    get_jwt_identity,
)
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

products = [
    {
        
        "name" : "t-shirt1",
        'cost' : "$23",
        'image':"https://images.glowroad.com/faceview/ge/dh/bj/bd/imgs/pd/1628497452927_WhatsApp_Image_2021-08-06_at_1.24.04_PM__3_-xlgn400x400.jpeg?productId=P-5543479"

    },
    {
        
        "name" : "t-shirt2",
        'cost' : "$23",
        'image':"https://images.glowroad.com/faceview/ge/dh/bj/bd/imgs/pd/1628497452927_WhatsApp_Image_2021-08-06_at_1.24.04_PM__3_-xlgn400x400.jpeg?productId=P-5543479"

    },
    {
        
        "name" : "t-shirt3",
        'cost' : "$23",
        'image':"https://images.glowroad.com/faceview/ge/dh/bj/bd/imgs/pd/1628497452927_WhatsApp_Image_2021-08-06_at_1.24.04_PM__3_-xlgn400x400.jpeg?productId=P-5543479"

    }
    

]



if __name__ == "__main__":
    app.run(debug=True)
