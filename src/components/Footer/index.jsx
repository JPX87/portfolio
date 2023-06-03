import { Link } from 'react-router-dom'

import './sass.scss'

function Footer() {

    return (
        <footer>
            <h1>Réalisé avec <img src="/logo/react.png" alt="" /><img src="/logo/sass.png" alt="" /></h1>
            <Link to="/mentions-legales">Mentions Légales</Link>
        </footer>
    )
}

export default Footer
