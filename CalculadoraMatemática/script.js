
var res = document.getElementById('result')

function insert(num){
    
    
     document.getElementById('result').innerHTML += num;
    
}
function limpar(){

     res.innerHTML = ''

}

function delet(){
     var res = document.getElementById('result').innerHTML

     document.getElementById('result').innerHTML = res.substring(0, res.length -1)
}

function calculatudo(){
     var res = document.getElementById('result').innerHTML

     if(res){
     document.getElementById('result').innerHTML = eval(res)
}
else{
     alert('Nenhum número á calcular...')
}
}