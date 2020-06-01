import React from 'react'
if (typeof window !== 'undefined') {
  require('./Certificates.css')
}

const Certificates = () => {
  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer:coarse)').matches
  return (
    <div className="certificates">
      <div className="content">
        <h4>
          CERTIFICATES
        </h4>
      </div>
      <div className="images">
        <div className="image">
          <img className="image1" src="/images/NZOA.JPG" alt="img"></img>
        </div>
        <div className="image">
          <img className="image1" src="/images/racs.JPG" alt="img"></img>
        </div>
        <div className="image">
          <img className="image1" src="/images/MBBCh.JPG" alt="img"></img>
        </div>
        <div className="image">
          <img className="image1" src="/images/FCS_SA.JPG" alt="img"></img>
        </div>
        <div className="image">
          <img className="image1" src="/images/ecfmg.JPG" alt="img"></img>
        </div>
        <div className="image">
          <img className="image1" src="/images/Trubshaw_medal.JPG" alt="img"></img>
        </div>
        <div className="image">
          <img className="image1" src="/images/AdvancedCourse.JPG" alt="img"></img>
        </div>
        <div className="image">
          <img className="image1" src="/images/gmc.JPG" alt="img"></img>
        </div>
        <div className="image">
          <img className="image1" src="/images/samdc2.JPG" alt="img"></img>
        </div>
      </div>
    </div>
  )
}

export default Certificates