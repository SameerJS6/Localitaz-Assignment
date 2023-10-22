const footerLinks = [
  {
    name: "home",
    sublinks: ["home", "product", "integration", "about", "customers"],
  },
  {
    name: "agency",
    sublinks: ["careers", "support", "blog"],
  },
  {
    name: "connect",
    sublinks: ["twitter", "gitHub", "linkedin"],
  },
  {
    name: "legal",
    sublinks: ["privacy policy", "terms of service"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-shoeDark text-shoeOrange p-6 lg:p-8 xl:p-12 rounded-t-xl lg:rounded-t-3xl mt-8 shadow-lg">
      <div className="flex flex-col sm:flex-row justify-between gap-8 max-w-7xl mx-auto">
        <div className="space-y-4">
          <p className="text-3xl font-semibold tracking-tight">Shoes</p>
          <p className="max-w-[25ch] leading-7 opacity-80">
            This is a truly spectacular theme! The custom page builder is
            definitely.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 xl:gap-16 flex-col">
          {footerLinks.map((links, index) => {
            return (
              <div className="space-y-6 " key={index}>
                <h3 className="text-xl font-semibold tracking-tight capitalize">
                  {links.name}
                </h3>
                <ul className="space-y-1.5">
                  {links.sublinks.map((sublink) => {
                    return (
                      <li className="footerLink relative w-fit leading-7 capitalize opacity-80 hover:text-shoeBackground hover:opacity-100 transition-colors duration-300 ease-in-out">
                        <a href="/">{sublink}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
