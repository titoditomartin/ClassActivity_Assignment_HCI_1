//Please put your answer here
$(function(){
    $(".signup-modal-wrapper").hide();

    $(".signup").click(function () {
        $(".signup-modal-wrapper").fadeIn('slow');
    });

    $(".message").click(function () {
        $(".signup-modal-wrapper").fadeIn('slow');
    });

    $(".fa-times").click(function () {
        $(".signup-modal-wrapper").fadeOut('slow');
    });
});
