import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './img/pexels-dawn-lio-1140724-4138543.jpg';
import image2 from './img/pexels-annpoan-5798000.jpg';
import image3 from  './img/pexels-gabby-k-6621461.jpg';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './section1.css';

const Section = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return(
        <main>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">kutmanbekova</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" onClick={handleShow}>О нас</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Цены</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Косметология</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <a href='http://wa.me/+996776242425' className="btn btn-outline-success">Whatsapp</a>
                        </form>
                    </div>
                </div>
            </nav>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>О нас</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Кутманбекова центр красоты: <br /> Мы приглашаем вас на консультацию, чтобы подобрать оптимальные процедуры для воплощения ваших красивейших образов и довести вашу естественную красоту до совершенства. <br /> <br /> цена за консультацию: 300сом <br /> <br /> +996776242425  </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
            
            <div id="myCarousel" className="carousel slide mb-3" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image1} className="d-block w-100" alt="Image 1" style={{ height: '700px', objectFit: 'cover' }} />
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1 className='header_text_about'>Свяжитесь с нами</h1>
                                <p className="opacity-75 ert_tre">В нашей клинике косметологии мы стремимся помочь достичь здоровой и ухоженной кожи. </p>
                                <p><a className="btn btn-lg btn-primary rte_ert" href="http://wa.me/+996776242425">Whatsapp</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block w-100" alt="Image 2" style={{ height: '700px', objectFit: 'cover' }} />
                        <div className="container">
                            <div className="carousel-caption">
                                <h1 className='kuma_era'>Мы рады помочь каждому</h1>
                                <p>Наша команда специалистов готова предложить вам широкий спектр профессиональных услуг</p>
                                <p><a className="btn btn-lg btn-primary" href="http://wa.me/+996776242425">Whatsapp</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100" alt="Image 3" style={{ height: '700px', objectFit: 'cover' }} />
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1 className='kuma_era2'>Поможем вернуть естественную красоту</h1>
                                <p>Some representative placeholder content for the third slide of this carousel.</p>
                                <p><a className="btn btn-lg btn-primary" href="http://wa.me/+996776242425">Whatsapp</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </main>
    )
}

export default Section;
