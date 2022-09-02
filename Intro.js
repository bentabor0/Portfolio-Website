export class LearnMoreIntro {
    introButton = document.querySelector(".intro-button");
    welcomeSection = document.querySelector(".welcome-section");
    welcomeParagraph = document.querySelector(".intro");
    nav = document.querySelector(".learn-more-nav")

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

        // // After 1 second, change the <p>'s text, fade in the new text, and change the <p>'s style.
        // setTimeout(() => {
        //     this.nav.classList.remove('movetxt')
        //     this.nav.classList.add('txtmoved')
        //     this.introButton.classList.remove('movetxt')
        //     this.introButton.classList.add('txtmoved')
        // }, 2000);
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
            }, 2000);

            setTimeout(() => {                
                this.welcomeParagraph.classList.remove('fade-in', 'test');
                this.introButton.classList.remove('txtreset', 'fade-in-no-move');
                this.nav.classList.remove('txtreset');
            }, 2001);

            
            // setTimeout(() => {
                

            //     this.nav.classList.remove('reversetxt', 'txtmoved');
            //     this.nav.classList.add('txtreset');
            //     this.introButton.classList.remove('reversetxt', 'txtmoved');
            //     this.introButton.classList.add('txtreset');
            // }, 4000);
        });
    }

    // Update button after text change.
    UpdateButton(IsSentence) {

        // Update button if the IsSentence variable is true.
        if (IsSentence) {

            // After 1 second, fade out the intro to a button.
            this.nav.classList.add('movetxt')
            this.introButton.classList.add('movetxt', 'fade-out-no-move')
            
            setTimeout(() => {
                this.introButton.innerHTML = "Click here to minimize";
                this.introButton.classList.remove('intro-button', 'movetxt', 'fade-out-no-move');
                this.introButton.classList.add('go-back', 'txtmoved', 'fade-in-no-move');

                this.nav.classList.remove('movetxt');
                this.nav.classList.add('txtmoved');
            }, 2000);

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

        console.log(this.welcomeParagraph.classList)
        console.log(this.introButton.classList)
        console.log(this.nav.classList)
    }
}