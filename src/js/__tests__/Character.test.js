import Character, { nameError, typeError } from '../../Character';

test.each([['b'], ['12345678901']])(
  'Проверка некорректного имени персонажа',
  (name) => {
    const input = () => new Character(name);
    expect(input).toThrow(nameError);
  },
);

test("Проверка некорректного типа персонажа", () => {
  const input = () => new Character("12345", "1");
  expect(input).toThrow(typeError);
});

test('Проверка корректного имени и типа персонажа', () => {
  const input = new Character('12345', 'Daemon');
  const result = {
    name: '12345',
    type: 'Daemon',
    health: 100,
    level: 1,
  };

  expect(input).toEqual(result);
});
