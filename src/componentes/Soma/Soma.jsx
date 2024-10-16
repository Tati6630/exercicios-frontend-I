import './Soma.css';

const Soma = ({num1, num2}) => {
    const somando=num1+num2;
    return (
        <>
        <div className='soma'><strong>{`${num1} + ${num2} = ${somando}`}</strong></div>
        </>
    );
};
export default Soma;
