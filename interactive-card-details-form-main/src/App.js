import React from 'react'
import bgMobile from './images/bg-main-mobile.png'
import bgDesktop from './images/bg-main-desktop.png'
import logo from './images/card-logo.svg'

export default function App() {
  return (
    <>
      <section>
        <div className="absolute -z-10">
          <picture>
            <source media="(min-width: 1024px)" srcSet={bgDesktop} />
            <img src={bgMobile} alt="background" />
          </picture>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
          <div className='mt-10 mx-5 lg:grid lg:grid-cols-1 lg:gap-8'>
            <article className="front-card p-5 flex flex-col justify-between">
              <img src={logo} className='w-20 lg:w-28' alt="Card logo"/>

              <div>
                <h2 className='text-white text-xl lg:text-3xl mb-6 tracking-widest'>
                  1234 5678 1234 5678
                </h2>

                <ul className='flex items-center justify-between'>
                  <li className='text-white uppercase text-base lg:text-xl tracking-widest'>
                    Cleverson T
                  </li>
                  <li className='text-white text-base lg:text-xl tracking-widest'>
                    00/00
                  </li>
                </ul>
              </div>
            </article>

            <article className='back-card relative lg:ml-20'>
              <p className='absolute right-10 text-lg lg:text-xl text-white tracking-widest'>
                123
              </p>
            </article>
          </div>

          <div>

            <form>
              <div>
                <label htmlFor="cardholder_name">Cardholder Name</label>
                <input 
                type="text"
                name="cardholder_name"
                id="cardholder_name" 
                placeholder="e.g Jane Appleseed"
                required />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
