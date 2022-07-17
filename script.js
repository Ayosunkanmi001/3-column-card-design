function myFunction(message) {
    document.getElementById("content").innerHTML = "Hello my lovers!";
    document.getElementById("contact").innerHTML = "I am Ayosunkanmi";
    document.getElementById("demo").innerHTML = "I love you so much";

    var text = document.getElementById("content");
    if(text.style.display === "none"){
        text.style.display = "block";
    } else {
         text.style.display = "none";
    }

    var text =document.getElementById("contact");
    if(text.style.display === "none") {
       text.style.display = "block";
    } else {
        text.style.display = "none";
    }

    var text = document.getElementById("demo");
    if(text.style.display === "none"){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}
