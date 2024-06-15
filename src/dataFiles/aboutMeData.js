import me from "../assets/Profilepic.jpg";
import dogs from "../assets/dogs.jpg";
import books from "../assets/books.jpg";
import hiking from "../assets/hiking.jpg";
import family from "../assets/family.jpg";


const aboutMeData = [
    {
        id: crypto.randomUUID(),
        title: "My Developer Story",
        imgSrc: me,
        alt: "Pic of woman in scarf",
        description: "I made the career change to be a developer in 2021 after realizing a love for Excel. The concept of always having something new to learn was enticing. So far, I've had a focus on the frontend because of the beauty of the user experience and considering what would be beneficial for a user. There are so many other avenues I'm excited to explore!"
    }, 
    {
        id: crypto.randomUUID(),
        title: "Forever Learning",
        imgSrc: me,
        alt: "Pic of woman in scarf",
        description: "Just like in coding, I have a passion to continuously try to learn more about the world around me and enjoy the stuff of living. Having always wanted to learn the cello, I finally found a teacher last year. Just like any coding language, all languages have always fascinated me. Ich lerne gerade Deutsch mit Duolingo and have an interest in starting ASL. "
    }, 
    {
        id: crypto.randomUUID(),
        title: "Animal Lover",
        imgSrc: dogs,
        alt: "Photo of dogs",
        description: "We have three rescue dogs, and if I could, I would adopt 100 more!"
    }, 
    {
        id: crypto.randomUUID(),
        title: "Book Flea",
        imgSrc: books,
        alt: "Heart made of books",
        description: "Since a young age, I've been a voracious reader. I've enjoyed everything from memoirs to science fiction. Getting lost in a story, in a bit of history, in a different world is unlike anything else."
    }, 
    {
        id: crypto.randomUUID(),
        title: "Colorado Native",
        imgSrc: hiking,
        alt: "Mountains in the background",
        description: "Born and raised in these beautiful mountings. I am a hodophile with a long, and ever growing list of places to visit, but this state is my home. Although not a skier, I enjoy getting out and hiking, or grabbing the paddle board and heading to a lake. Nature and the outdoors are restorative."
    }, 
    {
        id: crypto.randomUUID(),
        title: "Family Strong",
        imgSrc: family,
        alt: "Hearts",
        description: "Having a community and being a part of a great group of people is imperative. I'm happy to have a beautiful, supportive family and close network of friends that are like family. "
    }
];

export default aboutMeData;