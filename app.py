from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

from pymongo import MongoClient
import certifi

ca = certifi.where()

client = MongoClient('mongodb+srv://test:sparta@cluster0.ffudy0q.mongodb.net/Cluster0?retryWrites=true&w=majority',tlsCAFile=ca)
db = client.coffeeduckhu


@app.route('/')
def home():
    return render_template('fav.html')



@app.route("/coffees", methods=["GET"])
def fave_get():


    fav_list = [10,15,30,50,90,100,200,300,250,240,105]
    # # for i in fav_list:
    # #     a=(db.coffee.find({'coffee_id' : i},{'_id':False}))
    # #     print("print a " + str(a))
    return_list = []
    for i in fav_list:
        for a in db.coffee.find({'coffee_id' : i},{'_id':False}):
            return_list.append(a)

    print(return_list)

    return jsonify({'coffees':return_list})

@app.route("/delfav", methods=["post"])
def web_mars_add():
    id_receive = request.form['id_give']
    coffee_id_receive = request.form['coffee_name_give']
    return_list_receive = request.form['return_list_give']

    fav_list = db.users.delete_one(return_list_receive)
    return jsonify({'msg':'삭제완료' })


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
    app.run('0.0.0.0', port=5000, debug=True)
