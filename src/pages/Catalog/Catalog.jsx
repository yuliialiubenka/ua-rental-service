import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCars, selectIsFiltered } from '../../redux/selectors/carSelectors';
import { fetchCars, fetchNextPage } from '../../redux/actions/carActions';
import Layout from '../../components/Layout/Layout';
import CarList from '../../components/CarList/CarList';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';
import CarFilter from '../../components/CarFilter/CarFilter';

const Catalog = () => { 
    const dispatch = useDispatch();
    const [pageNumber, setPageNumber] = useState(1);
    const [allCars, setAllCars] = useState([]);
    const [hasMoreData, setHasMoreData] = useState(true);
    const cars = useSelector(selectAllCars);
    const isFiltered = useSelector(selectIsFiltered);

    useEffect(() => {
        setAllCars(prevCars => [...prevCars, ...cars]);
    }, [cars]);

    useEffect(() => {
        dispatch(fetchCars({ pageNumber, clearState: pageNumber === 1 }));

        if (pageNumber === 1) {
            window.scrollTo(0, 0);
        }
    }, [dispatch, pageNumber]);

    const handleLoadMore = async () => {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
        const response = await dispatch(fetchNextPage(pageNumber));
        const newData = response.payload;
        if (newData.length === 0) {
            setHasMoreData(false);
        }
    };

    return (
        <Layout>
            <CarFilter />
            <CarList cars={allCars} />
            {hasMoreData && !isFiltered && <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>}
        </Layout>
    );
};

export default Catalog;


