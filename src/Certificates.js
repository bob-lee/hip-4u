import React from 'react'
if (typeof window !== 'undefined') {
  require('./Certificates.css')
}

const Certificates = () => {
  // const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer:coarse)').matches
  return (
    <div className="certificates">
      <div className="content">
        <h4>
          CERTIFICATES
        </h4>
      </div>
      <div className="images">
        <div className="image">
          <h2>NZ Orthopaedic Association</h2>
          <img className="image1" src="/images/NZOA.jpg" alt="img"></img>
        </div>
        <div className="image">
          <h2>Fellowship Royal Australian College of Surgeons</h2>
          <img className="image1" src="/images/racs.jpg" alt="img"></img>
        </div>
        <div className="image">
          <h2>Wits University MBBch South Africa</h2>
          <h3>"Bachelor of Medicine + Bachelor of Surgery"</h3>
          <img className="image1" src="/images/MBBCh.jpg" alt="img"></img>
        </div>
        <div className="image">
          <h2>Fellowship of College of Medicine of South Africa</h2>
          <img className="image1" src="/images/FCS_SA.jpg" alt="img"></img>
        </div>
        <div className="image">
          <h2>ECFMG certificate (American)</h2>
          <img className="image1" src="/images/ecfmg.jpg" alt="img"></img>
        </div>
        <div className="image">
          <h2>Trubshaw Medal</h2>
          <img className="image1" src="/images/Trubshaw_medal.jpg" alt="img"></img>
        </div>
        <div className="image">
          <h2>AO certificate</h2>
          <img className="image1" src="/images/AdvancedCourse.jpg" alt="img"></img>
        </div>
        <div className="image">
          <h2>General Medical Council (London)</h2>
          <img className="image1" src="/images/gmc.jpg" alt="img"></img>
        </div>
        <div className="image">
          <h2>South African Medical & Dental Council</h2>
          <img className="image1" src="/images/samdc2.jpg" alt="img"></img>
        </div>
      </div>
    </div>
  )
}

export default Certificates