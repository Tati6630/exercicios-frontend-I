import './DiaAtual.css';

const DiaAtual = () => {
  const dia = new Date().getDate();

  return (
    <>
      <div className='diaAtual'>{dia}</div>
    </>
  );
};
export default DiaAtual;


