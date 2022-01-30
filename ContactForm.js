export class ContactForm {
	letterRegex = /^[a-zA-Z]+$/;
	phoneRegex = /^\d{10}$/;
	isValidZip = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
	scriptRegex = /<script[\s\S]*?>[\s\S]*?<\/script>/gi;
	constructor(form) {
		this.form = form;
	}

	CreateForm() {
		return this.form;
	}

	AddEvents(form) {
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
		submitButton.addEventListener('click', this.FormSubmit);
	}

	CreateErrorMessage(input, inputName) {
		input.value = `${inputName} is invalid`;
		input.style.color = 'red';
	}

	ValidateForm() {
		let isError = false;

		let firstName = document.querySelector(".first-name");
		let lastName = document.querySelector(".last-name");
		let phoneNumber = document.querySelector(".phone");
		let email = document.querySelector(".email");
		let comments = document.querySelector(".comments");

		if (!firstName.value.match(this.letterRegex) || firstName.value.match(this.scriptRegex)) {
			this.CreateErrorMessage(firstName, 'first name');
			isError = true;
		}

		if (!lastName.value.match(this.letterRegex) || lastName.value.match(this.scriptRegex)) {
			this.CreateErrorMessage(lastName, 'last name');
			isError = true;
		}

		if (!phoneNumber.value.match(this.phoneRegex) || phoneNumber.value.match(this.scriptRegex)) {
			this.CreateErrorMessage(phoneNumber, 'phone number');
			isError = true;
		}

		if (email.value.match(this.scriptRegex)) {
			this.CreateErrorMessage(email, 'email');
			isError = true;
		}

		if (comments.value.match(this.scriptRegex)) {
			this.CreateErrorMessage(comments, 'comments');
			isError = true;
		}

		return isError;
	}
}