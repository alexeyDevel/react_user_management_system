import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPerson } from '../../store/actions/teamActions';
import { getSelectedPerson } from '../../store/selectors/teamSelectors';
import { useParams } from 'react-router-dom';
import { ReactComponent as MsgSvg } from '../../assets/msg.svg';
import { ReactComponent as TelSvg } from '../../assets/tel.svg';
import './style.scss'

export default function AboutPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const person = useSelector(getSelectedPerson);
  useEffect(() => {
    dispatch(fetchPerson(id));
  }, [dispatch]);

  return (
    <>
      <section className='header-about-page'>
        <div className="container">
          <div className="about-page-offer">
            <div className="about-page-offer__image">
              <img src={person?.avatar} alt="аватар" />
            </div>
            <div className="about-page-offer__title">
              <h1 className="about-page-offer__title">{`${person?.first_name} ${person?.last_name}`}</h1>
              <p className="about-page-offer__text">Партнёр</p>
            </div>
          </div>
        </div>
      </section>    
      <section className='info-section'>
        <div className="container">
          <div className="about-page-info">
            <div className="about-page-info__text">
              <p>Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.</p> <br/>
              <p>В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".</p><br/>
              <p>Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.</p>
            </div>
            <div className="about-page-info__contacts">
              <a href="tel:+79543334455"><TelSvg /> +7 (954) 333-44-55</a>
              <a href="mailto:sykfafkar@gmail.com"><MsgSvg /> sykfafkar@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </>

    
  )
}
