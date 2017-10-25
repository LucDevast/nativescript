"use strict";
function pageLoaded(args) {
    var page = args.object;
    var myLayout = page.getViewById("layout");
    myLayout.bindingContext = {
        quote: "Cinderella story. Outta nowhere. A former greenskeeper, now, about to become the Masters champion.",
        image: "https://www.fillmurray.com/200/302"
    };
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=main-page.js.map