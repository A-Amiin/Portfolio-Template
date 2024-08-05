document.getElementById('nav-toggle').addEventListener("click", () => {
    document.getElementById('nav-menu').style.display = "block"
    setTimeout(() => {
        document.getElementById('nav-menu').style.display = "none";
    }, 4000);
})

// Remove menu for every click on a link
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// Scroll Sections Active Link
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 30;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

// Change BG Header
function scrollHeader() {
    const header = document.getElementById("header");
    return this.scrollY >= 550
        ? header.classList.add("scroll-header")
        : header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

// Swiper JS
new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: false,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    },
});

//CV Button
document.getElementById('downloadButton').addEventListener('click', function () {
    // URL of the PDF file
    const fileUrl = './files/Ahmed-Amin.pdf'; // Replace with your PDF file URL

    // Create an anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Ahmed Abo Amin'; // Name of the file to be downloaded

    // Append the anchor to the body
    document.body.appendChild(link);

    // Programmatically click the anchor to trigger the download
    link.click();

    // Remove the anchor from the document
    document.body.removeChild(link);
});