import './NumerosImpares.css';

const NumerosImpares = ({ numeros }) => {
    const numerosImpares = numeros.filter(num => num % 2 != 0);
    return (
        <ul className='numerosImpares'>
            {numeros.map((num, index) => (
                <li key={index}>{num}</li>
            ))}
        </ul>
    );
};
export default NumerosImpares;

