

function textReveal(text) {
        text.toggle("d-none");
        text.toggle("d-sm-block")
        console.log('hi')
}

$(function() {
    const seventhCommBtn = $("#seventhCommBtn");
    const seventhCommText = $("#seventhCommText");
    
    seventhCommBtn.on("click", function() { textReveal(seventhCommText)});
});

//d-none d-sm-block