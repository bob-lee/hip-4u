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
          We left South Africa in 2002 because of the security situation, and Wairarapa Hospital was able to develop a pathway for me to get registered as an Orthopaedic Surgeon in New Zealand, following a year of working under supervision at Palmerston North Hospital. We fell in love with the rural ‘feel’ of Masterton, and I have always liked the idea of putting down ‘roots’, and contributing to the community. The gratitude of my many patients and seeing the results of my work walking down the street has also been very rewarding. We have been here ever since.
        </p>
        <p>
          My father was a post-war refugee from East Germany and emigrated to South Africa in 1952, starting out in the gold mines in South Africa. He later became a full-time water colour artist. My mother was born on a farm in the remote Karoo district. English was her first language, and later she became a psychologist.
        </p>
        <p>
          I was born in the gold-mining city of Johannesburg, the largest in South Africa, in 1965. As a child I spent a great deal of time travelling with my father to remote areas of South Africa and Namibia. Later I also visited Europe and met with my father’s family in Germany. In my late teens and early twenties, I visited farming friends in Namibia, which is probably where my love of farming started.
        </p>
        <p>
          After I qualified as a doctor, [including two years of compulsory military service], I began the long years of study to specialize in orthopaedics, meeting my wife Lisa – a journalist - two years before I qualified. We were married in 1995, and shortly thereafter I wrote my final exams. Our three children, Gianina, Reinhard and Jurgen are now young adults.
        </p>
        <p>
          In Africa, I always wanted to own a farm, but the rural crime rate is very high. Masterton was an ideal place to realize my dream and I first started with 4 acres and two cows, and later moved to an old homestead with 45 acres. I tried leasing land of my own at Mt Bruce, and also owned a block in Alfredton, but my many responsibilities at the hospital made it difficult to fully participate, and I ended up selling. I am now a partner in a 950-hectare sheep and beef farm which is managed by another partner, and find that has worked well.
        </p>
        <p>
          In my spare time I like to work on engineering projects. I have built a number of trailers as well as an automated firewood processor. I also have two ancient Deutz tractors and one Fendt to keep me busy. Being immigrants, we are a close-knit family and enjoy exploring New Zealand together.
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