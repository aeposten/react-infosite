import Nav from "./Nav";
function Header() {
  return (
    <header className="cat-header">
      <img src={require("./img/icon.png")} className="cat-icon" />
      <h1>Meow</h1>
      <Nav />
    </header>
  );
}
export default Header;
