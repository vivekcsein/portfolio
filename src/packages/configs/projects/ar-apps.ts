import type { Project } from "@/types/projects";

const arApps = [
  {
    key: "metaverse-walkthrough",
    title: "Metaverse Walkthrough",
    role: "Cocos Creator Developer",
    description: "A metaverse project to showcase video & image gallery",
    tags: ["Next.js", "TypeScript", "AR", "Three.js"],
    href: `https://youtu.be/i2lSu9ZnRtc`,
    createdAt: "24/08/2022",
    updatedAt: "28/12/2022",
    client: "open-source",
    keywords: ["ar", "cocos", "metaverse"],
    screenshots: [
      "https://raw.githubusercontent.com/vivekcsein/githost/main/images/projectsImages/techkilla/metawalk_tk.png",
    ],
  },
  {
    key: "retro-run",
    title: "Retro Run",
    role: "Augmented Reality Developer",
    description:
      "AR game on snapchat which i created & make the power of gaming",
    tags: ["AR", "JavaScript", "Gaming", "Retro"],
    href: "https://www.snapchat.com/lens/80f946497b0741d4af49647eed220931",
    createdAt: "11/07/2021",
    updatedAt: "21/07/2021",
    client: "open-source",
    keywords: ["AR", "JavaScript", "Gaming", "Retro"],
  },
  {
    key: "flipkart-football-game",
    title: "Flipkart Football Game",
    role: "Augmented Reality Developer",
    description:
      "AR game for flikart which integrates into feature section of flipkart app in ar camera",
    tags: ["AR", "JavaScript", "Gaming", "Retro"],
    href: "https://www.flipkart.com/camera-filters?lensId=7314b6a2-8e42-4399-9d9c-c0ed236ded99",
    createdAt: "09/10/2021",
    updatedAt: "31/10/2021",
    client: "open-source",
    keywords: ["AR", "JavaScript", "Gaming", "Retro"],
  },
  {
    key: "pineapple-run",
    title: "Pineapple Run",
    role: "Augmented Reality Developer",
    description: "A game simmilar to mario & flip bottal",
    tags: ["AR", "JavaScript", "Gaming", "Retro"],
    href: "https://www.snapchat.com/lens/a21eb1ab36df4a74bf31c522be8b031f",
    createdAt: "12/08/2021",
    updatedAt: "24/08/2021",
    client: "open-source",
    keywords: ["AR", "JavaScript", "Gaming", "Retro"],
  },
  {
    key: "cadbury-hand-tracking-game",
    title: "Cadbury Hand tracking game",
    role: "Augmented Reality Developer",
    description:
      "A game simillar to catching falling game but with a cache, User have to show dairy milk product to track image, hence no product no game",
    tags: ["AR", "JavaScript", "Gaming", "Retro"],
    href: "https://raw.githubusercontent.com/vivekcsein/githost/main/images/projectsImages/alivenow/cadbury_game.png",
    createdAt: "02/03/2022",
    updatedAt: "04/03/2022",
    client: "open-source",
    keywords: ["AR", "JavaScript", "Gaming", "Retro"],
  },
  {
    key: "lets-learn-asl",
    title: "Lets learn ASL",
    role: "Augmented Reality Developer",
    description:
      "A sign language project in which user can interact defen peoples  ",
    tags: ["AR", "JavaScript", "Gaming", "Retro"],
    href: "https://www.snapchat.com/lens/b10d8a39964d40a8b2218da3b3007933",
    createdAt: "11/06/2022",
    updatedAt: "15/06/2022",
    client: "open-source",
    keywords: ["AR", "JavaScript", "Gaming", "Retro"],
    screenshots: [
      "https://raw.githubusercontent.com/vivekcsein/githost/main/images/projectsImages/spotar/sign_lang.png",
    ],
  },
] satisfies Project[];

export default arApps;
