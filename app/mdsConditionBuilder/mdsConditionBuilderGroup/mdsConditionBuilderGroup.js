(function (angular) {
    'use strict';

    angular
        .module('myApp')
        .component('mdsConditionBuilderGroup', {
            templateUrl: 'mdsConditionBuilder/mdsConditionBuilderGroup/mdsConditionBuilderGroup.html',
            controller: mdsConditionBuilderGroupCtrl,
            bindings: {
                rule: '=',
                onDelete: '&',
                isRoot: '=',
            },
        });

    mdsConditionBuilderGroupCtrl.$inject = ['$mdDialog'];

    function mdsConditionBuilderGroupCtrl($mdDialog) {
        var $ctrl = this;

        $ctrl.addExpression = () => {
            $ctrl.rule.rules.push({
                type: 'expression',
            })
        }
        $ctrl.addGroup = () => {
            $ctrl.rule.rules.push({
                type: 'group',
                operator: "AND",
                rules: []
            })
        }
        $ctrl.deleteRule = (index) => {
            $ctrl.rule.rules.splice(index, 1);
        }
        $ctrl.addCondition = () => {
            $ctrl.rule.rules.push({
                type: 'condition',
                variable: '',
                operator: '',
                parameter: '',
            })
        }

        $ctrl.changeOperator = (operator) => {
            $ctrl.rule.operator = operator;
        }
    }
})(angular);
