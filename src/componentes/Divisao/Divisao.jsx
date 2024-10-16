import './Divisao.css';

const Divisao = ({num1, num2}) => {
    const resultado=(num1 / num2);
    return (
        <>
        <div className='divisao'><strong>{`${num1} / ${num2} = ${resultado}`}</strong></div>
        </>
    );
};
export default Divisao;