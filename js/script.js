$(document).ready(function() {
    $('.filter-button-container').on('click', 'button', function() {
        $('.filter-area').slideToggle("slow");
    });
    $('#filter-submit-button').on('click', function() {
            $('.filter-area').slideToggle("slow");
    });
});
