import { BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { GraphicPage } from "./pages/GraphicPage";
import { HomePage } from "./pages/HomePage";
import { ContainerWrapper } from "./styles/container";
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <ContainerWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/graphics" element={<GraphicPage />} />
        </Routes>
        <GlobalStyle />
      </Router>
    </ContainerWrapper>
   
  );
}

export default App;
