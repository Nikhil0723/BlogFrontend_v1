import LeftActionBtn from "./LeftActionBtn";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import RightActionBtn from "./RightActionBtn";

export default function Navbar() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-2 md:px-7  flex items-center justify-between hover:bg-zinc-100" >

      <div className="fixed top-2 lg:top-4">
        <LeftActionBtn />
      </div>

      <div className=" ml-24 lg:ml-44  flex items-center justify-between w-full py-4 lg:py-6">
        <Logo />
        <MenuLinks />
        <RightActionBtn />
      </div>

    </div>
  )
}
