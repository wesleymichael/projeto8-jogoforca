import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px auto;
  max-width: 700px;

  button{
    width: 40px;
    height: 40px;
    background: #E1ECF4;
    border: 1px solid #7AA7C7;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 6px;
    font-size: 18px;
    color: #39739D;
    text-transform: uppercase;
    cursor: pointer;

    :disabled{
      background: #9FAAB5;
      color: #798A9F;
      cursor: auto;
    }
  }
`;

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default function Letras({digitadas, setDigitadas, palavra, erros, setErros, status, setStatus, faltaAcertar, setFaltaAcertar}){

  function cliqueLetra(letra){
    const maxErros = 6;
    setDigitadas([...digitadas, letra]);

    if( !palavra.includes(letra) ){
      const quantErros = erros+1;
      setErros(quantErros);
      if(quantErros === maxErros){
        setStatus('perdeu');
      }
    } else {
      setFaltaAcertar(faltaAcertar-1);
      if(faltaAcertar-1 === 0){
        setStatus('ganhou')
      }
    }
  }

  return(
    <Div>
      {alfabeto.map( letra => (
        <button 
          key={letra} 
          disabled={digitadas.includes(letra) || status !=='jogando'} 
          onClick={() => cliqueLetra(letra) } 
          data-test="letter"
        >
          {letra}
        </button>
      ))}
    </Div>
  )
}