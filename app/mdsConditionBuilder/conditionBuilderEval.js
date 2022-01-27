(function (angular) {
    'use strict';

    angular
        .module('myApp')
        .service('conditionBuilderEval', conditionBuilderEval)
    ;

    conditionBuilderEval.$inject = [
    ];

    function conditionBuilderEval(
    ) {
        const self = this;
        this.evalByScope = (conditionRule, scope, varialbes) => {
            switch (conditionRule.type) {
                case 'expression':
                    return scope.$eval(conditionRule.expression, varialbes);
                case 'group':
                    if (conditionRule.operator === 'AND') {
                        const falseConditionPosition = conditionRule.rules.findIndex(rule => !self.evalByScope(rule, scope, varialbes));
                        return falseConditionPosition === -1;
                    } else {
                        const trueConditionPosition = conditionRule.rules.findIndex(rule => self.evalByScope(rule, scope, varialbes));
                        return trueConditionPosition !== -1;
                    }
            }
        }

    }
})(angular);
