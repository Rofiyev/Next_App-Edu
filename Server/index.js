import img_1 from "../Image/user-1.png";
import img_2 from "../Image/user-2.png";
import img_3 from "../Image/user-3.png";
import img_4 from "../Image/user-4.png";
import img_5 from "../Image/user-5.png";

export const dashboardData = {
  teamsStrenght: {
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
      responsive: true,
      scales: {
        x: {
          tricks: {
            display: false,
          },
          grid: {
            display: false,
          },
        },
        y: {
          display: false,
          tricks: {
            display: true,
          },
        },
      },
    },
    labels: ["a", "b", "c", "d"],
    data: {
      labels: ["a", "b", "c", "d"],
      datasets: [
        {
          label: "Marketing",
          data: [1],
          backgroundColor: "#FABE7A",
          borderRadius: 10,
          categorySpacing: 0,
          stack: "1",
        },
        {
          label: "HR",
          data: [0, 5],
          backgroundColor: "#F6866A",
          borderRadius: 10,
          categorySpacing: 0,
          stack: "1",
        },
        {
          label: "Developer",
          data: [0, 0, 3, 0],
          backgroundColor: "#59E6F6",
          borderRadius: 10,
          categorySpacing: 0,
          stack: "1",
        },
        {
          label: "Design",
          data: [0, 0, 0, 10],
          backgroundColor: "#7661E2",
          borderRadius: 10,
          categorySpacing: 0,
          stack: "1",
        },
      ],
    },
  },
  projectDeliveries: {
    options: {
      responsive: true,
      plugins: {
        legend: false,
      },
      responsive: true,
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          max: 12,
          min: 0,
          tricks: {
            display: true,
            stepSize: 12,
          },
        },
      },
    },
    labels: [
      "Oct 2021",
      "Nov 2021",
      "Dec 2021",
      "Jan 2022",
      "Feb 2022",
      "Mar 2022",
    ],
    data: {
      labels: [
        "Oct 2021",
        "Nov 2021",
        "Dec 2021",
        "Jan 2022",
        "Feb 2022",
        "Mar 2022",
      ],
      datasets: [
        {
          data: [6, 7.7, 5, 6, 4.4, 3.9],
          borderColor: "#FB896B",
          backgroundColor: "transparent",
          pointBorderColor: "transparent",
          pointBorderWidth: 4,
          tension: 0.25,
          filter: "blur(10px)",
        },
        {
          data: [4.2, 3.2, 4.3, 4.9, 5.2, 3],
          borderColor: "#6956E5",
          backgroundColor: "transparent",
          pointBorderColor: "transparent",
          pointBorderWidth: 4,
          tension: 0.25,
        },
      ],
    },
  },
  employees: {
    date: "Aug 25-Sept 25",
    inactive: 254,
    active: 3000,
    total: 3254,
  },
  notification: [
    {
      img: img_1,
      heading: "Ellie joined team developers",
      info: "04 April, 2021 | 04:00 PM",
    },
    {
      img: img_2,
      heading: "Jenny joined team HR",
      info: "04 April, 2021 | 04:00 PM",
    },
    {
      img: img_3,
      heading: "Adam got employee of the month",
      info: "03 April, 2021 | 02:00 PM",
    },
    {
      img: img_4,
      heading: "Robert joined team design",
      info: "02 April, 2021 | 02:00 PM",
    },
    {
      img: img_5,
      heading: "Jack joined team design",
      info: "01 April, 2021 | 03:00 PM",
    },
  ],
};

export const teamsData = [
  {
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Verinon Richards",
    email: "verinon@gmail.com",
    slug: "/Verinon_Richards",
    country: "Unated States",
    phone: "+1-202-555-0123",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Alex Suprun",
    email: "alex_suprun@gmail.com",
    slug: "/Alex_Suprun",
    country: "Unated Kingdom",
    phone: "+44 1632 960089",
    about:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Marie Walters",
    email: "marie@gmail.com",
    slug: "/Marie_Walters",
    country: "Spain",
    phone: "+34 937 954 929",
    about:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Julian Wan",
    email: "julian@gmail.com",
    slug: "/Julian_Wan",
    country: "Germany",
    phone: "+49 30 118877664",
    about:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  },
  {
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Christian Buehner",
    email: "christian@gmail.com",
    slug: "/Christian_Buehner",
    country: "Greece",
    phone: "+350 21 5909 8924",
    about:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Courtney Cook",
    email: "courtney_cook@gmail.com",
    slug: "/Courtney_Cook",
    country: "Turkey",
    phone: "+90 242 079 7173",
    about:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    img: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Brooke Cagle",
    email: "brooke_cagle@gmail.com",
    slug: "/Brooke_Cagle",
    country: "Turkey",
    phone: "+90 242 802 8100",
    about:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.",
  },
];
