import './Calculadora.css';

const Calculadora = ({ num1, num2, operacao }) => {
    let resultado;
    let sinal;

    switch (operacao) {
        case 'soma':
            resultado = num1 + num2;
            sinal = '+';
            break;

        case 'subtracao':
            if (num1<num2){                //se caso o 'num1' for menor que o 'num2'
                [num1, num2] = [num2, num1];
            }
            resultado = num1 - num2;
            sinal = '-';

            break;

        case 'multiplicacao':
            resultado = num1 * num2;
            sinal = '*';
            break;

        case 'divisao':
            if (num1<num2){
                [num1, num2] = [num2, num1];
            resultado = num1 / num2;
            sinal = '/';
            }
            break;

        default:
            resultado = 'Utilize numeros inteiros e positivos';
            break;
    };

    return (
        <div className='calculadora'>{`${num1} ${sinal} ${num2} = ${resultado}`}</div>
    );

};
export default Calculadora;















/*/const BotaoCustomizado = ({ cor, aoClicar, children }) => {
    const estilos = ['botao-customizado_root'];

    switch (cor) {
        case 'primaria':
            estilos.push('botao-customizado_primario');
            break;

        case 'secundaria':
            estilos.push('botao-customizado_secundario');
            break;

        default:
            estilos.push('botao-customizado_padrao');
            break;
    }
    return (
        <button className={estilos.join(" ")} onClick={aoClicar}>
            {children}
        </button>
    );
};

export default BotaoCustomizado;*/