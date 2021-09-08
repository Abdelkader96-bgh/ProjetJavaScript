 let btn=document.getElementById('convertBtn');
   
let input1=document.getElementById('temp1'),
    input2=document.getElementById('temp2');

btn.addEventListener("click",function(e) {
      
      let unit1=document.querySelector('input[name="unit1"]:checked').value,
          unit2=document.querySelector('input[name="unit2"]:checked').value;
          temp2.value= convert(unit1,unit2)
         
   })

   function convert(unit1,unit2){

       let temp1=parseInt(input1.value),
       temp2=parseInt(input2.value);

       if(unit1=="1" && unit2=="2"){
          return (temp1*1.8)+32
       }
       if(unit1=="2" && unit2=="1"){

           return ((temp1-32)/1.8).toFixed(2)
       }
       alert('Unité invalides')
   }

