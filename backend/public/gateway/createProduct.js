$('#frm').submit(function() {
    $(this).ajaxSubmit({
        beforeSubmit: function(formData, jqForm, options) {
            console.log(formData)
            console.log(jqForm)
            console.log(options)
            alert('Uploading...');
        },
        success: function showResponse(responseText, statusText, xhr, $form) {
            alert(responseText);
        }
    });
    
    return false;
});


$("#btnCreateProduct").on("click", () => {
    var _category = $("select[id = txtCategory]").val()
    var _product = $("#txtProduct").val()
    var _priceNow = $("#txtPriceNow").val()
    var _pricePay = $("#txtPricePay").val()
    var _priceCost = $("#txtCost").val()
    var _priceDetail = $("#txtDetail").val()
    var _imageFirst = $("#txtImage1").val()
    var _imageSecond = $("#txtImage2").val()
    var _image3rd = $("#txtImage3").val()
    
    var body = {
        ProductName: _product,
        PriceNow: _priceNow,
        PricePay: _pricePay,
        Cost: _priceCost,
        Detail: _priceDetail,
        category: _category
    }

    var img = {
        ImageFirst: _imageFirst.replace("C:\\fakepath\\", ""),
        ImageSecond: _imageSecond.replace("C:\\fakepath\\", ""),
        Image3rd: _image3rd.replace("C:\\fakepath\\", "")
    }
    
    $.ajax({
        url: 'http://localhost:5555/image',
        dataType: 'json',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(img)
    }).done((data) => {
        console.log(data)
    })

    $.ajax({
        url: 'http://localhost:5555/product/create',
        dataType: 'json',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(body)
    }).done((data) => {
        console.log(data)
    })
})