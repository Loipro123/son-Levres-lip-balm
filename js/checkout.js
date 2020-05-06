var price = document.getElementById("price");
var change = document.getElementById("change");
var subTotal = document.getElementById("subTotal");
var sale = document.getElementById("sale");
var total = document.getElementById("total");
var coupon = document.getElementById("coupon");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var tableTotal = document.getElementById("tableTotal");
var applyCoupon = document.getElementById("applyCoupon");
var salebox = document.getElementById("salebox");
var priceSale = 0;
var apply =false;

function numberWithCommas(x) {
     x = x.toString();
     var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
         x = x.replace(pattern, "$1,$2");
     return x;
 }
 function removeComma(x) {
   return parseInt(x.replace(/,/g, ''));
 }
function updatValueM() {
  if((parseInt(change.value)-1)===0){
    minus.disabled = true; 
  }
  tableTotal.innerHTML = numberWithCommas((parseInt(change.value)-1) * 699000);
  subTotal.innerHTML = numberWithCommas((parseInt(change.value)-1) * 699000);
  sale.innerHTML = numberWithCommas(0.25*((parseInt(change.value)-1) * 699000));
  if(apply){
   priceSale = 0.25*((parseInt(change.value)-1) * 699000);
  }else{
    priceSale = 0;
  }
  total.innerHTML = numberWithCommas((parseInt(change.value)-1) * 699000 - priceSale);
  
}
function updatValueP() {
 if((parseInt(change.value)+1)>0){
    minus.disabled = false; 
  }
  tableTotal.innerHTML = numberWithCommas((parseInt(change.value)+1) * 699000);
  subTotal.innerHTML = numberWithCommas((parseInt(change.value)+1) * 699000);
  sale.innerHTML = numberWithCommas(0.25*((parseInt(change.value)+1) * 699000));
  if(apply){
   priceSale = 0.25*((parseInt(change.value)+1) * 699000);
  }else{
    priceSale = 0;
  }
 
  total.innerHTML = numberWithCommas((parseInt(change.value)+1) * 699000 - priceSale) ;

}
minus.addEventListener("click",updatValueM);
plus.addEventListener("click",updatValueP);
applyCoupon.addEventListener("click",function() {
  if(coupon.value.toLowerCase().trim()==="ngoaingu" && apply===true){
    alert("You already apply this coupon!")
  }else if(coupon.value.toLowerCase().trim()==="ngoaingu" && apply===false){
   sale.innerHTML = numberWithCommas(0.25*((parseInt(change.value)) * 699000));
   priceSale = (parseInt(change.value) * 699000)*0.25;
   total.innerHTML = numberWithCommas((parseInt(change.value)) * 699000 - priceSale) ;
   apply = true;
   salebox.style.display="block";
  }else{
    alert("This coupon is not exist");
  }
  coupon.value="";
})