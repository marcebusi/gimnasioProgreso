import React, { useEffect } from 'react';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;
type BarSeriesOption = echarts.BarSeriesOption;

const Grafico: React.FC = () => {
  useEffect(() => {
    // Tu código ECharts
    const chartDom = document.getElementById('main')!;
    const myChart = echarts.init(chartDom, 'dark');
    const option: EChartsOption = {
      xAxis: {
        type: 'category',
        data: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6']
      },
      yAxis: {
        type: 'value',
        min: 0, // Establece el valor mínimo en 0
        max: 100, // Establece el valor máximo en 100
        interval: 20 // Intervalo entre los ticks del eje y (puedes ajustarlo según tus necesidades)
      },
      series: [
        {
          data: [40, 60, 45, 24, 80, 55], // Ajusta estos valores según tus necesidades
          type: 'bar',
          itemStyle: {
            color: 'rgb(99 102 241)',
            emphasis: {
              color: 'rgb(129 140 248)' // Color al hacer hover
            }
          }
        } as BarSeriesOption // Utiliza BarSeriesOption en lugar de SeriesOption$1
      ],
      // Configuración del fondo del gráfico
      backgroundColor: 'rgb(3 7 18)'
    };

    option && myChart.setOption(option);

    // Limpieza del gráfico al desmontar el componente
    return () => {
      myChart.dispose();
    };
  }, []); // El segundo argumento es un array vacío para asegurar que el efecto solo se ejecute una vez al montar el componente

  return <div id="main" style={{ width: '600px', height: '400px' }}></div>;
};

export default Grafico;