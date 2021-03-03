import React from "react";
import Proptype from "prop-types";
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import { getGrays, getPosition, numberFormatter } from '../../helpers/utils';



const getOption = (data, isDark) => {
    const grays = getGrays(isDark);
    return {
        color: data.map(d => d.color),
        tooltip: {
            trigger: 'item',
            padding: [7, 10],
            backgroundColor: grays.white,
            textStyle: { color: grays.black },
            transitionDuration: 0,
            borderColor: grays['300'],
            borderWidth: 1,
            formatter: function (params) {
                if (params.data.name != "")
                    return `<strong>${params.data.name}:</strong> ${params.percent}%`;
                else return "";
            }
        },
        position(pos, params, dom, rect, size) {
            return getPosition(pos, params, dom, rect, size);
        },
        legend: { show: false },
        series: [
            {
                type: 'pie',
                radius: ['90%', '70%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,
                itemStyle: {
                    borderColor: isDark ? '#0E1C2F' : '#fff'
                },
                labelLine: { normal: { show: false } },
                data: data
            }
        ]
    };
};

const TopSkillPieChart = ({ value,right, left, textColor, pieColor }) => {
    // debugger

    return (
        <div className="position-relative" style={{left:right}}>
            <ReactEchartsCore
                echarts={echarts}
                option={getOption([
                    {
                        "id": 1,
                        "value": value,
                        "name": "Top Skills",
                        "color": "#0750B1"
                    },
                    {
                        "id": 2,
                        "value": 100 - value,
                        "name": "",
                        "color": pieColor
                    }
                ], false)}
                style={{ width: '6.625rem', height: '6.625rem' }}
            />
            <div className="absolute-centered font-weight-medium fs-2" style={{ left: left, color: textColor }}>
                {numberFormatter(value, 0)}%
            </div>
        </div>

    );
};
TopSkillPieChart.propTypes = {
    value: Proptype.number.isRequired,
    left: Proptype.number.isRequired
};
export default TopSkillPieChart;