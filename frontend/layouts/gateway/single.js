
var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("id");

var showDetail = () => {
    $.getJSON("http://localhost:5555/product/" + c, (data) => {
    

        var item =
            '<h2>' + data[0].ProductName + '</h2>' +
            '<div class="rating1">' +
            '<span class="starRating">' +
            '<input id="rating5" type="radio" name="rating" value="5">' +
            '<label for="rating5">5</label>' +
            '<input id="rating4" type="radio" name="rating" value="4">' +
            '<label for="rating4">4</label>' +
            '<input id="rating3" type="radio" name="rating" value="3" checked="">' +
            '<label for="rating3">3</label> ' +
            '<input id="rating2" type="radio" name="rating" value="2">' +
            '<label for="rating2">2</label>' +
            '<input id="rating1" type="radio" name="rating" value="1">' +
            '<label for="rating1">1</label>' +
            '</span>' +
            '</div>' +
            '  <div class="w3agile_description">' +
            '<h4>Description :</h4>' +
            '</div>' +
            '<div class="snipcart-item block">' +
            '<div class="snipcart-thumb agileinfo_single_right_snipcart">' +
            '<h4 class="m-sing">' + data[0].PricePay + '<span>' + data[0].PriceNow + '</span></h4>' +
            '</div>' +
            '<div class="snipcart-details agileinfo_single_right_details">' +
            '</div>' +
            '</div>'
        $('#loadDetail').append(item);
    })
}

showDetail();


alert(c);
