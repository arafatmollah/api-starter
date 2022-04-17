function loadPhoto() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(photo => display(photo));
}

function display(photo) {
    const apiPhoto = document.getElementById('api-photo')
    for (const photos of photo) {
        console.log(photos);
        const para = document.createElement('p');
        para.innerText = photos.url;
        apiPhoto.appendChild(para)
    }
}