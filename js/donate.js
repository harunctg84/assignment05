const donateBtn = document.getElementById('donate-btn');
donateBtn.addEventListener('click', function(){
    const donateAmountElement = parseFloat(document.getElementById('donate-amount').value);
    alert(" sucessfully Donate ")
    if(donateAmountElement <=0 || isNaN(donateAmountElement)){
       document.getElementById('error-ms').classList.remove('hidden');
       return;
        
    }
   const balance = parseFloat(document.getElementById('balance').innerText)
   
   const totalBlance = donateAmountElement + balance;
  
   document.getElementById('balance').innerText = totalBlance;

   const beforeBlance = parseFloat(document.getElementById('before-balance').innerText);
   
   const afterBalance = beforeBlance - donateAmountElement;
   document.getElementById('before-balance').innerText = afterBalance;

   
   
 });

// history btn toggule
const historyBtn = document.getElementById('history-btn');
const donationBtn = document.getElementById('donation-btn');
historyBtn.addEventListener('click', function(){
    console.log("history btn")

    historyBtn.classList.add('bg-lime-300','text-white');
    donationBtn.classList.remove('bg-lime-300')
    document.getElementById('card').classList.add('hidden')
    document.getElementById('history-section').classList.remove('hidden')
    
    

});
// Donatin BTN toggule





document.getElementById('blog-page').addEventListener('click', function() {
    window.location.href = "./blog.html"; 
});





   