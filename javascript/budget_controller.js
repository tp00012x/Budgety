export default function budget() {

    const addDescription = function() {

        const button = document.querySelector(".add__btn");
        const descriptions = [
            {
                description: "Salary",
                amount: "+ 2,100.00"
            },
            {
                description: "Sold Car",
                amount: "+ 1,500.00"
            }
            ];

        descriptions.forEach(function (element) {
            document.querySelector(".item__description").innerHTML = element.description;
            // document.querySelector(".item__amount").innerHTML = element.amount;
            console.log(element.description);
            console.log(element.amount)

        });


        button.addEventListener("click", function () {

            // let description = document.querySelector(".add__description");
            // descriptions.push(description.value);
            // console.log(descriptions);
            // description.value = "";
        });
    };

    addDescription()

};