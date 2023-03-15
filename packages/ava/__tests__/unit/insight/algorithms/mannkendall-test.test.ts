import { mkTest } from '../../../../src/insight/algorithms';

const increasingData = [3, 4, 3.5, 5, 4.9, 6, 7, 9, 13, 15];

const decreasingData = [
  1998, 1850, 1720, 1818, 1920, 1802, 1945, 1856, 2107, 2140, 2311, 1972, 1760, 1824, 1801, 2001, 1640, 1502, 1621,
  1480, 1549, 1390, 1325, 1250, 1394, 1406, 1578, 1465, 1689, 1755, 1495, 1508, 1433, 1344, 1201, 1065, 1255, 1429,
  1398, 1678, 1524, 1688, 1500, 1670, 1734, 1699, 1508, 1680, 1750, 1602, 1834, 1722, 1430, 1280, 1367, 1155, 1289,
  1104, 1246, 1098, 1189, 1276, 1033, 956, 845, 1089, 944, 1043, 893, 840, 934, 810, 782, 1089, 745, 680, 802, 697, 583,
  456, 524, 398, 278, 195, 145, 207,
];

const noTrendData = [
  63.93689627294421, 65.06585239044342, 66.42719381417056, 63.060669399125935, 64.04639809297761, 64.45117682728456,
  63.35488066344804, 65.2969449309885, 66.35014444552017, 66.198378961063, 66.85520134738813, 65.05419984325125,
  66.62243229531435, 66.77808066603122, 66.9144977524293, 65.05499508303669, 66.36871158902638, 63.973903073723044,
  64.92585536363889, 65.17145801764055, 64.42516834555609, 63.701363912573775, 66.11568649665543, 64.0474592964878,
  64.25676632707459, 65,
];

describe('Mann-Kendall Test', () => {
  test('check trends result', () => {
    expect(mkTest(increasingData, 0.05).trend).toBe('increasing');
    expect(mkTest(decreasingData, 0.05).trend).toBe('decreasing');
    expect(mkTest(noTrendData, 0.05).trend).toBe('no trend');
  });
});