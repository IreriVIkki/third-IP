$(document).ready(function(){

    //  business logic
    function playPingPong(num){
        if((num % 3 === 0) && (num % 5 !== 0)){
            $('#results').before('<div class="m-3"><span class="pl-5 pr-5 pb-1 pt-1 bg-primary animated slideInDown anim-delay-2 resultsP">Ping</span></div>')
            console.log('ping')
        }else if((num % 5 === 0) && (num % 3 !== 0)){
            $('#results').before('<div class="m-3"><span class="pl-5 pr-5 pb-1 pt-1 anim-delay-2  bg-success animated slideInDown resultsP">Pong</span></div>')
            console.log('pong')
        }else if(num % 15 === 0){
            $('#results').before('<div class="m-3"><span class="pl-5 pr-5 pb-1 pt-1 anim-delay-2  bg-warning animated slideInDown resultsP">Ping-Pong</span></div>')
            console.log('ping-pong')
        }else{
            $('#results').before('<div class="m-3"><span class="pl-5 pr-5 animated anim-delay-2  slideInDown pb-1 pt-1 bg-secondary resultsP num">' + num + '</span></div>')
            console.log(num)
        }
    }

    function addTotalPing(num){
            if ((num % 3 === 0) && (num % 5 !== 0)) {
                return 1
            }else{
                return 0
            }
    }

    function addTotalPong(num){
        if ((num % 5 === 0) && (num % 3 !== 0)) {
            return 1
        } else {
            return 0
        }
    }

    function addTotalPingPong(num){
        if (num % 15 === 0) {
            return 1
        } else {
            return 0
        }
    }

    function addTotalMiss(num){
        if ((num % 3 !== 0) && (num % 5 !== 0)) {
            return 1
        } else {
            return 0
        }
    }

    // user logic

    $('.playUser').click(function(){
        $('#clickToPlay').addClass('animated flipOutX');
        var wait = setTimeout(function(){
            $('#clickToPlay').addClass('hideButton');
        }, 500);
        var wait = setTimeout(function(){
            $('#playBtn').addClass('zoomIn flipInX clickToPlay anim-delay-2');
            $('#userInputArea').addClass('slideInDown anim-delay-3');
            $('#playBtn').removeClass('hideButton')
            $('#userInputArea').show();
        }, 700);

    });

    $('#playBtn').click(function(){
        var input = parseInt($('#userInputArea').val())
        console.log(input)
        for (var index = 1; index <= input; index++) {
            playPingPong(index)
        }
        if(input > 0){
            $('#resultsSummary').addClass('animated slide');


            var wait = setTimeout(function(){
                $('#playAgain').addClass('fadeInDown');
                $('#playAgain').removeClass('hideButton');
                $('#playAgain').addClass('flipInX anim-loop');
            }, 3500);


            var waitTime = parseInt(3000 / input);

            var wait = setTimeout(function(){
                $('.resultsDisplay').addClass('flipInX anim-delay-3');
                $('.resultsDisplay').show();
            }, 700);

            var wait = setTimeout(function () {
                $('.totalResults1').addClass('zoomIn');
                $('.totalResults1').show();
              }, 1100);

            var wait1 = setTimeout(function () {
                $('.totalResults2').addClass('zoomIn');
                $('.totalResults2').show();
            }, 1400);

            var wait2 = setTimeout(function () {
                $('.totalResults3').addClass('zoomIn');
                $('.totalResults3').show();
            }, 1700);

            var wait3 = setTimeout(function () {
                $('.totalResults4').addClass('zoomIn');
                $('.totalResults4').show();
            }, 2000);

            var wait4 = setTimeout(function(){
                totalPing = 0;
                totalPong = 0;
                totalPingPong = 0;
                totalMiss = 0;
                for(var index = 1; index <= input; index++){
                    totalPing += addTotalPing(index);
                    totalPong += addTotalPong(index);
                    totalPingPong += addTotalPingPong(index);
                    totalMiss += addTotalMiss(index);

                    $('#piResults').text(totalPing + '  ');
                    $('#poResults').text(totalPong);
                    $('#pipoResults').text(totalPingPong);
                    $('#missResults').text(totalMiss);
                }
            },2700)


        }else{
            alert('Please Enter A Valid Number!!!!')
        }

    });

    $('#playAgain').click(function () {
        window.location.reload(true);
    })
});
