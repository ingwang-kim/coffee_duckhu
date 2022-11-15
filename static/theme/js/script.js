
/*즐겨찾기 목록 전체 불러오기 get*/
function fav_all() {
    $.ajax({
        type: 'GET',
        url: '/fave',
        data: {},
        success: function (response) {
            let rows = response['coffees']
            for (let i = 0; i < rows.length; i++) {
                let cafe = rows[i]['cafe']
                let coffee_image = rows[i]['coffee_image']
                let coffee_name = rows[i]['coffee_name']
                let temp_category=`<h4 name="shuffle-filter">전체 메뉴</h4>`
                let temp_menu = `
                        <h4 name="shuffle-filter">카페,메뉴별</h4>
                    <div class="row shuffle-wrapper portfolio-gallery" id="menu_out">
                         <div class="col-lg-4 col-6 mb-4 shuffle-item"
                                <div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;branding&quot;]">
                                    <div class="position-relative inner-box" >
                                     <div class="image position-relative ">
                                           <img src=${coffee_image} alt="portfolio-image" class="img-fluid w-100 d-block">
                                         <div class="overlay-box">
                                            <button class="close_btn"></button>
                                          <div class="overlay-inner">
                                            <a class="overlay-content" href="portfolio-single.html">
                                                <h5 class="mb-0">${cafe}</h5>
                                                 <p>${coffee_name}</p>
                                            </a>
                                          </div>
                                         </div>
                                     </div>
                                    </div>
                                </div>`

                $('#menu_out').append(temp_menu)
                $('#category').append(temp_category)

            }
        }
    })
}

function fav_all() {
     $.ajax({
        type: 'GET',
        url: '/fave/category',
        data: {},
        success: function (response) {

            let rows = response['coffees']
            rows.sorted(data, key =operator.itemgetter('name'))
            group_data =itertools.groupby(data,key= operator.itemgetter('name'))

            {
                return a.cafe = b.cafe
                let cafe = rows[i]['cafe']
                let coffee_image = rows[i]['coffee_image']
                let coffee_name = rows[i]['coffee_name']
                let temp_category=`<h4 name="shuffle-filter">전체 메뉴</h4>`
                let temp_menu = `
                        <h4 name="shuffle-filter">카페,메뉴별</h4>
                    <div class="row shuffle-wrapper portfolio-gallery" id="menu_out">
                         <div class="col-lg-4 col-6 mb-4 shuffle-item"
                                <div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;branding&quot;]">
                                    <div class="position-relative inner-box" >
                                     <div class="image position-relative ">
                                           <img src=${coffee_image} alt="portfolio-image" class="img-fluid w-100 d-block">
                                         <div class="overlay-box">
                                            <button class="close_btn"></button>
                                          <div class="overlay-inner">
                                            <a class="overlay-content" href="portfolio-single.html">
                                                <h5 class="mb-0">${cafe}</h5>
                                                 <p>${coffee_name}</p>
                                            </a>
                                          </div>
                                         </div>
                                     </div>
                                    </div>
                                </div>`

                $('#menu_out').append(temp_menu)
                $('#category').append(temp_category)

            }
        }
    })
}
