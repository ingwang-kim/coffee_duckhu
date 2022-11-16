
     $(document).ready(function () {
         get_comment()
         get_coffee_detail();
     });

     function get_coffee_detail() {
         let coffee_id = document.getElementById('coffee_id').value;
         $.ajax({
             type: "GET",
             url: `/api/coffee/${coffee_id}`,
             data: {},
             success: function (response) {
                 let rows = response['detail']
                 let caffeine = rows[0]["caffeine"]
                 let calorie = rows[0]["calorie"]
                 let coffee_desc = rows[0]["coffee_desc"]
                 let coffee_image = rows[0]["coffee_image"]
                 let coffee_name = rows[0]["coffee_name"]
                 let protein = rows[0]["protein"]
                 let salt = rows[0]["salt"]
                 let saturated_fat = rows[0]["saturated_fat"]
                 let sugars = rows[0]["sugars"]
                 let favorites = rows[0]["favorites"]

                 let detail_ing = `
                                    <div style="display: flex">
                                        <div style="position: relative;">
                                            <img className = "myimage" src =${coffee_image} alt =${coffee_name} style="height: 380px"/>
<!--                                            <img className = "favorite-btn" -->
<!--                                                    style="position: absolute; right: 0; height: 50px; margin-right: 10px" -->
<!--                                                    src="https://cdn0.iconfinder.com/data/icons/shop_icons/256/star.png" -->
<!--                                                    alt="Bookmark icon"/>                         -->
                                        </div>  
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
                                        </div>
                                    </div>`

                 $('#main').append(detail_ing)
             }
         })
     }

     function get_comment() {
         let coffee_id = document.getElementById('coffee_id').value;
         $.ajax({
             type: "GET",
             url: `/api/comment/${coffee_id}`,
             data: {},
             success: function (response) {
                 console.log({response})
                 let rows = response['comment']
                 for (let i = 0; i < rows.length; i++) {
                     // let id = rows[i]['user_id']
                     let comment = rows[i]['comment']
                     let nickname = rows[i]['nickname'] ? rows[i]['nickname'] : '비회원'
                     let comment_html = `<div class="comment">
                                                    <div class="comment-header">
                                                        <p>${nickname}</p>
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

     function save_coffee_comment() {
         let coffee_id = document.getElementById('coffee_id').value;
         let nickname = document.getElementById('nickname').value;
         let uid =document.getElementById('uid').value;
         let comment = $('#comment-field').val()

         if(!nickname){
            nickname = '비회원'
         }
         $.ajax({
             type: 'POST',
             url: `/api/comment/${coffee_id}`,
             data: {comment_give: comment, id_give: uid, nickname_give: nickname},
             success: function (response) {
                 alert('댓글 등록 완료')
                 window.location.reload()
             }
         })
     }

     function favoriteOnClick() {
         let uid =document.getElementById('uid').value;
         console.log(uid)
         if(uid){
            alert('즐겨찾기가 추가 되었습니다.')
         }else {
             alert('로그인을 해주세요')
         }
     }
