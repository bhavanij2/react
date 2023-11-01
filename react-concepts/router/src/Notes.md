# Install react-router-dom

- npm i react-router-dom@6
- Check the dependency download updated in `package.json`
  - "react-router-dom": "^6.16.0"
- In `index.js`
  - Add import `import { BrowserRouter } from "react-router-dom";`
  - Place `App` component in `root.render()` under `<BrowserRouter>` tag
    tag
- In `App.js`
  - Import `import { Routes, Route } from 'react-router-dom';`
  - Add routes:
  ```
  <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
  ```
  - In `<nav>` element, add link to the routes:
  ```
  <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/about-me" className="nav-item">
          About Me
        </Link>
  ```
