var a1 = document.querySelector('#box1');

// function f1(a){

// var res = '<ul>';

// for(i in a) 
// res+= '<li><b>' + i + '</b>:' + a[i] + '</li>';
// res+= '</ul>';
// document.write(res);

// }

// f1(box1);

a1.onclick = function(){
a1.innerHTML = 'school';
a1.className = 'test';
a1.style.color = 'lightblue';
a1.style.fontSize = '36px';
}

