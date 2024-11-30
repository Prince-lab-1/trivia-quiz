var btn = document.getElementById('btn');

var bt = btn.innerHTML;

var btn1 = document.querySelectorAll('button[name="btn1"]');

console.log(btn1);

// btn1.forEach(button => {
//     button.addEventListener('click',()=>{
//         if (button.innerHTML == 'xxx') {
//             button.style.color ='green';
//             console.log('worked');
//         }else{
//             button.style.color ='red'; 
//         }
//     });
// });
button.forEach(butt => {
    butt.addEventListener('click',()=>{
        if(but.innerHTML == "xxx"){
            button.style.color= "red";
        }
    })

});