import React from 'react';
import { useState } from 'react/cjs/react.development';
import MovieNav from '../MovieNav/MovieNav';

const MovieTabs = ({ children }) => {

  const [activeTab, setActiveTab] = useState(children[0]?.props?.tabName || children.props.tabName);

  return (
    <>
      <MovieNav activeLink={activeTab} setActiveTab={setActiveTab}/>

      {React.Children.map(children, (child) => (child.props.tabName === activeTab) ? child : '')}
    </>
  );
};

export default MovieTabs;
