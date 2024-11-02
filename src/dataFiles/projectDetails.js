import stoicallyWise from "../assets/images/stoically_wise.png";
import spaceXStretch from "../assets/images/space_x_stretch.png";
import tomatesPodres from "../assets/images/tomates_podres.png";

const projectDetails = [
    {
        id: crypto.randomUUID(),
        title: "Stoically Wise",
        img: stoicallyWise,
        link: "https://github.com/Meggs625/stoically-wise",
        alt: "Opening form snapshot"
    },
    {
        id: crypto.randomUUID(),
        title: "Space-X Stretch",
        img: spaceXStretch,
        link: "https://github.com/Meggs625/spacex-stretch",
        alt: "Rocket blasting off snapshot",
    },
    {
        id: crypto.randomUUID(),
        title: "Tomates Podres",
        img: tomatesPodres,
        link: "https://github.com/Meggs625/tomates-podres",
        alt: "Movie poster display snapshot"
    }
];

export default projectDetails;