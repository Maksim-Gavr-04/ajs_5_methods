import { test, expect } from "@jest/globals";
import { Character } from "../Character";
import { Bowman } from "../Bowman";

test("Testing the `Character` class without a string name", () => {
  expect(() => {
    new Character(10, 'Bowman');
  }).toThrow("Error! The character's name should be a string and contain from 2 to 10 symbols!");
});

test("Testing the `Character` class with one symbol in the name", () => {
  expect(() => {
    new Character('A', 'Bowman');
  }).toThrow("Error! The character's name should be a string and contain from 2 to 10 symbols!");
});

test("Testing the `Character` class with ten symbols in the name", () => {
  expect(() => {
    new Character('Aaaaaaaaaaa', 'Bowman');
  }).toThrow("Error! The character's name should be a string and contain from 2 to 10 symbols!");
});

test("Testing the `Character' class with the wrong type", () => {
  expect(() => {
    new Character('Player', 'Superman');
  }).toThrow("Error! Such character does not exist!");
});

test("Testing the `Character' class with the correct type", () => {
  const expected = {
    name: 'Player',
    type: 'Bowman',
    health: 100,
    level: 1,
  };

  expect(new Character('Player', 'Bowman')).toEqual(expected);
});

test("Testing the `levelUp()' function with a health value of 0", () => {
  expect(() => {
    const player = new Bowman('Player', 'Bowman');
    player.health = 0;
    player.levelUp();
  }).toThrow("Whoops! If the health level is 0, it is not possible to increase the level!");
});

test("Testing the `levelUp()' function with a positive health value", () => {
  const expected = {
    name: 'Player',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };

  const player = new Bowman('Player');
  player.levelUp();
  expect(player).toEqual(expected);
});

test("Testing the `damage()' function with a health value of 0", () => {
  expect(() => {
    const player = new Bowman('Player', 'Bowman');
    player.health = 0;
    player.damage(40);
  }).toThrow("Error!");
});

test("Testing the `damage()' function with a positive health value", () => {
  const expected = {
    name: 'Player',
    type: 'Bowman',
    health: 70,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const player = new Bowman('Player');
  player.damage(40); // <<< valueOfDamage = 30
  expect(player).toEqual(expected);
});

test("Testing the `damage()' function with a positive health value and `valueOfDamage` that exceeds the health value", () => {
  const expected = {
    name: 'Player',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const player = new Bowman('Player');
  player.damage(150); // <<< valueOfDamage = 112.5
  expect(player).toEqual(expected);
});
