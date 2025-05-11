document.addEventListener('DOMContentLoaded', () => {
    const bouquetImgs = document.querySelectorAll(".bouquet_img")
    const imageSets = []
    bouquetImgs.forEach(bouquetImg => {
        imageSets.push({
            "display": bouquetImg.querySelector("img"),
            "thumnails": bouquetImg.querySelector("div").querySelectorAll("img")
        })
    })
    imageSets.forEach(imageSet => {
        imageSet["thumnails"].forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                imageSet["display"].src = thumbnail.src;
            });
        })
    })
});