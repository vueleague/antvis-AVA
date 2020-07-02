import { DataSample } from './interfaces';

export const insightSamples: DataSample[] = [
  {
    name: 'Monotonicity',
    insights: ['Monotonicity'],
    data: [
      { date: '1970-01-01', sex: 0, weight: 10 },
      { date: '1970-01-01', sex: 1, weight: 20 },
      { date: '1980-01-01', sex: 0, weight: 30 },
      { date: '1980-01-01', sex: 1, weight: 40 },
      { date: '1990-01-01', sex: 0, weight: 60 },
      { date: '1990-01-01', sex: 1, weight: 10 },
    ],
  },
  {
    name: 'Correlation',
    insights: ['Correlation'],
    data: [
      { x: 10, y: 12 },
      { x: 20, y: 25 },
      { x: 30, y: 33 },
      { x: 40, y: 42 },
      { x: 50, y: 57 },
      { x: 60, y: 60 },
      { x: 70, y: 78 },
      { x: 80, y: 82 },
    ],
  },
  {
    name: 'MajorFactors',
    insights: ['MajorFactors'],
    data: [
      { AA: 'X', BB: 'X', CC: 'Z' },
      { AA: 'X', BB: 'X', CC: 'Z' },
      { AA: 'Y', BB: 'Y', CC: 'X' },
      { AA: 'X', BB: 'Y', CC: 'X' },
      { AA: 'X', BB: 'Z', CC: 'Y' },
      { AA: 'Y', BB: 'Z', CC: 'Y' },
      { AA: 'X', BB: 'Z', CC: 'Z' },
      { AA: 'X', BB: 'Z', CC: 'X' },
      { AA: 'X', BB: 'Z', CC: 'Y' },
      { AA: 'X', BB: 'Z', CC: 'Z' },
    ],
  },
  {
    name: 'OverallTrends',
    insights: ['OverallTrends'],
    data: [
      { date: '2020-01-01', GDP: 80 },
      { date: '2020-01-02', GDP: 123 },
      { date: '2020-01-03', GDP: 134 },
      { date: '2020-01-04', GDP: 145 },
      { date: '2020-01-05', GDP: 110 },
      { date: '2020-01-06', GDP: 156 },
      { date: '2020-01-07', GDP: 152 },
      { date: '2020-01-08', GDP: 162 },
      { date: '2020-01-09', GDP: 167 },
      { date: '2020-01-10', GDP: 190 },
      { date: '2020-01-11', GDP: 189 },
      { date: '2020-01-12', GDP: 200 },
    ],
  },
  {
    name: 'CategoryOutliers',
    insights: ['CategoryOutliers'],
    data: [
      { x: 'a', y: 12 },
      { x: 'b', y: 25 },
      { x: 'c', y: 400 },
      { x: 'd', y: 42 },
      { x: 'e', y: 57 },
      { x: 'f', y: 60 },
      { x: 'g', y: 78 },
      { x: 'h', y: 82 },
    ],
  },
  {
    name: 'CompanyInfo',
    tags: ['agged', 'integrated'],
    insights: ['Monotonicity', 'Correlation', 'MajorFactors', 'OverallTrends'],
    data: [
      { date: '2020-01-01', population: 20, salary_cost: 40, best_team: 'A', revenue: 100 },
      { date: '2020-02-01', population: 21, salary_cost: 42, best_team: 'A', revenue: 120 },
      { date: '2020-03-01', population: 24, salary_cost: 46, best_team: 'A', revenue: 80 },
      { date: '2020-04-01', population: 28, salary_cost: 50, best_team: 'A', revenue: 110 },
      { date: '2020-05-01', population: 30, salary_cost: 58, best_team: 'B', revenue: 117 },
      { date: '2020-06-01', population: 39, salary_cost: 80, best_team: 'B', revenue: 82 },
      { date: '2020-07-01', population: 40, salary_cost: 79, best_team: 'A', revenue: 123 },
      { date: '2020-08-01', population: 42, salary_cost: 80, best_team: 'A', revenue: 133 },
      { date: '2020-09-01', population: 44, salary_cost: 84, best_team: 'B', revenue: 85 },
      { date: '2020-10-01', population: 49, salary_cost: 95, best_team: 'A', revenue: 130 },
      { date: '2020-11-01', population: 51, salary_cost: 92, best_team: 'C', revenue: 250 },
      { date: '2020-12-01', population: 54, salary_cost: 96, best_team: 'A', revenue: 84 },
    ],
  },
];