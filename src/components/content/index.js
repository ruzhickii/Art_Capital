import React, {Component} from "react";

class Content extends Component {
    render() {
        console.log('card is');
        return (
            <section className="content">
                <section className="section_1">
                    <div className="imgBG">
                        <img src={require('../../../static/images/bg1_1.png')} alt=""/>
                    </div>
                    <div className="container">
                        <div className="titleSection_1">
                            <h2>Пожалуй лучший<br />
                                онлайн доступ в США
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-offset-2 col-sm-8">
                                <p className="text">Более чем 7 000 акций компании и фондов от маленьких и динамично<br />
                                   развивающихся до больших и стабильных
                                </p>
                                <p className="text">Получайте доход на росте цены и дивидендах,а для трейдеров с опытом<br />
                                    даем доступ к фьючерсам,опционам,CFD контрактам
                                </p>
                                <p className="text">Доступ к рынку США с именного счета,открытого на ваше имя<br />
                                    в американском брокере
                                </p>
                                <p className="text">Специальные лицензии не нужны - получите легальный доступ на <br />
                                    фондовый рынок США
                                </p>
                            </div>
                        </div>
                        <div className="buttonBlock">
                            <input type="button" value="Зарегистрируйтесь бесплатно"/>
                        </div>
                    </div>
                </section>
                <section className="section_2">
                    <div className="imgBG">
                        <img src={require('../../../static/images/bg2_1.png')} alt=""/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-offset-2 col-sm-8">
                                <div className="titleSection_1">
                                    <h2>Удобное приложение,<br />
                                        где бы вы не находились
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-offset-2 col-sm-8">
                                <p className="text">
                                    Интуитивно понятное приложение на ваш телефон,планшет<br />
                                    или компьютер
                                </p>
                                <p className="text">
                                    Все на русском и напрямую от американского брокера</p>
                                <p className="text">
                                    Умные уведомления - вы не пропустите изменение цены,<br />
                                    выход важного отчета или выплату дивидендов
                                </p>
                                <p className="text">
                                    Простая интеграция с десятками сервисов,а также API<br />
                                    для разработчиков
                                </p>
                                <p className="text">
                                    Без абонплаты - мы понимаем что для вас это важно
                                </p>
                            </div>
                            <div className="col-xs-12 col-sm-offset-2 col-sm-8">
                                <div className="buttonBlock">
                                    <input type="button" value="Скачайте демо-доступ"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default Content
