import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function ToDo() {
    const listaLocalStorage = localStorage.getItem("Lista");
    const [canal, setCanl] = useState("");
    const [lista, setLista] = useState(JSON.parse(listaLocalStorage)|| []);
    const [id, setId] = useState(1);
    const [Url, setUrl] = useState("");
    const [video, setVideo] = useState("");

    useEffect(() => {
        localStorage.setItem("Lista", JSON.stringify(lista));
    }, [lista]);

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade,
            id: id,
            Faixa: Faixa,
            Categoria: Categoria
        }]);
        setId(id + 1);
        setAtividade("");
        setFaixa("");
        setCategoria("");
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
                <input type="text" value={Faixa} onChange={(e) => setFaixa(e.target.value)} />
                <input type="text" value={Categoria} onChange={(e) => setCategoria(e.target.value)} />
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