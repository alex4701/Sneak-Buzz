const wrapper = document.querySelector(".sliderWrapper")
const menuItem = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Air Jordan 4",
        price: 19250,
        colors: [
            {
                code: "yellow",
                img:"./images/pngwing.com(2).png",
            },
            {
                code: "green",
                img:"./images/Air_Jordan_4_Seafoam_-_EU_42-removebg-preview.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan Highs",
        price: 11495,
        colors: [
            {
                code: "red",
                img: "./images/kisspng-mens-air-jordan-1-retro-high-og-sneakers-mens-air-5ba3a8c2c8e242.5534841615374522268228.png",
            },
            {
                code: "gray",
                img: "./images/ajh-Photoroom.png",
            },
        ],
    },
    {
        id: 3,
        title: "Air Jordan Mids",
        price: 10795,
        colors: [
            {
                code: "red",
                img: "./images/pngwing.com (1).png",
            },
            {
                code: "blue",
                img: "./images/Untitleddesign-Photoroom.png",
            },
        ],
    },
    {
        id: 4,
        title: "Air Jordan Lows",
        price: 11495,
        colors: [
            {
                code: "red",
                img: "./images/pngegg.png",
            },
            {
                code: "gray",
                img: "./images/ajlow.png",
            },
        ],
    },
    {
        id: 5,
        title: "Nike Dunks",
        price: 12795,
        colors: [
            {
                code: "green",
                img: "./images/pngwing.com (10).png",
            },
            {
                code: "black",
                img: "./images/nkds.png",
            },
        ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItem.forEach((item, index) => {
    item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    
    //assigning new colours
    currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
    });
 });
}); 

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"
    });
}); 

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=> {
    payment.style.display = "flex"
} );

close.addEventListener("click",()=> {
    payment.style.display = "none"
} );