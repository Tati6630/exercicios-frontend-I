import './NomesOrdenados.css';

const NomesOrdenados = ({nomes}) => {
    const nomesListados = nomes.sort();
    return (
        <ol className='nomesOrdenados'>
            {nomesListados.map((nome, index) => (
                <li key={index}>{nome}</li>
            ))}
        </ol>
    );
};
export default NomesOrdenados;


//os nomes fornecidos na lista App.jsx são dos dogs da família!!!