document.getElementById("depo-button").addEventListener("click",function(){
   const amountBox= document.getElementById("amount-box");
  const amountstring=amountBox.value;
  const newamount=parseFloat(amountstring);

//   console.log(typeof amount);

  const depoAmount=document.getElementById('depo-amount');
  const checkAmountstring= depoAmount.innerText;
   const precheckAmount=parseFloat(checkAmountstring);
//   console.log(typeof checkAmount);

   depoAmount.innerText=newamount+precheckAmount;

   const totalTaka= document.getElementById('total-taka');
   const pretotalString=totalTaka.innerText;
   const pretotal=parseFloat(pretotalString);
   const newTotal= pretotal+newamount;

    totalTaka.innerText=newTotal;
    amountBox.value=''
})

document.getElementById("withdraw-button").addEventListener('click',function(){
   // console.log('button clicked')
 const withDrawBox= document.getElementById('withdraw-box');
 const withDrawstring=withDrawBox.value;
 const newWithdraw=parseFloat(withDrawstring);
 console.log(newWithdraw);

const withdrawAmount=document.getElementById('withdraw-amount');
const wAmountstring= withdrawAmount.innerText;
const preAmount= parseFloat(wAmountstring);

const intotalWithdraw= newWithdraw+preAmount; 
     withdrawAmount.innerText=intotalWithdraw;

const totalBalance =document.getElementById('total-taka');
const preBalancestring= totalBalance.innerText;
const preBalance = parseFloat(preBalancestring);


const balanceTotal= preBalance - newWithdraw;
totalBalance.innerText=balanceTotal;

 withDrawBox.value=''


})
