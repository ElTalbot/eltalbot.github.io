document.addEventListener("DOMContentLoaded", function () {
  let projectPosition = 0;
  const projects = document.getElementsByClassName("projectcontainer"); // Define projects here

  // Call showProjects() to display the initial project
  showProjects(projectPosition);

  // Next/previous controls
  function plusProjects(n) {
    projectPosition += n;
    showProjects(projectPosition);
  }

  // Thumbnail image controls
  function currentProject(n) {
    projectPosition = n;
    showProjects(projectPosition);
  }

  // automatically scroll projects
  function autoProjects() {
    projectPosition++;
    if (projectPosition >= projects.length) {
      projectPosition = 0;
    }
    showProjects(projectPosition);
  }

  // Start auto timer scrolling
  let projectInterval = setInterval(autoProjects, 6000);

  // Function to display projects
  function showProjects(n) {
    const dots = document.getElementsByClassName("dots");

    // Check bounds for projectPosition
    if (n >= projects.length) {
      projectPosition = 0;
    }
    if (n < 0) {
      projectPosition = projects.length - 1;
    }

    // Hide all projects
    Array.from(projects).forEach((project) => (project.style.display = "none"));
    // Remove 'active' class from all dots
    Array.from(dots).forEach((dot) => dot.classList.remove("active"));

    // Display the current project
    projects[projectPosition].style.display = "block";
    // Add 'active' class to the corresponding dot
    dots[projectPosition].classList.add("active");
  }

  // Toggle mobile nav
  document.querySelectorAll("#menu, #close").forEach(function (element) {
    element.addEventListener("click", function () {
      const mobilenav = document.querySelector(".mobilenavmenu");
      mobilenav.classList.toggle("active");
      const menu = document.getElementById("menu");
      const close = document.getElementById("close");

      if (mobilenav.classList.contains("active")) {
        menu.classList.toggle("active");
        close.classList.toggle("active");
      } else {
        menu.classList.toggle("active");
        close.classList.toggle("active");
      }
    });
  });

  // Show experiences
  // Get the toggleIcon element
  const toggleIcons = document.querySelectorAll(".toggleIcon");
  const toggleIconsClose = document.querySelectorAll(".toggleIconClose");

  toggleIcons.forEach((toggleIcon, index) => {
    const keypointsDiv = toggleIcon.closest(".open").nextElementSibling;
    const toggleIconClose = toggleIconsClose[index];

    // Ensure only one icon is visible initially
    toggleIconClose.style.display = "none"; // Hide the close icon initially

    // Add click event listener to the toggleIcon
    toggleIcon.addEventListener("click", function () {
      // Toggle the visibility of the keypoints div
      keypointsDiv.classList.toggle("show");
      toggleIcon.classList.toggle("close");
      toggleIconClose.style.display = "block";
    });

    // Add click event listener to the toggleIconClose
    toggleIconClose.addEventListener("click", function () {
      // Toggle the visibility of the keypoints div
      keypointsDiv.classList.toggle("show");
      toggleIcon.classList.toggle("close");
      toggleIconClose.style.display = "none";
    });
  });

  // Get the interests info on click
  document.querySelectorAll(".icon").forEach((icon) => {
    icon.addEventListener("click", function () {
      const hover = this.nextElementSibling;
      if (hover) {
        hover.classList.toggle("show");
      }
    });
    icon.addEventListener("mouseenter", function () {
      const hover = this.nextElementSibling;
      if (hover) {
        hover.classList.add("show");
      }
    });
    icon.addEventListener("mouseleave", function () {
      const hover = this.nextElementSibling;
      if (hover && !hover.classList.contains("clicked")) {
        hover.classList.remove("show");
      }
    });
  });
  document.querySelectorAll("#projectclose").forEach(function (close) {
    close.addEventListener("click", function () {
      const projecthover = document.querySelector(".hover");
      if (projecthover.classList.contains("show")) {
        projecthover.classList.remove("show");
      }
    });
  });

  document.querySelectorAll(".hover").forEach((hover) => {
    hover.addEventListener("mouseenter", function () {
      this.classList.add("show");
    });

    hover.addEventListener("mouseleave", function () {
      if (!this.classList.contains("clicked")) {
        this.classList.remove("show");
      }
    });
  });
});
