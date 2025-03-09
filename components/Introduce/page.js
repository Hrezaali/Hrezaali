import React from 'react'

export default function Introduce({ id }) {
  return (
    <div id={id} className="flex flex-col items-center mt-24 px-4">
      <h1 className="text-center text-3xl md:text-5xl font-bold">
        Hello World! <br /> I'm a Software Engineer
      </h1>       
    </div>
  )
}
