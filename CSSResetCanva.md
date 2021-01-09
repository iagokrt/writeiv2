```css
- {
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: black;
  transition: 0.4s ease-in-out;
  background: #0c0f13;
}

html,
body,
#root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

a {
  text-decoration: none;
  color: #0c0c0c;
  letter-spacing: 0.8rem;
  text-align: center;
}

/_ custom designed scrollbar _/ /_ width _/ ::-webkit-scrollbar {
  width: 6.6px;
}

/_ Track _/ ::-webkit-scrollbar-track {
  background: rgba($color: #f1f1f1, $alpha: 0.2);
}

/_ Handle _/ ::-webkit-scrollbar-thumb {
  background: #f1f1f1;
}

/_ Handle on hover _/ ::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.container {
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/_ Main Title :: @Section _/
.container h1 {
  text-align: center;
  color: #f1f1f1;
  line-height: 44px;
  letter-spacing: 0.5rem;
  padding: 5px 8px;
}

header {
  position: absolute;
  z-index: 99;
  width: 100%;
}

.wrapper-blog {
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 2vh;
  right: 0vh;
  padding-right: 15px;
}
.wrapper-blog button {
  border: 1px solid #f1f1f1;
  background-color: transparent;
  padding: 12px 16px;
  margin-bottom: 6px;
  border-radius: 10px;
  outline: none;
  transition: all 0.1s linear;
}
.wrapper-blog button:hover {
  background-color: #000111;
  transform: scale(1.02);
}
.wrapper-blog button a {
  color: #f1f1f1;
}

canvas {
  background-color: #000111;
}

.frame {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  padding: 2.5rem;
  z-index: 2;
}

.frame\_\_title {
  font-size: inherit;
  font-weight: normal;
  margin: 0;
  cursor: pointer;
}

a {
  color: white;
  text-decoration: none;
}
```
