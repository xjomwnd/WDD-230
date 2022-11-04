/*const images = document.querySelectorAll("[data-src]");
function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
}
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;   
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);
images.forEach(image => {
    imgObserver.observe(image);
});*/


/* Michael's code______________________________________*/

/*const images = document.querySelectorAll(".gallery img[data-src]");
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};
const loadImages = (img) => {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = () => {
      img.removeAttribute('data-src');
    };
}
if("IntersectionObserver" in window) {
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entries) => {
        if (!entries.isIntersecting) {
            return;
        } else {
            loadImages(entries.target);
            imgObserver.unobserve(entries.target);
        }
    });
}, imgOptions);
images.forEach(image => {
    imgObserver.observe(image);
});
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}*/


const images = document.querySelectorAll("[data-src]");

const loadImages = (image) => {
    image.setAttribute("src",image.getAttribute("data-src"));
    image.onload = () => {image.removeAttribute("data-src")};
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 100px 0px"
};
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImages(entry.target);
                imgObserver.unobserve(entry.target);
            }
        })
    }, imgOptions);
    images.forEach((img)=>{
        imgObserver.observe(img)
    })
} else {
    images.forEach(image => {
        loadImages(image)
        // imgObserver.observe(image);
    });
}

