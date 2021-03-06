import React from 'react';
import { CardContainer } from '../containers/card';
import { ProfilePicContainer } from '../containers/profilePic';

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-around md:flex-row gradient-bg-services">
        <CardContainer />
        <ProfilePicContainer />
      </div>
    </>
  );
}
