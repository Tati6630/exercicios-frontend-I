import './AnoAtual.css';


const AnoAtual = () => {
    const ano = new Date().getFullYear();
    return (
        <>
            <div className='anoAtual'>{ano}</div>;
        </>
    );
};
export default AnoAtual;