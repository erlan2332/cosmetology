import React from "react";
import './social_media.css';
import img1 from '../carousel_button/img.2/free-icon-placeholder-149060.png'

const SocialMedia = () => {
    return(
        <div>
            <div className="container px-4 py-5">
                <h2 className="pb-2 border-bottom">Наши контакты</h2>

                <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                    <div className="col d-flex flex-column align-items-start gap-2">
                        <h2 className="fw-bold text-body-emphasis">Запишитесь сегодня и ощутите разницу уже с первой процедуры!</h2>
                        <p className="text-body-secondary">У нас есть решения для всех типов кожи и возрастов. Доверьтесь нашим профессионалам и откройте для себя истинное сияние вашей кожи.</p>
                    </div>

                    <div className="col">
                        <div className="row row-cols-1 row-cols-sm-2 g-4">
                        <div className="rec_cont">
                            <div className="text_rec_soc_set">Свяжитесь снами</div>
                        <a href="http://wa.me/+996776242425" className="btn ert-23-21">whatsapp</a>
                        <a href="https://www.instagram.com/kutmanbekova_centr_krasoty?igsh=cHluN2h6Z2h6aGYz" className="btn ert-23-22">instagram</a>
                            </div>
                            <div className="col d-flex flex-column gap-2">
                            <img src={img1} style={{ width: "80px", marginLeft: "50px" }} />
                                <h4 className="fw-semibold mb-0 text-body-emphasis">Наш адресс</h4>
                                <p className="text-body-secondary">Ul.Kurmanbek baatyra 142 Jalal-Abad, Kyrgyzstan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SocialMedia;
