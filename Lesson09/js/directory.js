//console.log(data);

function getData() {
    var businessesList = data.businesses;
    //console.log(businesses);
    $.each(businessesList, function(i, val){
        var imageurl = val.imageurl;
        console.log(imageurl);

        var title = val.title;
        console.log(title);

        var author = val.author;
        console.log(author);

        var blurb = val.blurb;
        console.log(blurb);

        $('.grid').append();
    });
}
getData();