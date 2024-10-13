import './VerificarIdade.css';

const VerificarIdade = ({idade}) => {
    if(idade >= 18){
        return <div className='verificarIdadeMaior'>Com {idade} anos, você é maior de idade</div>
    }
    else{
        return <div className='verificarIdadeMenor'>Com {idade} anos, você é menor de idade</div>
    }
};
export default VerificarIdade;
