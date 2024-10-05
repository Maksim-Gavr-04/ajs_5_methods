import { test, expect } from "@jest/globals";
import { Daemon } from "../Daemon";

test("Testing the `Daemon' class", () => {
  const expected = {
    name: 'Player',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(new Daemon('Player')).toEqual(expected);
});