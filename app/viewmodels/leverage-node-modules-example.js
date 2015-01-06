define([],

    function () {

        var title = 'Home';

        var vm = {

            activate: activate,
            attached: attached,
            title: title,
            UseUtilNodeModule: UseUtilNodeModule

        };

        return vm;


        function activate() {

        }

        function attached() {

            mainAppWin.focus();

        }

        function UseUtilNodeModule() {

            //Need to use the requireNode to reference node modules; see scripts/app/app.js

            var util = requireNode("util");

            var message = util.format('%s;%s', 'Great', ' I\'m ', 'using the "util" node module');

            alert(message)

        }

    });