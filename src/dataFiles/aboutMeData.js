import profilePic from "../assets/images/Profilepic.jpg";
import celloPic from "../assets/images/CharlieTheCello.jpg";
import dogs from "../assets/images/MyBabies.jpg";
import books from "../assets/images/books.jpg";
import hiking from "../assets/images/Greys.jpg";
import littleHearts from "../assets/images/LittleHearts.jpg";


const aboutMeData = [
    {
        id: crypto.randomUUID(),
        title: "Developer Origin Story",
        imgSrc: profilePic,
        alt: "Pic of woman in scarf",
        description: "In 2021, I took a leap with a new career in software after discovering a love for Excel. I quickly enrolled in a local accredited coding school, Turing Software Development and Design. After 7 months of grueling study and 70 - 80 hour weeks, I graduated with my Frontend Engineering certification. Thus far, I've continued a focus on the frontend. I've leaned into my passion for both user experience and accessibility. An easy user flow can make or break a site. That being said, there are so many other avenues that I am excited to explore. I'm just starting a course to learn Ruby on Rails and backend structure. There is never a shortage of things to learn.",
        linkText: null,
        link: null,
    },
    {
        id: crypto.randomUUID(),
        title: "Constant Curiosity",
        imgSrc: celloPic,
        alt: "Woman playing cello",
        description: "Just like with coding, I am constantly curious about the world around me. There is always something new to learn and my list of hobbies is never ending. Most recently, I've begun to learn how to play the cello, which I completely underestimated the difficulty before I started. The cello resonates a rich and soulful sound, which I hope one day to find. In the meantime, my family continues to accept the screeching that emanates from my office. I've also recently re-discovered the art of crochet and have joined a local crochet circle. This amazing group has helped my skills improve and I've begun more challenging projects. Currently working furiously to wrap up Christmas presents before that deadline.",
        linkText: null,
        link: null,

    },
    {
        id: crypto.randomUUID(),
        title: "Deeply Dog Devoted",
        imgSrc: dogs,
        alt: "Photo of dogs on beds",
        description: "A dog completes a home. No matter the size or breed, they bring so much love into a house. Two years ago, we rescued a new pup that had been returned to the shelter twice prior. She was trepidatious at first, but over time and with training, eased into the house beautifully. It was such a rewarding experience to watch her trust in us grow until she became my full time shadow. A year after she was settled in, we ended up taking in two more dogs from the same shelter in quick succession. Although our third dog was supposed to only be fostered, in three short days, we couldn't let that little face go! If I could, I would have as many dogs as possible, but my husband has wisely set a limit.... Check out Soul Dog at ",
        linkText: "their site",
        link: "https://www.souldog.org/",

    },
    {
        id: crypto.randomUUID(),
        title: "Book Flea",
        imgSrc: books,
        alt: "Heart made of books",
        description: "I've been a voracious reader since a young age. My mom always had a book stack on her nightstand and my grandmother had all the Nancy Drew series, which my cousins and I devoured. I've enjoyed everything from memoirs to science fiction. Getting lost in a story, in a bit of history, in a different world, is unlike anything else. Although my 'Want to Read' list is growing faster than I can read, I will continue my efforts to make it through as many as possible! It brings me great joy to see my written word appreciation passed to my youngest kiddo as well. We have regular Reading Parties, snuggled up together with our current reads. As of November, I've been able to knock out 62 with my favorite thus far being ",
        linkText: "The Woman They Could Not Silence: One Woman, Her Incredible Fight for Freedom, and the Men Who Tried to Make Her Disappear",
        link: "https://www.amazon.com/Woman-They-Could-Not-Silence-ebook/dp/B08LR174TM/ref=sr_1_1?dib=eyJ2IjoiMSJ9.aqmrbbeZf34cGslcC7ZMPbvqV7B8t5sPvlpU-dvif45yc_Vh0mea23p3C_zRRLNdD-V5EXuqw5_rmksnDBvLOYgl60NcvoFrZWZsPH13mzMVmOEzRTxXjUgOOI6khlKjdJQPbM5C9EJcK2QA30L8YIoFAkfkA-e3NQU_qshr2NuW6u2V621T_dDgLqFy6WTS-_ErRJTVlPSUGBE90LgWdc-mzQxD_HvGg3R0lfxCIWM.e076kjM98kLT8mhuG0SrhqFzb8ATUX_HQshy1iWs3kE&dib_tag=se&gad_source=1&hvadid=695429937555&hvdev=c&hvexpln=67&hvlocphy=9028880&hvnetw=g&hvocijid=11274134219949034902--&hvqmt=e&hvrand=11274134219949034902&hvtargid=kwd-1187503627379&hydadcr=6560_13184078&keywords=the+woman+they+could+not+silence&qid=1720298990&sr=8-1",
    },
    {
        id: crypto.randomUUID(),
        title: "Wild Open Spaces",
        imgSrc: hiking,
        alt: "Mountains in the background",
        description: "Born and raised in the gorgeous state of Colorado, I have a great appreciation for natural beauty. I am a hodophile with a long, and ever growing list of places to visit, but this state is, and will always be, my home. Although not a great skier, and never a snowboarder, I enjoy getting out for a hike, or grabbing the paddle board and heading to a lake. Nature and the outdoors are restorative to my soul. Although it is hard to admit, it wasn't until 2019 that I conquered my first Colorado 14er. On a crisp August morning, my cousin and I summited Grey's Peak and took in the indescribable view. It truly felt like the top of the world. We are shooting for the combination of Grey's and Torrey's in 2025.",
        linkText: null,
        link: null,
    },
    {
        id: crypto.randomUUID(),
        title: "Community Centered",
        imgSrc: littleHearts,
        alt: "Yarn Hearts",
        description: "The Little Hearts Project believes in the power of a small but meaningful gesture. A friend of mine made it her mission to bring the project into Colorado after losing her nephew to suicide and has done so in a big way. I've been assisting where I can as her co-director with community outreach, planning, teaching crochet, and crocheting hearts myself. Hopefully, we can bring a little light where it is needed in someone's life. Thus far, we've set up hearts in over 25 businesses and schools with a substantial amount of community support. Local crocheters are making hearts for the cause and even high school students are learning to crochet and contribute! Check out their site for ",
        linkText: "more information",
        link: "https://www.thelittleheartproject.org/",

    }
];

export default aboutMeData;