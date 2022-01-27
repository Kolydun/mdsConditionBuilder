(function (angular) {
    'use strict';

    angular
        .module('myApp')
        .component('mdsConditionBuilder', {
            templateUrl: 'mdsConditionBuilder/mdsConditionBuilder.html',
            controller: mdsConditionBuilderCtrl,
            bindings: {
                rule: '=',
            },
        })
    ;

    mdsConditionBuilderCtrl.$inject = ['$mdDialog'];
    function mdsConditionBuilderCtrl($mdDialog) {
        var $ctrl = this;

        if (!$ctrl.rule) {
            $ctrl.rule = {
                "type": "group",
                "operator": "AND",
                "rules": [],
            };
        } else if (typeof $ctrl.rule === 'string') {
            $ctrl.rule = {
                "type": "group",
                "operator": "AND",
                "rules": [{
                    "type": "expression",
                    "expression": $ctrl.rule
                }],
            };
        }
    }

})(angular);
