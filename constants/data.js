const userData = {
    githubUsername: "Markand4",
    name: "Mark Kurpiel",
    designation: "Software Engineer",
    avatarUrl: "/avatar.png",
    email: "markkurpiel@gmail.com",
    phone: "+1(630)-631-3769",
    address: "Phoenix, AZ",
    about: {
      title:
        "I'm a software engineer that loves a challenge",
      description: [
        `I've loved software engineer since I started in High School and that passion has never gone away`,
        `I started my career as a full stack developer and then moved into an automation and product development role post college`,
        `I've always taken initiative and thought outside the box, at my current role many of the old manual processes using Python and bash`,
        `during the log4j vun issue, I created automation scripts that fixed the vunrability across hundreds of servers using Python and Jenkins`
      ]
    },
    resumeUrl:
      "https://drive.google.com/file/d/1Nxmz-RBlgSE95V4ARcll2yKHBZhMbWl_/view?usp=drive_link",
    socialLinks: {
      github: "https://github.com/markand4/",
      linkedin: "https://www.linkedin.com/in/mark-kurpiel/"
    },
    projects:[
      {
        title: "Python DJ Mag Spotify Playlist Generator",
        repoLink: "https://github.com/markand4/Python-DJ-Mag-Spotify-Playlist-Generator#python-dj-mag-spotify-playlist-generator",
        description:
          "Python script that allows user to login to their spotify and create a spotify playlist of DJ Mag's top 100 artists of a given year by user input",
        backgroundImage: "./PythonSpotify.PNG",
      },
      {
        title: "Next.js DJ Mag Spotify Playlist Generator",
        repoLink: "https://github.com/markand4/SpotifyPlaylistGenNextjs",
        description:
          "Next.js webapplication that allows user to login to their spotify and create a spotify playlist of DJ Mag's top 100 artists of a given year by user",
        backgroundImage: "./spotifyNextjs.png",
      }
        
    ]
  };
  
  export default userData;
