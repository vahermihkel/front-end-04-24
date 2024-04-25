import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      404 - Not Found
      <Link to="/avaleht">
        <button>Tagasi avalehele</button>
      </Link>
    </div>
  )
}

export default NotFound