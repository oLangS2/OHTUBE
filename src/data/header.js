import { CiBaseball } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { FaConnectdevelop } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa";
import { CiFries } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { PiCookingPotBold } from "react-icons/pi";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "홈",
        icon: <CiBaseball />,
        src: "/"
    },
    {
        title: "인기 급상승",
        icon: <FaFire />,
        src: "/today"
    },
    {
        title: "구독",
        icon: <FiYoutube />,
        src: "/developer"
    },
    {
        title: " Interactive Developer",
        icon: <FaConnectdevelop />,
        src: "/webd"
    },
    {
        title: " yerin Baek",
        icon: <FaRegHeart />,
        src: "/website"
    },
    {
        title: " Harry Styles",
        icon: <FaMusic />,
        src: "/gsap"
    },
    {
        title: "떡볶퀸",
        icon: <PiCookingPotBold />,
        src: "/port"
    },
    {
        title: "유튜브 클론 사이트",
        icon: <CiFries />,
        src: "/youtube"
    },
];

export const searchKeyword = [
    {
        title: "webstoryboy",
        src: "/search/webstoryboy"
    },
    {
        title: "HTML",
        src: "/search/html"
    },
    {
        title: "CSS",
        src: "/search/css"
    },
    {
        title: "JavaScript",
        src: "/search/javascript"
    },
    {
        title: "React.js",
        src: "/search/react.js"
    },
    {
        title: "Vue.js",
        src: "/search/vue.js"
    },
    {
        title: "Next.js",
        src: "/search/next.js"
    },
    {
        title: "Node.js",
        src: "/search/node.js"
    },
    {
        title: "SQL",
        src: "/search/sql"
    },
    {
        title: "portfolio",
        src: "/search/React Portfolio"
    },
    {
        title: "music",
        src: "/search/NewJeans"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/webstoryboy",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com/webstoryboy",
        icon: <AiFillYoutube />
    },
    {
        title: "codepen",
        url: "https://codepen.io/webstoryboy",
        icon: <AiOutlineCodepen />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/webstoryboy",
        icon: <AiOutlineInstagram />
    },
]