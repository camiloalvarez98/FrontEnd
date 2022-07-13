import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function Grafico() {

    const data = [30,5]

    const [options, setOptions] = useState({ labels: ['Disponible', 'Ocupado'] });

    return (
        <Chart
            options={options}
            series={data}
            type="donut"
            width="300"
        />
    );
}