import { Link } from "react-router-dom";
import { assests } from "../../assets/assets";
import { MagnifyingGlassIcon, ShoppingCartIcon, Bars3CenterLeftIcon } from '@heroicons/react/24/solid';

const Nav = () => {
  return (
    <div className="nav py-5 border-b-1 border-green">
      {/* nav wrapper */}
      <nav className="w-90vw m-auto  flex items-center justify-between">

        {/* mobile menu button */}
        <Bars3CenterLeftIcon className="size-8 hover:text-primary-300 md:hidden"/>
        {/* end of mobile menu button */}

        {/* nav logo */}
        <Link to={'/'} className="nav-logo w-28 block">
          <img src={assests.Logo} alt="Mobile mart logo" width="100%" />
        </Link>
        {/* end of nav logo */}

        {/* menu itmes */}
        <div className="hidden md:flex gap-8">
          <Link to={"/"} className="px-2 py-1 text-lg hover:text-primary-300 font-bold home-link">Home</Link>
          {["Product", "Store", "Categories"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`px-3 py-2 text-lg font-400 hover:text-primary-300 active:text-primary-300`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
        {/* end of menu items */}

        {/* shop: search & cart */}
        <div className="flex items-center gap-3  ">
          <Link className="bg-primary-300 text-white w-8 h-8 rounded-full flex justify-center items-center">
            <MagnifyingGlassIcon  className="size-4 text-white-pure"/>
          </Link>

          <Link to={'/cart'} className="bg-primary-300 text-white w-8 h-8 rounded-full flex justify-center items-center">
            <ShoppingCartIcon className="size-4 text-white-pure"/>
          </Link>
        </div>
        {/* shop end : search & cart */}
      </nav>
      {/* end of nav wrapper */}
    </div>
  );
};

export default Nav;
