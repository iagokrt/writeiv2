```js
import React from 'react'
import { styled } from '@linaria/react'

const Frame = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  padding: 2.5rem;
  z-index: 2;

  a {
    font-size: inherit;
    font-weight: normal;
    margin: 0;
    cursor: pointer;
  }
`

const data = {
  url: 'https://github.com/iagokrt'
}

const Frames = (props) => {
  return (
    <>
      <Frames>
        <a href={data.url}>Welcome to `WriteIsland!</a>
      </Frames>
    </>
  )
}

export { Frames }
```

---

## Configuration File (linaria.config.js)

```js
module.exports = {
  evaluate: true,
  displayName: false
}
```
