import { Fira_Code, Poppins, Roboto } from "next/font/google";

const Sans = Roboto({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  display: "swap",
});

const Serif = Poppins({
  variable: "--font-plex-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const Mono = Fira_Code({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export default {
  sans: Sans.variable,
  serif: Serif.variable,
  mono: Mono.variable,
};
