(function (angular) {
    'use strict';

    var mdsConditionBuilderCondition = angular.module('myApp');

    mdsConditionBuilderCondition.component('mdsConditionBuilderCondition', {

        replace: true,
        templateUrl: 'mdsConditionBuilder/mdsConditionBuilderCondition/mdsConditionBuilderCondition.html',
        bindings: {
            onDelete: '&',
            printCondition: '&',
            conditionRule: '=',
            rule: '=',
        },
        controller: function () {
            var $ctrl = this;
            $ctrl.operators = ['>', '<', '===', '==!', '&&'];


            $ctrl.condition = {
                type: 'condition',
                variable: $ctrl.variable,
                operator: $ctrl.operator,
                parameter: $ctrl.parameter,
            };

            // $ctrl.querySearch = (query) => {
            //     return query ? $ctrl.variables.filter($ctrl.createFilterFor(query)) : $ctrl.variables;
            // }

            // $ctrl.createFilterFor = (query) => {
            //     var lowercaseQuery = query.toLowerCase();
            //
            //     return function filterFn(variable) {
            //         return (variable.indexOf(lowercaseQuery) === 0);
            //     };
            // }
        }
    });
})(angular);