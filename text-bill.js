
//Events added to the page(s)
document.addEventListener('DOMContentLoaded', function () {
   // get a reference to the textbox where the bill type is to be entered
   var billTypeText = document.querySelector('.billTypeText');
   //get a reference to the add button
   var addToBillBtn = document.querySelector('.addToBillBtn');
   var callTotalOne = document.querySelector('.callTotalOne');
   var smsTotalOne = document.querySelector('.smsTotalOne');
   var totalOne = document.querySelector('.totalOne');
   

   var factRef = Factory();
   window.addEventListener('load', function () {
      var allData = {
         call: 0.00.toFixed(2),
         sms: 0.00.toFixed(2),
         total: 0.00.toFixed(2)
      }
      callTotalOne.innerHTML = allData.call
      smsTotalOne.innerHTML = allData.sms
      totalOne.innerHTML = allData.total

   });


   addToBillBtn.addEventListener('click', function () {

      factRef.calculations(billTypeText.value);
      var allData = {
         call: factRef.getCalls(),
         sms: factRef.getSms(),
         total: factRef.getTotals()
      };
      callTotalOne.innerHTML = allData.call.toFixed(2)
      smsTotalOne.innerHTML = allData.sms.toFixed(2)
      totalOne.innerHTML = allData.total.toFixed(2)
   

      var totals = factRef.getTotals();
   
      if (totals >= 30 && totals < 50) { totalOne.classList.add("warning"); }
      else if (totals >= 50) { totalOne.classList.add("danger"); }
   });
});


