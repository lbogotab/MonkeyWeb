# MISO - Bono Monkey Web - Luis Alejandro Bogotá

Detalles requeridos para la ejecución

1. Ejecución bajo SO Windows 11

2. Versión de Cypress v13.8.0

```bash
npm install cypress@13.8.0

```
3. Funcionamiento Cypress por medio de interfaz gráfica 
4. E2E Testing
5. Browser selecciodo para la prueba : Chrome v124
6. En los Spects se encontrá una carpeta cypress/e2e 
7. Selecionar el archivo monkey_testing.cy.js
8. Ver el funcionamiento del Monkey 

Se puede modificar el archivo monkey_testing.cy.js para ejecutar más monkeys según se requiera 

```javascript
describe('Los estudiantes under monkeys', function() {
  it('visits los estudiantes and survives monkeys', function() {
      cy.visit('https://losestudiantes.co');
      cy.wait(1000);
      //randomClick(10);
      randomEvent(20); // Modificar el parámetro de entrada para los Monkeys deseados
  })
})

```
Se activa un log de Cypress para verificar cuántos Monkeys quedan en la ejecución 

```javascript
cy.log('Monkeys Faltantes por ejecución: ', monkeysLeft);
```

Gracias
