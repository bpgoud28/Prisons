//Scroll to top
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});

//Newsticker
$(function () {
    $(".demo1").bootstrapNews({
        newsPerPage: 3,
        autoplay: true,
        pauseOnHover:true,
        direction: 'up',
        newsTickerInterval: 4000,
        onToDo: function () {
            //console.log(this);
        }
    });
});

