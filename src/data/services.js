 import web from '../assets/img/website.png';
 import bd from '../assets/img/bd.png';
 import design from '../assets/img/design.png';
 import social from '../assets/img/social.png';
 const services = [
    {
      "id": 1,
      "title": "WebDevelopment",
      "image": web,
      "alt": "WebDevelopment",
      "description": "We are a team",
      "redirect": `/ServiceDetail/WebDevelopment`
    },
    {
      "id": 2,
      "title": "Business Development",
      "image": bd,
      "alt": "Branding",
      "description": "We are a team",
      "redirect": "https://www.google.com"
    },
    {
      "id": 3,
      "title": "GraphicsDesigning",
      "image": design,
      "alt": "Creative Design",
      "description": "We are a team",
      "redirect": "https://www.google.com"
    },
    {
      "id": 4,
      "title": "Social Media Marketing",
      "image": social,
      "alt": "Social Media Marketing",
      "description": "We are a team",
      "redirect": "https://www.google.com"
    }
  ]
  export default services;