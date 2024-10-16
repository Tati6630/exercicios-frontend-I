import './Multiplicacao.css';

const Multiplicacao = ({ num1, num2 }) => {
    const resultado = (num1 * num2);
    return (
        <>
            <div className='multiplicacao'>{`${num1} * ${num2} = ${resultado}`}</div>
        </>
    );
};
export default Multiplicacao;



