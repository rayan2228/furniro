import Image from "../Image";
import Container from "../layouts/Container";
import Flex from "../layouts/Flex";
import logo from "../../assets/logo.png";
import List from "../List";
import ListItem from "../ListItem";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
let navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Shop",
    link: "/shop",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
const Header = () => {
  return (
    <header className="py-7 bg-white">
      <Container>
        <Flex className={"items-center"}>
          <div className="w-1/4">
            <Image src={logo} alt={"logo"} />
          </div>
          <nav className="w-2/4">
            <List
              className={
                "flex items-center justify-center gap-16 font-medium text-base "
              }
            >
              {navItems.map(({ name }) => (
                <ListItem key={name} listName={name} />
              ))}
            </List>
          </nav>
          <div className=" w-1/4">
            <Flex className={"items-center gap-11 text-lg justify-end"}>
              <FaRegUser />
              <IoSearchOutline />
              <FaRegHeart />
              <AiOutlineShoppingCart />
            </Flex>
          </div>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
