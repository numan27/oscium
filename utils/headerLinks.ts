const headerLinks = [
  {
    label: "Products",
    to: "/product",
    children: [
      { label: "All Products", to: "/product" },
      { label: "Oscilloscopes", to: "/products/oscilloscopes" },
      { label: "Accessories", to: "/products/accessories" },
      { label: "Software", to: "/products/software" },
    ],
  },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Our Story", to: "/about/story" },
      { label: "Team", to: "/about/team" },
      { label: "Careers", to: "/about/careers" },
      { label: "Contact", to: "/about/contact" },
    ],
  },
  {
    label: "Support",
    to: "/support",
  },
  {
    label: "Blog",
    to: "/blog",
  },
];

export default headerLinks;
