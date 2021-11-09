import React from 'react';

const UserBlock = ({isAuthUser}) => {

  return (
    isAuthUser
      ?
      <div className="user-block">
        <div className="user-block__avatar">
          <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </div>
      :
      <div className="user-block">
        <a href="sign-in.html" className="user-block__link">Sign in</a>
      </div>
  );
};

export default UserBlock;
