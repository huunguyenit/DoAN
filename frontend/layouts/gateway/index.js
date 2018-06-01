

$.getJSON("http://localhost:5555/product/toppricenow", (data) => {
    console.log(data)
    $.each(data, (index, items) => {
        var item =
        '<div class="col-md-4 top_brand_left" style="padding-top: 20px">'+
        '<div class="hover14 column">'+
            '<div class="agile_top_brand_left_grid">'+
                '<div class="agile_top_brand_left_grid_pos">'+
                    '<img src="images/offer.png" alt=" " class="img-responsive" />'+
                '</div>'+
                '<div class="agile_top_brand_left_grid1">'+
                    '<figure>'+
                        '<div class="snipcart-item block">'+
                            '<div class="snipcart-thumb">'+
                                '<a href="products.html">'+
                                    '<img title=" " alt=" " src="images/4.png" />'+
                                '</a>'+
                                '<p>Sampann-toor-dal</p>'+
                                '<div class="stars">'+
                                   ' <i class="fa fa-star blue-star" aria-hidden="true"></i>'+
                                    '<i class="fa fa-star blue-star" aria-hidden="true"></i>'+
                                    '<i class="fa fa-star blue-star" aria-hidden="true"></i>'+
                                    '<i class="fa fa-star blue-star" aria-hidden="true"></i>'+
                                    '<i class="fa fa-star gray-star" aria-hidden="true"></i>'+
                                '</div>'+
                               ' <h4>$35.99'+
                                   ' <span>$55.00</span>'+
                               ' </h4>'+
                           ' </div>'+
                            '<div class="snipcart-details top_brand_home_details">'+
                                '<form action="#" method="post">'+
                                   ' <fieldset>'+
                                        '<input type="hidden" name="cmd" value="_cart" />'+
                                       ' <input type="hidden" name="add" value="1" />'+
                                        '<input type="hidden" name="business" value=" " />'+
                                        '<input type="hidden" name="item_name" value="Fortune Sunflower Oil" />'+
                                       ' <input type="hidden" name="amount" value="35.99" />'+
                                        '<input type="hidden" name="discount_amount" value="1.00" />'+
                                        '<input type="hidden" name="currency_code" value="USD" />'+
                                        '<input type="hidden" name="return" value=" " />'+
                                        '<input type="hidden" name="cancel_return" value=" " />'+
                                        '<input type="submit" name="submit" value="Add to cart" class="button" />'+
                                   ' </fieldset>'+
                               ' </form>'+
                            '</div>'+
                       ' </div>'+
                    '</figure>'+
               ' </div>'+
           ' </div>'+
        '</div>'+
   ' </div>'
        $('#loadTopprice').append(item);
    })
})

$.getJSON("http://localhost:5555/product/topturnpay", (data) => {
    $.each(data, (index, items) => {
        var item =
        '<div class="col-md-4 top_brand_left" style="padding-top: 20px">'+
        '<div class="hover14 column">'+
            '<div class="agile_top_brand_left_grid">'+
                '<div class="agile_top_brand_left_grid_pos">'+
                    '<img src="images/offer.png" alt=" " class="img-responsive" />'+
                '</div>'+
                '<div class="agile_top_brand_left_grid1">'+
                    '<figure>'+
                        '<div class="snipcart-item block">'+
                            '<div class="snipcart-thumb">'+
                                '<a href="products.html">'+
                                    '<img title=" " alt=" " src="images/4.png" />'+
                                '</a>'+
                                '<p>Sampann-toor-dal</p>'+
                                '<div class="stars">'+
                                   ' <i class="fa fa-star blue-star" aria-hidden="true"></i>'+
                                    '<i class="fa fa-star blue-star" aria-hidden="true"></i>'+
                                    '<i class="fa fa-star blue-star" aria-hidden="true"></i>'+
                                    '<i class="fa fa-star blue-star" aria-hidden="true"></i>'+
                                    '<i class="fa fa-star gray-star" aria-hidden="true"></i>'+
                                '</div>'+
                               ' <h4>$35.99'+
                                   ' <span>$55.00</span>'+
                               ' </h4>'+
                           ' </div>'+
                            '<div class="snipcart-details top_brand_home_details">'+
                                '<form action="#" method="post">'+
                                   ' <fieldset>'+
                                        '<input type="hidden" name="cmd" value="_cart" />'+
                                       ' <input type="hidden" name="add" value="1" />'+
                                        '<input type="hidden" name="business" value=" " />'+
                                        '<input type="hidden" name="item_name" value="Fortune Sunflower Oil" />'+
                                       ' <input type="hidden" name="amount" value="35.99" />'+
                                        '<input type="hidden" name="discount_amount" value="1.00" />'+
                                        '<input type="hidden" name="currency_code" value="USD" />'+
                                        '<input type="hidden" name="return" value=" " />'+
                                        '<input type="hidden" name="cancel_return" value=" " />'+
                                        '<input type="submit" name="submit" value="Add to cart" class="button" />'+
                                   ' </fieldset>'+
                               ' </form>'+
                            '</div>'+
                       ' </div>'+
                    '</figure>'+
               ' </div>'+
           ' </div>'+
        '</div>'+
   ' </div>'
        $('#topTurnpay').append(item);
    })
})

$.getJSON("http://localhost:5555/product/topendtime", (data) => {
    $.each(data, (index, items) => {
        var item =
        '<div class="col-md-4 top_brand_left" style="padding-top: 20px">'+
        '<div class="hover14 column">'+
            '<div class="agile_top_brand_left_grid">'+
                '<div class="agile_top_brand_left_grid_pos">'+
                    '<img src="images/offer.png" alt=" " class="img-responsive" />'+
                '</div>'+
                '<div class="agile_top_brand_left_grid1">'+
                    '<figure>'+
                        '<div class="snipcart-item block">'+
                            '<div class="snipcart-thumb">'+
                                '<a href="products.html">'+
                                    '<img title=" " alt=" " src="images/4.png" />'+
                                '</a>'+
                                '<p>Sampann-toor-dal</p>'+
                                '<div class="stars">'+
                                   ' <i class="fa fa-star blue-star" aria-hidden="true"></i>'+
                                    '<i class="fa fa-star blue-star" aria-hidden="true"></i>'+
                                    '<i class="fa fa-star blue-star" aria-hidden="true"></i>'+
                                    '<i class="fa fa-star blue-star" aria-hidden="true"></i>'+
                                    '<i class="fa fa-star gray-star" aria-hidden="true"></i>'+
                                '</div>'+
                               ' <h4>$35.99'+
                                   ' <span>$55.00</span>'+
                               ' </h4>'+
                           ' </div>'+
                            '<div class="snipcart-details top_brand_home_details">'+
                                '<form action="#" method="post">'+
                                   ' <fieldset>'+
                                        '<input type="hidden" name="cmd" value="_cart" />'+
                                       ' <input type="hidden" name="add" value="1" />'+
                                        '<input type="hidden" name="business" value=" " />'+
                                        '<input type="hidden" name="item_name" value="Fortune Sunflower Oil" />'+
                                       ' <input type="hidden" name="amount" value="35.99" />'+
                                        '<input type="hidden" name="discount_amount" value="1.00" />'+
                                        '<input type="hidden" name="currency_code" value="USD" />'+
                                        '<input type="hidden" name="return" value=" " />'+
                                        '<input type="hidden" name="cancel_return" value=" " />'+
                                        '<input type="submit" name="submit" value="Add to cart" class="button" />'+
                                   ' </fieldset>'+
                               ' </form>'+
                            '</div>'+
                       ' </div>'+
                    '</figure>'+
               ' </div>'+
           ' </div>'+
        '</div>'+
   ' </div>'
        $('#topEndtime').append(item);
    })
})

// $('a').on('click', (e) => {
//     e.preventDefault();
//     var pageref = $(this).attr('href');
//     console.log('a', pageref);
//     callPage(pageref)
// })

// function callPage(pageRefInput) {
//     console.log('aaaaaaaa', pageRefInput)
//     $.ajax({
//         url: pageRefInput,
//         type: 'GET',
//         dataType: 'text/html',
//         success: (res) => {
//             $('#pageload').html(res);
//         },
//         error: (err) => {
//             console.log(err);
//         }
//     })
// }
