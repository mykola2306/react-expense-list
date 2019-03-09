const add = (a,b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(2,3);
  expect(result).toBe(5)
});

test('should generate greeting with name', () => {
  const greeting = generateGreeting('Mykola');
  expect(greeting).toBe('Hello Mykola!')
});

test('should generate greeting for no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!');
})