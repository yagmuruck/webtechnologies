$("ul").on("click", "li", function() {
    //if it has been checked before
    if($(this).css("text-decoration") == "line-through solid rgb(0, 0, 0)") {
        $(this).css("text-decoration", "none");
    } else {
        //check it
        $(this).css("text-decoration", "line-through");
    }
});

//deleting the todo
$("ul").on("click", "span", function() {
    $(this).parent().remove();
    //stopping the event bubble
    event.stopPropagation();
});

//to add a new to do
$("input").keypress(function(event) { 
    //check if it's entered
    if(event.which === 13) {
       var newText = $(this).val();
       $(this).val("");
       $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + newText + "</li>");
        
    }
})

$(".fa-pencil-alt").click(function(){
    $("input").fadeToggle();
    
});