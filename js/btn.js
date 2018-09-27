//const button = document.getElementById('button');
//const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];

function changeBackground(){
    document.body.style.background = rainbow[Math.floor(7 * Math.random())];
}
function changeBackground3(){
    document.body.style.background = 'red';
    
    return 'red';
}
    
function changeBackground2(){
        document.body.style.background = 'green';
        return 'green'
	
}

//button.addEventListener('click', changeBackground);