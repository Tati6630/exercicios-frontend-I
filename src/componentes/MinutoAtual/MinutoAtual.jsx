import './MinutoAtual.css';

const MinutoAtual = () => {
    const minuto = new Date().getMinutes();
    return (
        <>
            <div className='minutoAtual'>{minuto}</div>
        </>
    );
};
export default MinutoAtual;