import React from 'react';
import './Features.css';
import Card from './Card';
import data from './FeatureApi';

const Features = () => {
  return (
    <>
      <section>
        <div className="features top" id="features">
          <div className="container">
            <div className="heading">
              <h4>Features</h4>
              <h1>What I Do</h1>
            </div>

            <div className="content grid">
              {data.map((val, index) => {
                return (
                  <Card
                    key={index}
                    image={val.image}
                    title={val.title}
                    desc={val.desc}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
