import Image from 'next/image'
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
  }
];


export default function Home() {
  return (
    <main className="position-relative">
      <div className="position-relative">
        <div className="d-flex flex-row  belowNav">

          <div className="ms-1 d-flex flex-column mainTagContainer">
            {/* <svg className="line" xmlns="http://www.w3.org/2000/svg">
              <g id="Layer_1">
                <title>Layer 1</title>
                <path stroke-width="2" id="svg_1" d="m7.11341,17.44782c0.06545,225.83869 0.13091,451.67738 0.19636,677.51607" opacity="undefined" stroke-linecap="undefined" stroke-linejoin="undefined" stroke="#5818de" fill="none" />
                <ellipse ry="7.7381" rx="6.54762" id="svg_2" cy="10" cx="7.4312" stroke="#5818de" fill="#5818de" />
                <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_5" y2="694.68458" x2="7.2163" y1="898.30121" x1="7.2163" stroke-width="2" stroke="#5818de" fill="none" />
              </g>
            </svg> */}
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
          </div>
          <div className="myImage">
            <Image src="/donmain_page.png" fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="don_displayImage" />
          </div>
        </div>
      </div>
      <section className="">
        <div className="text-white  aboutPara">
          <span className="sectionHeadings">About <span className="secondWord">me</span></span>
          <br />
          I am a highly skilled and motivated individual with a strong passion for learning and self-improvement. Throughout my professional and personal experiences, I have consistently demonstrated my ability to adapt to new situations and take on challenges with a positive attitude. I have the ability to work well both independently and as part of a team. I am excited to continue to grow and develop my skills in new environments and am confident that I have the drive and determination to succeed in any venture I undertake.
        </div>
        <div className="p-5 row gap-3 justify-content-center align-items-center w-100">
          {skillData.map(item => (
            <div className="col-5 col-sm-3 col-lg-2 d-flex flex-row gap-2 align-items-center skillProgress" key={item.id}>
              <Image src={`/icons/${item.img}`} width={38} height={38} alt="html" />
              <div className="vertical_line" />
              <div className="d-flex flex-column align-items-start">
                <span>{item.progress}</span>
                <span>{item.lang}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
