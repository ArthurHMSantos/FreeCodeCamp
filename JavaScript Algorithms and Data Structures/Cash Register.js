function checkCashRegister(price, cash, cid) {
    var changeDue = cash - price;
    var totalCID = 0;
    var change = [];

    // Create an object to store the value of each currency unit
    var currencyValues = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };

    // Calculate the total cash in drawer
    for (var i = 0; i < cid.length; i++) {
        totalCID += cid[i][1];
    }

    // Check if cash in drawer is less than change due
    if (totalCID < changeDue) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }

    // Check if cash in drawer is equal to change due
    if (totalCID === changeDue) {
        return {status: "CLOSED", change: cid};
    }

    // Iterate through the currency units in descending order
    for (var i = cid.length - 1; i >= 0; i--) {
        var currencyUnit = cid[i][0];
        var currencyValue = currencyValues[currencyUnit];
        var currencyCount = cid[i][1] / currencyValue;

        // If the current currency unit can be used to give change
        if (changeDue >= currencyValue) {
            var amount = 0;

            // Check if there are enough currency units to give change
            while (changeDue >= currencyValue && currencyCount > 0) {
                amount += currencyValue;
                changeDue -= currencyValue;
                changeDue = Math.round(changeDue * 100) / 100;
                currencyCount--;
            }

            // Add the currency unit and amount to the change array
            change.push([currencyUnit, amount]);
        }
    }

    // Check if exact change can be given
    if (changeDue > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    } else {
        return {status: "OPEN", change: change};
    }
}
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);