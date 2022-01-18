import React from 'react';
import Button from '@mui/material/Button';

export default function Resume() {
  return (
    <div className="min-h-screen mx-auto py-4 max-w-4xl">
      <div className="flex justify-center">
        <Button variant="outlined">
          <a className="p-4" href="./assets/CV_MANUEL_DURAN.pdf" download>
            Download resume
          </a>
        </Button>
      </div>
      <div className="flex flex-col items-start justify-center px-10 py-10 text-justify">
        <h1 className="text-4xl font-bold">Manuel Duran</h1>
        <div className="w-full border-solid border-b-2 border-black" />
        <h2 className="font-bold my-4">Career Summary</h2>
        <p className="my-4">
          Computer Engineer, 3 years of experience in application development focused on the frontend area oriented to
          web development. Experience with React, Express, NodeJS and Mongo under the framework of agile methodologies
          and deployment of modern applications with GCP and Netlify.
        </p>
        <h2 className="font-bold">Summary of Qualifications</h2>
        <p className="my-4">Proficient In:</p>
        <ul className="list-disc flex flex-wrap mb-4">
          <li className="mx-7">HTML</li>
          <li className="mx-7">CSS</li>
          <li className="mx-7">JavaScript</li>
          <li className="mx-7">React</li>
          <li className="mx-7">NodeJS</li>
          <li className="mx-7">Express</li>
          <li className="mx-7">MongoDB</li>
          <li className="mx-7">PostgreSQL</li>
          <li className="mx-7">Material UI</li>
          <li className="mx-7">Tailwind</li>
          <li className="mx-7">GCP</li>
          <li className="mx-7">Netlify</li>
          <li className="mx-7">Git</li>
          <li className="mx-7">GitHub</li>
          <li className="mx-7">Agile Methodologies</li>
          <li className="mx-7">Scrum</li>
        </ul>

        <h2 className="font-bold mb-4">Languages</h2>
        <ul className="list-disc flex flex-wrap">
          <li className="mx-7">Spanish (native speaker)</li>
          <li className="mx-7">English (advance)</li>
        </ul>

        <h2 className="font-bold mt-8 mb-4">Career History</h2>
        <div className="mt-2">
          <div className="flex w-full justify-between">
            <h3 className="font-bold">AMICAR, Santiago, Chile</h3>
            <p className="text-xs">Jun. 2021 – Nowadays</p>
          </div>
          <p className="italic font-light text-xs">Frontend Developer</p>
          <ul className="list-disc text-xs pt-2 pl-4">
            <li className="my-2">
              Retake and launching to production the project “Amices”, focusing on vehicle credit simulations, store
              client data and connection with different financial entities.
            </li>
            <li className="my-2">
              Maintain not only the frontend of the project but also make modifications in the queries generated to the
              core from the backend to the core using mongoose DB and Sequelize from the core to the database in
              Postgres.
            </li>
            <li className="my-2">
              Understand and maintain major changes and modifications at the core of the business.
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <div className="flex w-full justify-between">
            <h3 className="font-bold">BACO Restaurant, Santiago, Chile</h3>
            <p className="text-xs">Feb. 2020 – May. 2021</p>
          </div>
          <p className="italic font-light text-xs">Web Developer</p>
          <ul className="list-disc text-xs pt-2 pl-4">
            <li className="my-2">
              Develop a food delivery application with a Backoffice, API connection and sales registration for service,
              delivery control and control of online orders through a webapp for the company
            </li>
            <li className="my-2">
              Development of a dynamic responsive web digital food menu based on the QR model for the different branches
              of the company.
            </li>
            <li className="my-2">
              Updating and modernization of the website and different digital channels of the company.
            </li>
          </ul>
        </div>

        <h2 className="font-bold mt-8 mb-4">Education</h2>
        <div className="flex w-full justify-between">
          <h3 className="font-bold">territorial polytechnic university of Aragua, La Victoria, Venezuela</h3>
          <p className="text-xs">Jan. 2009 – Jun. 2014</p>
        </div>
        <p className="italic font-bold text-xs">Computer Engineer</p>
      </div>
    </div>
  );
}
