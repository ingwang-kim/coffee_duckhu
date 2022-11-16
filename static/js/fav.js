// 즐겨찾기 페이지 오픈시 전체 메뉴 불러오기
$(function () {
    all_menu();
})

//즐겨찾기 전체 보기 클릭시 전체 메뉴 불러오기
function all_menu(){
    let uid = document.getElementById('uid').value;
    $('#menu_out').empty()
    $.ajax({
        type: 'GET',
        url: '/mypage/'+uid,
        data: {},
        success: function (response) {
            let rows = (response['mypage_detail'])
             for (let i = 0; i < rows.length; i++)  {
                let coffee_id = rows[i]['coffee_id']
                let cafe = rows[i]['cafe']
                let coffee_image = rows[i]['coffee_image']
                let coffee_name = rows[i]['coffee_name']
                let temp_menu =
                    `<div class="col-lg-4 col-6 mb-4 shuffle-item"  data-groups="[&quot;design&quot;,&quot;illustration&quot;]">
                            <div class="position-relative inner-box">
                            <div class="image position-relative ">
                            <img src="${coffee_image}" alt="portfolio-image" class="img-fluid w-100 d-block">
                            <div class="overlay-box">
                            <button onclick="del_fav(${coffee_id})" class="close_btn" ></button>
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
}


// //즐겨찾기 전체 보기 클릭시 전체 메뉴 불러오기
// function all_menu() {
//     $('#menu_out').empty()
//     $.ajax({
//         type: 'GET',
//         url: '/coffees',
//         data: {},
//         success: function (response) {
//             let rows = (response['coffees'])
//             return_list = response['coffee']
//             for (let i = 0; i < rows.length; i++) {
//                 coffee_id = rows[i]['coffee_id']
//                 let cafe = rows[i]['cafe']
//                 let coffee_image = rows[i]['coffee_image']
//                 let coffee_name = rows[i]['coffee_name']
//                 let temp_menu =
//                     `<div class="col-lg-4 col-6 mb-4 shuffle-item"  data-groups="[&quot;design&quot;,&quot;illustration&quot;]">
//                             <div class="position-relative inner-box">
//                             <div class="image position-relative ">
//                             <img src="${coffee_image}" alt="portfolio-image" class="img-fluid w-100 d-block">
//                             <div class="overlay-box">
//                             <button onclick="del_fav()" class="close_btn" ></button>
//                             <div class="overlay-inner">
//                             <a class="overlay-content" href="portfolio-single.html">
//                             <h5 class="mb-0">${coffee_name}</h5>
//                             <p>${cafe}</p>
//                             </a>
//                             </div>
//                             </div>
//                             </div>
//                             </div>
//                             </div>`
//
//                 $('#menu_out').append(temp_menu)
//
//             }
//         }
//     })
// }

//즐겨찾기 스타벅스 불러오기
function star_menu() {
    let uid = document.getElementById('uid').value;
    $('#menu_out').empty()
    $.ajax({
        type: 'GET',
        url: '/star_menu/'+uid,
        data: {},
        success: function (response) {
            let rows = response['star']
            for (let i = 0; i < rows.length; i++) {
                let cafe = rows[i]['cafe']
                if (cafe === 'starbucks') {
                    let coffee_id = rows[i]['coffee_id']
                    let coffee_image = rows[i]['coffee_image']
                    let coffee_name = rows[i]['coffee_name']
                    let temp_menu =
                        `<div class="col-lg-4 col-6 mb-4 shuffle-item"  data-groups="[&quot;design&quot;,&quot;illustration&quot;]">
                            <div class="position-relative inner-box">
                            <div class="image position-relative ">
                            <img src="${coffee_image}" alt="portfolio-image" class="img-fluid w-100 d-block">
                            <div class="overlay-box">
                            <button onclick="del_fav(${coffee_id})" class="close_btn" ></button>
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

        }
    })
}

//즐겨찾기 빽다방 불러오기
function paik_menu() {
    let uid = document.getElementById('uid').value;
    $('#menu_out').empty()

    $.ajax({
        type: 'GET',
        url: '/paik_menu/'+uid,
        data: {},
        success: function (response) {
            console.log(response)
            let rows = response['paik']
            for (let i = 0; i < rows.length; i++) {
                let cafe = rows[i]['cafe']
                if (cafe == 'paikdabang') {
                    let coffee_id = rows[i]['coffee_id']
                    let coffee_image = rows[i]['coffee_image']
                    let coffee_name = rows[i]['coffee_name']
                    let temp_menu =
                        `<div class="col-lg-4 col-6 mb-4 shuffle-item"  data-groups="[&quot;design&quot;,&quot;illustration&quot;]">
                            <div class="position-relative inner-box">
                            <div class="image position-relative ">
                            <img src="${coffee_image}" alt="portfolio-image" class="img-fluid w-100 d-block">
                            <div class="overlay-box">
                            <button onclick="del_fav(${coffee_id})" class="close_btn" ></button>
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
        }
    })
}
//즐겨찾기 이디야 불러오기
function ediya_menu() {
    let uid = document.getElementById('uid').value;
    $('#menu_out').empty()

    $.ajax({
        type: 'GET',
        url: '/ediya_menu/'+uid,
        data: {},
        success: function (response) {
            let rows = response['ediya']
            for (let i = 0; i < rows.length; i++) {
                let cafe = rows[i]['cafe']
                if (cafe == 'ediya') {
                    let coffee_id = rows[i]['coffee_id']
                    let coffee_image = rows[i]['coffee_image']
                    let coffee_name = rows[i]['coffee_name']
                    let temp_menu =
                        `<div class="col-lg-4 col-6 mb-4 shuffle-item"  data-groups="[&quot;design&quot;,&quot;illustration&quot;]">
                            <div class="position-relative inner-box">
                            <div class="image position-relative ">
                            <img src="${coffee_image}" alt="portfolio-image" class="img-fluid w-100 d-block">
                            <div class="overlay-box">
                            <button onclick="del_fav(${coffee_id})" class="close_btn" ></button>
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
        }
    })
}

//즐겨찾기 할리스 불러오기
function hollys_menu() {
    let uid = document.getElementById('uid').value;
    $('#menu_out').empty()

    $.ajax({
        type: 'GET',
        url: '/hollys_menu/'+uid,
        data: {},
        success: function (response) {
            let rows = response['hollys']
            for (let i = 0; i < rows.length; i++) {
                let cafe = rows[i]['cafe']
                if (cafe == 'hollys') {
                    let coffee_id = rows[i]['coffee_id']
                    let coffee_image = rows[i]['coffee_image']
                    let coffee_name = rows[i]['coffee_name']
                    let temp_menu =
                        `<div class="col-lg-4 col-6 mb-4 shuffle-item"  data-groups="[&quot;design&quot;,&quot;illustration&quot;]">
                            <div class="position-relative inner-box">
                            <div class="image position-relative ">
                            <img src="${coffee_image}" alt="portfolio-image" class="img-fluid w-100 d-block">
                            <div class="overlay-box">
                            <button onclick="del_fav(${coffee_id})" class="close_btn" ></button>
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
        }
    })
}

function all_del() {
    let uid = document.getElementById('uid').value;
    if (window.confirm('전체 삭제 하시겠습니까?')) {

        $.ajax({
            type: 'POST',
            url: '/delfav',
            data: {
                'uid_give' : uid
            },

            success: function (response) {
                console.log(response)
                alert(response['msg'])
                window.location.reload()
            }
        });
    } else {
        console.log('취소')
    }

}
function del_fav(coffe_id){

    let uid = document.getElementById('uid').value;
    if (window.confirm('정말 삭제 하시겠습니까?')) {

        $.ajax({
            type: 'POST',
            url: '/delfav_one',
            data: {
                'coffe_id_give' : coffe_id,
                'uid_give' : uid
            },
            success: function (response) {
                console.log(response)
                alert(response['msg'])
                window.location.reload()
            }
        });
    } else {
        console.log('취소')
    }

}