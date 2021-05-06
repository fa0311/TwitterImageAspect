setInterval(function() {
    let images = $(".css-1dbjc4n.r-1bs4hfb.r-1867qdf.r-1phboty.r-rs99b7.r-1s2bzr4.r-1ny4l3l.r-1udh08x.r-o7ynqc.r-6416eg .r-1adg3ll.r-13qz1uu");
    images.each(function(key, value) {
        let image = images.eq(key);
        if (image.parent().find(".css-1dbjc4n.r-18u37iz.r-1pi2tsx.r-13qz1uu").length == 0) {
            image.css("padding-bottom", "132%")
        }
    });
}, 500);