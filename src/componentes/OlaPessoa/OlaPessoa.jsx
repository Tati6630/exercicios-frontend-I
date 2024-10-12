import './OlaPessoa.css';

const OlaPessoa = ({nome}) => {
    return (
        <>
            <div className='olaPessoa'><strong>Olá {nome}!!!</strong>
            </div>
        </>
    );
};
export default OlaPessoa;