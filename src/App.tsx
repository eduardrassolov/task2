import Main from "./pages/mainPage/Main";
import store from "./redux/store";

console.log(store.getState());
function App() {
  return <Main />;
}

export default App;
