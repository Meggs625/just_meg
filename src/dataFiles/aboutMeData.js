import profilePic from "../assets/images/Profilepic.jpg";
import celloPic from "../assets/images/CharlieTheCello.jpg";
import dogs from "../assets/images/MyBabies.jpg";
import books from "../assets/images/books.jpg";
import hiking from "../assets/images/Greys.jpg";
import littleHearts from "../assets/images/LittleHearts.jpg";


const aboutMeData = [
    {
        id: crypto.randomUUID(),
        title: "My Developer Story",
        imgSrc: profilePic,
        alt: "Pic of woman in scarf",
        description: "In 2021, I took the leap to start a new career in software after discovering a love for Excel. The variety of things to learn in tech was enticing. Thus far, I've had a focus on the front-end due to the beauty of the user experience and a drive to focus on accessibility for all users. That being said, there are so many other avenues that I am excited to explore. I'm just starting a course to learn Ruby on Rails and will hopefully be getting exposure to React Native in short order. But that's just the tip of the iceburg.",
        linkText: null,
        link: null,
    },
    {
        id: crypto.randomUUID(),
        title: "Forever Learning",
        imgSrc: celloPic,
        alt: "Woman playing cello",
        description: "Just like with coding, I have a passion to continuously learn more about the world around me.  Having always wanted to learn the cello, I finally found a teacher last year. It's been a challenging and beautiful journey. My oldest daughter is also teaching me how to sew, as she is a sewing master. My bucketlist is expansive, including everything from traveling around the world to trying many new hobbies.",
        linkText: null,
        link: null,

    },
    {
        id: crypto.randomUUID(),
        title: "Animal Lover",
        imgSrc: dogs,
        alt: "Photo of dogs on beds",
        description: "Growing up, we have always had a dog. Two years ago, we rescued one dog from Soul Dog Rescue and it was a rewarding experience to see her begin to trust and love us. It wasn't long before she was right at home. There were so many other dogs still in the rescue, we opted to try out taking in another dog. Shortly after, we failed to foster a third dog; she was just too precious to give back! If I could, I would have as many dogs as possible, but my husband has wisely set a limit.... Check out Soul Dog ",
        linkText: "at their site",
        link: "https://www.souldog.org/",

    },
    {
        id: crypto.randomUUID(),
        title: "Book Flea",
        imgSrc: books,
        alt: "Heart made of books",
        description: "Staying in the vein of continuous learning, I've been a voracious reader since a young age. My mom always had a book on her nightstand and my grandmother had all the Nancy Drew series. I've enjoyed everything from memoirs to science fiction. Getting lost in a story, in a bit of history, in a different world is unlike anything else. My goal each year is at least two books per month. As of July, I've been able to knock out 41 with my favorite thus far being ",
        linkText: "The Woman They Could Not Silence: One Woman, Her Incredible Fight for Freedom, and the Men Who Tried to Make Her Disappear",
        link: "https://www.amazon.com/Woman-They-Could-Not-Silence-ebook/dp/B08LR174TM/ref=sr_1_1?dib=eyJ2IjoiMSJ9.aqmrbbeZf34cGslcC7ZMPbvqV7B8t5sPvlpU-dvif45yc_Vh0mea23p3C_zRRLNdD-V5EXuqw5_rmksnDBvLOYgl60NcvoFrZWZsPH13mzMVmOEzRTxXjUgOOI6khlKjdJQPbM5C9EJcK2QA30L8YIoFAkfkA-e3NQU_qshr2NuW6u2V621T_dDgLqFy6WTS-_ErRJTVlPSUGBE90LgWdc-mzQxD_HvGg3R0lfxCIWM.e076kjM98kLT8mhuG0SrhqFzb8ATUX_HQshy1iWs3kE&dib_tag=se&gad_source=1&hvadid=695429937555&hvdev=c&hvexpln=67&hvlocphy=9028880&hvnetw=g&hvocijid=11274134219949034902--&hvqmt=e&hvrand=11274134219949034902&hvtargid=kwd-1187503627379&hydadcr=6560_13184078&keywords=the+woman+they+could+not+silence&qid=1720298990&sr=8-1",
    },
    {
        id: crypto.randomUUID(),
        title: "Colorado Native",
        imgSrc: hiking,
        alt: "Mountains in the background",
        description: "Born and raised in this gorgeous state, I have a great appreciation for natural beauty. I am a hodophile with a long, and ever growing list of places to visit, but this state is my home. Although not a skier, I enjoy getting out and hiking, or grabbing the paddle board and heading to a lake. Nature and the outdoors are restorative. Colorado also boasts some delicious restaurants and unique brewries that have been fun to explore.",
        linkText: null,
        link: null,
    },
    {
        id: crypto.randomUUID(),
        title: "Little Heart Project",
        imgSrc: littleHearts,
        alt: "Yarn Hearts",
        description: "The Little Hearts Project believes in the power of a small but meaningful gesture. A friend of mine made it her mission to bring the project to Colorado after losing her nephew to suicide and has done so in a big way. I've been assisting where I can with community outreach, planning, and crocheting some hearts. Hopefully, we can bring a little light where it is needed in someone's life. For more information on the project, check out their site for ",
        linkText: "more information",
        link: "https://www.thelittleheartproject.org/",

    }
];

export default aboutMeData;