const activateNavigation = (uri) => {
    var slot = document.getElementById("navigation");
    console.log("setting navigation", slot, uri);
    slot.setAttribute("title", uri);
    slot.setAttribute("hx-get", uri);
    // this needs htmx objects made available as window global variable:
    window.htmx.process(slot);
};

const showDocument = (uri) => {
    var slot = document.getElementById("document");
    console.log("setting document", slot, uri);
    slot.src = uri;
};
