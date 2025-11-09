AOS.init({
  duration: 800,
  easing: "slide"
});

(function ($) {
  "use strict";

  // Parallax setup
  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: "scroll"
  });

  // Full-height adjustment
  const fullHeight = () => {
    $(".js-fullheight").css("height", $(window).height());
  };
  fullHeight();
  $(window).on("resize", fullHeight);

  // Loader
  setTimeout(() => $("#ftco-loader").removeClass("show"), 1);

  // Scrollax init
  $.Scrollax();

  // Burger menu toggle
  $("body").on("click", ".js-fh5co-nav-toggle", function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
  });

  // Smooth scroll for internal links
  $(document).on("click", '#ftco-nav a[href^="#"]', function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 70
      },
      500
    );
  });

  // Owl Carousel setup
  $(".home-slider").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: false,
    autoplayHoverPause: false,
    items: 1,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    }
  });

  // Dropdown hover effect
  $("nav .dropdown").hover(
    function () {
      $(this)
        .addClass("show")
        .find("> a")
        .attr("aria-expanded", true);
      $(this).find(".dropdown-menu").addClass("show");
    },
    function () {
      $(this)
        .removeClass("show")
        .find("> a")
        .attr("aria-expanded", false);
      $(this).find(".dropdown-menu").removeClass("show");
    }
  );

  // Navbar scroll behavior
  const scrollWindow = () => {
    const $window = $(window),
      $navbar = $(".ftco_navbar"),
      $scrollWrap = $(".js-scroll-wrap");

    $window.on("scroll", function () {
      const st = $window.scrollTop();

      if (st > 150) {
        $navbar.addClass("scrolled");
      } else {
        $navbar.removeClass("scrolled sleep");
      }

      if (st > 350) {
        $navbar.addClass("awake");
        if ($scrollWrap.length) $scrollWrap.addClass("sleep");
      } else {
        $navbar.removeClass("awake").addClass("sleep");
        if ($scrollWrap.length) $scrollWrap.removeClass("sleep");
      }
    });
  };
  scrollWindow();

  // Counter animation
  const counter = () => {
    $(".ftco-counter, .hero-wrap, .ftco-about").waypoint(
      function (direction) {
        if (direction === "down" && !$(this.element).hasClass("ftco-animated")) {
          $(".number").each(function () {
            $(this).animateNumber(
              {
                number: $(this).data("number"),
                numberStep: $.animateNumber.numberStepFactories.separator(",")
              },
              7000
            );
          });
        }
      },
      { offset: "95%" }
    );
  };
  counter();

  // Content animation
  const contentWayPoint = () => {
    $(".ftco-animate").waypoint(
      function (direction) {
        if (direction === "down" && !$(this.element).hasClass("ftco-animated")) {
          $(this.element).addClass("item-animate");
          setTimeout(() => {
            $("body .ftco-animate.item-animate").each(function (k) {
              const el = $(this);
              setTimeout(() => {
                const effect = el.data("animate-effect");
                el
                  .addClass(`${effect || "fadeInUp"} ftco-animated`)
                  .removeClass("item-animate");
              }, 50 * k);
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };
  contentWayPoint();

  // Magnific Popup (Images)
  $(".image-popup").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: "mfp-no-margins mfp-with-zoom",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: { verticalFit: true },
    zoom: { enabled: true, duration: 300 }
  });

  // Magnific Popup (Video)
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
})(jQuery);

// Handle Navbar Toggle and Scroll
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("ftco-navbar");
  const navbarCollapse = document.getElementById("ftco-nav");
  const closeBtn = document.querySelector(".navbar-close-btn");
  const body = document.body;

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      navbarCollapse?.classList.remove("show");
      body.classList.remove("nav-open");
    });
  }

  // Menu open/close tracking
  navbarCollapse?.addEventListener("shown.bs.collapse", () => {
    body.classList.add("nav-open");
  });

  navbarCollapse?.addEventListener("hidden.bs.collapse", () => {
    body.classList.remove("nav-open");
  });

  // Scroll effect on navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled-nav");
    } else {
      navbar.classList.remove("scrolled-nav");
    }
  });
});