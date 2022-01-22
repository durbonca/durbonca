import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillYoutube, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';

export default function Contact() {
  const api_key = process.env.REACT_APP_GIPHY_API_KEY;
  const [gifUrl, setGifUrl] = useState('');

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=email&limit=10&rating=g`)
      .then((response) => response.json())
      .then((json) => setGifUrl(json.data[Math.floor(Math.random() * (10 - 1) + 1)].images.original.url))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-white text-center items-center gradient-bg-welcome mb:px-52 px-5">
      <h1 className="pt-10 mb-10 text-4xl">Do you need to contact with me?</h1>
      <p className="my-10 text-lg">
        You can visit my{' '}
        <a
          href="https://www.linkedin.com/in/durbonca/"
          className="text-[#ff00ff] cursor-pointer"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{' '}
        or send me a mail at{' '}
        <a
          className="text-[#ff00ff]"
          href="mailto:manuel@durbonca.com?subject=Hi!%20I%20just%20saw%20your%20portfolio%20webpage%20and%20I%20would%20love%20to%20contact%20you%20from%20..."
          target="_blank"
          rel="noreferrer"
        >
          manuel@durbonca.com
        </a>
        . If you want to know a little more about my proyects, you can visit my{' '}
        <Link className="text-[#ff00ff]" to="/Projects">
          portfolio
        </Link>{' '}
        section.
      </p>
      <p className="text-lg">I promise to respond as quickly as possible!</p>
      <div className="my-10 w-1/2">
        <img className="mx-auto max-h-[calc(vh/6)]" src={gifUrl} />
      </div>

      <p>Also check this links for social if you want to have a close look at me.</p>
      <div className="flex flex-row justify-center py-2">
        <a className="m-2" href="https://github.com/durbonca" target="_blank" rel="noopener noreferrer">
          <AiFillGithub className="text-4xl" />
        </a>
        <a className="m-2" href="https://youtube.com/durbonca" target="_blank" rel="noopener noreferrer">
          <AiFillYoutube className="text-4xl" />
        </a>
        <a className="m-2" href="https://twitter.com/durbonca" target="_blank" rel="noopener noreferrer">
          <AiOutlineTwitter className="text-4xl" />
        </a>
        <a className="m-2" href="https://www.linkedin.com/in/durbonca/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin className="text-4xl" />
        </a>
      </div>

      <small className="italic">But I warn you... I have null time to check the socials networks.</small>
    </div>
  );
}
