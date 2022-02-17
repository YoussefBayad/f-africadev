import Chat from "assets/widget/chat.svg";
import Community from "assets/widget/community.svg";
import Linkedin from "assets/widget/linkedin.svg";

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Community,
      altText: "chat",
      title: "Contact Me",
      description: " + 212 661 31 47 77",
    },
    {
      id: 2,
      iconSrc: Chat,
      altText: "Email",
      title: "Email Communication",
      description: "contact@afrikadev.com",
    },
    {
      id: 3,
      iconSrc: Linkedin,
      altText: "LinkedIn",
      title: "LinkedIn",
      a: "https://www.linkedin.com/company/african-business-development/",
    },
  ],
  menuItem: [
    {
      path: "/",
      label: "Home",
    },

    {
      path: "#about",
      label: "About",
    },

    {
      path: "#contact",
      label: "Contact",
    },
    {
      path: "https://www.facebook.com/africanbusinessdevelopment/",
      label: "Facebook",
    },
    {
      path: "https://www.linkedin.com/company/african-business-development/",
      label: "LinkedIn",
    },
  ],
};
