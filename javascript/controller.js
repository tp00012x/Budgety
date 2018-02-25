import $ from 'jquery';
import UICtrl from 'UIController';
import BudgetCtrl from 'BudgetController'

export default (() => {

    const setupEventListeners = function () {

        const DOM = UICtrl.getDomStrings();

        UICtrl.displayBudget({
            budget: 0,
            totalInc: 0,
            totalExp: 0,
            percentage: -1,
        });

        $(DOM.inputButton).on('click', ctrlAddItem);

        $(DOM.container).on('click', ctrlDeleteItem);
    };

    const updateBudget = function () {

        BudgetCtrl.calculateBudget();

        const budget = BudgetCtrl.getBudget();

        UICtrl.displayBudget(budget);

    };

    const ctrlAddItem = function()  {

        const input = UICtrl.getInput();

        if (input.description !== '' && input.value > 0) {
            const newItem = BudgetCtrl.addItem(input.type, input.description, input.value);

            UICtrl.addListItem(newItem, input.type);
            UICtrl.clearFields();

            updateBudget();

            BudgetCtrl.calculateBudget();

            BudgetCtrl.testing();
        }

    };

    const ctrlDeleteItem = function (event) {

        let itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if(itemID) {
            let splitID = itemID.split('-');
            let type = splitID[0];
            let ID = parseInt(splitID[1]);

            BudgetCtrl.deleteItem(type, ID);

            UICtrl.deleteListItem(itemID);

            updateBudget();
        }
    };

    setupEventListeners();
})();
