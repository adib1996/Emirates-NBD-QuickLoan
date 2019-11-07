$(document).ready( function() {
  
    $('body').on("click", ".larg div h3", function(){
      if ($(this).children('span').hasClass('close')) {
        $(this).children('span').removeClass('close');
      }
      else {
        $(this).children('span').addClass('close');
      }
      $(this).parent().children('p').slideToggle(250);
    });
    
    $('body').on("click", "nav ul li a", function(){
      var title = $(this).data('title');
      $('.title').children('h2').html(title);
    });

    $('.myButton').on("click" , function (){
      trigger_2();
      trigger();
    });
  });

async function trigger(){
  $.ajax({
    type: "POST",
    beforeSend: function (xhr) {
      xhr.setRequestHeader ("Authorization", "Basic " + btoa('pa01demo05' + ":" + 'oRacle!2019?'));
    },
    url: keys.url,
    data: JSON.stringify(data),
    success: success,
    contentType : 'application/json'
  });
}

function success(data){
  console.log(data);
}

async function trigger_2(){
  $.ajax({
    type: "POST",
    beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', keys.NBD);
    },
    url: "https://api.emiratesnbdlab.com/transactionapi/transaction",
    data: JSON.stringify(data2),
    success: success,
    contentType : 'application/json'
  });
  return
}

let data2 = {
  "accountId": 1000000043,
  "balance": 253966.88,
  "balanceCreditDebitIndicator": "Credit",
  "balanceType": "ClosingAvailable",
  "bankId": 1007,
  "bankLocation": "string",
  "bookingDateTime": "2019-09-28T08:38:24.976Z",
  "counterPartyAccountId": 1000000066 ,
  "counterPartyBankId": 1010,
  "counterPartyBankLocation": "string",
  "currencyCode": "AED",
  "makerDate": "2019-09-28T08:38:24.976Z",
  "makerId": "1",
  "paymentId": 0,
  "paymentRefId": "string",
  "purpose": "string",
  "status": "string",
  "transactionAmount": 100,
  "transactionName": "string",
  "transactionReference": "string",
  "transactionType": "CREATION"
}

let data = {
  channel: "hackathonteam5",
  chaincode: "L1group5",
  method: "update",
  chaincodeVer: "v1",
  args: [
      "900"
  ],
  proposalWaitTime: 50000,
  transactionWaitTime: 60000
};