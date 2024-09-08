import React from 'react';
import { FaWhatsapp, FaMailBulk, FaPhoneAlt, FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaStar } from 'react-icons/fa';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../estilos/footer.css'
import { Contacto } from './Contacto';

const Footer = () => {

    return (
        <footer className="main-footer">
            <Container>
                <Row className="footer__section">
                    <Col>
                        <h2 className="footer__title">Contactos</h2>
                        <p className="parrafo_footer">
                            <a href="https://wa.me/59169926193" className="red_social_footer">
                                <FaWhatsapp className="tamaño_red" />
                            </a> 
                            69926193
                        </p>
                        <p className="parrafo_footer">
                            <FaMailBulk /> alefrvg@gmail.com
                        </p>
                        <p className="parrafo_footer">
                            <FaPhoneAlt /> 2481828
                        </p>
                    </Col>
                    <Col>
                        <h2 className="footer__title">Redes Sociales</h2>
                        <div className="footer_redes_sociales">
                            <p className="parrafo_footer">
                                <a href="https://es-la.facebook.com/" className="red_social">
                                    <FaFacebook />
                                </a> 
                                Dale like a nuestra página
                            </p>
                            <p className="parrafo_footer">
                                <a href="https://www.instagram.com/" className="red_social">
                                    <FaInstagram className="icono_footer" />
                                </a> 
                                Síguenos en nuestras historias
                            </p>
                            <p className="parrafo_footer">
                                <a href="https://www.youtube.com/" className="red_social">
                                    <FaYoutube className="icono_footer" />
                                </a> 
                                Suscríbete para estar al día
                            </p>
                            <p className="parrafo_footer">
                                <a href="https://www.tiktok.com/es/" className="red_social">
                                    <FaTiktok className="icono_footer" />
                                </a> 
                                Comparte tus momentos
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <h2 className="footer__title">Enlaces</h2>
                        <a href="registro_tarjeta.html" className="footer__link">Comprar</a>
                        <a href="index.html" className="footer__link">Inicio</a>
                        <a href="" className="footer__link">Registro</a>
                        <a href="index.html" className="footer__link">Lista de productos</a>
                    </Col>
                    <Col>
                    <h2 class="footer__title">Contáctanos</h2>
                        <Contacto/>
          
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="copy">Copyright © 2024 Technology Store</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export {Footer};
