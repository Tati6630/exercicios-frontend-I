import './DataCompletaAtual.css';

const DataCompletaAtual = () => {
    //const completa = new Date().toLocaleString();  ---> ChatGPT
    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    
    const completa = `${dia}/${mes}/${ano} - ${hora}:${minuto}`;
    return (
        <>
            <div className='dataCompletaAtual'>{completa}</div>
        </>
    );
};
export default DataCompletaAtual;
 
/*tive dificuldades e achei que dessa forma o código ficava muito longo,
então fui pesquisar no ChatGPT, mas não quiz "colar" dele e por isso 
fui pesquisar também na documentação de métodos do JS (encontrei o "toString" também), 
mas achei muito complicadas (técnicas) as explicações dos métodos e acabei deixando 
assim mesmo*/


