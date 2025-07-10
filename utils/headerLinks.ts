const headerLinks = [
  {
    label: "Products",
    to: "/product",
    children: [
      { label: "Product 1", to: "/product/1" },
      { label: "Product 2", to: "/product/2" },
    ],
  },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Team", to: "/about/team" },
      { label: "Careers", to: "/about/careers" },
    ],
  },
  {
    label: "Blog",
    to: "/custom",
  },
];

export default headerLinks;
