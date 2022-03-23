import { FormEvent, SetStateAction, useState } from 'react';
import { Button } from '../../components/Button';
import { FormField } from '../../components/Input';
import { Container } from "./styles";

import asideImg from '../../assets/aside.svg';
import aside2Img from '../../assets/aside2.svg';
import heartImg from '../../assets/heart.png';
import pressureImg from '../../assets/pressao-arterial.png';
import stroke from '../../assets/stroke.png';


export function HomePage() {
  const [name, setName] = useState('');
  const [dateBirth, setDataBirth] = useState('');
  const [dateGraphic, setDateGraphic] = useState('');
  const [bpm, setBpm] = useState(0);
  const [bloodPressure, setBloodPressure] = useState({
    first: 0,
    second: 0,
  });
  const [disabledButton, setDisabledButton] = useState(true);
  const [selectedHour, setSelectedHour] = useState('');

  const filledState = {
    name,
    dateBirth,
    dateGraphic,
    selectedHour,
    bpm,
    bloodPressure
  }

  function handleSelectedHour( e :string ) {
    setSelectedHour(e)
  }
  console.log(selectedHour)

  function stateButton() {
    if(filledState) {
      setDisabledButton(!disabledButton);
    }
  }
  //console.log(filledState)

  function handleOnSubmit(e: FormEvent) {
    e.preventDefault()
    //const data = filledState;
  }

  return (
    <Container>
      <aside>
        <img src={dateGraphic ? aside2Img : asideImg} alt="Imagem elatório de saúde em gráficos" />
      </aside>
      <div className='container'>
        <main>
          <section className='form-register'>
            <section className='header'>
              <h1>Diário de saúde</h1>
              <p>Crie seu o relatório diário de saúde</p>
            </section>
            <form action="">
              <div className='input-default input-name'>
                <FormField 
                  type="text" 
                  name="name" 
                  value={name}
                  onChange={(e: { target: { value: SetStateAction<string>; }; }) => setName(e.target.value)}
                >
                  Nome completo
                </FormField>
              </div>
              <div className='input-default input-date-birth'>
                <FormField 
                  type="date" 
                  name="date" 
                  value={dateBirth}
                  onChange={(e: { target: { value: SetStateAction<string>; }; }) => setDataBirth(e.target.value)}
                >
                  Data de nascimento
                </FormField>
              </div>
              <div className=' input-default input-date-graphic'>
                <FormField 
                  type="date" 
                  name="date" 
                  value={dateGraphic}
                  onChange={(e: { target: { value: SetStateAction<string>; }; }) => setDateGraphic(e.target.value)}
                >
                  Para qual dia você deseja criar o gráfico de saúde?
                </FormField>
              </div>
              {dateGraphic && (
                <div className='supplementary-form'>
                  <h3>Selecione a hora para preencher os dados</h3>
                  <div className='button-group'>
                    <input 
                      type='button' 
                      value='02:00' 
                      onClick={(e) => handleSelectedHour((e.target as HTMLTextAreaElement).value)} 
                      className='input-group-default' 
                    />
                    <input 
                      type='button' 
                      value='06:00' 
                      onClick={(e) => handleSelectedHour((e.target as HTMLTextAreaElement).value)} 
                      className='input-group-default' 
                    />
                    <input
                      type='button' 
                      value='10:00' 
                      onClick={(e) => handleSelectedHour((e.target as HTMLTextAreaElement).value)} 
                      className='input-group-default' 
                    />
                    <input 
                      type='button' 
                      value='14:00' 
                      onClick={(e) => handleSelectedHour((e.target as HTMLTextAreaElement).value)} 
                      className='input-group-default' 
                    />
                    <input 
                      type='button' 
                      value='18:00' 
                      onClick={(e) => handleSelectedHour((e.target as HTMLTextAreaElement).value)} 
                      className='input-group-default' 
                    />
                    <input 
                      type='button' 
                      value='22:00' 
                      onClick={(e) => handleSelectedHour((e.target as HTMLTextAreaElement).value)} 
                      className='input-group-default input-group-6' 
                    />
                  </div>
                  <form className='form-data-params' action="">
                    <div className='bpm'>
                      <img src={heartImg} alt="Ìcone de Coração" />
                      <label  className='label-data-params' htmlFor="">BPM</label>
                      <input className='input-data-params' type="number" onChange={e => setBpm(e.target.value.length)} />
                    </div>
                    <div className='blood-pressure'>
                      <img src={pressureImg} alt="Ìcone de pressão-arterial" />
                      <label className='label-data-params' htmlFor="">PRESSÃO ARTERIAL</label>
                      <input
                       className='input-data-params' 
                       type="number"
                       name="first" 
                       onChange={e => setBloodPressure({...bloodPressure, first: e.target.value.length})} 
                      />
                      <input
                       className='input-data-params secondary-input' 
                       type="number"
                       name="second" 
                       onChange={e => {
                         setBloodPressure({...bloodPressure, second: e.target.value.length});
                         stateButton();
                        }} 
                      />
                    </div>
                    <Button type='button' id='btn-data-params'>
                      Próximo
                      <img src={stroke} alt="Ìcone stroke" />
                    </Button>
                  </form>
                </div>
              )}
            </form>
            <Button type='submit' id="button-submit" disabled={disabledButton} onSubmit={(e: FormEvent<Element>) => handleOnSubmit(e)}>
              Gerar Diário de Saúde
            </Button>
          </section>
        </main>
      </div>
    </Container>
  )
}