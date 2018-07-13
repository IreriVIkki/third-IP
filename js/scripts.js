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

        if ((num % 3 === 0) && (num % 5 !== 0)) {
            var totalPing = 0
            for (var index = 1; index <= num; index++) {
                totalPing += 1
            }
            return totalPing
        }else if ((num % 5 === 0) && (num % 3 !== 0)) {
            var totalPong = 0
            for (var index = 1; index <= num; index++) {
                totalPong += 1
            }
            return totalPong
        }else if (num % 15 === 0) {
            var totalPingPong = 0
            for (var index = 1; index <= num; index++) {
                totalPingPong += 1
            }
            return totalPingPong
        }else{
            var totalNull = 0
            for (var index = 1; index <= num; index++) {
                totalNull += 1
            }
            return totalNull
        }
    }



    // user logic

    $('.playUser').click(function(){
        $('#clickToPlay').hide()
        var tid = setTimeout($('#userInputArea').show(), 2000);
        // $('#userInputArea').show()
        $('#playBtn').removeClass('hideButton')
    });

    $('#playBtn').click(function(){
        var input = parseInt($('#userInputArea').val())
        console.log(input)
        for (var index = 1; index <= input; index++) {
            playPingPong(index)
        }
        $('#resultsSummary').show()
    });

});

// $(document).ready(function () {

//     //  business logic

//     var input = 34

//     function playPingPong(num) {
//         if ((num % 3 === 0) && (num % 5 !== 0)) {
//             $('#results').before('<div class="m-3"><span class="pl-5 pr-5 pb-1 pt-1 bg-primary resultsP">Ping</span></div>')
//             console.log('ping')
//         } else if ((num % 5 === 0) && (num % 3 !== 0)) {
//             $('#results').before('<div class="m-3"><span class="pl-5 pr-5 pb-1 pt-1 bg-success resultsP">Pong</span></div>')
//             console.log('pong')
//         } else if (num % 15 === 0) {
//             $('#results').before('<div class="m-3"><span class="pl-5 pr-5 pb-1 pt-1 bg-warning resultsP">Ping-Pong</span></div>')
//             console.log('ping-pong')
//         } else {
//             $('#results').before('<div class="m-3"><span class="pl-5 pr-5 pb-1 pt-1 bg-secondary resultsP num"></span></div>')
//             $('.num').text(num)
//             console.log(num)
//         }
//     }



//     for (var index = 1; index <= input; index++) {
//         playPingPong(index)
//     }

//     $('.playUser').click(function () {
//         $('#userInputArea').show()
//         // var input = 

//     });


// });


