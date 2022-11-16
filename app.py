from pymongo import MongoClient
import certifi
from urllib.parse import urlparse

from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

ca = certifi.where()

client = MongoClient('mongodb+srv://test:sparta@cluster0.ffudy0q.mongodb.net/Cluster0?retryWrites=true&w=majority',tlsCAFile=ca)
db = client.coffeeduckhu

# JWT 토큰을 만들 때 필요한 비밀문자열입니다. 아무거나 입력해도 괜찮습니다.
# 이 문자열은 서버만 알고있기 때문에, 내 서버에서만 토큰을 인코딩(=만들기)/디코딩(=풀기) 할 수 있습니다.
SECRET_KEY = 'SPARTA'

# JWT 패키지를 사용합니다. (설치해야할 패키지 이름: PyJWT)
import jwt

# 토큰에 만료시간을 줘야하기 때문에, datetime 모듈도 사용합니다.
import datetime

# 회원가입 시엔, 비밀번호를 암호화하여 DB에 저장해두는 게 좋습니다.
# 그렇지 않으면, 개발자(=나)가 회원들의 비밀번호를 볼 수 있으니까요.^^;
import hashlib

# 커피상세정보 GET
@app.route('/coffee/1', methods=["GET"])
def get_coffee_detail():
    coffee_detail = list(db.coffee.find({'coffee_id': 1}, {'_id': False}))
    print(coffee_detail)
    return jsonify({'detail': coffee_detail})

#comment GET
@app.route('/comment', methods=["GET"])
def get_coffee_comment():
    coffee_comment = list(db.comment.find({}, {'_id': False}))
    print(coffee_comment)
    return jsonify({'comment': coffee_comment})

#comment POST
@app.route("/comment", methods=["POST"])
def post_coffee_comment():
    comment_receive = request.form['comment_give']
    id_receive = request.form['id_give']

    # bucket_list = list(db.bucket.find({}, {'_id': False}))
    # count = len(bucket_list) + 1

    doc = {
        'id': id_receive,
        'comment': comment_receive
    }

    db.comment.insert_one(doc)

    return jsonify({'msg': '등록 완료!'})



#################################
##  HTML을 주는 부분             ##
#################################

@app.route('/')
def home():
    return render_template('coffeeDetail.html')

if __name__ == '__main__':
    app.run('0.0.0.0', port=3000, debug=True)