import React from 'react'
if (typeof window !== 'undefined') {
  require('./Personal.css')
}

const Personal = () => {
  // const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer:coarse)').matches
  return (
    <div className="personal">
      <div className="content">
        <h4>
          PERSONAL
        </h4>
        <p>
          We left South Africa in 2002 because of the security situation, and with concerns about what was going on over the border in Zimbabwe. Masterton Hospital offered me a job and was able to develop a pathway for me to get registered as an Orthopaedic Surgeon in New Zealand , thanks to Ian Denholm. (retired orthopaedic surgeon) We fell in love with the rural ‘feel’  of Masterton.  I always liked the idea of putting down ‘roots’, contributing to the community ‘doing our bit’. The gratitude of my many patients and seeing the results of my work walking down the street has also been very rewarding.  We have been here ever since.
        </p>
        <p>
          I was born in Johannesburg, South Africa in 1965. My father was a post war refugee from East Germany and emigrated to South Africa in 1952, starting out in the gold mines in South Africa.  He later became a full-time water colour artist. My mother was an English speaking South African-born psychologist.  In spite of my name and heritage, I grew up speaking English in Johannesburg, South Africa.
        </p>
        <p>
          While I was growing up, I spent a great deal of time travelling with my father to remote areas of South Africa and Namibia.  I later also visited Europe and met with my father’s family in Germany. In my late teens and early twenties, I spent a great deal of time visiting some farming friends in Namibia, which is probably where my love of farming started.
        </p>
        <p>
          &nbsp;&nbsp;In 1995 I married my wife Lisa, a journalist.  We have three children: Gianina, who writes for the Times Age.  Reinhard, who is studying biology and screen writing, and Jurgen, who wants to become a farmer/professional hunter.
        </p>
        <p>
          In Africa, I always wanted to own a farm.  The trouble in Africa is that you never know when someone will decide you don’t own it anymore, and the rural crime rate is very high.  I thought Masterton would be an ideal place for me to realize my dream.  We started with 4 acres just out of town, with two cows. Then we moved to an old homestead with 45 acres and my learning started. After several different farming ventures, I realised that I did not have the time with my day job to give it my full attention, and thus I bought into a partnership for a 950 Ha sheep and beef farm, which is going well.
        </p>
        <p>
          In my spare time I like to work on engineering projects.  I have built a number of trailers as well  as an automated firewood processor.  I also have two ancient Deutz and one Fendt Tractor to keep me busy.
        </p>
      </div>
      <div className="images">
        <div className="image">
          <img className="image1" src="/images/Konrad_in_workshop.jpg" alt="img"></img>
        </div>
        <div className="image">
          <img className="image1" src="/images/Konrad_and_tractor.jpg" alt="img"></img>
        </div>
      </div>
    </div>
  )
}

export default Personal