 import web from '../assets/img/web.svg';
 import seo from '../assets/img/seo.svg';
 import design from '../assets/img/graphics.svg';
 import social from '../assets/img/social.svg';
 import branding from '../assets/img/branding.svg';
 const services = [
    {
      "id": 1,
      "title": "WebDevelopment",
      "image": web,
      "alt": "WebDevelopment",
      "description": "We are a team",
      "redirect": `/ServiceDetail/Web`
    },
    {
      "id": 2,
      "title": "Business Development",
      "image": seo,
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
    },
    {
      "id": 5,
      "title": "Branding",
      "image": branding,
      "alt": "Branding",
      "description": "We are a team",
      "redirect": "https://www.google.com"
    }
  ]
  export default services;