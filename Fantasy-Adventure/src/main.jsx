import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// set up Theatre.js Studio on lines 8-9 by first extending it with the r3f extension, and then calling initialize().
// import studio from '@theatre/studio'
// import extension from '@theatre/r3f/dist/extension'

// studio.extend(extension)
// studio.initialize()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* set up React Suspense on line 13 so we can load our 3D models. */}
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </React.StrictMode>
)
