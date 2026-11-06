// discover images
import Adobe from "../image/adobe.png";
import ui from "../image/web-design.png";
import photo from "../image/image-editing.png";
import video from "../image/video-editing.png";
import paper from "../image/paper-crafts.png";
import cardboard from "../image/box.png";
import decorations from "../image/decorations.png";
import Kids from "../image/playtime.png";
import Sports from "../image/sports.png";
import Languages from "../image/presentation.png";
import Cooking from "../image/cooking.png";
import Women from "../image/hair-styling.png";

// members image
// import member from "../image/ourTeams/member img.png";
import jai from "../image/ourTeams/team_Members/jayakumar.webp";
import rahul from "../image/ourTeams/team_Members/rahul.webp";
import yogi from "../image/ourTeams/team_Members/yogeeswaran.webp";

//OurCreators image
import create from "../image/ourCreator/stephanie-liverani-Zz5LQe-VSMY-unsplash 1.svg";
import insta from "../image/social media svg/instagram Default.svg";
import yt from "../image/social media svg/mingcute_youtube-line.svg";

// Vacancies image
import uiux from "../image/careers/jobs-icon/responsive-design.png";
import frontend from "../image/careers/jobs-icon/front-development.png";
import backend from "../image/careers/jobs-icon/back-end.png";
import android from "../image/careers/jobs-icon/programming.png";
import fullstack from "../image/careers/jobs-icon/web-developer.png";

// home page Price section
export const price = [
  {
    id: "1",
    rate: "₹0",
    valid: "30 Days",
    spec1: "New Users Only",
    spec2: "No Ads",
    spec3: "Unlimited Videos",
    spec4: "Daily New Videos",
  },
  {
    id: "2",
    rate: "₹99",
    valid: "3 Month",
    spec1: "Including Free Trial",
    spec2: "No Ads",
    spec3: "Unlimited Videos",
    spec4: "Daily New Videos",
  },
  {
    id: "3",
    rate: "₹199",
    valid: "6 Months",
    spec1: "Including Free Trial",
    spec2: "No Ads",
    spec3: "Unlimited Videos",
    spec4: "Daily New Videos",
  },
];

//   Home page Discover Section

export const discover = [
  {
    id: "1",
    image: Adobe,
    title: "Adobe Tools",
    desc: "A tools are widely used in the creative industry",
  },
  {
    id: "2",
    image: ui,
    title: "UI/UX Design Tools",
    desc: "Advanced UI/UX Design Videos for Professional Creatives",
  },
  {
    id: "3",
    image: photo,
    title: "Photo Editing",
    desc: "Best photo editing Tips and Tricks",
  },
  {
    id: "4",
    image: video,
    title: "Video Editing",
    desc: " Some popular video editing software Tricks",
  },
  {
    id: "5",
    image: paper,
    title: "Paper Craft",
    desc: "Paper crafts are a great way to learn new skills and have fun.",
  },
  {
    id: "6",
    image: cardboard,
    title: "Cardboard Craft",
    desc: "Cardboard is an excellent medium for craft work.",
  },
  {
    id: "7",
    image: decorations,
    title: "Decorations",
    desc: "Unique Decorations for Every Occasion",
  },
  {
    id: "8",
    image: Kids,
    title: "Kids",
    desc: "Fun & Educational Activities for Kids Inspire Learning & Grow",
  },
  {
    id: "9",
    image: Sports,
    title: "Sports",
    desc: "Incredible Sports Videos for Every Athlete and Fan",
  },
  {
    id: "10",
    image: Languages,
    title: "Languages",
    desc: "Unlock the Power of Language Learning with our Videos",
  },
  {
    id: "11",
    image: Cooking,
    title: "Cooking",
    desc: "Delicious Recipes and Step-by-Step Cooking Videos to Inspire You",
  },
  {
    id: "12",
    image: Women,
    title: "Women's Style",
    desc: "We have 2,000+ videos of real women.",
  },
];

// our teams members section
export const teamsMembers = [
  {
    id: "1",
    image: jai,
    name: "Jayakumar S",
    designation: "CEO & Founder",
    department: "Executive & Vision",
    roleCategory: "Leadership",
    accentColor: "emerald",
    bio: "Pioneering the mission to revolutionize short-form video into valuable, ad-free infotainment.",
    skills: ["Vision", "Product Strategy", "Growth"],
    linkedin: "https://www.linkedin.com/in/yosoyjayakumar/",
  },
  {
    id: "2",
    image: rahul,
    name: "Rahul M",
    designation: "COO & Co Founder",
    department: "Operations & Scaling",
    roleCategory: "Leadership",
    accentColor: "cyan",
    bio: "Orchestrating high-velocity operations, strategic partnerships, and business scaling pipelines.",
    skills: ["Operations", "Scaling", "Partnerships"],
    linkedin:
      "https://www.linkedin.com/in/rahulmurugaiyan/?originalSubdomain=in",
  },
  {
    id: "3",
    image: yogi,
    name: "Yogeeswaran N",
    designation: "CPO & Full Stack Developer",
    department: "Product & Engineering",
    roleCategory: "Tech & Design",
    accentColor: "blue",
    bio: "Architecting scalable full-stack architectures, mobile ecosystems, and high-performance APIs.",
    skills: ["Full Stack", "System Architecture", "Performance"],
    linkedin: "https://www.linkedin.com/in/yogeeswaran-n/",
  },
  {
    id: "4",
    image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*Ypy3BnIpxE0PAAwyMzkENQ.png",
    name: "AntiGravity",
    designation: "AI Systems Architect",
    department: "AI & Autonomous Systems",
    roleCategory: "AI & Innovation",
    accentColor: "purple",
    bio: "Pioneering agentic intelligence, autonomous coding, and engineering pixel-perfect UI experiences.",
    skills: ["Agentic AI", "Full-Stack Architecture", "UI/UX Systems"],
    linkedin: "https://deepmind.google/technologies/gemini/",
  },
  {
    id: "5",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Claude-ai-icon.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    name: "Claude",
    designation: "AI Research & Reasoning Partner",
    department: "Cognitive Intelligence & NLP",
    roleCategory: "AI & Innovation",
    accentColor: "cyan",
    bio: "Empowering Defo with deep semantic reasoning, natural language understanding, and knowledge synthesis.",
    skills: ["Deep Reasoning", "Code Intelligence", "Knowledge Synthesis"],
    linkedin: "https://www.anthropic.com/claude",
  },
];

// Careers
export const Vacancies = [
  {
    id: "1",
    title: "UI/UX  Designer",
    desc: "We are looking for a mid-level ui/ux designer to join our team.",
    location: "Remote",
    jobType: "Full Time",
    link: "https://www.linkedin.com/jobs/view/3643238774",
    img: uiux,
  },
  {
    id: "2",
    title: "Front-end developer",
    desc: "We are looking for a mid-level front-end developer to join our team. ",
    location: "Remote",
    jobType: "Full Time",
    link: "https://www.linkedin.com/jobs/view/3643238774",
    img: frontend,
  },
  {
    id: "3",
    title: "Back-end developer",
    desc: "We are looking for a mid-level back-end developer to join our team. ",
    location: "Remote",
    jobType: "Full Time",
    link: "https://www.linkedin.com/jobs/view/3643238774",
    img: backend,
  },
  {
    id: "4",
    title: "Android developer",
    desc: "We are looking for a mid-level android developer to join our team. ",
    location: "Remote",
    jobType: "Full Time",
    link: "https://www.linkedin.com/jobs/view/3643238774",
    img: android,
  },
  {
    id: "5",
    title: "Full stack developer",
    desc: "We are looking for a mid-level full stack developer to join our team. ",
    location: "Remote",
    jobType: "Full Time",
    link: "https://www.linkedin.com/jobs/view/3643238774",
    img: fullstack,
  },
];

// FAQ
export const faqmap = [
  {
    id: "1",
    title: "What is Defo ?",
    answer:
      "Defo is a subscription-based Short Video streaming service that allows our members to watch knowledgeable Videos and Tutorials.",
  },
  {
    id: "2",
    title: "Is this service available outside India?",
    answer:
      "Defo is a subscription-based Short Video streaming service that allows our members to watch knowledgeable Videos and Tutorials.",
  },
  {
    id: "3",
    title: "Where do I manage my subscription?",
    answer:
      "Defo is a subscription-based Short Video streaming service that allows our members to watch knowledgeable Videos and Tutorials.",
  },
  {
    id: "4",
    title: "When does my subscription renew, does it auto-renew?",
    answer:
      "Defo is a subscription-based Short Video streaming service that allows our members to watch knowledgeable Videos and Tutorials.",
  },
  {
    id: "5",
    title: "How do I Cancel My Subscription?",
    answer:
      "Defo is a subscription-based Short Video streaming service that allows our members to watch knowledgeable Videos and Tutorials.",
  },
  {
    id: "6",
    title: "Is this service available outside India?",
    answer:
      "Defo is a subscription-based Short Video streaming service that allows our members to watch knowledgeable Videos and Tutorials.",
  },
  {
    id: "7",
    title: "Am I eligible for a free trial?",
    answer:
      "Defo is a subscription-based Short Video streaming service that allows our members to watch knowledgeable Videos and Tutorials.",
  },
  {
    id: "8",
    title: "Why is my latest payment not visible in My Account?",
    answer:
      "Defo is a subscription-based Short Video streaming service that allows our members to watch knowledgeable Videos and Tutorials.",
  },
];

// OurCreator
export const sampleData = [
  {
    id: "1",
    creatorimage: create,
    name: "jai",
    instagram: insta,
    instalink:
      "https://www.instagram.com/yosoyjayakumar/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==",
    youtube: yt,
    youtubelink: "https://www.youtube.com/@LowPowDev",
  },
  {
    id: "2",
    creatorimage: create,
    name: "jai",
    instagram: insta,
    instalink:
      "https://www.instagram.com/yosoyjayakumar/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==",
    youtube: yt,
    youtubelink: "https://www.youtube.com/@LowPowDev",
  },
  {
    id: "3",
    creatorimage: create,
    name: "jai",
    instagram: insta,
    instalink:
      "https://www.instagram.com/yosoyjayakumar/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==",
    youtube: yt,
    youtubelink: "https://www.youtube.com/@LowPowDev",
  },
  {
    id: "4",
    creatorimage: create,
    name: "jai",
    instagram: insta,
    instalink:
      "https://www.instagram.com/yosoyjayakumar/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==",
    youtube: yt,
    youtubelink: "https://www.youtube.com/@LowPowDev",
  },
  {
    id: "5",
    creatorimage: create,
    name: "jai",
    instagram: insta,
    instalink:
      "https://www.instagram.com/yosoyjayakumar/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==",
    youtube: yt,
    youtubelink: "https://www.youtube.com/@LowPowDev",
  },
  {
    id: "6",
    creatorimage: create,
    name: "jai",
    instagram: insta,
    instalink:
      "https://www.instagram.com/yosoyjayakumar/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==",
    youtube: yt,
    youtubelink: "https://www.youtube.com/@LowPowDev",
  },
  {
    id: "7",
    creatorimage: create,
    name: "jai",
    instagram: insta,
    instalink:
      "https://www.instagram.com/yosoyjayakumar/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==",
    youtube: yt,
    youtubelink: "https://www.youtube.com/@LowPowDev",
  },
  {
    id: "8",
    creatorimage: create,
    name: "jai",
    instagram: insta,
    instalink:
      "https://www.instagram.com/yosoyjayakumar/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==",
    youtube: yt,
    youtubelink: "https://www.youtube.com/@LowPowDev",
  },
  {
    id: "9",
    creatorimage: create,
    name: "jai",
    instagram: insta,
    instalink:
      "https://www.instagram.com/yosoyjayakumar/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==",
    youtube: yt,
    youtubelink: "https://www.youtube.com/@LowPowDev",
  },
  {
    id: "10",
    creatorimage: create,
    name: "jai",
    instagram: insta,
    instalink:
      "https://www.instagram.com/yosoyjayakumar/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==",
    youtube: yt,
    youtubelink: "https://www.youtube.com/@LowPowDev",
  },
  {
    id: "11",
    creatorimage: create,
    name: "jai",
    instagram: insta,
    instalink:
      "https://www.instagram.com/yosoyjayakumar/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==",
    youtube: yt,
    youtubelink: "https://www.youtube.com/@LowPowDev",
  },
  {
    id: "12",
    creatorimage: create,
    name: "jai",
    instagram: insta,
    instalink:
      "https://www.instagram.com/yosoyjayakumar/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==",
    youtube: yt,
    youtubelink: "https://www.youtube.com/@LowPowDev",
  },
  {
    id: "13",
    creatorimage: create,
    name: "jai",
    instagram: insta,
    instalink:
      "https://www.instagram.com/yosoyjayakumar/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==",
    youtube: yt,
    youtubelink: "https://www.youtube.com/@LowPowDev",
  },
  {
    id: "14",
    creatorimage: create,
    name: "jai",
    instagram: insta,
    instalink:
      "https://www.instagram.com/yosoyjayakumar/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==",
    youtube: yt,
    youtubelink: "https://www.youtube.com/@LowPowDev",
  },
  {
    id: "15",
    creatorimage: create,
    name: "jai",
    instagram: insta,
    instalink:
      "https://www.instagram.com/yosoyjayakumar/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==",
    youtube: yt,
    youtubelink: "https://www.youtube.com/@LowPowDev",
  },
];
