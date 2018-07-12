$(document).ready(function(){
    //  business logic

    var input = 34

    function playPingPong(num){
        if((num % 3 === 0) && (num % 5 !== 0)){
            console.log('ping')
        }else if((num % 5 === 0) && (num % 3 !== 0)){
            console.log('pong')
        }else if(num % 15 === 0){
            console.log('ping-pong')
        }else{
            console.log(num)
        }
    }

    for(var index = 1; index <= input; index++){
        playPingPong(index)
    }
});