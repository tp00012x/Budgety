import $ from 'jquery';
import UICtrl from 'UIController';
import BudgetCtrl from 'BudgetController'

export default (() => {
    const DOMstrings = UICtrl.getDomStrings();

    const setupEventListeners = function () {

        $(DOMstrings.inputButton).on('click', ctrlAddItem);
    };

    const ctrlAddItem = function()  {

        const input = UICtrl.getInput();
        const newItem = BudgetCtrl.addItem(input.type, input.description, input.value);

        UICtrl.addListItem(newItem, input.type);
        BudgetCtrl.testing();
    };

    setupEventListeners();
})();
