// Toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector("nav");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
}


// Scroll sections
let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 100;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id")

      if(top >= offset && top < offset + height) {
        // Active navbar links
        navLinks.forEach(links => {
          links.classList.remove("active");
          document.querySelector("header nav a[href*=" + id + "]").classList.add("active")
        })
      }
    })

    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
}

function openModal(imageUrl) {
    let modal = document.getElementById('modal');
    let modalImg = document.getElementById('modal-img');
    
    modal.style.display = "block";
    modalImg.src = imageUrl;
  }
  
  function closeModal() {
    let modal = document.getElementById('modal');
    modal.style.display = "none";
  }