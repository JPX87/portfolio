import { Helmet } from 'react-helmet'
import './sass.scss'

function Error() {
  return (
    <>
      <Helmet>
        <title>Page introuvable</title>
      </Helmet>

      <div className="error">
        <h1>Page introuvable 🫤</h1>
      </div></>
  )
}

export default Error
