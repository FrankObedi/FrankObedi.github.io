import BSM from "../../assets/images/BSM.png";
import CityWeather from "../../assets/images/CityWeather.png";
import Connect4 from "../../assets/images/Connect4.png";

export const ProjectsInfo = [
  {
    image: BSM,
    isVideo: true,
    title: "Bike Shop Manager",
    shortDesc: ` 
      Bike Shop Manager (BSM) is a work order management system for
      small bike shop businesses. It's a desktop application built
      using Java, JavaFx, and SQL.
      `,

    longDesc: `
      This is a project I made in my Software Engineering course with 2
      other students using agile development methodology. 
      Bike Shop Manager (BSM) is a work order management system for
      small bike shop businesses. Bike Shop Manager is a desktop based
      application that provides a GUI for stakeholders that enables
      them to view a list of work orders, customers, and products 
      for repair. The interface enables stakeholders to make changes
      to any work order, customer or item for repair through CRUD 
      operation. All this information is stored on a SQL database created
      using MySQL Workbench.
    `,
    buttonText: "Read More",
    link: "#",
    linkTarget: "_self",
  },
  {
    image: CityWeather,
    isVideo: false,
    title: "CityWeather App",
    shortDesc:
      "Gained hands-on experience with RESTful APIs, data handling, and web development by developing a weather app with Flask and the OpenWeatherMap API.",
    buttonText: "Live Demo",
    link: "https://city-weather-app-virid.vercel.app/",
    linkTarget: "_blank",
  },
  {
    image: Connect4,
    isVideo: false,
    title: "Connect 4 AI",
    shortDesc: "Simple yet unbeatable AI for the classic game of Connect 4",
    longDesc: `
    Implemented an AI system that plays the classic game of Connect 4 using Python and Flask. 
    I'm currently working on putting the project online so people can access and play the game.`,
    buttonText: "Read More",
    link: "#",
    linkTarget: "_self",
  },
];
