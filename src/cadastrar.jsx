import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function ToDo() {
    const listaLocalStorage = localStorage.getItem("Lista");
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState(JSON.parse(listaLocalStorage)|| []);
    const [id, setId] = useState(1);
    const [Canal, setCanal] = useState("");
    const [Video, setVideo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [url, setUrl] = useState("");

    useEffect(() => {
        localStorage.setItem("Lista", JSON.stringify(lista));
    }, [lista]);

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade,
            id: id,
            url: url,
            descricao: descricao,
            Canal:Canal,
            Video:Video
        }]);
        setId(id + 1);
        setAtividade("");
        setCanal("");
        setLista("");
        setDescricao("");
        setUrl("")
        setVideo("")
        
    };



    return (
        <div className="container">
            <img src="ibjjf.png" alt="IBJJF"></img>
            <h1>Lutador de Jiu - Jiutsu</h1>
            <Link to="/">
                <button>Voltar Home</button>
            </Link>
            <form className="input" onSubmit={salvar}>
                <input type="text" value={atividade} onChange={(e) => setAtividade(e.target.value)} />
                <input type="text" value={lista} onChange={(e) => setFaixa(e.target.value)} />
                <input type="text" value={id} onChange={(e) => setCategoria(e.target.value)} />
                <input type="text" value={Canal} onChange={(e) => setCategoria(e.target.value)} />
                <input type="text" value={Video} onChange={(e) => setCategoria(e.target.value)} />
                <input type="text" value={descricao} onChange={(e) => setCategoria(e.target.value)} />
                <input type="text" value={url} onChange={(e) => setCategoria(e.target.value)} />
                <button>ADICIONAR</button>
            </form>
            {lista.map((ativ) =>
                <ul key={ativ.id}>
                     <Link to={`/detalhe/${ativ.id}`}>
                     </Link>
                     <li>{ativ.atividade}</li>
                     
                    <li>
                        <p>{ativ.atividade}</p>
                        <p>{ativ.Faixa}</p>
                        <p>{ativ.Categoria}</p>
                        <button onClick={() => remover(ativ.id)}>Remover</button>
                    </li>
                </ul>
            )}
        </div>
    );
}