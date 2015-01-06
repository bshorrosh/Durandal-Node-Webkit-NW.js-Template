
window.gui = require('nw.gui');

//declare a new object to use with node-modules
window.requireNode = window.require;

delete window.require;

window.requireNode.version = process.versions.node;

delete process.versions.node;

var mainAppWin = window.gui.Window.get();

mainAppWin.on(' close', function () {

    this.close(true);

});


onload = function () {

        mainAppWin.show();

};