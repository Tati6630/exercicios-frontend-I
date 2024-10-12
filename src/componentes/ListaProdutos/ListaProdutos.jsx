import './ListaProdutos.css';

const ListaProdutos = ({ produtos }) => {
    return (
        <ul className='listaProdutos'>
            {produtos.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};
export default ListaProdutos;
