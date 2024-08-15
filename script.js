

function calculaterTip(){
    
    // get the input type values
    const Billamount = parseFloat(document.getElementById('billamount').value);
    const Tippercentage = parseFloat( document.getElementById('percentage').value) ;

    // calculate the Tip and Amount
    const Tipamount = Billamount * (Tippercentage/100) ;
    const Totalamount = Billamount + Tipamount ;

    // display the Results
    document.getElementById('tip-amout').textContent = '$' + Tipamount.toFixed(2);
    document.getElementById('total-amout').textContent = '$' + Totalamount.toFixed(2);



}