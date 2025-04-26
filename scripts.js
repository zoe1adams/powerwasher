// Initialize Swiper Carousel for Services
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 4000, // 4 seconds
    disableOnInteraction: false,
  },
  speed: 1200,
  slidesPerView: 1,
  spaceBetween: 30,
  effect: 'slide',
});

// Initialize AOS Animations
AOS.init({
  duration: 1000,
  once: true
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
  const scrollProgress = document.getElementById('scroll-progress');
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / totalHeight) * 100;
  scrollProgress.style.width = progress + "%";
});

// Modal Popup
function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Shrink Navbar on Scroll
const header = document.querySelector('.sticky-header');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  let scrollTop = window.scrollY;

  // Shrink navbar
  if (scrollTop > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }

  lastScrollTop = scrollTop;
});

// Scroll To Top Button
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Animated Counters
const counters = document.querySelectorAll('.count');
const speed = 200; // lower = faster

const runCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

let counterStarted = false;
window.addEventListener('scroll', () => {
  const stats = document.getElementById('stats');
  const statsTop = stats.offsetTop - window.innerHeight;

  if (!counterStarted && window.scrollY > statsTop) {
    runCounters();
    counterStarted = true;
  }
});

// Accordion FAQs
const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    this.classList.toggle('active');
    const content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// Smooth Scroll on Menu Click
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});
