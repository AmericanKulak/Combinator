var arrays = [];

//Insert your arrays here;

var test = ["Session Creation"];
//var accounts = ["Retail: No Surcharge","F&B: No Surcharge","MOTO: No Surcharge","ECOM: No Surcharge"];
var accounts = ["Retail: No Surcharge", "ECOM: No Surcharge"];
//var amount = ["Amount: 5.00", "Amount: 0.00", "Amount: -5.00"];
var amount = ["Amount: 5.00"];
//var accountId = ["AccountId: None", "AccountId: Existing with Credit Card", "AccountId: Existing with Bank Account", "AccountId: Existing with Credit Card and Bank Account"];
var isSave = ["Is Save: On", "Is Save: Off"];
//var SendDate = ["Send Date: 3/3/2010", "Send Date: 3/3/2020", "Send Date: none"];
var SendDate = ["Send Date: 3/3/2020", "Send Date: none"];
//var PurchaseIdentifier = ["Purchase Identifier: Purchase123", "Purchase Identifier: none"];
//var PosAction = ["PosAction: none", "PosAction: Authorize", "PosAction: Refund", "PosAction: Balance", "PosAction: ASDFASDF"];
var PosAction = ["PosAction: Authorize", "PosAction: Refund", "PosAction: Balance"];
var PaymentMethods = ["PaymentMethods: creditcard,ach,giftcard", "PaymentMethods: ach,giftcard", "PaymentMethods: creditcard,giftcard", "PaymentMethods: creditcard,ach", "PaymentMethods: creditcard", "PaymentMethods: ach", "PaymentMethods: giftcard", "PaymentMethods: none", "PaymentMethods: ASDFASDF"]
var ImmediatePayment = ["Immediate Payment: On", "Immediate Payment: Off"];

arrays.push(test);
arrays.push(accounts);
arrays.push(amount);
arrays.push(isSave);
arrays.push(SendDate);
arrays.push(PosAction);
arrays.push(PaymentMethods);
arrays.push(ImmediatePayment);

//No code past this point.

var resultant = [];

function combine(firstArray, secondArrays)
{
	var first, second, result = [];

	if(typeof secondArrays === "undefined")
	{
		if(!firstArray instanceof Array || firstArray.length < 2 || !firstArray[0] instanceof Array || !firstArray[1] instanceof Array)
			throw new Error("Argument exception. 1");

		var one = firstArray.splice(0, 1);
		return combine(one[0], firstArray);
	}


	if(!firstArray instanceof Array || !secondArrays instanceof Array)
		throw new Error("Argument exception. 2");

	if(!(firstArray.length && secondArrays.length))
		throw new Error("Arrays have no length. 3");

	first = firstArray;

	if(secondArrays[0] instanceof Array && secondArrays.length >= 2)
	{
		var one = secondArrays.splice(0, 1);
		second = combine(one[0], secondArrays);
	}
	else
	{
		second = secondArrays[0];
	}

	for (var i = 0; i < first.length; i++) {
		for (var j = 0; j < second.length; j++) {
			result.push(first[i] + " - " + second[j]);
		};
	};

	return result;
}

var total = 1;
for (var k = 0; k < arrays.length; k++) {
	total = total * arrays[k].length;
};
//console.log(total);

resultant = combine(arrays);

console.log(resultant);
console.log(resultant.length);
