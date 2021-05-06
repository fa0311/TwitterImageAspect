setInterval(function() {
    let images = $(".css-1dbjc4n.r-1bs4hfb.r-1867qdf.r-1phboty.r-rs99b7.r-1s2bzr4.r-1ny4l3l.r-1udh08x.r-o7ynqc.r-6416eg .r-1adg3ll.r-13qz1uu");
    images.each(function(key, value) {
        let image = images.eq(key);
        let parent = image.parent();
        if (parent.find("img").attr("loaded") === "true") {
            return true;
        }
        if (parent.find(".css-1dbjc4n.r-18u37iz.r-1pi2tsx.r-13qz1uu").length !== 0) {
            parent.find("img").attr("loaded", "true");
            return true;
        }
        image.css("padding-bottom", "100%");
        if (parent.find("img").height() === undefined || parent.find("img").width() === undefined || parent.find("img").height() === 0 || parent.find("img").width() === 0) {
            return true;
        }
        parent.find("img").attr("loaded", "true");
        if (parent.find("img").height() / 9 > parent.find("img").width() / 16) {
            image.css("padding-bottom", "100%");
            if (parent.find("img").height() / 4 > parent.find("img").width() / 3) {
                image.css("padding-bottom", "132%");
            } else {
                image.css("padding-bottom", parent.find("img").height().toString() + "px");
            }
        } else {
            image.css("padding-bottom", "56.25%");
        }
        parent.find(".css-1dbjc4n.r-1p0dtai.r-1mlwlqe.r-1d2f490.r-1udh08x.r-u8s1d.r-zchlnj.r-ipm5af.r-417010").attr("style", "");
    });
}, 500);