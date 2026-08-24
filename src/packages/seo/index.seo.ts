export const seo = {
  metadataBase: new URL("https://vivekcse.in"),
  title: {
    default: "VivekCSE",
    template: `%s | VivekCSE`,
  },
  description: "top 1% full stack developer",
  icons: "favicon.png",
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
  },
};
