import observable = require("data/observable");
import pages = require("ui/page");

export function pageLoaded(args: observable.EventData) {

    let page = <pages.Page>args.object;
    let myLayout = page.getViewById("layout");

    myLayout.bindingContext = {
        quote: "Cinderella story. Outta nowhere. A former greenskeeper, now, about to become the Masters champion.",
        image: "https://www.fillmurray.com/200/302"
    };

}