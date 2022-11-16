// 즐겨찾기 전체 메뉴 불러오기
$(function () {
        $.ajax({
            type: 'GET',
            url: '/coffees',
            data: {},
            success: function (response) {
                console.log(response)
                let rows = response['coffees']
                return_list = response['coffee']
                for (let i = 0; i < rows.length; i++) {
                    coffee_id = rows[i]['coffee_id']
                    let cafe = rows[i]['cafe']
                    let coffee_image = rows[i]['coffee_image']
                    let coffee_name = rows[i]['coffee_name']
                    let temp_menu =
                        `<div class="col-lg-4 col-6 mb-4 shuffle-item"  data-groups="[&quot;design&quot;,&quot;illustration&quot;]">
                            <div class="position-relative inner-box">
                            <div class="image position-relative ">
                            <img src="${coffee_image}" alt="portfolio-image" class="img-fluid w-100 d-block">
                            <div class="overlay-box">
                            <button onclick="del_fav()" class="close_btn" ></button>
                            <div class="overlay-inner">
                            <a class="overlay-content" href="portfolio-single.html">
                            <h5 class="mb-0">${coffee_name}</h5>
                            <p>${cafe}</p>
                            </a>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>`

                    $('#menu_out').append(temp_menu)

                }
            }
        })
    })
