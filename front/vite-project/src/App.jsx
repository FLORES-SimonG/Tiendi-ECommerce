import styles from "./App.module.css";
import "normalize.css";

function App() {
  return (
    <div>
      <h1>COLUMNAS</h1>
      <div className={styles.cuadros}>
        <div className={styles.cuadro}>Cuadro 1</div>
        <div className={styles.cuadro}>Cuadro 2</div>
        <div className={styles.cuadro}>Cuadro 3</div>
        
        <div className={styles.cuadro}>Cuadro 4</div>
      </div>
    </div>
  );
}

export default App;
