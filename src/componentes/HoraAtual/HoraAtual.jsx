import './HoraAtual.css';

    const HoraAtual = () => {
        const hora = new Date().getHours(); 
        return (
            <>
                <div className='horaAtual'>{hora}</div>
            </>
        );
    };
    export default HoraAtual;











