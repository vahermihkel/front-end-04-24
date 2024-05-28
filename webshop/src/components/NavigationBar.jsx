import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // 1.

function NavigationBar() {
  const { t, i18n } = useTranslation(); // 2. 

  const changeLangEE = () => {
    i18n.changeLanguage("ee");
    localStorage.setItem("language", "ee");
  }

  const changeLangEN = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("language", "en");
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
                                            { /* 3. */}
            <Nav.Link as={Link} to="/admin">{t('admin')}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t('shops')}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t('contact')}</Nav.Link>
            <Nav.Link as={Link} to="/cart">{t('cart')}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={changeLangEE}>Eesti</Nav.Link>
            <Nav.Link onClick={changeLangEN}>English</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;