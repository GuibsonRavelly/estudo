import { Link } from "react-router-dom"
import './erro.css'

function Error(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Pagina não encontrada</h2>
            <Link className="link" to='/' >Veja todos filmes</Link>
        </div>
    )
}


export default Error