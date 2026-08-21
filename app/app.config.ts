export default defineAppConfig({
  ui: {
    colors: {
      primary: "sky",
      neutral: "zinc",
    },
  },
  footer: {
    credits: `© ${new Date().getFullYear()} Timothy Zykov`,
    links: [
      {
        label: "GitHub",
        to: "https://github.com/syrochki",
        target: "_blank",
        icon: "i-simple-icons-github",
      },
      {
        label: "Telegram",
        to: "https://t.me/palaroid800",
        target: "_blank",
        icon: "i-simple-icons-telegram",
      },
      {
        label: "Email",
        to: "mailto:syr0chk1@proton.me",
        icon: "i-lucide-mail",
      },
    ],
  },
});
