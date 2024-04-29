import React, { Component } from 'react';
import './info.css';
import { Modal, Button } from 'react-bootstrap';

class AppointmentScheduler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
      isEvening: false,
      appointments: this.getInitialAppointments(),
      showModal: false,
      modalContent: '',
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 60000);

    const currentDate = new Date();
    const currentWeekday = currentDate.getDay(); // Получение дня недели (0 - воскресенье, 1 - понедельник, и т.д.)

    if (currentWeekday === 0) {
      // Если сегодня воскресенье
      const allBusyAppointments = {
        '9-10': 'busy',
        '10-11': 'busy',
        '11-12': 'busy',
        '12-13': 'busy',
        '13-14': 'busy',
        '14-15': 'busy',
        '15-16': 'busy',
        '16-17': 'busy',
        '17-18': 'busy',
      };

      this.setState({ appointments: allBusyAppointments });
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getInitialAppointments = () => {
    const storedAppointments = localStorage.getItem('appointments');
    return storedAppointments ? JSON.parse(storedAppointments) : {
      '9-10': 'free',
      '10-11': 'free',
      '11-12': 'free',
      '12-13': 'free',
      '13-14': 'free',
      '14-15': 'free',
      '15-16': 'free',
      '16-17': 'free',
      '17-18': 'free',
    };
  };

  resetAppointments = () => {
    const resetAppointments = {
      '9-10': 'free',
      '10-11': 'free',
      '11-12': 'free',
      '12-13': 'free',
      '13-14': 'free',
      '14-15': 'free',
      '15-16': 'free',
      '16-17': 'free',
      '17-18': 'free',
    };
    this.setState({ appointments: resetAppointments });
    localStorage.setItem('appointments', JSON.stringify(resetAppointments));
  };

  tick = () => {
    const newTime = new Date();
    this.setState({ currentTime: newTime });

    const currentHour = newTime.getHours();
    this.setState({ isEvening: currentHour >= 20 });

    if (currentHour === 0 && newTime.getMinutes() === 0) {
      this.resetAppointments();
      // Сохранение расписания в localStorage после сброса
      localStorage.setItem('appointments', JSON.stringify(this.state.appointments));
    }
  };

  handleShowModal = (timeSlot) => {
    this.setState({ showModal: true, modalContent: `Вы записались от ${timeSlot}` });
  };

  scheduleAppointment = (timeSlot) => {
    this.setState(prevState => {
      const updatedAppointments = {
        ...prevState.appointments,
        [timeSlot]: 'busy',
      };
      localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
      return { appointments: updatedAppointments };
    });

    this.handleShowModal(timeSlot);
  };

  render() {
    const { currentTime, isEvening, appointments, showModal, modalContent } = this.state;

    // Format date, time, and dayOfWeek
    const formattedDate = `${currentTime.getDate().toString().padStart(2, '0')}.${(currentTime.getMonth() + 1).toString().padStart(2, '0')}`;
    const formattedTime = `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}`;
    const dayOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'][currentTime.getDay()];

    return (
      <div className={`appointment-container ${isEvening ? 'evening' : ''}`}>
        <hr className='hr_elem' />
        <h1>Записаться на прием</h1>
        <div className="current-info-container">
          <div className="current-date-time">
            <div className="current-date">
              <h2>{formattedDate}</h2>
            </div>
            <div className="current-time">
              <h2>{formattedTime}</h2>
            </div>
            <div className="current-day">
              <h2>{dayOfWeek}</h2>
            </div>
          </div>
        </div>
        <div className="time-slots">
          {Object.entries(appointments).map(([timeSlot, status]) => (
            <div key={timeSlot} className="time-slot">
              <p className="time-label">От: {timeSlot}</p>
              <button
                className={`btn_oc ${status === 'busy' ? 'btn_busy' : ''}`}
                onClick={() => this.scheduleAppointment(timeSlot)}
                disabled={status === 'busy'}
              >
                {status === 'free' ? 'Записаться' : 'Занято'}
              </button>
            </div>
          ))}
        </div>
        {/* Modal */}
        <Modal show={showModal} onHide={() => this.setState({ showModal: false })}>
          <Modal.Header closeButton>
            <Modal.Title>Успешная запись</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{modalContent}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.setState({ showModal: false })}>
              Закрыть
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AppointmentScheduler;
