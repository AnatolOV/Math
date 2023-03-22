import Daemon from '../characters/Daemon';

test('Проверка нанесённого урона персонажем Daemon', () => {
  const input = new Daemon('12345', 'Daemon');
  input.damage = 2;

  expect(input.damage).toBe(9);
});

test('Проверка нанесённого урона персонажем Daemon под «дурманом»', () => {
  const input = new Daemon('12345', 'Daemon');
  input.stoned = true;
  input.damage = 2;

  expect(input.damage).toBe(4);
});

test('Проверка отсутствия урона персонажа Daemon под «дурманом»', () => {
  const input = new Daemon('12345', 'Daemon');
  input.stoned = true;
  input.damage = 20;

  expect(input.damage).toBe(0);
});

test('Проверка наложения «дурмана» на персонаж Daemon', () => {
  const input = new Daemon('12345', 'Daemon');
  input.stoned = [];

  expect(input.stoned).toBe(undefined);
});
