import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";


export default function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);
   
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    }, []);
    const navList = (
        <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-9">
          <Typography
            as="li"
            variant="h4"
            color="#EEFFFB"
            className="p-1 font-normal transform transition-transform duration-200 hover:scale-110"
          >
            <a href="/" className="flex items-center">
              Home
            </a>
          </Typography>
          <Typography
            as="li"
            variant="h4"
            color="#EEFFFB"
            className="p-1 font-normal transform transition-transform duration-200 hover:scale-110"
          >
            <a href="/blog" className="flex items-center">
              Blog
            </a>
          </Typography>
          <Typography
            as="li"
            variant="h4"
            color="#EEFFFB"
            className="p-1 font-normal transform transition-transform duration-200 hover:scale-110"
          >
            <a href="#" className="flex items-center">
              Works
            </a>
          </Typography>
          <Typography
            as="li"
            variant="h4"
            color="#EEFFFB"
            className="p-1 font-normal transform transition-transform duration-300 hover:scale-110"
          >
            <a href="#" className="flex items-center">
              Contact Me
            </a>
          </Typography>
        </ul>
      );
      return (
        <div className="sticky z-10 top-0 w-screen">
          <Navbar className="sticky top-1 z-10 h-max max-w-full rounded-none px-10 py-6 lg:px-20 lg:py-6 bg-astongreen-900 border-0">
            <div className="flex items-center justify-between text-astongreen-100">
              <div className="flex items-center gap-6">
                <div className="mr-4 hidden lg:block">{navList}</div>
                <IconButton
                  variant="text"
                  className="ml-auto h-6 w-6 text-inherit lg:hidden"
                  ripple={false}
                  onClick={() => setOpenNav(!openNav)}
                >
                  {openNav ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </IconButton>
              </div>
            </div>
            <MobileNav open={openNav}>
              {navList}
            </MobileNav>
          </Navbar>
        </div>
      );
    }