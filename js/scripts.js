$(document).ready(function(){

    //  business logic

    var input = 34

    function playPingPong(num){
        if((num % 3 === 0) && (num % 5 !== 0)){
            $('#results').before('<div class="m-3"><span class="pl-5 pr-5 pb-1 pt-1 bg-primary resultsP" id="results">Ping</span></div>')
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

    $('.playUser').click(function(){
        $('#userInputArea').show()
        // var input = 

    });


});

