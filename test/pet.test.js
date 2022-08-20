const Pet = require('../src/pet');


describe('constructor', () => {
  it('sets the name property', () => {
    const pet = new Pet('Fido');

    expect(pet.name).toEqual('Fido');
  });
});

describe('constructor', () => {

  it('has a initial age of 0', () => {
    const pet = new Pet('Fido');

    expect(pet.age).toEqual(0);
  });
});

describe('growUp', () => {
  it('increments the age by 1', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.age).toEqual(1);
  });
});


describe('constructor', () => {

  it('has a initial hunger of 0', () => {
    const pet = new Pet('Fido');

    expect(pet.hunger).toEqual(0);
  });
});

describe('growUp', () => {
  it('increments the hunger by 5', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.hunger).toEqual(5);
  });
});
describe('constructor', () => {

  it('has a initial fitness of 10', () => {
    const pet = new Pet('Fido');

    expect(pet.fitness).toEqual(10);
  });
});

describe('growUp', () => {
  it('Decreases the fitness by 3', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.fitness).toEqual(7);
  });
});

describe('walk', () => {
  it('increases fitness by 4', () => {
    const pet = new Pet('fido');

    pet.fitness = 4;
    pet.walk();

    expect(pet.fitness).toEqual(8);
  });
});

describe('walk', () => {

  it('increases fitness by to a maximum of 10', () => {
    const pet = new Pet('fido');

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });
});

describe('feed', () => {
  it('feed should decrease the Pets hunger level by 3', () => {
    const pet = new Pet('fido');

    pet.hunger = 4;
    pet.feed();

    expect(pet.hunger).toEqual(1);
  });
});

describe('feed', () => {

  it('feed should decrease the Pets hunger level to 0', () => {
    const pet = new Pet('fido');

    pet.hunger = 1;
    pet.feed();

    expect(pet.hunger).toEqual(0);
  });
  describe('checkUp', () => {
    it('checkUp should check the Pets hunger, fitness and return message', () => {
      const pet = new Pet('fido');
  
      pet.hunger = 5;
      pet.fitness = 3
      pet.checkUp();
  
      expect(pet.checkUp()).toEqual('I am hungry and I need a walk');
    });
  });
  describe('checkUp', () => {
    it('checkUp should check the Pets hunger, fitness and return message', () => {
      const pet = new Pet('fido');
  
      pet.hunger = 1;
      pet.fitness = 1
      pet.checkUp();
  
      expect(pet.checkUp()).toEqual('I need a walk');
    });
  });

  describe('isAlive', () => {
    it('should check the Pets hunger, fitness, age and return message whether pet is alive or not', () => {
      const pet = new Pet('fido');
  
      pet.hunger = 1;
      pet.fitness = 0;
      pet.age = 5;
      pet.isAlive;
  
      expect(pet.isAlive).toEqual(false);
    });
  });
  describe('feed', () => {
  
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.age = 30;
  
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
      });
    });
  
});