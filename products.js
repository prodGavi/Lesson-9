let products = [
    {
        id: 2540,
        name: "IPhone 14 Pro",
        price: 4500,
        category: "Smartphones",
        description:
            "Dynamic Island bubbles up music, phone calls, and so much more — without taking you away from what you’re doing.",
        image: "./images/iphone14pro.jpeg",
    },
    {
        id: 2537,
        name: "Lenovo Legion 15.6 Gaming",
        price: 4228,
        category: "Laptops",
        description:
            "Lenovo Legion 5 pairs unparalleled flexibility with incredible power, offering a plethora of performance options for any gamer in a clean and minimalist design",
        image: "./images/lenovo.jpg",
    },
    {
        id: 2539,
        name: "Apple 16 Inch Macbook Pro",
        price: 11600,
        category: "Laptops",
        description:
            "All-New MacBook Pro Features an Immersive 16-Inch Retina Display, Up to 80 Percent Faster Performance and a New Magic Keyboard",
        image: "./images/Apple16-inch-MacBook.jpg",
    },
    {
        id: 2538,
        name: "ASUS ROG GL552VW-DH71",
        price: 5300,
        category: "Laptops",
        description:
            "Offering a formidable core experience for serious gaming and multitasking on Windows 10 Pro",
        image: "./images/asus.jpg",
    },

    {
        id: 2536,
        name: "Sony Pro 32GB XQD",
        price: 500,
        category: "Storage",
        description: "The new XQD cards achieve Max read",
        image: "./images/sony.jpg",
    },
    {
        id: 2541,
        name: "Xbox Series X",
        price: 2200,
        category: "Gaming",
        description: "Discover the fastest, most powerful Xbox ever with the Xbox Series X. Enjoy 4K gaming on this next generation video game console.",
        image: "./images/xboxSeriesX.png",
    },
    {
        id: 2542,
        name: "Play Station 5",
        price: 2200,
        category: "Gaming",
        description: "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback1, adaptive triggers1 and 3D Audio",
        image: "./images/ps5.webp",
    },
    {
        id: 2543,
        name: "Seagate External Hard Drive",
        price: 400,
        category: "Storage",
        description: "The LaCie Rugged USB-C portable drive combines rugged durability with cutting-edge USB-C connectivity. The result is a secure vault for your data that’s compatible with the latest MacBook Pro models as well as other USB computers.",
        image: "./images/seagateDrive.jpeg",
    },
    {
        id: 2544,
        name: "Samsung Galaxy S20 Ultra",
        price: 3000,
        category: "Smartphones",
        description: "5G network speeds and 8K videos only scratch the surface of what the Galaxy S20 Ultra 5G SM-G988U 128GB Smartphone from Samsung has to offer. The quad camera system features a 12MP ultra-wide, 48MP telephoto, DepthVision, and mammoth 108MP wide camera - plus a 40MP selfie cam.",
        image: "./images/samsungGultra.jpeg",
    },


];

function showProducts() {
    for (let i = 0; i < products.length; i++) {
        document.getElementById("products").innerHTML +=
            `<div class="col-md-4 mt-3">
            <div class="card" style="width: 18rem;">
            <img src="${products[i].image}" class="card-img-top" alt="...">
            <div class="card-body"> 
            <h5 class="card-title">${products[i].name}</h5>
            <p class="card-text">${products[i].category}</p>
            <a data-bs-toggle="modal" data-bs-target="#infoModal" href="#" class="btn btn-primary w-100" onclick="setModal(${i})">See More</a>
            </div>
            </div>
        </div>`;
    }
}

showProducts()

function setModal(index) {
    document.getElementById("modalTitle").innerText = products[index].name;

    document.getElementById("mBody").innerHTML =
        `<p><b>Serial Number</b>: ${products[index].id}</p>
    <p><b>Category</b>: ${products[index].category}</p>
    <p><b>Description</b>: ${products[index].description}</p>
    <h4 class="text-end">Price: ${products[index].price}$</h4>`
}