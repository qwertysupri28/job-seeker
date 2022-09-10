import React from 'react';
import { Navigation } from "./navigation";

const HomePage = (props) => {
    return (
      <>
      <Navigation />
      <header id='header'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-md-offset-2 intro-text'>
                  <h1>
                    {props.data ? props.data.title : 'Loading'}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                  <a
                    href='#features'
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    Learn More
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      </>
    )
}
export default HomePage; 