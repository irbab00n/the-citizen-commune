import React, { useState } from 'react';
import './GuideSearch.scss';

import Row from '../../Layout/Row';

interface GuideSearchProps {
  [key: string]: any;
  onSearch?: Function; // Defaulted as an anonymouse function
  searchValidator?(term: string): boolean;
}

// ** DEFAULTS **
const _placeholderDeafult =
  'Need Help?  Casaba Outlet may be helpful, but so are we ;)';
const _onSearchDefault = () => {};
const _searchValidatorDefault = () => true;

const GuideSearch = (props: GuideSearchProps) => {
  const {
    onSearch = _onSearchDefault,
    searchValidator = _searchValidatorDefault,
  } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [prevTerm, setPrevTerm] = useState(_placeholderDeafult);
  const [errorState, setErrorState] = useState(false);
  const [searchErrorMessage, setSearchErrorMessage] = useState('');

  // console.log('search term state in guide search: ', searchTerm);

  const onFormSubmit = (event: any) => {
    event.preventDefault();

    let searchValid = searchValidator(searchTerm);

    if (searchValid) {
      onSearch(searchTerm);
      setPrevTerm(searchTerm);
      setSearchTerm('');
    } else {
      setErrorState(true);
      setSearchErrorMessage('Invalid Search Term Provided');
    }
  };

  return (
    <Row className="GuideSearch">
      <form id="GuideSearch_form" onSubmit={onFormSubmit}>
        <label
          title="Search For Guides"
          className="GuideSearch_form_text_label"
        >
          <input
            className={`GuideSearch_form_text ${errorState ? 'error' : ''}`}
            type="text"
            onChange={e => {
              setSearchTerm(e.target.value);
            }}
            placeholder={prevTerm}
            value={searchTerm}
          ></input>
        </label>
        <label title="Submit Guide Search">
          <button className="GuideSearch_form_button">Search</button>
        </label>
        {errorState && (
          <div className="GuideSearch_error_message">{searchErrorMessage}</div>
        )}
      </form>
    </Row>
  );
};

export default GuideSearch;
