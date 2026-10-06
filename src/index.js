//import 'nunjucks/browser/nunjucks.min.js';
import nunjucks from 'nunjucks';
import { parse } from 'uri-template';
import 'htmx.org';

const loader = new nunjucks.WebLoader('/templates');

const env = new nunjucks.Environment(loader);

var collectionRequests = 0;

console.log("env", env);

env.addFilter('setSelf', function() {
    var self = this;
    this.ctx.self = function() { return self }
})

env.addGlobal('getContext', function() {
    // In globalen Funktionen zeigt 'this' ebenfalls auf den aktuellen Kontext
    return this.ctx;
});

env.addGlobal('uriTemplate', function(template, parameters) {
    var tpl = parse(template);
    return tpl.expand(parameters);
});


env.addGlobal('toFragmentId', function(uri) {
    var segments = uri.split("/");
    return segments.pop();
});

env.addGlobal('collectionRequestNo', function() {
    collectionRequests++;
    return collectionRequests;
});

console.log(env);

// provide configured global numjucks object via window
window.nunjucks = env;


window.addEventListener('load', (event) => {
    const entryForm = document.getElementById("entry-form");
    entryForm.addEventListener("submit", function(ev) {
	ev.preventDefault();
	var uriForm = document.getElementById("entry-endpoint-uri");
	var uri = uriForm.value;
	console.log("entry endpoint form submit intercepted", uri);
	fetch(uri)
	    .then(response => {
		if (!response.ok) {
		    alert("request failed: " + uri);
		} else {
		    return response.json();
		}
	    })
	    .then(data => {
		var template = document.getElementById("collection-start").innerHTML;
		var target = document.getElementById("collection-container");
		var res = env.renderString(template, data);
		target.innerHTML = res;
		// fragments added by js must be processed by htmx
		htmx.process(target);
	    })
	    .catch(error => {
		alert(error);
	    });
    });
});

var entryEndpoint = undefined;
