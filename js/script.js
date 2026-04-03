document.addEventListener("DOMContentLoaded", () => {
  // --- 1. MOBILE MENU TOGGLE ---
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector("nav");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("show");
      menuBtn.innerHTML = nav.classList.contains("show") ? "✕" : "☰";
    });
  }

  // --- 2. SEARCH BAR LOGIC ---
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.querySelector(".search-results-dropdown");

  // Local Data for Index Page (Expand this as you send more pages)
  const siteData = [
    { title: "Home", desc: "Welcome to YIELDED GENERATION", url: "index.html" },
    {
      title: "Worship Services",
      desc: "Sundays at 10:00 AM",
      url: "index.html#expect",
    },
    {
      title: "Life Groups",
      desc: "Find small group community",
      url: "index.html#connect",
    },
    {
      title: "Prayer Night",
      desc: "Join us Thursdays at 7:00 PM",
      url: "events.html",
    },
    {
      title: "Mission",
      desc: "Our heartbeat: Worshiping, Growing, Serving",
      url: "index.html#mission",
    },
  ];

  if (searchInput && searchResults) {
    searchInput.addEventListener("input", (e) => {
      const value = e.target.value.toLowerCase();
      searchResults.innerHTML = "";

      if (value.length > 1) {
        const matches = siteData.filter(
          (item) =>
            item.title.toLowerCase().includes(value) ||
            item.desc.toLowerCase().includes(value),
        );

        if (matches.length > 0) {
          searchResults.style.display = "block";
          matches.forEach((match) => {
            const resultDiv = document.createElement("div");
            resultDiv.style.padding = "12px";
            resultDiv.style.cursor = "pointer";
            resultDiv.style.borderBottom = "1px solid #eee";
            resultDiv.innerHTML = `<strong>${match.title}</strong><br><small style="color:#777">${match.desc}</small>`;
            resultDiv.onclick = () => (window.location.href = match.url);
            searchResults.appendChild(resultDiv);
          });
        } else {
          searchResults.innerHTML = `<div style="padding:12px">No results found</div>`;
          searchResults.style.display = "block";
        }
      } else {
        searchResults.style.display = "none";
      }
    });

    // Close search when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !searchInput.contains(e.target) &&
        !searchResults.contains(e.target)
      ) {
        searchResults.style.display = "none";
      }
    });
  }

  // --- 3. SCROLL REVEAL ANIMATION ---
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    ".mission-card, .expect-card, .connect-card, .testimony-card",
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
  });
});

/* Add this logic inside your existing DOMContentLoaded listener in script.js */

// Update siteData with About Page info
const aboutData = [
  {
    title: "Our Story",
    desc: "How YIELDED GENERATION began",
    url: "about.html#story",
  },
  {
    title: "Leadership",
    desc: "Meet Pastor Samuel and the team",
    url: "about.html#leadership",
  },
  {
    title: "Beliefs",
    desc: "What we believe about God and the Bible",
    url: "about.html#beliefs",
  },
  {
    title: "Our History",
    desc: "Timeline of our church journey",
    url: "about.html#timeline",
  },
];

// Combine with previous siteData
// siteData.push(...aboutData);

// Timeline Animation Logic
const timelineItems = document.querySelectorAll(".timeline-item");
const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateX(0)";
      }
    });
  },
  { threshold: 0.2 },
);

timelineItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateX(-20px)";
  item.style.transition = "all 0.8s ease-out";
  timelineObserver.observe(item);
});

/* Add this logic inside your existing DOMContentLoaded listener in script.js */

// Update siteData with Event info for the Search Bar
const eventData = [
  {
    title: "Sunday Service",
    desc: "Main Worship at 9:00 AM",
    url: "events.html#weekly",
  },
  {
    title: "Prayer Night",
    desc: "Thursdays at 6:15 PM",
    url: "events.html#weekly",
  },
  {
    title: "Community Outreach",
    desc: "Serving our neighbors on April 12",
    url: "events.html#special",
  },
  {
    title: "Life Groups",
    desc: "Join Young Adults, Men, or Women groups",
    url: "events.html#life-groups",
  },
  {
    title: "Worship Night",
    desc: "Extended worship on April 25",
    url: "events.html#special",
  },
];

// Combine with global siteData
// siteData.push(...eventData);

// Event Card Animation
const eventCards = document.querySelectorAll(
  ".event-card, .group-card, .service-card",
);
const eventObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

eventCards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "all 0.5s ease-out";
  eventObserver.observe(card);
});

/* --- Gallery Filtering Logic --- */
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Switch active class
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    galleryItems.forEach((item) => {
      if (
        filterValue === "all" ||
        item.getAttribute("data-category") === filterValue
      ) {
        item.style.display = "block";
        // Simple entrance animation
        item.style.animation = "fadeIn 0.5s ease forwards";
      } else {
        item.style.display = "none";
      }
    });
  });
});

/* --- Lightbox Logic --- */
const lightbox = document.getElementById("lightboxModal");
const lightboxImg = document.getElementById("lightboxImage");
const lightboxCap = document.getElementById("lightboxCaption");
const closeBtn = document.querySelector(".lightbox-close");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector(".gallery-img");
    const title = item.querySelector("h3").innerText;

    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    lightboxCap.innerText = title;

    // Disable scrolling when lightbox is open
    document.body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
  document.body.style.overflow = "auto";
});

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

/* --- Contact Form Handling --- */
const contactForm = document.querySelector(".contact-form form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop page refresh

    // In a real scenario, you'd use fetch() to send data to a server
    const formData = new FormData(this);
    const userName = formData.get("name");

    // Visual feedback for the user
    contactForm.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <div style="font-size: 4rem; margin-bottom: 20px;">✅</div>
        <h2>Thank you, ${userName}!</h2>
        <p>Your message has been sent successfully. Our team will get back to you shortly.</p>
        <button onclick="location.reload()" class="btn btn-primary" style="margin-top:20px;">Send another message</button>
      </div>
    `;
  });
}
const menuBtn = document.querySelector(".mobile-menu-btn");
const navMenu = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  // This toggles a class that shows/hides the menu
  navMenu.classList.toggle("active");
});
