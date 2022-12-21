
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "./components/Container/Container";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { SiteNavbar } from "./components/SiteNavbar/SiteNavbar";
import Alert from "react-bootstrap/Alert";


function App() {
  return (
    <div>
      <SiteNavbar />
      <Container>
       <ItemListContainer greeting="Bienvendios al Sitio"/>
       <Alert variant="success">Alert de boostrap</Alert>
      </Container>
    </div>
  );
}

export default App;
