import './favoritos.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {toast} from 'react-toastify'

function Favoritos() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem('@primeflix');
        setFilmes(JSON.parse(minhaLista) || []);
    }, []);

    function apagarFilme(id) {
        let filtroFilmes = filmes.filter((item) => {
            return item.id !== id;
        });

        setFilmes(filtroFilmes);
        localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes));
        toast.success('Filme removido com sucesso!')
    }

    return (
        <div className='meus-filmes'>
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <span>Você não possui nenhum filme salvo !</span>}

            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            <h2>{item.title}</h2>
                            <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            <div className='buttons'>
                                <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>
                                <button onClick={() => apagarFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Favoritos;
