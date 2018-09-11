import React, { Component } from 'react';
import Roll from 'react-reveal/Roll'
import Slide from 'react-reveal/Slide';
import resumePDF from './TJLoughryDevResume.pdf';


class Resume extends Component {
  render() {
    return (
      <div className="App">
      <div>
        <Roll top cascade>
          <h1 className="pageName">RESUME</h1>
        </Roll>
      </div>
      <Slide bottom>
        <Roll bottom cascade>
        <div className="resumeContainer">
          <section className='sectionTitle'><span className='sectionName'>Profile Statement:</span>
            <p className='workDescription'>As a former tax auditor, I bring an auditor's attention to detail to web development and all projects I
             am given. Working with cars is my hobby but I find my ability to disassemble and reassemble
              complex machinery translates to how I approach new challenges. </p>
          </section>
          <section className='sectionTitle'><span className='sectionName'>Skills:</span>
            <p><span className='minorTitle'>Development Tools:</span>
              <li className='workDescriptionList'>
                HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Python, NGNX
              </li>
            </p>
          </section>
          <section className='sectionTitle'><span className='sectionName'>Experience:</span>
            <div><span className='minorTitle'>Ecor Ventures, Austin</span>
              <p className='position'>Software Engineer</p>
              <li className='workDescriptionList'>
                Lead support efforts for real time network monitoring app, built on Node.js/Socket.io, PostrgreSQL, VueJS, Bootstrap, and jQuery (client project).
              </li>
              <li className='workDescriptionList'>
                Built unit tests for NGNX, using the TAP protocol.
              </li>
              <li className='workDescriptionList'>
                Generated SQL Server database tables for a data warehouse (client project).
              </li>
            </div>
            <div><span className='minorTitle'>General Assembly, Austin</span>
              <p className='position'>Web Development Immersive Fellow</p>
              <li className='workDescriptionList'>
                Three month, full-time bootcamp covering: Node.js, React, MongoDB, HTML/CSS, JavaScript.
              </li>
            </div>
            <div><span className='minorTitle'>Freemon, Shapard, & Story, CPAs</span>
              <p className='position'>Associate Accountant</p>
              <li className='workDescriptionList'>
                Prepared federal and state tax returns and extensions for all business types and individuals.
                Produced work papers to document information authenticating numbers on the finalized tax
                returns. Assisted with any and all Texas Sales and Use tax questions from clients and co-workers.
            </li>
          </div>
            <div><span className='minorTitle'>Scalco, Johnson, Leahy & Dudek CPAs PLLC</span>
              <p className='position'>Associate Accountant</p>
              <li className='workDescriptionList'>
                Lead Sales and Use tax associate, fielding questions from all associates and partners of the firm.
                Prepared federal and state tax returns and extensions for all business types and individuals.
                Created work papers that show flow of information backing up and confirming numbers on the finalized
                tax returns.
              </li>
            </div>
            <div><span className='minorTitle'>Texas Spokes Sports Car Club</span>
              <p className='position'>Treasurer</p>
              <li className='workDescriptionList'>
                Developed and implemented internal controls for cash entry fees for each autocross event.  Implemented mandatory reimbursement procedures for purchases made by other board members.
              </li>
            </div>
          </section>
          <section className='sectionTitle'><span className='sectionName'>Education:</span>
            <div><span className='minorTitle'>Midwestern State University, Wichita Falls, Texas  </span>
              <li className='workDescriptionList'>Bachelor of Business Administration in Accounting</li>
            </div>
            <div><span className='minorTitle'>Queen Mary University, London, England  </span>
              <li className='workDescriptionList'>International Business</li>
            </div>
            <div><span className='minorTitle'>Austin Community College, Austin, Texas  </span>
              <li className='workDescriptionList'>Associates of Science in Mathematics</li>
            </div>
          </section>
          <div className='resumeDownload'>
            <form method="get" action={resumePDF} target="_blank">
               <button className='resumeDownloadButton' type="submit">Download!</button>
            </form>
          </div>
        </div>
      </Roll>
      </Slide>
      </div>
    );
  }
}

export default Resume;
