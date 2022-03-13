import axios from "axios";
import MovieCard from "components/MovieCard";

import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing() {

    //initial value for this state being zero.
    const [pageNumber, setPageNumber] = useState(0);

    //Always that an object present in the second parameter is affect,
    //the function declared in the first parameter is called again and again.
    //If the list of observed objects (2nd parameter) is empty, then the function
    //will be called just at the rendering of the component.
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=1`)
        .then(response => {
            //as operator makes a cast to the informed type.
            const data = response.data as MoviePage;
            console.log(data);
            setPageNumber(data.number);
        });
    }, []);

    return (
        <>
        <p>{pageNumber}</p>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listing;