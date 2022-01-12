import { useEffect, useState } from 'react';
import { Container, Image, Border, BoxFrame } from './styles/profile_pic';

export default function ProfilePic({ children, ...restPros }) {
  return <Container {...restPros}>{children}</Container>;
}

ProfilePic.Border = function ProfilePicBorder({ children, ...restPros }) {
  return <Border {...restPros}>{children}</Border>;
};

ProfilePic.BoxFrame = function ProfilePicBoxFrame({ children, ...restPros }) {
  return <BoxFrame {...restPros}>{children}</BoxFrame>;
};

ProfilePic.Image = function ProfilePicImage({ ...restPros }) {
  const [randomPic, setRandomPic] = useState(1);
  const PIC_LENGTH = 5;
  useEffect(() => {
    let random = randomPic;
    while (random === randomPic) {
      random = Math.ceil(Math.random() * PIC_LENGTH);
    }
    const timer = setTimeout(() => setRandomPic(random), 5000);
    return () => clearTimeout(timer);
  }, [randomPic]);

  return <Image src={`../assets/profile_pics/${randomPic}.jpeg`} {...restPros} />;
};
