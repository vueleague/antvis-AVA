import { RowData } from '@antv/dw-transform';
import { Insight } from '..';
import { rowDataToColumnFrame, outliersFilters } from './utils';
import { Worker } from '.';
import { FieldInfo } from '@antv/dw-analyzer';

export const outlierIW: Worker = function(data: RowData[]): Insight[] {
  const insights: Insight[] = [];

  const { columnProps, columns } = rowDataToColumnFrame(data);

  const dataProps = columnProps.map((cp) => cp.fieldInfo);
  const filters = outliersFilters(dataProps as FieldInfo[]);

  for (let i = 0; i < columns.length; i++) {
    for (let j = i + 1; j < columns.length; j++) {
      if (columnProps[i].isInterval || columnProps[j].isInterval) {
        let hasInsight = false;

        const subdata = columns[i].map((valueI, index) => {
          const newRow: any = {};

          newRow[columnProps[i].title] = valueI;
          const valueJ = columns[j][index];
          newRow[columnProps[j].title] = valueJ;

          console.log(valueI, valueJ, filters[i](valueI));

          newRow.isOutlier =
            (columnProps[i].isInterval && filters[i](valueI)) || (columnProps[j].isInterval && filters[j](valueJ));

          if (newRow.isOutlier) {
            hasInsight = true;
          }

          return newRow;
        });

        if (hasInsight) {
          let dimension = '';
          let measure = '';

          if (columnProps[i].isInterval) {
            dimension = columnProps[j].title;
            measure = columnProps[i].title;
          } else {
            dimension = columnProps[i].title;
            measure = columnProps[j].title;
          }

          const outlierSeries = subdata.filter((row) => row.isOutlier).map((row) => row[dimension]);
          let outlierSeriesStr = '';
          if (outlierSeries.length === 1) {
            outlierSeriesStr = `'${outlierSeries[0]}'`;
          } else {
            for (let i = 0; i < outlierSeries.length; i++) {
              if (i === outlierSeries.length - 1) {
                outlierSeriesStr += ` and '${outlierSeries[i]}'`;
              } else if (i === 0) {
                outlierSeriesStr += `'${outlierSeries[i]}'`;
              } else {
                outlierSeriesStr += `, '${outlierSeries[i]}'`;
              }
            }
          }
          const description = `${outlierSeriesStr} ${outlierSeries.length === 1 ? 'is' : 'are'} noticeable ${
            outlierSeries.length === 1 ? 'outlier' : 'outliers'
          } for '${measure}'`;

          const insight: Insight = {
            type: 'CategoryOutliers',
            description,
            fields: [columnProps[i].title, columnProps[j].title],
            present: {
              data: subdata,
              fields: [columnProps[i].title, columnProps[j].title, 'isOutlier'],
              encoding: {
                colorField: 'isOutlier',
              },
            },
          };

          insights.push(insight);
        }
      }
    }
  }

  return insights;
};
