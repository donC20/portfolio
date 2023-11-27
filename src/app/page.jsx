'use client'
import Image from 'next/image'
import Contact from '@/components/Contact/page'
import Footer from '@/components/Footer/page'

const skillData = [
  {
    id: 1,
    lang: "Html",
    img: "html48.png",
    progress: "90%"
  },
  {
    id: 2,
    lang: "PHP",
    img: "php48.png",
    progress: "85%"
  },
  {
    id: 3,
    lang: "Flutter",
    img: "flutter28.png",
    progress: "75%"
  },
  {
    id: 4,
    lang: "MySQL",
    img: "mysql48.png",
    progress: "80%"
  },
  {
    id: 5,
    lang: "Javascript",
    img: "javascript48.png",
    progress: "82%"
  },
  {
    id: 6,
    lang: "Python",
    img: "python48.png",
    progress: "70%"
  },
  {
    id: 7,
    lang: "Figma",
    img: "figma48.png",
    progress: "65%"
  },
  {
    id: 8,
    lang: "Firebase",
    img: "firebase48.png",
    progress: "85%"
  }
  ,
  {
    id: 10,
    lang: "Git",
    img: "git48.png",
    progress: "88%"
  }
  ,
  {
    id: 9,
    lang: "Flask",
    img: "flask48.png",
    progress: "30%"
  }
];
const certificationsData = [
  {
    id: 1,
    title: "Certified on PHP",
    content: "Got certified on web development using php. Certification provided by",
    company: "Udemy, Inc.",
    img_company: "images/udemy.png",
    img_lang: "images/phplogo.svg",
    link: "https://www.udemy.com/certificate/UC-49e98af8-0506-4181-af1e-bb44ad534562/",
  },

  {
    id: 2,
    title: "Microsoft 365 Certified",
    content: "Learned the basics of a Software as a Service (SaaS) cloud model and much more offered by",
    company: "Microsoft Corporation.",
    img_company: "images/microsoft.jpg",
    img_lang: "images/microsoft-certified-fundamentals-badge.svg",
    link: "https://www.credly.com/badges/f121237f-2551-4a06-b4f2-52bbc486cefa/public_url",
  },
  {
    id: 3,
    title: "GitHub participation certificate",
    content: "Participated in the GitHub Hands-on Workshop organized by",
    company: "Github & IncubateIND.",
    img_company: "images/github_logo.png",
    img_lang: "images/videoconference.svg",
    link: "https://drive.google.com/file/d/1LasLCxfCEnIMoYtMnokeyt8xd7eQFJRf/view?usp=sharing",

  }, {
    id: 4,
    title: "HTML Certification",
    content: "Learned about HTML from",
    company: "SoloLearn.",
    img_company: "images/Sololearn-Rebranding.jpg",
    img_lang: "images/sololearn_html.png",
    link: "https://www.sololearn.com/Certificate/CT-J0W2A5DI/pdf",

  }, {
    id: 5,
    title: "Certification on Data mining",
    content: "Learned the basic concepts about data mining from",
    company: "NPTEL platform.",
    img_company: "images/nptel-logo.jpg",
    img_lang: "images/datamining.svg",
    link: "https://drive.google.com/file/d/1C0IUa066mLR8ZRiWVP7PqkyhHNMJjqRK/view?usp=sharing",

  },
  {
    id: 6,
    title: "Certification on Python",
    content: "Learned the basic concepts of Python programming",
    company: "Kaggle.",
    img_company: "images/kaggle_logo.png",
    img_lang: "images/python_logo.svg",
    link: "https://www.kaggle.com/learn/certification/donbenny/python",

  },
  {
    id: 7,
    title: "AWS Academy Cloud Foundations",
    content: "Learned the basic concepts of AWS Academy Cloud Foundations provided by",
    company: "AWS Academy.",
    img_company: "images/AWS_ertification.jpg",
    img_lang: "images/awsfbadge.png",
    link: "https://www.credly.com/badges/ee93a596-b9df-4c96-96fb-3dc55dbdff85/linked_in_profile",
  },
  {
    id: 8,
    title: "Introduction to Flutter",
    content: "Learned the basic concepts of Flutter provided by",
    company: "Simplilearn.",
    img_company: "images/simplilearn.jpg",
    img_lang: "images/flutter-icon.svg",
    link: "https://simpli-web.app.link/e/kdRK8k9teBb",
  },

];


export default function Home() {
  function downloadResume() {
    var path = "downloadable/Software Engineer.pdf";
    var link = document.createElement('a');
    link.setAttribute('href', path); // Replace with the actual path to your file
    link.setAttribute('download', 'resume-don-benny'); // Replace with the desired file name
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)
  }
  return (
    <main className="position-relative">
      <div className="position-relative">
        <div className="d-flex flex-row  belowNav">

          {/* cover component */}
          <div className="ms-1 d-flex flex-column mainTagContainer">
            {/* side line */}
            <div className="d-flex flex-column justify-content-center align-items-center gap-1 sidelinesBody sidelinesBodyL1">
              <i className="bi bi-star-fill"></i>
              <div className="sidelines"></div>
            </div>
            <div className="attrA"><h3>I am</h3></div>
            <div className="nameTag">
              <h1 className="d-flex flex-row flex-sm-column  flex-md-column flex-lg-column gap-1"><span className="firstName">Don</span>Benny</h1>
            </div>
            <div className="ms-lg-3 mb-0 text-light attrB"><h3>a Code enthusiast.</h3></div>
            <div className="ms-lg-3 mt-1 mt-lg-3 quoteSide">
              <div className="ms-2 quotes">
                Transforming ideas into elegant solutions through code, I strive to craft innovative digital experiences that leave a lasting impact.
              </div>
            </div>
            <button className="btn mt-4" id="resume_download" type="button" onClick={downloadResume}>
              <strong>Resume</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>

          </div>
          {/* My image */}
          <div className="myImage">
            <Image src="donmain_page.png" fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="don_displayImage" />
          </div>
        </div>
      </div>
      {/* about me */}
      <section className="">
        {/* side line */}
        <div className="d-flex flex-row align-items-center position-relative">
          <div className="d-flex flex-column justify-content-center align-items-center mt-2 gap-1 sidelinesBody ">
            <i className="bi bi-star-fill"></i>
            <div className="sidelines"></div>
          </div>
          {/* about me paragraph */}
          <div className="text-white  aboutPara">
            <span className="sectionHeadings">About <span className="secondWord">me</span></span>
            <br />
            I am a highly skilled and motivated individual with a strong passion for learning and self-improvement. Throughout my professional and personal experiences, I have consistently demonstrated my ability to adapt to new situations and take on challenges with a positive attitude. I have the ability to work well both independently and as part of a team. I am excited to continue to grow and develop my skills in new environments and am confident that I have the drive and determination to succeed in any venture I undertake.
          </div>
        </div>
        {/* skills contaienr */}
        <div className="d-flex flex-row align-items-center position-relative">
          {/* side line */}
          <div className="d-flex flex-column justify-content-center align-items-center mt-3 gap-1 sidelinesBody ">
            <span className="codeBraces bg-transparent">{"{ }"}</span>
            <div className="sidelines"></div>
          </div>
          {/* skills */}
          <div className="p-5 row gap-3 justify-content-center align-items-center w-100">
            {skillData.map(item => (
              <div className="col-5 col-sm-3 col-lg-2 d-flex flex-row gap-2 align-items-center skillProgress" key={item.id}>
                <Image src={`icons/${item.img}`} width={38} height={38} alt="html" />
                <div className="vertical_line" />
                <div className="d-flex flex-column align-items-start">
                  <span>{item.progress}</span>
                  <span>{item.lang}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="">
        {/* what i do container */}
        <div className="d-flex flex-row align-items-center position-relative">
          <div className="d-flex flex-column justify-content-center align-items-center gap-1 mt-3 sidelinesBody ">
            <i className="bi bi-briefcase-fill"></i>
            <div className="sidelines"></div>
          </div>
          {/* what i do head and content */}
          <div className="text-white aboutPara">
            <span className="sectionHeadings">What I <span className="secondWord">do</span></span>
            <br />
            <div className="d-flex align-items-center justify-content-center row whatIdo">
              <div className="d-flex flex-column col-lg-6 col-12 align-items-center justify-content-center p-lg-5 p-2">
                <i className="bi bi-puzzle-fill"></i>
                <span className="text-white">Designing</span>
                <p>Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure</p>
              </div>
              <div className="col-lg-6 col-12 d-flex flex-column col-6 align-items-center justify-content-center p-lg-5 p-2">
                <i className="bi bi-code-slash"></i>
                <span className="text-white">Developing</span>
                <p>Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* my resume */}
      <div className="resumeDetails position-relative">
        {/* what i do container */}
        <div className="d-flex flex-column justify-content-center align-items-center gap-1 mt-1 sidelinesBody">
          <i className="bi bi-briefcase-fill"></i>
          <div className="sidelines"></div>
        </div>
        <div className="d-flex">

          {/* what i do head and content */}
          <div className="text-white aboutPara">

            <span className="sectionHeadings">My <span className="secondWord">Resume</span></span>
            <br />
            <div className="ps-lg-5 pt-lg-5 educationHead">Education</div>

            {/* education details parent container */}
            <div className="d-flex flex-column flex-lg-row  position-relative educationDetails_parent">
              <div className="d-flex flex-column">
                {/* individual path containers */}
                <div className="d-flex flex-row align-items-center pathHeading mt-lg-2 ms-lg-5 ms-md-5">
                  <div className="roundedPath justify-content-center d-flex align-items-center">1</div>
                  <span className='ms-5'>2002-2016</span>
                </div>
                {/* content */}
                <div className="educationContent ed_1">
                  <div className="content p-4">
                    <h5 className='fw-bold'>Vijayamatha Public School</h5>
                    <p className='ps-2 text-secondary'>Udumbanchola P.O, Idukki, Kerala</p>
                    <p className="ps-2">
                      Vijayamtha Public School is a catholic institution established and managed by the Sisters of Adoration of the Blessed Sacrament(SABS) of Jaimatha Province Idukki. The school is directly under the management of Jairani Education trust and is affiliated to CBSE.
                    </p>
                    <a className='ps-2' href="https://vijayamathapublicschool.com/">https://vijayamathapublicschool.com/</a>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column">
                {/* individual path containers */}
                <div className="d-flex flex-row align-items-center pathHeading mt-lg-2 ms-lg-5 ms-md-5">
                  <div className="roundedPath justify-content-center d-flex align-items-center">2</div>
                  <span className='ms-5'>2002-2016</span>
                </div>
                {/* content */}
                <div className="educationContent ed_2">
                  <div className="content p-4">
                    <h5 className='fw-bold'>St.Xaviers HSS</h5>
                    <p className='ps-2 text-secondary'>Chemmannar P.O, Idukki, Kerala</p>
                    <p className="ps-2">
                      St. Xaviers Higher Secondary School is a well-known educational institution that has made a significant impact in the field of education.
                    </p>
                    {/* <a className='ps-2' href="https://vijayamathapublicschool.com/">https://vijayamathapublicschool.com/</a> */}
                  </div>
                </div>
              </div>
              <hr className='hrHR' />
              <hr className='hrVR' />

              <div className="d-flex flex-column">

                {/* individual path containers */}
                <div className="d-flex flex-row align-items-center pathHeading mt-lg-2 ms-lg-5 ms-md-5">
                  <div className="roundedPath justify-content-center d-flex align-items-center">3</div>
                  <span className='ms-5'>2002-2016</span>
                </div>
                {/* content */}
                <div className="educationContent ed_3">
                  <div className="content p-4">
                    <h5 className='fw-bold'>Amal Jyothi College of Engineering</h5>
                    <p className='ps-2 text-secondary'>kanjirapally P.O, Kottayam, Kerala</p>
                    <p className="ps-2">
                      Amal Jyothi College of Engineering (Autonomous), Kanjirapally, is the first engineering college in Kerala to obtain NAAC accreditation with A grade, and the first new generation engineering college in the State to secure the prestigious NBA accreditation for prime departments. Amal Jyothi is approved by the All India Council for Technical Education (AICTE), New Delhi.
                    </p>
                    <a className='ps-2' href="https://www.ajce.in/">https://www.ajce.in /</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 position-relative">
        {/* what i do container */}
        <div className="d-flex flex-column justify-content-center align-items-center gap-1 mt-1 sidelinesBody">
          <i className="bi bi-briefcase-fill"></i>
          <div className="sidelines"></div>
        </div>
        <div className="d-flex flex-row align-items-center">

          {/* Cerifications */}
          <div className="text-white aboutPara">
            <span className="sectionHeadings">My <span className="secondWord">Certifications</span></span>
          </div>
        </div>
        <div className="row justify-content-center align-items-center p-3 gap-5 cert_backBody">
          {certificationsData.map(item => (
            <a href={item.link} className="card certifications_container col-3 p-0" key={item.id}>
              <div className="card_cert_img d-flex flex-row">
                <Image className="card_image_from" src={item.img_company} width={100} height={115} alt="Card image cap" />
                <Image className="card_image_on" src={item.img_lang} width={55} height={55} alt="Card image cap" />
              </div>
              <hr />
              <div className="card-body">
                <b className="card-title">{item.title}</b>
                <p className="card-text">{item.content} <b>{item.company}</b></p>
              </div>
            </a>
          ))}
        </div>

      </div>
      <div className="mt-4 position-relative">
        {/* Contact */}
        <div className="d-flex flex-column justify-content-center align-items-center gap-1 mt-3 sidelinesBody">
          <i className="bi bi-briefcase-fill"></i>
          <div className="sidelines"></div>
        </div>
        <div className="d-flex flex-row align-items-center">

          {/* contact */}
          <div className="text-white aboutPara">
            <span className="sectionHeadings">Contact<span className="secondWord"> me</span></span>
          </div>
        </div>
        <div className=" p-3 contact_backBody">
          <Contact />
        </div>
      </div>
      <Footer />
    </main >
  )
}
