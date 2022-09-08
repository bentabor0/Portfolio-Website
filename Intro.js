export class LearnMoreIntro {
    introButton = document.querySelector(".intro-button");
    welcomeSection = document.querySelector(".welcome-section");
    welcomeParagraph = document.querySelector(".intro");
    nav = document.querySelector(".learn-more-nav");
    hello = document.querySelector(".hello");

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
        }, 2000);
    }

    // Adds a click event to the button below the icons.
    AddEvent(data) {

        // Add event lisenter to return to default view.
        this.introButton.addEventListener('click', () => {

            // Update the isSentence variable
            this.IsSentence = true;

            // Fade out paragraph and button.
            this.welcomeParagraph.classList.add('fade-out');
            this.introButton.classList.add('fade-out-no-move');

            this.nav.classList.add('reversetxt');
            this.introButton.classList.add('reversetxt');
            // this.hello.classList.add('reverse-hello')

            // After 1 second, fade paragaph and button back in with updated changes.
            setTimeout(() => {                
                this.welcomeParagraph.innerHTML = data;
                this.welcomeParagraph.classList.remove('show-more', 'fade-out');
                this.welcomeParagraph.classList.add('fade-in', 'test');

                this.nav.classList.remove('reversetxt', 'txtmoved');
                this.nav.classList.add('txtreset');

                this.introButton.innerHTML = "(Click the buttons to learn more about me)";
                this.introButton.classList.remove('go-back', 'fade-out-no-move', 'reversetxt', 'txtmoved');
                this.introButton.classList.add('intro-button', 'fade-in-no-move', 'txtreset');
            }, 1900);

            setTimeout(() => {                
                this.welcomeParagraph.classList.remove('fade-in', 'test');
                this.introButton.classList.remove('txtreset', 'fade-in-no-move');
                this.nav.classList.remove('txtreset');
            }, 2001);
        });
    }

    // Update button after text change.
    UpdateButton(IsSentence) {

        // Update button if the IsSentence variable is true.
        if (IsSentence) {
            console.log('move hit')
            // After 1 second, fade out the intro to a button.
            this.nav.classList.add('movetxt')
            this.introButton.classList.add('movetxt', 'fade-out-no-move')

            // this.hello.classList.add('move-hello');
            
            setTimeout(() => {
                this.introButton.innerHTML = "Click here to minimize";
                this.introButton.classList.remove('intro-button', 'movetxt', 'fade-out-no-move');
                this.introButton.classList.add('go-back', 'txtmoved', 'fade-in-no-move');

                this.nav.classList.remove('movetxt');
                this.nav.classList.add('txtmoved');
            }, 1900);

            // Update isSentence variable.
            this.IsSentence = false;
        }
    }

    // Event fired when icons are clicked.
    LearnMoreClick(name) {

        // Fetch paragaph data from json file.
        fetch("IntroCollection.json").then(response => response.json()).then(data => {

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

                case 'WhatsNew':

                    this.UpdateIntro(data.WhatsNew);
                    this.UpdateButton(this.IsSentence);
                    this.AddEvent(data.ShortIntro);
                    break;

                case 'hobbies':
                    this.UpdateIntro(data.Hobbies);
                    this.UpdateButton(this.IsSentence);
                    this.AddEvent(data.ShortIntro);
                    break;
            }
        })
    }
}