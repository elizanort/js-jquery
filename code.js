$(document).ready(function() {

    $(".accordion").find(".inner").hide();

    $(".toggle").on('click', function(){
        let content = $(this).next();
        let otherContent = $(this).parent().parent().find(".inner"); 

        if (content.is(":hidden") == true){
            otherContent.slideUp(1000);
        }

        $(content).slideToggle(1000);
    })
});

//When the user clicks on a button
// Find the inner content (this is generally the .next() element from the button)
// If the inner content is open
// then close it
// If the inner content is not open
// first find any other inner contents that are open and close them
// then show the selected inner content