import './Subtracao.css';

const Subtracao = ({num1, num2}) => {
    const diferenca=num1-num2;
    return (
        <>
        <div className='subtracao'><strong>{`${num1} - ${num2} = ${diferenca}`}</strong></div>
        </>
    );
};
export default Subtracao;




