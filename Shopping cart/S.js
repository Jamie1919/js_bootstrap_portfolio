var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;



function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];

    display_all();

}

function remove_selection(x) {
    if (quantities[x] > 0) {
        console.log(x);
        quantities[x] = quantities[x] - 1;
        totals[x] = prices[x] * quantities[x];
        totalOrderAmt += prices[x];
    }
    display_all();
}




function displayTotal() {

    document.getElementById("total").innerHTML += "<br/><br/>Total order amount is R" + totalOrderAmt.toFixed(2);
}


function display_all() {



    var myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Remove</th>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='remove_selection(" + i + ")'>remove</button></td>";
    }

    myTable += "</table>";
    // myTable += "<br/><br/><p>Total: " + totalOrderAmt + "</p>";



    // document.write(myTable);
    document.getElementById("demo").innerHTML = myTable;


}

window.onload = function() {
        display_all();
    }
    //when the button is clicked
document.getElementById("submit").addEventListener("click", calculateIt);

function calculateIt() {

    //create some variables
    var myOperator;
    var returnValue;

    //get the operands
    var operand1 = document.getElementById("operand1").value;
    var operand2 = document.getElementById("operand2").value;

    //get the operand types
    var select1 = document.getElementById("operand1-type");
    var select2 = document.getElementById("operand2-type");

    var operand1type = select1.value;
    var operand2type = select2.value;

    //get the operator
    var radios = document.getElementsByName('operator');

    //convert the operands
    switch (operand1type) {
        case "string":
            operand1 = String(operand1);
            break;
        case "number":
            operand1 = Number(operand1);
            break;
    }

    switch (operand2type) {
        case "string":
            operand2 = String(operand2);
            break;
        case "number":
            operand2 = Number(operand2);
            break;
    }
    //loop through each possible operand value and find the checked one
    for (var i = 0, length = radios.length; i < length; i++) {

        if (radios[i].checked) {
            myOperator = radios[i].value;

            //do a different operation depending on which operator was selected
            switch (radios[i].value) {
                case "+":
                    returnValue = operand1 + operand2;
                    break;
                case "-":
                    returnValue = operand1 - operand2;
                    break;
                case "*":
                    returnValue = operand1 * operand2;
                    break;
                case "/":
                    returnValue = operand1 * operand2;
                    break;
                case "%":
                    returnValue = operand1 % operand2;
                    break;
                case "concat":
                    returnValue = operand1 + operand2;
                    myOperator = "+";
                    break;
                case "==":
                    returnValue = operand1 == operand2;
                    break;
                case "===":
                    returnValue = operand1 === operand2;
                    break;
                case "!=":
                    returnValue = operand1 != operand2;
                    break;
                case "!==":
                    returnValue = operand1 !== operand2;
                    break;
                case ">":
                    returnValue = operand1 > operand2;
                    break;
                case ">=":
                    returnValue = operand1 >= operand2;
                    break;
                case "<":
                    returnValue = operand1 < operand2;
                    break;
                case "<=":
                    returnValue = operand1 <= operand2;
                    break;
            }

            break;
        }
    }

    //display the operation

    if (typeof(operand1) === "string") {
        operand1 = '"' + operand1 + '"';
    }
    if (typeof(operand2) === "string") {
        operand2 = '"' + operand2 + '"';
    }
    document.getElementById("final-operation").innerHTML = operand1 + myOperator + operand2;

    //display the return value
    document.getElementById("result").innerHTML = returnValue;
};