$(document).ready(function(){

    //  business logic
    function playPingPong(num){
        if((num % 3 === 0) && (num % 5 !== 0)){
            $('#results').before('<div class="m-3"><span class="pl-5 pr-5 pb-1 pt-1 bg-primary resultsP">Ping</span></div>')
            console.log('ping')
        }else if((num % 5 === 0) && (num % 3 !== 0)){
            $('#results').before('<div class="m-3"><span class="pl-5 pr-5 pb-1 pt-1 bg-success resultsP">Pong</span></div>')
            console.log('pong')
        }else if(num % 15 === 0){
            $('#results').before('<div class="m-3"><span class="pl-5 pr-5 pb-1 pt-1 bg-warning resultsP">Ping-Pong</span></div>')
            console.log('ping-pong')
        }else{
            $('#results').before('<div class="m-3"><span class="pl-5 pr-5 pb-1 pt-1 bg-secondary resultsP num">'+ num +'</span></div>')
            console.log(num)
        }
    }

    function addTotalPing(num){
            if ((num % 3 === 0) && (num % 5 !== 0)) {
                return 1
            } else if ((num % 5 === 0) && (num % 3 !== 0)) {
                return 1
            } else if (num % 15 === 0) {
                return 1
            } else {
                return 1
            }
    }



    // user logic

    $('.playUser').click(function(){
        $('#clickToPlay').addClass('animated slideOutDown');
        var wait = setTimeout(function(){
            $('#clickToPlay').addClass('hideButton');
        }, 500);
        $('#playBtn').addClass('animated zoomIn flipInX clickToPlay')
        $('#userInputArea').addClass('animated slideInDown')
        // var tid = setTimeout($('#userInputArea').show(), 10000);
        $('#userInputArea').show()
        $('#playBtn').removeClass('hideButton')
    });

    $('#playBtn').click(function(){
        var input = parseInt($('#userInputArea').val())
        console.log(input)
        for (var index = 1; index <= input; index++) {
            playPingPong(index)
        }
        if(input > 0){
            $('#resultsSummary').addClass('animated slide');
            $('#resultsSummary').show();

            totalPing(input)
            $('#reload').show()
        }else{
            alert('Please Enter A Valid Number!!!!')
        }
    });

    $('#playAgain').click(function () {
        window.location.reload(true);
    })
});
