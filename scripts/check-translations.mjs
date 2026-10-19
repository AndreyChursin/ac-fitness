import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const readMessages = async (locale) =>
  JSON.parse(
    await readFile(
      new URL(`../src/i18n/messages/${locale}.json`, import.meta.url),
      "utf8",
    ),
  );

function compare(reference, translation, path = "messages") {
  assert.equal(typeof translation, typeof reference, `${path}: wrong type`);
  if (typeof reference === "string") {
    assert.ok(translation.trim(), `${path}: empty translation`);
  } else if (Array.isArray(reference)) {
    assert.ok(Array.isArray(translation), `${path}: expected an array`);
    assert.equal(
      translation.length,
      reference.length,
      `${path}: missing items`,
    );
    reference.forEach((item, index) =>
      compare(item, translation[index], `${path}[${index}]`),
    );
  } else {
    assert.deepEqual(
      Object.keys(translation).sort(),
      Object.keys(reference).sort(),
      `${path}: different translation keys`,
    );
    for (const key of Object.keys(reference))
      compare(reference[key], translation[key], `${path}.${key}`);
  }
}

const english = await readMessages("en");
compare(english, english);
compare(english, await readMessages("ru"));
console.log("RU/EN translation keys, item counts, and values are valid.");
