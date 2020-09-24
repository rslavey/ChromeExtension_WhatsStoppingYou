chrome.storage.sync.get([
    'type',
], function (items) {
    if (items.type == 'leo') {
        var elem = document.createElement("img");
        var url = chrome.runtime.getURL('awesome.gif');
        elem.setAttribute("src", url);
        document.getElementsByClassName("js-yearly-contributions")[0].innerHTML = '';
        document.getElementsByClassName("js-yearly-contributions")[0].appendChild(elem);
    }
    else {
        var c, l, i = 0, cc = 0;
        c = [{ f: "#ebedf0", w: 20 }, { f: "#9be9a8", w: 20 }, { f: "#40c463", w: 20 }, { f: "#30a14e", w: 20 }, { f: "#216e39", w: 20 }];
        l = document.getElementsByClassName("day");
        for (i = 0; i < l.length; ++i) {
            var ii = 0, sum = 0, r = Math.floor(Math.random() * 100);
            for (ii = 0; ii < c.length; ii++) {
                sum += c[ii].w;
                if (r <= sum) {
                    l[i].setAttribute("fill", c[ii].f);
                    if (ii > 0) cc++;
                    break;
                }
            }
        }
        var cs = document.getElementsByClassName("js-yearly-contributions")[0].children[0].children[1];
        if (cs) cs.textContent = cc + " contributions in the last year";
    }
});


