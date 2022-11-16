
     $(document).ready(function () {

                get_comment()
         get_coffee_detail();
            });
            function get_comment() {
                $.ajax({
                    type: "GET",
                    url: `/comment`,
                    data: {},
                    success: function (response) {
                        let rows = response['comment']
                        for(let i =0; i<rows.length; i++){

                            let id = rows[i]['id']
                            let comment = rows[i]['comment']
                            console.log(id)
                            console.log(comment)
                            let comment_html = `<div class="comment">
                                                    <div class="comment-header">
                                                        <p>ID : ${id}</p>
                                                    </div>
                                                    <div class="card-content">
                                                        <blockquote class="blockquote mb-0">
                                                            <p>${comment}</p>
                                                        </blockquote>
                                                    </div>
                                                    <div class="divider"></div>
                                                </div>`
                            $('#comments').append(comment_html)
                        }
                    }
                })
            }
            function get_coffee_detail(){
                let coffee_id = 1
                $.ajax({
                    type: "GET",
                    url: `/coffee/1`,
                    data: {},
                    success: function (response) {
                        console.log(response)
                        let rows = response['detail']
                        console.log(rows[0])
                        let caffeine = rows[0]["caffeine"]
                        let calorie = rows[0]["calorie"]
                        let coffee_desc = rows[0]["coffee_desc"]
                        let coffee_image= rows[0]["coffee_image"]
                        let coffee_name = rows[0]["coffee_name"]
                        let protein = rows[0]["protein"]
                        let salt = rows[0]["salt"]
                        let saturated_fat = rows[0]["saturated_fat"]
                        let sugars =rows[0]["sugars"]

                        let detail_ing =`<img className = "myimage" src =${coffee_image} alt =${coffee_name}>
                                                <div className = "favorite-container" onclick="favoriteOnClick()">
                                                    <img className = "favorite-btn" style="height: 50px" src="https://cdn0.iconfinder.com/data/icons/shop_icons/256/star.png" alt="Bookmark icon></img>
                                                </div>
                                            </img>
                                            <div class="ingredient-container" id="ingredient">
                                                <h2>${coffee_name}</h2>
                                                <div class="divider"></div>
                                                <div class="coffee-desc">
                                                ${coffee_desc}
                                                </div>
                                                <ul class="ingredient-list">
                                                    <li>caffeine : ${caffeine} </li>
                                                    <li>calorie : ${calorie}</li>
                                                    <li>protein : ${protein}</li>
                                                    <li>salt : ${salt}</li>
                                                    <li>saturated_fat : ${saturated_fat}</li>
                                                    <li>sugars : ${sugars}</li>
                                                </ul>
                                            </div>`

                        $('#main').append(detail_ing)
                    }
                })
            }
            function save_coffee_comment(){
                let comment = $('#comment-field').val()
                let id = 999
                console.log(comment)
                $.ajax({
                    type: 'POST',
                    url: '/comment',
                    data: {comment_give: comment, id_give: id},
                    success: function (response) {
                        alert('댓글 등록 완료')
                        window.location.reload()
                    }
                })
            }
            function favoriteOnClick(){
                console.log('즐겨찾기')
            }
