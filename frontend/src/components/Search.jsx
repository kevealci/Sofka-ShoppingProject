import React, {useContext } from 'react'
import { useSearchParams } from 'react-router-dom';
import {shoppingContext} from '../context/shoppingContext'

const Search = () => {

    const {state, dispatch} = useContext(shoppingContext)

    console.log(`state desde search`, state)

    
    let [searchParams, setSearchParams] = useSearchParams();
    const handleChange = (e) => {
        let filter = e.target.value;
        if (filter) {
            setSearchParams({ filter });
        } else {
            setSearchParams({});
        }
    };

    return (
        <>
            <div className="input-group mb-3 mt-5">
                <input type="text"
                    className="form-control"
                    placeholder="Recipient's username"
                    value={searchParams.get('filter')}
                    onChange={handleChange}
                />
            </div>
            <div className="row">
                {

                }
            </div>
        </>
    )
}

export default Search
