//import 'nunjucks/browser/nunjucks.min.js';
import nunjucks from 'nunjucks';

const loader = new nunjucks.WebLoader('/templates');

const env = new nunjucks.Environment(loader);

console.log("env", env);

env.addFilter('setSelf', function() {
    var self = this;
    this.ctx.self = function() { return self }
})

env.addGlobal('getContext', function() {
    // In globalen Funktionen zeigt 'this' ebenfalls auf den aktuellen Kontext
    return this.ctx;
});

// provide configured global numjucks object via window
window.nunjucks = env;
