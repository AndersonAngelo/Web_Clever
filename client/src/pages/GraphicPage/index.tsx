import { Container } from "./styles";

import aside2Img from '../../assets/aside2.svg';
import iconSmile from '../../assets/icon-smile.svg';
import { Button } from "../../components/Button";
import { ChartComponent, Inject, load, SeriesCollectionDirective, SeriesDirective } from "@syncfusion/ej2-react-charts";


export function GraphicPage() {
  return (
    <Container>
      {Date && <Loading />}
      <aside>
        <img src={aside2Img} alt="Imagem elatório de saúde em gráficos" />
      </aside>
      <main>
        <section>
          <div>
            <img src={iconSmile} alt="Ìcone de alegre" />
          </div>
          <div>
            <h1>{`Maria josé`}</h1>
            <p>{`39 ANOS`}</p>
          </div>
          <div>
            <p>Diário de Saúde</p>
            <p>{`14/09/21`}</p>
          </div>
        </section>
        <section>
        <div>
            <Button type="button">
              <img src="" alt="" />
            </Button>
            <Button type="button">
              <img src="" alt="" />
            </Button>
          </div>
          <div className='control-pane'>
                <div className='control-section'>
                    <ChartComponent id='charts' style={{ textAlign: "center" }}
                        primaryXAxis={{
                            minimum: new Date(2000, 1, 1), maximum: new Date(2006, 2, 11),
                            valueType: 'DateTime',
                            skeleton: 'y',
                            lineStyle: { width: 0 },
                            majorGridLines: { width: 0 },
                            edgeLabelPlacement: 'Shift'
                        }}
                        width={Browser.isDevice ? '100%' : '60%'}
                        chartArea={{ border: { width: 0 } }}
                        load={this.load.bind(this)}
                        primaryYAxis={{
                            title: 'Revenue',
                            labelFormat: '{value}M',
                            majorTickLines: { width: 0 },
                            minimum: 10, maximum: 80,
                            lineStyle: { width: 0 },
                        }}
                        title='Average Sales per Person' loaded={this.onChartLoad.bind(this)}
                        tooltip={{ enable: true, shared: true }}
                        crosshair={{ enable: true, lineType: 'Vertical' }}>
                        <Inject services={[LineSeries, DateTime, Tooltip, Crosshair, Legend]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={john} xName='x' yName='y' width={2} name='John'
                                type='Line' marker={{ visible: true }}>
                            </SeriesDirective>
                            <SeriesDirective dataSource={andrew} xName='x' yName='y' width={2} name='Andrew'
                                type='Line' marker={{ visible: true }}>
                            </SeriesDirective>
                            <SeriesDirective dataSource={thomas} xName='x' yName='y' width={2} name='Thomas'
                                type='Line' marker={{ visible: true }}>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </div>
        </section>
      </main>
    </Container>
  )
}