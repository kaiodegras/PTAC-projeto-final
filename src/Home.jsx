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
        setCanal(""),
        setDescricao("");
        setVideo("");
        setUrl("");
        
    };



    return (
        <div className="container">

<iframe width="976"
 height="549"
  src="https://www.youtube.com/embed/9yjU0qxRn7Q" 
  title="JIU JITSU - A ORIGEM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            {lista.map((canal) =>
                <div key={canal.id}>
                    <h1>Nome:{canal.video}</h1>
                    <h1>Canal:{canal.canal}</h1>
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