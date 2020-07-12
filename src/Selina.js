import React from 'react'
if (typeof window !== 'undefined') {
  require('./Selina.css')
}

const Selina = () => {
  // const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer:coarse)').matches
  return (
    <div className="selina">
      <div className="content">
        <h4>
          SELINA SUTHERLAND HOSPITAL
        </h4>
        <p>
          Selina Sutherland is a Private Hospital affiliated with the Wairarapa Public Hospital.  It was established in 1996 as an incentive for Surgeons working at Wairarapa Hospital, to be able to develop a private practice. This was to assist in attracting suitably trained and qualified specialists to the Wairarapa.  Currently, it has devolved into a facility specializing in Elective Orthopaedic Surgery and Opthalmology, but several other services including Gynaecology, Vascular Surgery, Urology, General Medicine, General Surgery, endoscopy, mole- mapping, amongst others, are also provided.
        </p>
        <p>
          Selina Sutherland Hospital is a charitable (not for profit) Trust.  It employs six or seven admin staff, and a General Manager.  It has an independent Board of Trustees to provide oversight and Strategic Direction. No doctor owns shares or is employed by Selina Sutherland Hospital.  It also has very little in the way of assets.  The Building is owned by the Wairarapa DHB, the nursing staff are employed by the Wairarapa DHB, and their services are leased by Selina Sutherland Hospital.  Operating Theatre facilities and staff are likewise leased from the DHB.  The medical staff/Doctors are all independent contractors to Selina Sutherland Hospital.  This symbiotic relationship is beneficial to both the private and public hospitals.
        </p>
        <p>
          Selina Sutherland Hospital is a charitable (not for profit) Trust.  It employs six or seven admin staff, and a General Manager.  It has an independent Board of Trustees to provide oversight and Strategic Direction. No doctor owns shares or is employed by Selina Sutherland Hospital.  It also has very little in the way of assets.  The Building is owned by the Wairarapa DHB, the nursing staff are employed by the Wairarapa DHB, and their services are leased by Selina Sutherland Hospital.  Operating Theatre facilities and staff are likewise leased from the DHB.  The medical staff/Doctors are all independent contractors to Selina Sutherland Hospital.  This symbiotic relationship is beneficial to both the private and public hospitals.
        </p>
      </div>
      <div className="image img1"></div>
    </div>
  )
}

export default Selina