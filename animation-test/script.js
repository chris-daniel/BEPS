$('#slider-range').hide();
$('#amount').hide();
$('#button').hide();

var vid = document.getElementById('video');
var resume = false;
vid.addEventListener('timeupdate', function(){
    // console.log(vid.currentTime);
    if(vid.currentTime >= 14.500 && vid.currentTime <= 14.900 && resume == false) {
        resume = true;
        $('#slider-range').show();
        $('#amount').show();
        $('#button').show();

        vid.pause();

        $(function() {
            $('#slider-range').slider({
              range: false,
              min: 0,
              max: 999,
              values: [0],
              slide: function( event, ui ) {
                $( "#amount" ).val( "USD " + ui.values[ 0 ] + "\n" + " billion");
              }
            });
            $( "#amount" ).val( "USD " + $( "#slider-range" ).slider( "values", 0 ) + "\n" + " billion" );
          } );
    }
});

function resumeVideo() {
    vid.play();
    $('#slider-range').hide();
    $('#amount').hide();
    $('#button').hide();
}
