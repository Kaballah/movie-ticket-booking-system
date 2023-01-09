// Movies Images Slide

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }    

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// Search Bar Function

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    var results = [];

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    // ul = document.getElementById("myUL");
    // li = ul.getElementsByTagName("li");
    // li = document.getElementsByClassName("movies");

    for (i = 0; i < shopItemsData.length; i++) {
        // a = li[i].getElementsByTagName("p")[0];
        // a = li[i].name[0];
        // txtValue = a.textContent || a.innerText;
        // txtValue = shopItemsData.name;

        // if (txtValue.toUpperCase().indexOf(filter) > -1) {
        //     li[i].style.display = "";
        // } else {
        //     li[i].style.display = "none";
        // }

        for(key in shopItemsData[i]) {
            if(shopItemsData.toUpperCase[i][key].indexOf(filter) > -1) {
                results.push(shopItemsData[i]);
                shopItemsData[i].style.display = "";
            } else {
                shopItemsData[i].style.display = "none";
            }
        }
    }
}

// Movie Page

let shop = document.getElementById("movies");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData.map( (x) => {
      let { id, name, price, img, desc } = x;
      let search = basket.find( (x) => x.id === id) || [];
      return `
        <div id=product-id-${id} class="item">
        <img width="220" height="320" src=${img} alt="">
            <div class="details">
                <center>
                <h4>${name}</h4>
                <h6>${desc}</h6>
                </center>
                <div class="price-quantity">
                    <p>Ksh ${price} </p>
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                        <div id=${id} class="quantity">
                            ${search.item === undefined ? 0 : search.item}
                        </div>
                        <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
        </div>
        `;
    }).join(""));
};

generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find( (x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }

  // console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find( (x) => x.id === selectedItem.id);

    if (search === undefined) 
        return;
    else if (search.item === 0) 
        return;
    else {
        search.item -= 1;
    }

    update(selectedItem.id);

    basket = basket.filter( (x) => x.item !== 0);

    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find( (x) => x.id === id);
    
    document.getElementById(id).innerHTML = search.item;

    calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
