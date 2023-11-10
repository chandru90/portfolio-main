import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact,FaNodeJs,FaGlobe,FaFeatherAlt,FaBity,FaGithub} from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
 
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
  },
  {
    id: nanoid(),
    title: 'NodeJS',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
  },
  {
    id: nanoid(),
    title: 'MangoDB',
    icon: <FaFeatherAlt className='h-16 w-16 text-emerald-500' />,
  },
  {
    id: nanoid(),
    title: 'Redux',
    icon: <FaBity className='h-16 w-16 text-emerald-500' />,
  },
  {
    id: nanoid(),
    title: 'Github',
    icon: <FaGithub className='h-16 w-16 text-emerald-500' />,
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://newmernrecipe.vercel.app',
    github: 'https://github.com/chandru90/newmernrecipe/tree/master',
    title: 'Food Recipe',
    text: 'A MERN stack food recipe app with JWT authentication allows users to explore, create, and save recipes using REST API.  The app provides a platform for users to browse a diverse collection of recipes, add their own recipes, and engage with the community. Each recipe includes details such as ingredients with step-by-step instructions.Users can personalize their experience by saving favorite recipes and contributing to the recipe database.',  
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://simple-weather-app-mu-two.vercel.app/',
    github: 'https://github.com/chandru90/simple-weather-app/tree/master',
    title: 'Weather Application',
    text:'A MERN stack weather application offers users real-time weather information with a seamless and interactive user interface. Leveraging Express.js, React, and Node.js, the app enables users to input locations and receive current weather updates.  The React front-end provides an intuitive and responsive interface for users to view weather conditions, temperature, and forecasts. Users can explore weather details for different locations, enhancing their ability to plan activities based on accurate and up-to-date meteorological information.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-foodcart.vercel.app/',
    github: 'https://github.com/chandru90/react-foodcart',
    title: 'Food Cart',
    text:'A React-based food cart application provides users with a convenient platform to order food seamlessly. The user-friendly interface allows customers to browse through a variety of dishes and add items to their cart.Users can customize their orders, view item details, and easily manage quantities. The application utilizes state management to keep track of the users cart and updates in real-time.',
 },
];
