import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeamList, incrementCurrentPage, setCurrentPage } from '../../store/actions/teamActions';
import { getTeamList, getCurrentPage, getTotalPages } from '../../store/selectors/teamSelectors';
import Cards from '../../components/Cards';
import { ReactComponent as ArrSvg } from '../../assets/arr.svg';
import './style.scss';
import Pagination from '../../components/Pagination';

export default function OurTeamPage() {
  const dispatch = useDispatch();
  const teamList = useSelector(getTeamList);
  const currentPage = useSelector(getCurrentPage);
  const totalPages = useSelector(getTotalPages);
  const [teamMap, setTeamMap] = useState(new Map());

  useEffect(() => {
    // const newMap = new Map([...teamMap, ...teamList.map(item => [item.id, item])]);
    setTeamMap(teamList);
  }, [teamList]);

  useEffect(() => {
    dispatch(fetchTeamList(currentPage));
  }, [dispatch, currentPage]);
  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };
  const handleClick = () => {
    dispatch(incrementCurrentPage());
  };

  return (
    <>
      <div className='header-our-team'>
        <h1 className='header-our-team__title'>Наша команда</h1>
        <p className='header-our-team__text'>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи,
          и умеющие находить выход из любых, даже самых сложных ситуаций.
        </p>
      </div>
      <div className='container'>
        <Cards cards={[...teamMap.values()]} />
        {/* {currentPage < totalPages ? <button className='btn btn-second' onClick={handleClick}>Показать еще <ArrSvg /></button> : <></>} */}
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </>
  );
}
