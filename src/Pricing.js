import React from 'react'
if (typeof window !== 'undefined') {
  require('./Pricing.css')
}

const Pricing = () => {
  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer:coarse)').matches
  return (
    <div className="pricing">
      <div className="content">
        <h4>
          PRICING
        </h4>
        <p>
          Medical care has unfortunately become very expensive.  This is for a number of reasons:
        </p>
        <ol>
          <li>Advances in technology</li>
          <li>Increases in regulation, which does also ensure better and more consistent care</li>
          <li>Increasing use of disposable items</li>
          <li>Increasing incidence of medical co-morbidities</li>
          <li>Provision of private healthcare is now increasingly by large multinational healthcare organizations, who are required to show a profit</li>
        </ol>
        <p>
          Provision of private healthcare is now increasingly by large multinational healthcare organizations, who are required to show a profit
        </p>
        <p>
          I have been able to negotiate fixed prices/estimates for a number of operations. The prices may vary depending on implants, co-morbidities and hospital stay. (my fees are highlighted)
        </p>
        <p>
          <u>The Global fee for a Hip Replacement with a three day hospital stay should be under $20 000</u>
        </p>
        <p>
          <b>First Consult :      $200</b>
        </p>
        <p>
          <b>Surgical Fee :     $3854</b>
        </p>
        <p>
          Physician Consult with bedside Echo (if required) :
        </p>
        <p>
          Anaesthetic Fee  :  Consult/Pre-assessment
        </p>
        <p>
          Ward Fees :
        </p>
        <p>
          Theatre fees :
        </p>
        <p>
          Diposables :
        </p>
        <p>
          Implants :
        </p>
        <p>
          Total  :         m
        </p>
      </div>
    </div>
  )
}

export default Pricing