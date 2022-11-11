from flask import Blueprint, jsonify, url_for, request

auth = Blueprint('auth', __name__)

@auth.route('/api/auth/login/', methods=['POST'])
def HandleLogin():
    if request.method == 'POST':
        formData = request.get_json()
        username = formData['username']
        password = formData['password']
        print("username - ", username)
        print("password - ", password)

        from .databases.database import HandleLoginDB
        res = HandleLoginDB(username, password)

        if res != None:
            print(res)
            return jsonify(res)
        else:
            return jsonify(None)