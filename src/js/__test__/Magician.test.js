import { test, expect } from "@jest/globals";
import { Magician } from "../Magician";

test("Testing the `Swordsman' class", () => {
  const expected = {
    name: 'Player',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(new Magician('Player')).toEqual(expected);
});