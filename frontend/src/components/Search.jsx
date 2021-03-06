import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
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
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          defaultValue={searchParams.get('filter')}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Search;
