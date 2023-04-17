export default (() => {
    let buttons = document.querySelectorAll('.button');
    let current = document.querySelector('.current-operation input');
    let last = current.value[current.value.length-1];

    function addToOperation(button){
        if(current.value == 0){
            current.value = button.dataset.value;
        }
        else{
            current.value += button.dataset.value;
        }
    };

    function clear(){
        current.value = 0;
    };

    function correct(){
        current.value -= last;
    }

    function equal(){
        eval.current.value;
    }

    buttons.forEach((button)=>{
        switch(button.dataset.value){
            case 'C': clear;
            case 'ER': correct;
            case '=': equal; 
        }
        button.addEventListener("click", () =>{
            addToOperation(button);
            console.log(button.dataset.value);
        });
    })


  
})();