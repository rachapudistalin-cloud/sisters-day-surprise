// =========================
// LANDING PAGE
// =========================

const messages = [
    "This was made for exactly",
    "one person.",
    "If you're here...",
    "Maybe...",
    "this was always meant",
    "to find you.",
    "Welcome ❤️"
];

const heading = document.getElementById("typewriter");
const button = document.getElementById("begin");

button.style.display = "none";

let index = 0;

function showMessage() {

    heading.style.opacity = 0;

    setTimeout(() => {

        heading.innerHTML = messages[index];
        heading.style.opacity = 1;

        if (index < messages.length - 1) {

            setTimeout(() => {

                heading.style.opacity = 0;

                setTimeout(() => {

                    index++;
                    showMessage();

                }, 800);

            }, 1700);

        } else {

            button.style.display = "inline-block";

            setTimeout(() => {

                button.style.opacity = "1";
                button.style.transform = "translateY(0)";

            }, 300);

        }

    }, 500);

}

showMessage();

// =========================
// STORY
// =========================

const sceneMessages = [

    "Hi, Minni... ❤️",

    "I have something\n\nto tell you...",

    "Not with words\n\nin a chat...",

    "Not with\n\na simple message...",

    "So...",

    "I wanted to make something\n\nspecial for you. ❤️",

    "Sometimes...",

    "people enter our lifes...",

    "without us realizing...",

    "how important\n\nthey'll become.",
    
    "for mee...",

    "You became\n\ntop most person. ❤️",

    "Thank you...",

    "for every smile...",

    "for every laugh...",

    "for every conversation...",

    "for every memory...",
    
    "especially for efforts you made to make me happy...",

    "for everything...",

    "Thank you\n\nfor being you. ❤️"

];

const landing = document.getElementById("landing");
const scene1 = document.getElementById("scene1");
const sceneText = document.getElementById("sceneText");

button.addEventListener("click", () => {

    landing.classList.add("fadeOut");

    setTimeout(() => {

        landing.style.display = "none";

        scene1.classList.remove("hidden");

        scene1.classList.add("fadeIn");

        playScene();

    }, 1000);

});

let sceneIndex = 0;

function playScene() {

    sceneText.style.opacity = 0;

    setTimeout(() => {

        sceneText.innerHTML = sceneMessages[sceneIndex].replace(/\n/g, "<br>");

        sceneText.style.opacity = 1;

        setTimeout(() => {

            sceneText.style.opacity = 0;

            setTimeout(() => {

                sceneIndex++;

                if (sceneIndex < sceneMessages.length) {

                    playScene();

                } else {

                    scene1.classList.add("hidden");

                    gallery.classList.remove("hidden");

                    gallery.classList.add("fadeIn");

                    showPhoto();

                }

            }, 1200);

        }, 2200);

    }, 700);

}

// =========================
// GALLERY
// =========================

const gallery = document.getElementById("gallery");
const memoryPhoto = document.getElementById("memoryPhoto");
const memoryCaption = document.getElementById("memoryCaption");
const galleryNext = document.getElementById("galleryNext");

const photos = [
    "assets/images/photo1.jpeg",
    "assets/images/photo2.jpeg",
    "assets/images/photo3.jpeg",
    "assets/images/photo4.jpeg"
];

const captions = [
    "✨ Time when we met,Where it all began... ❤️",
    "💖 Even today, you're the same innocent thalli,Still my favorite person to call 'Thalliiii.' 🤍🫂 ",
    "But i always see u like this little cute thalli,Even though u r grown up now, u r still my cute thalli.❤️",
    "Tried,but ni antha manchiga rale 🤧 "
];

let photoIndex = 0;

function showPhoto() {

    memoryPhoto.style.opacity = 0;
    memoryCaption.style.opacity = 0;

    setTimeout(() => {

        memoryPhoto.src = photos[photoIndex];
        memoryCaption.innerHTML = captions[photoIndex];

        memoryPhoto.style.opacity = 1;
        memoryCaption.style.opacity = 1;

        setTimeout(() => {

            photoIndex++;

            if (photoIndex < photos.length) {

                showPhoto();

            } else {

                galleryNext.classList.remove("hidden");

                galleryNext.style.display = "inline-block";

            }

        }, 5000);

    }, 600);

}

// =========================
// CONTINUE BUTTON
// =========================

galleryNext.addEventListener("click", () => {

    gallery.classList.add("fadeOut");

    setTimeout(() => {

        gallery.classList.add("hidden");

        letterPage.classList.remove("hidden");

        typeLetter();

    }, 1000);

});
const letterPage = document.getElementById("letterPage");
const letterText = document.getElementById("letterText");
const finishBtn = document.getElementById("finishBtn");

const letter = `Dear Minni ❤️,

Some people come into our lives unexpectedly,
yet they leave the biggest impact.

Its have being 5-6 yrs since we met,inni yrs ayina chinapati laga ipudu kuda entha cute ga chinna papa laagaa unaav telsa.
U r the person who stayed with me through thick and thin, and I am grateful for every moment u stayed with me❤️. 
Andaru nanni odilestuna kuda u told "nen unna kada",even nen mistakes chestuna kuda i don't even know how to thank you thalli.
u never let me down , u always supported me like no other did, u r like a pillar to me 
even though niku enni pbl unna u cares about me , am soo soo greatfull to u for being beside me in every though situation🫂.
U r the best one i won in life.
I don't wanna lose u in my life, u r the one who makes me happy and my sis forever❤️.
Don't trust blindly anyone especially in clg , choose ppl wisely thalli.. even though girls..
character ni wrong cheyadaniki min kuda patadhu , Becareful maaa
I Hope u succed everything in life and achieve all your dreams and goals, and get all the deservable things in life.
I will always be there to support you in every situation❤️🫂.


You have always been one of the most precious person in my life.

No matter where life takes us,
I hope your smile never fades.

Stay happy,
stay strong,
and always remember...

You'll always have a brother who cares about you alot and stand beside u what may the situation comes.
You're not only my sister, you're my best friend and confidant tooo..❤️
Happy Friendship Day.
Happy Sisters Day, 
To my supportive, loving, caring, and the best sister in the world ,
Thalli❤️`;

function typeLetter(){

    letterText.innerHTML = "";

    let i = 0;

    function typing(){

        if(i < letter.length){

            letterText.innerHTML += letter.charAt(i);

            i++;

            setTimeout(typing,40);

        }else{

            finishBtn.classList.remove("hidden");

            finishBtn.style.display="inline-block";

        }

    }

    typing();

}
const ending = document.getElementById("ending");

finishBtn.addEventListener("click", () => {

    letterPage.classList.add("fadeOut");

    setTimeout(() => {

        letterPage.classList.add("hidden");

        ending.classList.remove("hidden");
        ending.classList.add("fadeIn");

    }, 1000);

});

