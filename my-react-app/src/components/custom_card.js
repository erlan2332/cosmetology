import React from "react";
import img1 from './img/pexels-bryce-carithers-11680701-6633868.jpg'
import img2 from './img/pexels-scottwebb-1029596.jpg'
import img3 from './img/pexels-julieaagaard-2294477.jpg'

const CustomCard = () => {
    return (
        <div className="container px-4 py-5" id="custom-cards">
            <h2 className="pb-2 border-bottom">Что получите после процедур</h2>

            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${img2})`, backgroundSize: 'cover'}}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">почувствуете свежесть</h3>
                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="me-auto">
                                    <img src={img1} alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                                </li>
                                <li className="d-flex align-items-center me-3">
                                    <img src={img1} width="16" height="16" className="me-2" alt="" />
                                    <small>свежесть</small>
                                </li>
                                <li className="d-flex align-items-center">
                                    <img src={img1} width="16" height="16" className="me-2" alt="" />
                                    <small>3d</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${img1})`, backgroundSize: 'cover'}}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Ощущение легкости</h3>
                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="me-auto">
                                    <img src={img1} alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                                </li>
                                <li className="d-flex align-items-center me-3">
                                    <img src={img1} width="16" height="16" className="me-2" alt="" />
                                    <small>легкость</small>
                                </li>
                                <li className="d-flex align-items-center">
                                    <img src={img1} width="16" height="16" className="me-2" alt="" />
                                    <small>4d</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${img3})`, backgroundSize: 'cover'}}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Консультация по питанию</h3>
                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="me-auto">
                                    <img src={img1} alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                                </li>
                                <li className="d-flex align-items-center me-3">
                                    <img src={img1} width="16" height="16" className="me-2" alt="" />
                                    <small>ПП</small>
                                </li>
                                <li className="d-flex align-items-center">
                                    <img src={img1} width="16" height="16" className="me-2" alt="" />
                                    <small>5d</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomCard;
