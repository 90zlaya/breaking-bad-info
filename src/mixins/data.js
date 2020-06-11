export const apiMap = {
  baseUrl: "https://www.breakingbadapi.com/api",
  endpoints: {
    quotes: "/quotes",
    characters: "/characters",
  },
};

export const quotedAuthors = [
  "Walter White",
  "Skyler White",
  "Jesse Pinkman",
  "Saul Goodman",
  "Hank Schrader",
  "Mike Ehrmantraut",
  "Gus Fring",
  "Hector Salamanca",
];

export const urls = {
  developer: {
    url: "https://www.zlatanstajic.com/",
    title: "Zlatan Stajić",
  },
  phpLibrary: {
    url: "https://php-library.zlatanstajic.com/",
    title: "PHP Library",
  },
  social: {
    github: "https://github.com/90zlaya",
    linkedIn: "https://www.linkedin.com/in/90zlaya",
    youtube: "https://www.youtube.com/90zlaya",
    instagram: "https://instagram.com/90zlaya",
  },
};

export const navbarSections = {
  header: '#header',
  quotes: '#quotes',
  characters: '#characters',
  statistics: '#statistics',
  synopsis: '#synopsis',
  about: '#about',
};

export const routerRoutes = {
  home: {
    path: '/',
    name: 'home',
  },
  character: {
    path: '/character/:pageName',
    name: 'character',
  },
};
