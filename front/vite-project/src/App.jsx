import "normalize.css";
// import styles from "./App.module.css";
import styled from 'styled-components';
import NavBar from "../components/Navbar/Navbar";

const Cuadros = styled.div`
    background-color: red;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
`;

const Cuadro = styled.div`
    background-color: blue;
    margin: 6px;
    width: 200px;
    height: 25vh;

    @media (min-width: 481px) and (max-width: 786px) {
        width: calc(33.33% - 12px);
    }

    @media (max-width: 480px) {
        width: calc(50% - 12px);
    }
`;
function App() {
  
  
  
  
  
  return (
    <div>
      <NavBar />
      <h2>COLUMNAS</h2>


      
        <Cuadros>
          
            <Cuadro />
            <Cuadro />
            <Cuadro />
            <Cuadro />
            <Cuadro />
            <Cuadro />
            <Cuadro />
            <Cuadro />
        </Cuadros>
  
      {/* <div className={styles.cuadros}>
        <div className={styles.cuadro}>Cuadro 1</div>
        <div className={styles.cuadro}>Cuadro 2</div>
        <div className={styles.cuadro}>Cuadro 3</div>
        
        <div className={styles.cuadro}>Cuadro 4</div>
      </div> */}
    </div>
  );
}

export default App;
