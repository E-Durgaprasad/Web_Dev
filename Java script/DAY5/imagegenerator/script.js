const changeImage = () => {

    let images = [
        "https://picsum.photos/300?random=1",
        "https://picsum.photos/300?random=2",
        "https://picsum.photos/300?random=3",
        "https://picsum.photos/300?random=4",
        "https://picsum.photos/300?random=5"
    ];

    let randomIndex = Math.floor(Math.random() * images.length);

    document.getElementById("image").src = images[randomIndex];
}