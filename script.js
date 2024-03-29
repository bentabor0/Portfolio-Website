import {ContactForm} from './ContactForm.js';
import {LearnMoreIntro} from './Intro.js';
import './ProjectTemplate.js';

////////////////// Intro //////////////////

let Intro = new LearnMoreIntro(true);

// Display more information in welcome section.
let learnMore = (name) => {
	Intro.LearnMoreClick(name);
};

// Get icons from welcome section
let schooButton = document.querySelector(".school");
let familyButton = document.querySelector(".family");
let hobbiesButton = document.querySelector(".hobbies");
let newButton = document.querySelector(".WhatsNew");

// Create array of welcome buttons
let welcomeButtons = [schooButton, familyButton, hobbiesButton, newButton];

// Add a click event to each button in the welcome section
welcomeButtons.forEach(icon => {
    console.log(icon)
	icon.addEventListener("click", function () {
		learnMore(icon.className)
	});
});

////////////////// Projects //////////////////

// Fills the site with my projects.
let createProjects = () => {

	// The grid to add projects to.
	let projectsGrid = document.querySelector('.projects-grid');

	// Array of projects
	let projects = [
        {
			// example
			name: "Portfolio",
			link: "https://github.com/bentabor0",
			src: "portfolio-photo.PNG"
		},
		{
			// example
			name: "Pet Store",
			link: "https://github.com/bentabor0/Pet-Store-Project",
			src: "ouan.PNG"
		},
		{
			// example
			name: "Spoonacular API",
			link: "https://github.com/bentabor0/Spoonacular-API-Assistant",
			src: "spoonacular.PNG"
		},
        {
			// Software Architecture 
			name: "Software Architecture Project",
			link: "https://budgetplannertabor.azurewebsites.net/",
			src: "bp.PNG"
		},
        {
            name: "Spoonacular Web App",
            link: "https://spoonacular.azurewebsites.net/",
            src: ""
        }
	];

	// Adds a new project template to the grid for each one in the array
	projects.forEach(p => {
		let template = document.createElement('project-template');
		template.project = p;
		projectsGrid.appendChild(template);
	});
};

createProjects();

////////////////// Contact Form //////////////////

let contactForm;

// Get elements from contact section.
let contactSection = document.querySelector("#contact");
let formButton = document.querySelector("#contact-form-button");

// Submit form after each input has been validated.
let FormSubmit = () => {

	let form = document.querySelector('.contact-form');

	let isFormValidated = contactForm.ValidateForm();

	if (isFormValidated == true) {

		console.log('hit');
	} else {
		form.submit();
	}
};

let AddEvents = (form) => {

	// Focusin event for contact form.
	form.addEventListener('focusin', (event) => {

		event.target.style.background = 'rgb(144,238,144)';
		event.target.style.color = '#576366';
	})

	// Focusout event for contact form.
	form.addEventListener('focusout', (event) => {

		event.target.style.background = '';
	})

	let submitButton = document.querySelector('.submit');
	submitButton.addEventListener('click', FormSubmit);
};

// Display a contact form for user.
let DisplayForm = () => {
	let form = document.querySelector(".contact-form");

	if (form == null) {
		// Create new div to hold a contact form
		let newForm = document.createElement("div");
		newForm.classList.add("card-form");
		newForm.style.borderRadius = "10px";

		// Fill new form, attach events and validate inputs.
		contactForm = new ContactForm(
			// Form tag
			`<form class=\"contact-form\"><div class=\"form-title\">Contact Information</div><div class=\"form-body\"><div class=\"row\"><input class=\"first-name\" type=\"text\" placeholder=\"First Name*\"><input class=\"last-name\" type=\"text\" placeholder=\"Last Name*\"></div><div class=\"row\"><input class=\"phone\" type=\"tel\" placeholder=\"715 123 4567 (no spaces)*\"><input class=\"email\" type=\"email\" placeholder=\"Email Address*\"></div><div class=\"row\"><input class=\"comments\" type=\"text\" placeholder=\"Comments*\"></div></div><div class=\"rule\"></div><div class=\"form-footer\"><a type=\"submit\" class=\"formA submit\">Submit<span class=\"fa fa-thumbs-o-up\"></span></a><a class=\"formA cancel\">Cancel<span class=\"fa fa-ban\"></span></a></div></form>`
		);
		newForm.innerHTML = contactForm.CreateForm();

		// Add new div to end of contact section
		contactSection.append(newForm);
		AddEvents(newForm);
	}
};

// formButton.addEventListener("click", DisplayForm);

const mouseCursor = document.getElementById("mouse_cursor");

let cursorX = 0,
  cursorY = 0,
  currentX = 0,
  currentY = 0;

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

window.addEventListener("mousemove", (e) => {
  mouseCursor.style.display = "inline-block";
  cursorX = e.clientX;
  cursorY = e.clientY;
});

function styling(s) {
  mouseCursor.style.width = `${s}px`;
  mouseCursor.style.height = `${s}px`;
}

function animate() {
  currentX = lerp(currentX, cursorX, 0.05);
  currentY = lerp(currentY, cursorY, 0.05);
  mouseCursor.style.transform = `translate(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px)) `;
  requestAnimationFrame(animate);
}

animate();
