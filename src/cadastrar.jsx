import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function ToDo() {

    const listaLocalStorage = localStorage.getItem("Lista");

    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState(JSON.parse(listaLocalStorage) || []);
    const [id, setId] = useState(1);
    const [Canal, setCanal] = useState("");
    const [Video, setVideo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [url, setUrl] = useState("");
    const [nome, setNome] = useState("");

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
            Canal: Canal,
            Video: Video,
            nome: nome
        }]);
        setId(id + 1);
        setCanal("");
        setUrl("");
        setNome("");
        setLista("");
        setVideo("");
        setAtividade("");


    };

    return (
        <div className="container">

            <h1>JIU FLIX</h1>
            <Link to="/">
                <button>Voltar Home</button>
            </Link>
            <form className="input" onSubmit={salvar}>
                <h4>Canal:</h4> <input type="text" value={Canal} onChange={(e) => setCanal(e.target.value)} />
                <h4>Nome:</h4><input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                <h4>Descrição:</h4><input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                <h4>URL:</h4><input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
                <button>ADICIONAR</button>
            </form>

            {lista.map((canal) =>
                <div key={canal.id}>
                    <h1>Nome:{canal.nome}</h1>
                    <h1>Canal:{canal.Canal}</h1>


                    <h1>Descrição:{canal.descricao}</h1>

                    <iframe
                        width="772"
                        height="434"
                        src={`https://www.youtube.com/embed/${canal.url.slice(17)}`}
                        title="JIU JITSU A ORIGEM"
                        frameborder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>

                </div>
            )}
        </div>
    );
}