import BSM from "../../assets/images/BSM.png";
import CityWeather from "../../assets/images/CityWeather.png";
import PlaylistBot from "../../assets/images/PlaylistBot.png";

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
    title: "CityWeather Web App",
    shortDesc: "Weather Forecasting App",
    buttonText: "See It Live",
    link: "https://frankobedi-cityweather.vercel.app/",
    linkTarget: "_blank",
  },
  {
    image: PlaylistBot,
    isVideo: false,
    title: "Playlist Bot",
    shortDesc:
      "Discord/Selenium web bot that automatically adds songs to a Spotify playlist",
    longDesc: `
    Implemented a Discord Bot using Python to respond to user commands and 
    collect song requests from friends in a discord chat and save them to a database.
    Utilized Selenium web automation tool to create a web bot to retrieve songs 
    from database and add them to a Spotify playlist. `,
    buttonText: "Read More",
    link: "#",
    linkTarget: "_self",
  },
];
