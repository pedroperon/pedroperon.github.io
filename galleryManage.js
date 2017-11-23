var openGallery = function () {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    var galleryName = this.id;

    // var jsonResponse = Get('img/' + galleryName + '.json');

    var jsonResponse = getJSON('img/' + galleryName + '.json', function (err, data) {
        if (err !== null) {
            alert('Something went wrong: ' + err);
        } else {
            // alert('Your query count: ' + data.count);

            var jsonGallery = JSON.parse(data);

            //   constroi array com itens da galeria
            var galleryItems = [];
            for (var i = 0; i < jsonGallery.images.length; i++) {
                galleryItems.push(
                    {
                        src: '' + jsonGallery.images[i].url,
                        w: jsonGallery.images[i].width,
                        h: jsonGallery.images[i].height
                    });
            }

            // define options (if needed)
            var options = {
                // optionName: 'option value'
                // for example:
                index: 0 // start at first slide
            };
            
            // Initializes and opens PhotoSwipe
            var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, galleryItems, options);
            gallery.init();
        }
    }
    );

    // // build items array
    // var items = [
    //     {
    //         src: 'img/portfolio/gente/pedroperon_gente-1.jpg',
    //         w: 1000,
    //         h: 667
    //     },
    //     {
    //         src: 'img/portfolio/gente/pedroperon_gente-2.jpg',
    //         w: 1000,
    //         h: 667
    //     }
    // ];

    // // define options (if needed)
    // var options = {
    //     // optionName: 'option value'
    //     // for example:
    //     index: 0 // start at first slide
    // };

    // // Initializes and opens PhotoSwipe
    // var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, galleryItems, options);
    // gallery.init();

    // If you don't want the link to actually 
    // redirect the browser to another page,
    // return false at the end of this block.
    return false;
};

var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    // so para testar: funciona com url remota, nao com caminho local. Por que?
    xhr.open(
        'GET',
        "img/galleryPeople.json",//"http://soundcloud.com/oembed?url=http%3A//soundcloud.com/forss/flickermood&format=json",
        true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};