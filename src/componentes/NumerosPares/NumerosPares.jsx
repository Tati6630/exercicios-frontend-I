import './NumerosPares.css';

const NumerosPares = ({numeros}) => {
    
    return (
        <ul className='numerosPares'>
            {numeros.map((numpar, index) => (
                <li key={index}>{numpar}</li>
            ))}
        </ul>
    );
};
export default NumerosPares;
   





