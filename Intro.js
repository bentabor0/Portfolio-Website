export class LearnMoreIntro {
	introButton = document.querySelector(".intro-button");
	welcomeSection = document.querySelector(".welcome-section");
	welcomeParagraph = document.querySelector(".intro");

	constructor(IsSentence) {
		this.IsSentence = IsSentence;
	}

	// Updates the intro <p> to display the short intro or one of 5 longer intros. 
	UpdateIntro(data) {

		// Add class to welcome paragraph to fade text out.
		this.welcomeParagraph.classList.add('fade-out');

		// After 1 second, change the <p>'s text, fade in the new text, and change the <p>'s style.
		setTimeout(() => {
			this.welcomeParagraph.innerHTML = data;
			this.welcomeParagraph.classList.remove('fade-out');
			this.welcomeParagraph.classList.add('show-more', 'fade-in');
		}, 1000);
	}

	// Adds a click event to the button below the icons.
	AddEvent(data) {

		// Add event lisenter to return to default view.
		this.introButton.addEventListener('click', () => {

			// Update the isSentence variable
			this.IsSentence = true;

			// Fade out paragraph and button.
			this.welcomeParagraph.classList.add('fade-out');
			this.introButton.classList.add('fade-out');

			// After 1 second, fade paragaph and button back in with updated changes.
			setTimeout(() => {
				this.welcomeParagraph.innerHTML = data;
				this.welcomeParagraph.classList.remove('show-more', 'fade-out');
				this.welcomeParagraph.classList.add('show-less', 'fade-in');

				this.introButton.classList.remove('go-back', 'fade-out');
				this.introButton.classList.add('fade-in', 'intro-button');
				this.introButton.innerHTML = "(Click the icons to learn more)";
			}, 1000);
		});
	}

	// Update button after text change.
	UpdateButton(IsSentence) {
		
		// Update button if the IsSentence variable is true.
		if (IsSentence) {

			// After 1 second, fade out the intro to a button.
			this.introButton.classList.add('fade-out');
			setTimeout(() => {
				this.introButton.innerHTML = "Click here to minimize";
				this.introButton.classList.remove('intro-button', 'fade-out');
				this.introButton.classList.add('go-back', 'fade-in');
			}, 1000);

			// Update isSentence variable.
			this.IsSentence = false;
		}
	}

	// Event fired when icons are clicked.
	LearnMoreClick(name) {

		// Fetch paragaph data from json file.
		fetch("LearnMore.json").then(response => response.json()).then(data => {

			// Each case calls the same three functions, passing in the new paragaph data.
			switch (name) {
				case 'school':

					this.UpdateIntro(data.School);
					this.UpdateButton(this.IsSentence);
					this.AddEvent(data.ShortIntro);
					break;

				case 'sports':

					this.UpdateIntro(data.Basketball);
					this.UpdateButton(this.IsSentence);
					this.AddEvent(data.ShortIntro);
					break;

				case 'family':

					this.UpdateIntro(data.Family);
					this.UpdateButton(this.IsSentence);
					this.AddEvent(data.ShortIntro);
					break;

				case 'pets':

					this.UpdateIntro(data.Pets);
					this.UpdateButton(this.IsSentence);
					this.AddEvent(data.ShortIntro);
					break;

				case 'hobbies':

					this.UpdateIntro(data.Trumpet);
					this.UpdateButton(this.IsSentence);
					this.AddEvent(data.ShortIntro);
					break;
			}
		})
	}
}