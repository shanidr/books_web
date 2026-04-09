// // code
function feedback() {
    let star_feedback = parseInt(document.getElementById("star_feedback").value) ;

    star_feedback.innerHTML = "thank you for your feedback";
    alert("you rated this website " + star_feedback + " stars, thank you for your feedback");
}