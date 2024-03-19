import "./App.css";
import logoM6 from "./assets/img/logo-m6.png";
import data from "./assets/data.json";
import Section from "./assets/components/Section";

function App() {
  return (
    <>
      <header>
        <img src={logoM6} alt="" />
      </header>
      <main>
        <div className="container">
          {data.map((elem) => {
            return (
              <Section
                time={elem.time}
                image={elem.image}
                title={elem.title}
                type={elem.type}
                duration={elem.duration}
                direct={elem.direct}
                isUnseen={elem.isUnseen}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
