import { sortHeroesByHealth } from '../../sortHeroes.js';

describe('sortHeroesByHealth', () => {
  test('сортирует маг, лучник, мечник по убыванию здоровья', () => {
    const input = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
    
    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    expect(sortHeroesByHealth(input)).toEqual(expected);
  });

  test('один герой — маг', () => {
    const input = [{ name: 'маг', health: 100 }];
    const expected = [{ name: 'маг', health: 100 }];

    expect(sortHeroesByHealth(input)).toEqual(expected);
  });

  test('два героя с одинаковым здоровьем — маг и лучник', () => {
    const input = [
      { name: 'маг', health: 80 },
      { name: 'лучник', health: 80 },
    ];
    const expected = [...input];

    expect(sortHeroesByHealth(input)).toEqual(expected);
  });

  test('пустой массив', () => {
    expect(sortHeroesByHealth([])).toEqual([]);
  });
});