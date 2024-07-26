import { useEffect,useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import api from "../../services/api"
import './filme.css'
import {toast} from 'react-toastify'




function Filme(){
     const { id } = useParams();
     const navigation = useNavigate();
     const [filme,setFilme]= useState({})
     const [loading,setLoading] = useState(true)

     useEffect(()=>{
        async function loadFilmes(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key:'c00fb0ec61f889a86bf25c0f559bc282',
                    language:'pt-BR',
                }
            })
            .then((response)=>{
                console.log(response.data);
                setFilme(response.data)
                setLoading(false);
                style (response)


               
                 
            })
            .catch(()=>{
                navigation('/', {replace: true});
            return;

            })

        }


        function style(response){

            document.body.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${response.data.backdrop_path})`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundAttachment = 'fixed';

        }


        loadFilmes()

        return ()=>{

        }
     },[navigation,id])

     function salvarFilme(){
        const minhaLista = localStorage.getItem('@primeflix');
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilmes = filmesSalvos.some((filmesSalvo)=> filmesSalvo.id === filme.id)

        if(hasFilmes){
            toast.warn('Esse filme já esta na lista!')
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos))
        toast.success('Filme Salvo Com Sucesso!')
     }
        

     if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando...</h1>
            </div>
        )
     }

    return(
      <div className="filme-info">
        <h1>{filme.title}</h1>
        <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
        <h3>Sinopse</h3>
        <span>{filme.overview}</span>
        <strong>Avaliação:{filme.vote_average} / 10</strong>

        <div className="area-buttons">
            <button onClick={salvarFilme}>Salvar</button>
            <button>
                <a target="blank" rel="externo" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
            </button>
        </div>


      </div>
    )

}
export default Filme