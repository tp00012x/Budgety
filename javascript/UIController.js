import $ from "jquery";

export default (() =>{

    const DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income',
        expenseContainer: '.expenses'

    };

    return {
        getInput: function () {
            return {
                description: $(DOMstrings.inputDescription).val(),
                value: $(DOMstrings.inputValue).val(),
                type: $(DOMstrings.inputType).val()
            }
        },
        addListItem: function (obj, type) {
            let html, newHtml, element;

            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">+ %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if (type === 'exp') {
                element = DOMstrings.expenseContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            $(element).append(newHtml);
        },

        getDomStrings: function () {
            return DOMstrings
        }
    };
})();
