// Heading.tsx
import React from 'react';

interface Props {
  title: string;
}

const Heading: React.FC<Props> = ({ title }) => {
  return (
    <header className="row header navbar navbar-dark bg-info">
      <div>
        <br></br>
        <h1>{title}</h1>
        <h5>
          This page will show you everything you could want to know about our
          bowling league
        </h5>
        <br></br>
      </div>
    </header>
  );
};

export default Heading;
