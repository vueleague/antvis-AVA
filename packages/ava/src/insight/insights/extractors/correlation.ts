import { pcorrtest } from '../../../data';
import { CorrelationInfo, InsightExtractorProp } from '../../types';

type CorrelationResult = {
  significance: number;
  pcorr: number;
};

export function findCorrelation(x: number[], y: number[]): CorrelationResult | null {
  const testResult = pcorrtest(x, y);
  // @ts-ignore Type Result is missing the "pcorr"
  const { rejected, pcorr } = testResult;

  if (rejected) {
    return {
      pcorr,
      significance: Math.abs(pcorr),
    };
  }
  return null;
}

export function extractor({ data, dimensions, measures }: InsightExtractorProp): CorrelationInfo[] {
  const xField = measures[0].fieldName;
  const yField = measures[1].fieldName;
  if (!data || !dimensions || data.length === 0) return [];
  const x = data.map((item) => item?.[xField] as number);
  const y = data.map((item) => item?.[yField] as number);
  const result = findCorrelation(x, y);
  if (result) {
    return [
      {
        ...result,
        type: 'correlation',
        measures: [xField, yField],
      },
    ];
  }
  return [];
}
