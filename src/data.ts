export const DRIVE_FOLDERS = {
  showreel:
    "https://drive.google.com/drive/folders/10pHQKV_grOMpGMeGggDjfd7VkCGmXnhi?usp=drive_link",
  featured:
    "https://drive.google.com/drive/folders/1Vb4_U4vDVRNfQP8sFK4SMdIlcUkEUDkd?usp=drive_link",
  longForm:
    "https://drive.google.com/drive/folders/1kWo60-cRCdE7ln-9VlRP-A-xBCSdH3nk?usp=drive_link",
  shortForm:
    "https://drive.google.com/drive/folders/109ZSG5mQUsyEDvcdgqvnYdAGMzDWgOA3?usp=drive_link",
  ugc:
    "https://drive.google.com/drive/folders/14pV9uiZ4J2WRcxD6OxrMVLLtSwXH87Y4?usp=drive_link",
} as const;
export const FRAME_IO =
  "https://next.frame.io/share/2b1430a6-730b-41a7-83c7-bbdd3f5f4939/view/7ffe0606-67eb-4c4d-b70c-387cf5948a35";

const B = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample";
export const SAMPLE_VIDEO_FALLBACK =
  "/videos/flower.mp4";

export type Work = {
  id: string;
  title: string;
  client: string;
  tag: string;
  duration: string;
  views?: string;
  src: string;
  fallbackSrc?: string;
  embedUrl: string;
  poster?: string;
  link?: string;
};

export const showreel = {
  src: `${B}/ForBiggerBlazes.mp4`,
  fallbackSrc: SAMPLE_VIDEO_FALLBACK,
  embedUrl: "",
  poster: `${B}/images/ForBiggerBlazes.jpg`,
  link: DRIVE_FOLDERS.showreel,
};

export const featured: Work[] = [
  {
    id: "f1",
    title: "AI DOCUMENTARY STYLE",
    client: "Neural Frames",
    tag: "Documentary",
    duration: "08:42",
    src: `${B}/ElephantsDream.mp4`,
    fallbackSrc: SAMPLE_VIDEO_FALLBACK,
    embedUrl: "https://drive.google.com/file/d/1yyzSp14TuZxHrbZTM4ki94y0_f8b8tyr/preview",
    poster: `${B}/images/ElephantsDream.jpg`,
    link: DRIVE_FOLDERS.featured,
  },
  {
    id: "f2",
    title: "YOUTUBE TUTORIAL",
    client: "CreatorLab",
    tag: "Education",
    duration: "12:05",
    src: `${B}/BigBuckBunny.mp4`,
    fallbackSrc: SAMPLE_VIDEO_FALLBACK,
    embedUrl: "https://drive.google.com/file/d/1zc9nuJvVPpxqwaph_CKyVmgh9CTC-jtS/preview",
    poster: `${B}/images/BigBuckBunny.jpg`,
    link: DRIVE_FOLDERS.featured,
  },
];

export const longForm: Work[] = [
  {
    id: "l1",
    title: "The Silent Build, Ep. 04",
    client: "Atlas Media",
    tag: "Long-form",
    duration: "16:20",
    src: `${B}/ForBiggerEscapes.mp4`,
    fallbackSrc: SAMPLE_VIDEO_FALLBACK,
    embedUrl: "https://drive.google.com/file/d/1p5Ss8FtJ42K3ZN_s7DwjHBorVLSTG-pd/preview",
    poster: `${B}/images/ForBiggerEscapes.jpg`,
    link: DRIVE_FOLDERS.longForm,
  },
  {
    id: "l2",
    title: "Founders Cut, Podcast Edit",
    client: "Velocity",
    tag: "Podcast",
    duration: "24:58",
    src: `${B}/ForBiggerFun.mp4`,
    fallbackSrc: SAMPLE_VIDEO_FALLBACK,
    embedUrl: "https://drive.google.com/file/d/13aTPtplqmLI_6h9Oy-ang8-1nwGHL90r/preview",
    poster: `${B}/images/ForBiggerFun.jpg`,
    link: DRIVE_FOLDERS.longForm,
  },
  {
    id: "l3",
    title: "Behind The Algorithm",
    client: "DeepNote",
    tag: "Documentary",
    duration: "11:36",
    src: `${B}/ForBiggerJoyrides.mp4`,
    fallbackSrc: SAMPLE_VIDEO_FALLBACK,
    embedUrl: "https://drive.google.com/file/d/1R9Gya9uEs8cvzsQUXT5Jq4NiulZFCGtd/preview",
    poster: `${B}/images/ForBiggerJoyrides.jpg`,
    link: DRIVE_FOLDERS.longForm,
  },
];

export const shortForm: Work[] = [
  {
    id: "s1",
    title: "Hook Retention Reel",
    client: "@growthkit",
    tag: "Reels",
    duration: "0:38",
    views: "1.2M",
    src: `${B}/Sintel.mp4`,
    fallbackSrc: SAMPLE_VIDEO_FALLBACK,
    embedUrl: "https://drive.google.com/file/d/1bGkAOwoadRY4IK7_NbDn5DnC-vcAGR27/preview",
    poster: "https://drive.google.com/thumbnail?id=1bGkAOwoadRY4IK7_NbDn5DnC-vcAGR27&sz=w800",
    link: DRIVE_FOLDERS.shortForm,
  },
  {
    id: "s2",
    title: "Motion Typography Cut",
    client: "@studiorare",
    tag: "TikTok",
    duration: "0:24",
    views: "840K",
    src: `${B}/SubaruOutbackOnStreetAndDirt.mp4`,
    fallbackSrc: SAMPLE_VIDEO_FALLBACK,
    embedUrl: "https://drive.google.com/file/d/10Lj3C8nY7nSaCOjpmZybx7LTgyiK429L/preview",
    poster: "https://drive.google.com/thumbnail?id=10Lj3C8nY7nSaCOjpmZybx7LTgyiK429L&sz=w800",
    link: DRIVE_FOLDERS.shortForm,
  },
  {
    id: "s3",
    title: "Podcast Clip, Viral",
    client: "@thelonggame",
    tag: "Shorts",
    duration: "0:51",
    views: "2.4M",
    src: `${B}/TearsOfSteel.mp4`,
    fallbackSrc: SAMPLE_VIDEO_FALLBACK,
    embedUrl: "https://drive.google.com/file/d/1o3nqNYenASwf2XiBArHzt4CRoDPGZkVF/preview",
    poster: "https://drive.google.com/thumbnail?id=1o3nqNYenASwf2XiBArHzt4CRoDPGZkVF&sz=w800",
    link: DRIVE_FOLDERS.shortForm,
  },
  {
    id: "s4",
    title: "Product Drop Teaser",
    client: "@northwear",
    tag: "Reels",
    duration: "0:19",
    views: "610K",
    src: `${B}/VolkswagenGTIReview.mp4`,
    fallbackSrc: SAMPLE_VIDEO_FALLBACK,
    embedUrl: "https://drive.google.com/file/d/1Ii69EsHP25myL7Vlk8WqSUDx7kUl1GHX/preview",
    poster: "https://drive.google.com/thumbnail?id=1Ii69EsHP25myL7Vlk8WqSUDx7kUl1GHX&sz=w800",
    link: DRIVE_FOLDERS.shortForm,
  },
  {
    id: "s5",
    title: "Faceless Story Edit",
    client: "@mindloop",
    tag: "Shorts",
    duration: "0:44",
    views: "3.1M",
    src: `${B}/WeAreGoingOnBullrun.mp4`,
    fallbackSrc: SAMPLE_VIDEO_FALLBACK,
    embedUrl: "https://drive.google.com/file/d/1YPQfwOLW-IpFhHi6GmKmlsXwJ6TXKGY1/preview",
    poster: "https://drive.google.com/thumbnail?id=1YPQfwOLW-IpFhHi6GmKmlsXwJ6TXKGY1&sz=w800",
    link: DRIVE_FOLDERS.shortForm,
  },
  {
    id: "s6",
    title: "Split Screen Breakdown",
    client: "@editsdaily",
    tag: "TikTok",
    duration: "0:33",
    views: "920K",
    src: `${B}/WhatCarCanYouGetForAGrand.mp4`,
    fallbackSrc: SAMPLE_VIDEO_FALLBACK,
    embedUrl: "https://drive.google.com/file/d/1U3xfu6dSj76OgDGZ80Ybtf-LNMU0S_0p/preview",
    poster: "https://drive.google.com/thumbnail?id=1U3xfu6dSj76OgDGZ80Ybtf-LNMU0S_0p&sz=w800",
    link: DRIVE_FOLDERS.shortForm,
  },
  {
    id: "s7",
    title: "Short-Form Edit 07",
    client: "Creator",
    tag: "Reels",
    duration: "--:--",
    views: "—",
    src: `${B}/Sintel.mp4`,
    fallbackSrc: SAMPLE_VIDEO_FALLBACK,
    embedUrl: "https://drive.google.com/file/d/1TIR5lDsySUL__Pv_x0o9M25ycNtOg3nd/preview",
    poster: "https://drive.google.com/thumbnail?id=1TIR5lDsySUL__Pv_x0o9M25ycNtOg3nd&sz=w800",
    link: DRIVE_FOLDERS.shortForm,
  },
  {
    id: "s8",
    title: "Short-Form Edit 08",
    client: "Creator",
    tag: "Shorts",
    duration: "--:--",
    views: "—",
    src: `${B}/Sintel.mp4`,
    fallbackSrc: SAMPLE_VIDEO_FALLBACK,
    embedUrl: "https://drive.google.com/file/d/1UYw9uE0vpp8KOv4wokq3uszdjdtuQ4Tm/preview",
    poster: "https://drive.google.com/thumbnail?id=1UYw9uE0vpp8KOv4wokq3uszdjdtuQ4Tm&sz=w800",
    link: DRIVE_FOLDERS.shortForm,
  },
];

export const ugc: Work[] = [
  {
    id: "u2",
    title: "App Demo Testimonial",
    client: "Finlytic",
    tag: "UGC",
    duration: "0:42",
    src: `${B}/ForBiggerEscapes.mp4`,
    fallbackSrc: SAMPLE_VIDEO_FALLBACK,
    embedUrl: "https://drive.google.com/file/d/1KZcqo_-tvOSaWv3mqmnDsWDBqAnbfr8F/preview",
    poster: `${B}/images/ForBiggerEscapes.jpg`,
    link: DRIVE_FOLDERS.ugc,
  },
  {
    id: "u3",
    title: "Unboxing Hook Ad",
    client: "Nooma",
    tag: "UGC",
    duration: "0:27",
    src: `${B}/ForBiggerJoyrides.mp4`,
    fallbackSrc: SAMPLE_VIDEO_FALLBACK,
    embedUrl: "https://drive.google.com/file/d/11_ecQnDaz4ELc-H4ZAoJmypmL1cVMKkT/preview",
    poster: `${B}/images/ForBiggerJoyrides.jpg`,
    link: DRIVE_FOLDERS.ugc,
  },
];

// Replace each `src` and `poster` above with final deliverable URLs. Keep
// `/videos/flower.mp4` as the local fallback or replace it with another direct MP4.
export const WORK_VIDEOS = {
  showreel,
  featured,
  longForm,
  shortForm,
  ugc,
} as const;

export const clients = [
  "NEURAL FRAMES",
  "CREATORLAB",
  "ATLAS MEDIA",
  "VELOCITY",
  "GLOWRX",
  "NOOMA",
  "DEEPNOTE",
  "LENSCRAFT",
  "NORTHWEAR",
  "FINLYTIC",
];

export const steps = [
  {
    n: "01",
    t: "Send Your Footage",
    d: "Drop raw files into a shared Drive or Frame.io folder. A one-paragraph brief is all we need to start.",
  },
  {
    n: "02",
    t: "We Craft The Cut",
    d: "Story-first editing, sound design, motion graphics and captions built entirely around retention.",
  },
  {
    n: "03",
    t: "Review & Deliver",
    d: "Timestamped feedback on Frame.io, two free revision rounds, then final files in every ratio you need.",
  },
];

export const socials = [
  ["Instagram", "https://instagram.com"],
  ["YouTube", "https://youtube.com"],
  ["X / Twitter", "https://x.com"],
  ["LinkedIn", "https://linkedin.com"],
];
