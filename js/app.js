function onHover() {
    document.getElementById('logo').className = 'animate__rubberBand';
}

// Image SLideshow

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    } slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    } slides[ slideIndex - 1 ].style.display = "block";  

    dots[ slideIndex - 1 ].className += " active";
    setTimeout( showSlides, 3000 );
}

// Search Bar Function

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

