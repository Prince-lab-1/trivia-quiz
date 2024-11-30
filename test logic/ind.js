 var btns = document.querySelectorAll('button[name="btns"]');

 console.log(btns);

 btns.forEach(btn => {
      btn.addEventListener('click', () =>{
            if (btn == event.target) {
                  btns.forEach(button => {
                        console.log(event.target);
                        button.disabled="true";
                  });
            }
      })
 });