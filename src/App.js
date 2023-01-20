function App() {
  function Nav () {
    return (
      <nav>
        <ul>
          <li><a href="https://www.litter-robot.com/blog/30-fascinating-cat-facts/">Learn Cat Facts</a></li>
          <li><a href="https://unsplash.com/s/photos/cute-cat">Look at Cat Pictures</a></li>
          <li><a href="https://www.petfinder.com/search/cats-for-adoption/">Rescue a Cat</a></li>
        </ul>
      </nav>
    )
  }
  function Header() {
    return (
      <header className="cat-header">
        <img src={require("./img/icon.png")} className="cat-icon" />
        <h1>Meow</h1>
        <Nav />
      </header>
    );
  }

  function List() {
    return (
      <ul>
        <li>Cat ipsum dolor sit amet</li>
        <li>Leap into the air in greatest offense!</li>
        <li>Claw at curtains stretch</li>
      </ul>
    );
  }

  function Footer() {
    return(
    <footer>
      <small>
        Text Courtsey of{" "}
        <a href="http://www.catipsum.com/index.php">Cat Ipsum</a>
      </small>
    </footer>
    )
  }

  return (
    <div className="App">
      <Header />
      <List />
      <Footer />
    </div>
  );
}

export default App;
