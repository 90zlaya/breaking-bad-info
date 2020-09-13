export default {
  config: {
    images: {
      root: 'images/',
      characters: 'characters/',
      defaultCharacter: 'character',
      defaultExtension: 'jpg',
      loaderImage: 'loader.gif'
    },
    slider: {
      numberOfSlides: 9
    },
    characters: {
      numberOfCharacters: 4
    }
  },
  routerRoutes: {
    home: {
      path: '/',
      name: 'home'
    },
    character: {
      path: '/character/:pageName',
      name: 'character'
    },
  },
  urls: {
    developer: {
      url: "https://www.zlatanstajic.com/",
      title: "Zlatan Stajić"
    },
    phpLibrary: {
      url: "https://php-library.zlatanstajic.com/",
      title: "PHP Library"
    },
    social: {
      github: "https://github.com/90zlaya",
      linkedIn: "https://www.linkedin.com/in/90zlaya",
      youtube: "https://www.youtube.com/90zlaya",
      instagram: "https://instagram.com/90zlaya"
    },
  },
  navbarSections: {
    header: '#header',
    quotes: '#quotes',
    characters: '#characters',
    statistics: '#statistics',
    synopsis: '#synopsis',
    about: '#about'
  },
  quotedAuthors: [
    "Walter White",
    "Skyler White",
    "Jesse Pinkman",
    "Saul Goodman",
    "Hank Schrader",
    "Mike Ehrmantraut",
    "Gus Fring",
    "Hector Salamanca"
  ]
};
