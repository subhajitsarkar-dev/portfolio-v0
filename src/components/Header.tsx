import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <>
      <header className="border-b">
        <div className="container mx-auto flex max-w-screen-lg items-center justify-between px-6 py-4">
          <div className="">Brand</div>

          <div className="">
            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
