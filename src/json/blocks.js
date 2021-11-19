export const blocks = [
  {
    component: "button",
    uuid: "123",
  },
  {
    component: "hero",
    center: false,
    fullscreen: false,
    label: "This is a Label",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero aliquam, natus quae architecto hic quod!",
    buttons: [
      {
        text: "Button Text",
        modal: "123",
        variant: "primary",
        //   href: '/button-href',
        //   target: '',
      },
      {
        text: "Link Text",
        href: "/link-href",
        target: "__blank",
      },
    ],
    image: {
      src: "https://d25r5txdw1c9o7.cloudfront.net/fit-in/1920x1200/files/7ad98ddacea4aff50bfddf8544076d82.jpg",
    },
  },
  // {
  //     component: 'feature',
  //     invert: false,
  //     label: 'The label',
  //     title: 'Title ipsum dolor sit amet consectetur',
  //     subtitle: 'Subtitle ipsum dolor sit amet consectetur adipisicing elit. Ullam vero aliquam, natus quae architecto hic quod!',
  //     buttons: [
  //         {
  //             text: 'Button Text',
  //             href: '/button-href',
  //             target: '',
  //             variant: 'primary'
  //         },
  //         {
  //             text: 'Link Text',
  //             href: '/link-href',
  //             target: '__blank'
  //         }
  //     ],
  //     image: {
  //         src: 'https://d25r5txdw1c9o7.cloudfront.net/fit-in/650x450/files/1cd9f6c0d0966a8086978a85fb6a0a7e.jpg'
  //     }
  // }
];

export const modals = [
  {
    uuid: "123",
    title: "My modal",
    blocks: [
      {
        component: "hero",
        center: false,
        fullscreen: false,
        label: "This is a Label",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero aliquam, natus quae architecto hic quod!",
        buttons: [
          {
            text: "Button Text",
            href: "/button-href",
            target: "",
            variant: "primary",
          },
          {
            text: "Link Text",
            href: "/link-href",
            target: "__blank",
          },
        ],
        image: {
          src: "https://d25r5txdw1c9o7.cloudfront.net/fit-in/1920x1200/files/7ad98ddacea4aff50bfddf8544076d82.jpg",
        },
      },
      {
        component: "feature",
        invert: false,
        label: "The label",
        title: "Title ipsum dolor sit amet consectetur",
        subtitle:
          "Subtitle ipsum dolor sit amet consectetur adipisicing elit. Ullam vero aliquam, natus quae architecto hic quod!",
        buttons: [
          {
            text: "Button Text",
            href: "/button-href",
            target: "",
            variant: "primary",
          },
          {
            text: "Link Text",
            href: "/link-href",
            target: "__blank",
          },
        ],
        image: {
          src: "https://d25r5txdw1c9o7.cloudfront.net/fit-in/650x450/files/1cd9f6c0d0966a8086978a85fb6a0a7e.jpg",
        },
      },
    ],
  },
];
