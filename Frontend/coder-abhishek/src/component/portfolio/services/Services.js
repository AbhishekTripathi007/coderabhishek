import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

export const Service = () => {
  return (
    <section id="services">

      <h5>
        What I Offer
      </h5>
      <h2>
        Services
      </h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>
              Java
            </h3>
          </div>

          <ul className="service_list">
            <li>
            <BiCheck className='service_list-icon' />
            <p>Core Java.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Java based web services.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>JSP.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>XML.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Java IDE such as Eclipse, Intellij IDEA based Developement.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Relational Database, SQL.</p>
            </li>

          </ul>
          {/* End of Java */}
        </article>

        <article className="service">
          <div className="service_head">
            <h3>
              Web Developement
            </h3>
          </div>

          <ul className="service_list">
            <li>
            <BiCheck className='service_list-icon' />
            <p>Frontend Developement using HTML, CSS, JavaScript.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Backend Developement using Node.js.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Backend Developement using PHP.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Frontend Scripting using React.js.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Deployment of React website using AWS Amplify.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Responsive Web Designing using CSS.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Database management using phpmyadmin.</p>
            </li>

          </ul>
          {/* End of WebDevlopement */}
        </article>

        <article className="service">
          <div className="service_head">
            <h3>
              Others
            </h3>
          </div>

          <ul className="service_list">
            <li>
            <BiCheck className='service_list-icon' />
            <p>Hosting on AWS.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Creating Website on local servers such as Xampp.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>App Developement using Android.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Project Management tools such as Git and GitHub.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Non Relational Database Management using MongoDB.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Relational Database Management System using MySQL.</p>
            </li>

          </ul>
          {/* End of Others */}
        </article>
      </div>

    </section>
  )
}

export default Service