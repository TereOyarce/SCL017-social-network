// importamos la funcion que vamos a testear
import LoginMethod from '../src/Login/login.js';

describe('LoginMethod.signIn', () => {
  it('debería ser una función', () => {
    expect(typeof LoginMethod.signIn).toBe('function');
  });
  it('Retorno de multiples problemas por ingresar mal el correo y contraseña', () => {
    expect(() => LoginMethod.signIn('', 0)).toThrow(TypeError);
    expect(() => LoginMethod.signIn(null, 0)).toThrow(TypeError);
    expect(() => LoginMethod.signIn(null, [])).toThrow(TypeError);
    expect(() => LoginMethod.signIn(0, 0)).toThrow(TypeError);
  });
  it('acá retorna el HASH de usuario', () => {
    expect(LoginMethod.signIn('t.oyarce05@gmail.com', 'abc123')).toBe('0hU3UXKMG8dXX90oy0znVGKlYYn2');
  });
});
