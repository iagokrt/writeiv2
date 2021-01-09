import React from 'react'
// import { Stats } from 'drei'

const data = {
  url: 'https://github.com/iagokrt'
}

const Html = (props) => {
  return (
    <>
      <div className="frame">
        <a className="frame__title" href={data.url}>
          `WriteIsland! v²
        </a>
      </div>

      {/*  <Stats />  */}
    </>
  )
}

export { Html }
