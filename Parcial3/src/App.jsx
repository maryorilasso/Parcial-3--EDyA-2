import PokemonComponent from './components/PokemonComponent';
import TodoComponent from './components/TodoComponent';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Parcial 3 - Maryori Lasso</h1>
      </header>
      <main>
        <div className="components-container">
          <section className="component-section">
            <PokemonComponent />
          </section>
          <section className="component-section">
            <TodoComponent />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
