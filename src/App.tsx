import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      {

      }
      <Post imageUrl="https://raw.githubusercontent.com/glauccoslima/servidor_estaticos/main/Batm%C3%B3vel.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;