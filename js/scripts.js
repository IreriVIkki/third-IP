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

    function totalPing(num){
            var totalPing = 0
            var totalPong = 0
            var totalNull = 0
            var totalPingPong = 0

        for (var index = 1; index <= num; index++) {
            if ((num % 3 === 0) && (num % 5 !== 0)) {
                for (var index = 1; index <= num; index++) {
                    totalPing += 1
                }
                $('.totalResults1').text(totalPing)
                console.log(totalPing)
            } else if ((num % 5 === 0) && (num % 3 !== 0)) {
                for (var index = 1; index <= num; index++) {
                    totalPong += 1
                }
                $('.totalResults2').text(totalPong)
                console.log(totalPong)
            } else if (num % 15 === 0) {
                for (var index = 1; index <= num; index++) {
                    totalPingPong += 1
                }
                $('.totalResults3').text(totalPingPong)
                console.log(totalPingPong)
            } else {
                for (var index = 1; index <= num; index++) {
                    totalNull += 1
                }
                $('.totalResults4').text(totalNull)
                console.log(totalNull)
            }
        }


    }



    // user logic

    $('.playUser').click(function(){
        $('#clickToPlay').hide()
        var tid = setTimeout($('#userInputArea').show(), 10000);
        // $('#userInputArea').show()
        $('#playBtn').removeClass('hideButton')
    });

    $('#playBtn').click(function(){
        var input = parseInt($('#userInputArea').val())
        console.log(input)
        for (var index = 1; index <= input; index++) {
            playPingPong(index)
        }
        if(input > 0){
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
