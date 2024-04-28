import React, { useState } from "react";
import Modal from "./modal";
import Modal_2 from "./modal2";
import Modal_3 from "./modal3";
import "./buttons.css";

const ButtonComponent = () => {
  const [modalContent_1, setModalContent_1] = useState(null);
  const [modalContent_2, setModalContent_2] = useState(null);
  const [modalContent_3, setModalContent_3] = useState(null);

  const openModal_1 = (content) => {
    setModalContent_1(content);
  };

  const openModal_2 = (content) => {
    setModalContent_2(content);
  };

  const openModal_3 = (content) => {
    setModalContent_3(content);
  };

  const closeModal = () => {
    setModalContent_1(null);
    setModalContent_2(null);
    setModalContent_3(null);
  };

  return (
    <div className="mrgin_top_high">
      <div className="container py-4">
        <header className="pb-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center text-body-emphasis text-decoration-none">
            <span className="fs-4">Price</span>
          </a>
        </header>

        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Выберем курс лечения</h1>
            <p className="col-md-8 fs-4">Многие наши процедуры направлены на удаление ороговевших клеток кожи, что придает вашей коже легкость и свежий внешний вид.</p>
            <a className="btn btn-primary btn-lg" href="http://wa.me/+996776242425">Записаться</a>
          </div>
        </div>

        <div className="rec_card">
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">2 месяца</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">20.000с<small className="text-body-secondary fw-light">/мс</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Включены все <br /> процедуры в <br /> течении 2х <br /> месяцев</li>
                  </ul>
                  <button className="w-100 btn btn-lg btn-outline-primary" onClick={() => openModal_1("Модальное окно для 1 месяца")}>Подробнее</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">6 месяцев</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">35.000с<small className="text-body-secondary fw-light">/мс</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                  <li>Включены все <br /> процедуры в <br /> течении 6ти <br /> месяцев</li>
                  </ul>
                  <button className="w-100 btn btn-lg btn-outline-primary" onClick={() => openModal_2("Модальное окно для Pro")}>Подробнее</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3 text-bg-primary border-primary tre-32">
                  <h4 className="my-0 fw-normal rew-2">12 месяцев</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">50.000с<small className="text-body-secondary fw-light">/мс</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                  <li>Включены все <br /> процедуры в <br /> течении 12ти <br /> месяцев</li>
                  </ul>
                  <button className="w-100 btn btn-lg btn-outline-primary" onClick={() => openModal_3("Модальное окно для Enterprise")}>Подробнее</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Модальные окна */}
        <Modal isOpen={modalContent_1 !== null} onClose={closeModal}>
          {modalContent_1 && (
            <div>
              <h2>{modalContent_1}</h2>
              <p>Текст модального окна для {modalContent_1} здесь...</p>
            </div>
          )}
        </Modal>
        <Modal_2 isOpen={modalContent_2 !== null} onClose={closeModal}>
          {modalContent_2 && (
            <div>
              <h2>{modalContent_2}</h2>
              <p>Текст модального окна для {modalContent_2} здесь...</p>
            </div>
          )}
        </Modal_2>
        <Modal_3 isOpen={modalContent_3 !== null} onClose={closeModal}>
          {modalContent_3 && (
            <div>
              <h2>{modalContent_3}</h2>
              <p>Текст модального окна для {modalContent_3} здесь...</p>
            </div>
          )}
        </Modal_3>
        <div className="title_text_heaeder_price">Цены процедур</div>
      </div>
      <div className="table-responsive">
  <table className="table text-center" style={{ width: "70%" }}>
    <thead>
      <tr>
        <th style={{ width: "34%" }}></th>
        <th style={{ width: "10%" }}>Стоимость</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" className="text-start">Глубокая чистка лица</th>
        <td>1799/сом</td>
      </tr>
      <tr>
        <th scope="row" className="text-start">Мезотерапия</th>
        <td>2500/сом</td>
      </tr>
    </tbody>

    <tbody>
      <tr>
        <th scope="row" className="text-start">Золотая сыворотка</th>
        <td>3000/сом</td>
      </tr>
      <tr>
        <th scope="row" className="text-start">Биоревитализация</th>
        <td>3500-8000/сом</td>
      </tr>
      <tr>
        <th scope="row" className="text-start">Окси</th>
        <td>4500/сом</td>
      </tr>
      <tr>
        <th scope="row" className="text-start">Витамин С</th>
        <td>1500/сом</td>
      </tr>
      <tr>
        <th scope="row" className="text-start">Средний Пилинг</th>
        <td>3200/сом</td>
      </tr>
      <tr>
        <th scope="row" className="text-start">Глубокий пилинг</th>
        <td>4500/сом</td>
      </tr>
      <tr>
        <th scope="row" className="text-start">Ботокс full face</th>
        <td>3000-14000/сом</td>
      </tr>
      <tr>
        <th scope="row" className="text-start">RF-лифтинг</th>
        <td>2000/сом</td>
      </tr>
      <tr>
        <th scope="row" className="text-start">Увеличение губ</th>
        <td>4000-14000/сом</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  );
};

export default ButtonComponent;
