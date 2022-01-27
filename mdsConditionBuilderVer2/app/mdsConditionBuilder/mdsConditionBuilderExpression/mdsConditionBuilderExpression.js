(function (angular) {
    'use strict';

    angular
        .module('myApp')
        .component('mdsConditionBuilderExpression', {
            templateUrl: 'mdsConditionBuilder/mdsConditionBuilderExpression/mdsConditionBuilderExpression.html',
            controller: mdsConditionBuilderExpressionCtrl,
            bindings: {
                rule: '=',
                onDelete: '&',
            },
        })
    ;

    mdsConditionBuilderExpressionCtrl.$inject = ['$mdDialog'];
    function mdsConditionBuilderExpressionCtrl($mdDialog) {
        var $ctrl = this;
    }
})(angular);
