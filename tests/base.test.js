process.env.NODE_ENV = 'testing';

before(() => {
  console.log('Begin testing ...');
});

after(() => {
  console.log('End testing ...');
});
