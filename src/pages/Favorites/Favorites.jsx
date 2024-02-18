// Favorites.jsx
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectFavoriteCars} from '../../redux/selectors/carSelectors';
import Layout from '../../components/Layout/Layout';
import FavoritesList from '../../components/FavoritesList/FavoritesList';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';

const Favorites = () => {
    const favoriteCars = useSelector(selectFavoriteCars);
    const [visibleCars, setVisibleCars] = useState(12);
    const [allFavoritesLoaded, setAllFavoritesLoaded] = useState(false);

    const handleLoadMore = () => {
        setVisibleCars(prevVisibleCars => prevVisibleCars + 12);
    };

    useEffect(() => {
        if (visibleCars >= favoriteCars.length) {
            setAllFavoritesLoaded(true);
        }
    }, [visibleCars, favoriteCars.length]);

    return (
        <Layout>
            <FavoritesList visibleCars={visibleCars}/>
            {!allFavoritesLoaded && <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>}
        </Layout>
    );
};

export default Favorites;
