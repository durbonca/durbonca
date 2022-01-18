import React from 'react';
import { ProfilePic } from '../components';

export function ProfilePicContainer() {
  return (
    <ProfilePic>
      <ProfilePic.BoxFrame>
        <ProfilePic.Border>
          <ProfilePic.Image />
        </ProfilePic.Border>
      </ProfilePic.BoxFrame>
    </ProfilePic>
  );
}
