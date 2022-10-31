from flask import Flask, Blueprint
import flask
from flask_cors import CORS

def CreateFlaskApp():
    flaskapp = Flask(__name__)
    flaskapp.config['SECRET_KEY'] = 'flask_angular_text_tools'
    # flaskapp.config['']
    flaskapp.config["UPLOAD_DIR"] = "core/storage"

    from .views import views
    from .auth import auth
    flaskapp.register_blueprint(views)
    flaskapp.register_blueprint(auth)
    
    CORS(flaskapp)

    return flaskapp