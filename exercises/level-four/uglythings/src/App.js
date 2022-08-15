import HeaderForm from "./components/HeaderForm";
import {ThemeContextProvider} from "./ThemeContext";
import MainList from "./components/MainList"

function App(props) {
  return (
    <>
      <ThemeContextProvider>
        <HeaderForm />
        <MainList />
      </ThemeContextProvider>
    </>
  );
}

export default App;
