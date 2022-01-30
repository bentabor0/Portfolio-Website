import {
	ContactForm
} from './ContactForm.js';
import {
	LearnMoreIntro
} from './Intro.js';

////////////////// Intro //////////////////

let Intro = new LearnMoreIntro(true);

// Display more information in welcome section.
let learnMore = (name) => {
	Intro.LearnMoreClick(name);
};

// Get icons from welcome section
let schooButton = document.querySelector(".school");
let basketballButton = document.querySelector(".sports");
let familyButton = document.querySelector(".family");
let petsButton = document.querySelector(".pets");
let trumpetButton = document.querySelector(".hobbies");

// Create array of welcome buttons
let welcomeButtons = [schooButton, basketballButton, familyButton, petsButton, trumpetButton];

// Add a click event to each button in the welcome section
welcomeButtons.forEach(icon => {
	icon.addEventListener("click", function() {learnMore(icon.className)});
});

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
		fetch("ContactForm.json").then(response => response.json()).then(data => {
			// Create new div to hold a contact form
			let newForm = document.createElement("div");
			newForm.classList.add("card-form");
			newForm.style.borderRadius = "10px";

			// Fill new form, attach events and validate inputs.
			contactForm = new ContactForm(data.FormTag);
			newForm.innerHTML = contactForm.CreateForm();

			// Add new div to end of contact section
			contactSection.append(newForm);
			AddEvents(newForm);
		})
	}
};

formButton.addEventListener("click", DisplayForm);