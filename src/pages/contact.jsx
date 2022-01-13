import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        You can visit my <a className="text-[#ff00ff] cursor-pointer">LinkedIn</a> or send me a mail at{' '}
        <a
          className="text-[#ff00ff]"
          href="mailto:manuel@durbonca.com?subject=Hi!%20I%20just%20saw%20your%20portfolio%20webpage%20and%20I%20would%20love%20to%20contact%20you%20from%20..."
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
        <img className="w-full" src={gifUrl} />
      </div>
    </div>
  );
}
