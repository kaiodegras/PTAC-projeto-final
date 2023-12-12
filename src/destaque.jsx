import React from "react"

export default function destaque (){
    const listaLocalStorage = localStorage.getItem("Lista");

    return(
       <div>
         {listaLocalStorage.map((canal) => 
                <div key={canal.id}>
                    <h1>Nome:{canal.nome}</h1>
                    <h1>Canal:{canal.Canal}</h1>


                    <h1>Descrição:{canal.descricao}</h1>

                    <iframe 
                    width="772" 
                    height="434" 
                    src={`https://www.youtube.com/embed/${canal.url.slice(-4)}`}
                    title="JIU JITSU A ORIGEM" 
                    frameborder={0} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen></iframe>
            
                </div>

                
            )}
        </div>
    );
}
      