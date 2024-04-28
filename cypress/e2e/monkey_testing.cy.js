describe('Los estudiantes under monkeys', function() {
  it('visits los estudiantes and survives monkeys', function() {
      cy.visit('https://losestudiantes.co');
      cy.wait(1000);
      //randomClick(10);
      randomEvent(20);  // Modificar el parámetro de entrada para los Monkeys deseados
  })
})
function randomClick(monkeysLeft) {

  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
  };

  var monkeysLeft = monkeysLeft;
  if(monkeysLeft > 0) {
      cy.get('a').then($links => {
          var randomLink = $links.get(getRandomInt(0, $links.length));
          if(!Cypress.dom.isHidden(randomLink)) {
              cy.wrap(randomLink).click({force: true});
              monkeysLeft = monkeysLeft - 1;
          }
          cy.wait(1000);
          randomClick(monkeysLeft);
      });
  }   
}

var events = ['clickLink', 'textInput' , 'selectCombo' , 'clickButton'];

function randomEvent(monkeysLeft) {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };  

  if(monkeysLeft > 0) {
    cy.log('Monkeys Faltantes por ejecución: ', monkeysLeft);
    var randomEventType = events[getRandomInt(0, events.length)];

    switch (randomEventType) {
      case 'clickLink':
          cy.get('body').then(($body) => {
              if ($body.find('a').length > 0) {
                  cy.get('a').then(($links) => {
                      var randomLink = $links.get(getRandomInt(0, $links.length));
                      if(!Cypress.dom.isHidden(randomLink)) {
                          cy.wrap(randomLink).click({force: true});
                          monkeysLeft = monkeysLeft - 1;
                      }
                      cy.wait(1000);
                      if (monkeysLeft > 0) {
                          randomEvent(monkeysLeft);
                      } else {
                          cy.log('No quedan más eventos aleatorios');
                      }
                  });
              } else {
                  cy.log('No se encontraron elementos de enlace');
                  if (monkeysLeft > 0) {
                      randomEvent(monkeysLeft);
                  } else {
                      cy.log('No quedan más eventos aleatorios');
                  }
              }
          });
          break;

      case 'textInput':
          cy.get('body').then(($body) => {
              if ($body.find('input').length > 0) {
                  cy.get('input').then(($inputs) => {
                      var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
                      if(!Cypress.dom.isHidden(randomInput)) {
                          cy.wrap(randomInput).type('Hola, Mundo', {force: true});
                          monkeysLeft = monkeysLeft - 1;
                      }
                      cy.wait(1000);
                      if (monkeysLeft > 0) {
                          randomEvent(monkeysLeft);
                      } else {
                          cy.log('No quedan más eventos aleatorios');
                      }
                  });
              } else {
                  cy.log('No se encontraron elementos de entrada');
                  if (monkeysLeft > 0) {
                      randomEvent(monkeysLeft);
                  } else {
                      cy.log('No quedan más eventos aleatorios');
                  }
              }
          });
          break;

      case 'selectCombo':
          cy.get('body').then(($body) => {
              if ($body.find('select').length > 0) {
                  cy.get('select').then(($selects) => {
                      var randomSelect = $selects.get(getRandomInt(0, $selects.length));
                      var optionCount = randomSelect.children.length;
                      if(!Cypress.dom.isHidden(randomSelect) && optionCount > 0) {
                          var randomOptionIndex = getRandomInt(0, optionCount);
                          cy.wrap(randomSelect).select(randomSelect.children[randomOptionIndex].value, {force: true});
                          monkeysLeft = monkeysLeft - 1;
                      }
                      cy.wait(1000);
                      if (monkeysLeft > 0) {
                          randomEvent(monkeysLeft);
                      } else {
                          cy.log('No quedan más eventos aleatorios');
                      }
                  });
              } else {
                  cy.log('No se encontraron elementos select');
                  if (monkeysLeft > 0) {
                      randomEvent(monkeysLeft);
                  } else {
                      cy.log('No quedan más eventos aleatorios');
                  }
              }
          });
          break;

      case 'clickButton':
          cy.get('body').then(($body) => {
              if ($body.find('button').length > 0) {
                  cy.get('button').then(($buttons) => {
                      var randomButton = $buttons.get(getRandomInt(0, $buttons.length));
                      if(!Cypress.dom.isHidden(randomButton)) {
                          cy.wrap(randomButton).click({force: true});
                          monkeysLeft = monkeysLeft - 1;
                      }
                      cy.wait(1000);
                      if (monkeysLeft > 0) {
                          randomEvent(monkeysLeft);
                      } else {
                          cy.log('No quedan más eventos aleatorios');
                      }
                  });
              } else {
                  cy.log('No se encontraron elementos de botón');
                  if (monkeysLeft > 0) {
                      randomEvent(monkeysLeft);
                  } else {
                      cy.log('No quedan más eventos aleatorios');
                  }
              }
          });
          break;

      default:
          cy.log('Evento desconocido: ' + randomEventType);
          break;
  }  

  }
}
