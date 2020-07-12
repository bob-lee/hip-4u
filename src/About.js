import React from 'react'
if (typeof window !== 'undefined') {
  require('./About.css')
}

const About = () => {
  // const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer:coarse)').matches
  return (
    <div className="about">
      <div className="content">
        <h4>
          SCHWANECKE BONE AND JOINT CENTRE
        </h4>
        <p>
          I am in solo Private practice working out of Selina Sutherland Hospital.  Being in a rural area, I have a very general scope of practice.  Most of my work consists of elective ACC cases, open surgery of the shoulder, arthroscopic and realignment surgery on the knee, Hip and Knee Replacements and Foot and Ankle Surgery.  I am happy to consult about Spinal conditions but we are unable to undertake Spinal Surgery in the Wairarapa.
        </p>
        <p>
          I generally have three or four half day clinics per week, and two or three operating sessions, with all the surgery undertaken at Selina Sutherland Hospital.
        </p>
        <p>
          It is generally accepted that your GP is actually in charge of your overall healthcare, and a referral from your GP is required, before I can see you.  Selina Sutherland is an affiliated Southern Cross provider, so all Southern Cross patients are welcome.  For insurance and ACC cases, a referral from your GP is also needed before any funding will be released, either for your consultation, or your surgery.
        </p>
        <p>
          As a small hospital Selina Sutherland, takes great pride in being able to offer personal attention and care, we strive to provide a professional service of a high standard.  Our team also values providing services that are cost efficient.  We can do this by continuously striving to improve efficiency in the operating room, using the latest technology and techniques, minimizing theatre time and hospital stay.  Studies have shown that generally minimizing theatre time and hospital stay, results in fewer complications and more successful outcomes, with reduced costs.
        </p>
      </div>
      <div className="image img1"></div>
    </div>
  )
}

export default About