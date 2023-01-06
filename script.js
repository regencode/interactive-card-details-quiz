
// input space ids

var $holderName = $("#cardholderNameInput");
var $cardNum = $("#cardNumInput");
var $expMonth = $("#MMinput");
var $expYear = $("#YYinput");
var $cvcNum = $("#CVCinput");
var $confirmButton = $("#confirmFormButton");

$confirmButton.click(function () {
    
    if (length($holderName.val) > 0){
        holderNameValid = true;
    } else {
        holderNameValid = false;
    }
    
    if (length($cardNum.val) === 16 && Number.isInteger($cvcNum.val) == true) {
        cardNumValid = true;
    } else {
        cardNumValid = false;
    }
    
    if (length($cvcNum.val) === 3 && Number.isInteger($cvcNum.val) == true){
        cvcNumValid = true;
    } else {
        cvcNumValid = false;
    }
});

