
// git link
// https://github.com/Md-Sajib-Hosen/assignment

// problem-1(kilometerToMeter)

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    if (kilometer < 0) {

        return "distance can't be negative";
    }

    else {
        return meter;
    }
}



//  probelm-2(budgetCalculator)

function budgetCalculator(watch, phone, laptop) {

    var totalValue = watch * 50 + phone * 100 + laptop * 500;

    if (watch, phone, laptop < 0) {
        return "product can't be negative"
    }

    return totalValue;

}



// problem-3(hotelCost)

function hotelCost(days) {

    var hotelRate = 100;

    var hotelCharge = hotelRate * 10;

    if (days > 10 && days <= 20) {
        return hotelCharge + (days - 10) * 80;

    }
    if (days > 20) {
        return hotelCharge + (10 * 80) + (days - 20) * 50;

    }
    if (days < 0) {
        return 'days can not be negative'
    }

    else {
        return days * 100;
    }
}



// problem-4(megaFriend)

var frindName = ["sakib", "arif hussain", "sajib islam",];
var longestName = [];

function megaFriend(name) {
    var nameLength = 0;
    for (var i = 0; i < frindName.length; i++) {
        if (nameLength < frindName[i].length) {
            nameLength = frindName[i].length;
        }
    }
    for (var j = 0; j < frindName.length; j++) {
        if (frindName[j].length == nameLength) {
            longestName.push(frindName[j]);
        }
    }
    if (longestName.length == 1) {
        return longestName[0];
    }

    else {
        return longestName;
    }
}
