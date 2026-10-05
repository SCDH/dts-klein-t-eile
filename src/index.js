//import 'nunjucks/browser/nunjucks.min.js';
import nunjucks from 'nunjucks';
import { parse } from 'uri-template';

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
