import NavBar from "./NavBar.jsx";
import Cards from "./Cards.jsx";
import List from "./List.jsx";
import "./Home.css";

function Home() {
  return (
    <div className="home">
        <h1>Nancy</h1>
     <NavBar/>
     <Cards/>
     <div className="list">
     <List/>
     </div>
    </div>
  );
}

export default Home;
