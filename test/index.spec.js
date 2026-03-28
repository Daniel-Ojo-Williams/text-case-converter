import { describe, it } from "node:test";
import assert from "node:assert/strict";

import converter from "../src/index.js";

describe("toUpperCase", () => {
  it("converts lowercase to uppercase", () => {
    assert.equal(converter.toUpperCase("hello world"), "HELLO WORLD");
  });
  it("converts mixed case to uppercase", () => {
    assert.equal(converter.toUpperCase("mIxEd CaSe"), "MIXED CASE");
  });
  it("keeps uppercase as uppercase", () => {
    assert.equal(converter.toUpperCase("HELLO WORLD"), "HELLO WORLD");
  });
  it("trims leading and trailing spaces", () => {
    assert.equal(converter.toUpperCase("  hello world  "), "HELLO WORLD");
  });
  it("collapses multiple spaces into one", () => {
    assert.equal(converter.toUpperCase("hello   world"), "HELLO WORLD");
  });
  it("trims and collapses spaces together", () => {
    assert.equal(converter.toUpperCase("  hello   world  "), "HELLO WORLD");
  });
  it("handles single word", () => {
    assert.equal(converter.toUpperCase("word"), "WORD");
  });
  it("handles empty string", () => {
    assert.equal(converter.toUpperCase(""), "");
  });
});

describe("toLowerCase", () => {
  it("converts uppercase to lowercase", () => {
    assert.equal(converter.toLowerCase("HELLO WORLD"), "hello world");
  });
  it("converts mixed case to lowercase", () => {
    assert.equal(converter.toLowerCase("mIxEd CaSe"), "mixed case");
  });
  it("keeps lowercase as lowercase", () => {
    assert.equal(converter.toLowerCase("hello world"), "hello world");
  });
  it("trims leading and trailing spaces", () => {
    assert.equal(converter.toLowerCase("  HELLO WORLD  "), "hello world");
  });
  it("collapses multiple spaces into one", () => {
    assert.equal(converter.toLowerCase("HELLO   WORLD"), "hello world");
  });
  it("trims and collapses spaces together", () => {
    assert.equal(converter.toLowerCase("  HELLO   WORLD  "), "hello world");
  });
  it("handles single word", () => {
    assert.equal(converter.toLowerCase("WORD"), "word");
  });
  it("handles empty string", () => {
    assert.equal(converter.toLowerCase(""), "");
  });
});

describe("toSentenceCase", () => {
  it("capitalizes first letter, lowercases rest", () => {
    assert.equal(converter.toSentenceCase("hello world"), "Hello world");
  });
  it("lowercases all-uppercase except first letter", () => {
    assert.equal(converter.toSentenceCase("HELLO WORLD"), "Hello world");
  });
  it("handles mixed case", () => {
    assert.equal(converter.toSentenceCase("mIxEd CaSe StRiNg"), "Mixed case string");
  });
  it("handles already correct sentence case", () => {
    assert.equal(converter.toSentenceCase("Hello world"), "Hello world");
  });
  it("trims leading and trailing spaces", () => {
    assert.equal(converter.toSentenceCase("  hello world  "), "Hello world");
  });
  it("collapses multiple spaces into one", () => {
    assert.equal(converter.toSentenceCase("hello   world"), "Hello world");
  });
  it("trims and collapses spaces together", () => {
    assert.equal(converter.toSentenceCase("  hello   world  "), "Hello world");
  });
  it("handles single word", () => {
    assert.equal(converter.toSentenceCase("word"), "Word");
  });
  it("handles empty string", () => {
    assert.equal(converter.toSentenceCase(""), "");
  });
});

describe("toTitleCase", () => {
  it("capitalizes first letter of each word", () => {
    assert.equal(converter.toTitleCase("hello world"), "Hello World");
  });
  it("handles all uppercase input", () => {
    assert.equal(converter.toTitleCase("HELLO WORLD"), "Hello World");
  });
  it("handles mixed case", () => {
    assert.equal(converter.toTitleCase("mIxEd CaSe StRiNg"), "Mixed Case String");
  });
  it("handles longer phrase", () => {
    assert.equal(converter.toTitleCase("the quick brown fox"), "The Quick Brown Fox");
  });
  it("trims leading and trailing spaces", () => {
    assert.equal(converter.toTitleCase("  hello world  "), "Hello World");
  });
  it("collapses multiple spaces into one", () => {
    assert.equal(converter.toTitleCase("hello   world"), "Hello World");
  });
  it("trims and collapses spaces together", () => {
    assert.equal(converter.toTitleCase("  hello   world  "), "Hello World");
  });
  it("handles single word", () => {
    assert.equal(converter.toTitleCase("word"), "Word");
  });
  it("handles empty string", () => {
    assert.equal(converter.toTitleCase(""), "");
  });
  it("capitalizes stop words if they are the first word", () => {
    assert.equal(converter.toTitleCase("the lord of the rings"), "The Lord of the Rings");
  });
  it("keeps stop words lowercase in the middle of a string", () => {
    assert.equal(converter.toTitleCase("A BEAUTIFUL DAY IN THE NEIGHBORHOOD"), "A Beautiful Day in the Neighborhood");
  });
});

describe("toKebabCase", () => {
  it("converts space-separated words to kebab-case", () => {
    assert.equal(converter.toKebabCase("hello world"), "hello-world");
  });
  it("converts PascalCase to kebab-case", () => {
    assert.equal(converter.toKebabCase("HelloWorld"), "hello-world");
  });
  it("converts camelCase to kebab-case", () => {
    assert.equal(converter.toKebabCase("helloWorld"), "hello-world");
  });
  it("converts snake_case to kebab-case", () => {
    assert.equal(converter.toKebabCase("hello_world"), "hello-world");
  });
  it("converts UPPER CASE to kebab-case", () => {
    assert.equal(converter.toKebabCase("HELLO WORLD"), "hello-world");
  });
  it("handles longer phrase", () => {
    assert.equal(converter.toKebabCase("the quick brown fox"), "the-quick-brown-fox");
  });
  it("trims leading and trailing spaces", () => {
    assert.equal(converter.toKebabCase("  hello world  "), "hello-world");
  });
  it("collapses multiple spaces into one dash", () => {
    assert.equal(converter.toKebabCase("hello   world"), "hello-world");
  });
  it("trims and collapses spaces together", () => {
    assert.equal(converter.toKebabCase("  hello   world  "), "hello-world");
  });
  it("handles single word", () => {
    assert.equal(converter.toKebabCase("word"), "word");
  });
  it("handles empty string", () => {
    assert.equal(converter.toKebabCase(""), "");
  });
});

describe("toSnakeCase", () => {
  it("converts space-separated words to snake_case", () => {
    assert.equal(converter.toSnakeCase("hello world"), "hello_world");
  });
  it("converts PascalCase to snake_case", () => {
    assert.equal(converter.toSnakeCase("HelloWorld"), "hello_world");
  });
  it("converts camelCase to snake_case", () => {
    assert.equal(converter.toSnakeCase("helloWorld"), "hello_world");
  });
  it("converts kebab-case to snake_case", () => {
    assert.equal(converter.toSnakeCase("hello-world"), "hello_world");
  });
  it("converts UPPER CASE to snake_case", () => {
    assert.equal(converter.toSnakeCase("HELLO WORLD"), "hello_world");
  });
  it("handles longer phrase", () => {
    assert.equal(converter.toSnakeCase("the quick brown fox"), "the_quick_brown_fox");
  });
  it("trims leading and trailing spaces", () => {
    assert.equal(converter.toSnakeCase("  hello world  "), "hello_world");
  });
  it("collapses multiple spaces into one underscore", () => {
    assert.equal(converter.toSnakeCase("hello   world"), "hello_world");
  });
  it("trims and collapses spaces together", () => {
    assert.equal(converter.toSnakeCase("  hello   world  "), "hello_world");
  });
  it("handles single word", () => {
    assert.equal(converter.toSnakeCase("word"), "word");
  });
  it("handles empty string", () => {
    assert.equal(converter.toSnakeCase(""), "");
  });
});

describe("toPascalCase", () => {
  it("converts space-separated words to PascalCase", () => {
    assert.equal(converter.toPascalCase("hello world"), "HelloWorld");
  });
  it("converts kebab-case to PascalCase", () => {
    assert.equal(converter.toPascalCase("hello-world"), "HelloWorld");
  });
  it("converts snake_case to PascalCase", () => {
    assert.equal(converter.toPascalCase("hello_world"), "HelloWorld");
  });
  it("converts camelCase to PascalCase", () => {
    assert.equal(converter.toPascalCase("helloWorld"), "HelloWorld");
  });
  it("keeps PascalCase as PascalCase", () => {
    assert.equal(converter.toPascalCase("HelloWorld"), "HelloWorld");
  });
  it("converts UPPER CASE to PascalCase", () => {
    assert.equal(converter.toPascalCase("HELLO WORLD"), "HelloWorld");
  });
  it("handles longer phrase", () => {
    assert.equal(converter.toPascalCase("the quick brown fox"), "TheQuickBrownFox");
  });
  it("trims leading and trailing spaces", () => {
    assert.equal(converter.toPascalCase("  hello world  "), "HelloWorld");
  });
  it("collapses multiple spaces", () => {
    assert.equal(converter.toPascalCase("hello   world"), "HelloWorld");
  });
  it("trims and collapses spaces together", () => {
    assert.equal(converter.toPascalCase("  hello   world  "), "HelloWorld");
  });
  it("handles single word", () => {
    assert.equal(converter.toPascalCase("word"), "Word");
  });
  it("handles empty string", () => {
    assert.equal(converter.toPascalCase(""), "");
  });
  it("handles strings with numbers correctly", () => {
    assert.equal(converter.toCamelCase("user 123 login"), "user123Login");
  });
  it("handles numbers at the start of words", () => {
    assert.equal(converter.toPascalCase("version 2 update"), "Version2Update");
  });
});

describe("toCamelCase", () => {
  it("converts space-separated words to camelCase", () => {
    assert.equal(converter.toCamelCase("hello world"), "helloWorld");
  });
  it("converts kebab-case to camelCase", () => {
    assert.equal(converter.toCamelCase("hello-world"), "helloWorld");
  });
  it("converts snake_case to camelCase", () => {
    assert.equal(converter.toCamelCase("hello_world"), "helloWorld");
  });
  it("keeps camelCase as camelCase", () => {
    assert.equal(converter.toCamelCase("helloWorld"), "helloWorld");
  });
  it("converts PascalCase to camelCase", () => {
    assert.equal(converter.toCamelCase("HelloWorld"), "helloWorld");
  });
  it("converts UPPER CASE to camelCase", () => {
    assert.equal(converter.toCamelCase("HELLO WORLD"), "helloWorld");
  });
  it("handles longer phrase", () => {
    assert.equal(converter.toCamelCase("the quick brown fox"), "theQuickBrownFox");
  });
  it("trims leading and trailing spaces", () => {
    assert.equal(converter.toCamelCase("  hello world  "), "helloWorld");
  });
  it("collapses multiple spaces", () => {
    assert.equal(converter.toCamelCase("hello   world"), "helloWorld");
  });
  it("trims and collapses spaces together", () => {
    assert.equal(converter.toCamelCase("  hello   world  "), "helloWorld");
  });
  it("handles single word", () => {
    assert.equal(converter.toCamelCase("word"), "word");
  });
  it("handles empty string", () => {
    assert.equal(converter.toCamelCase(""), "");
  });
});

describe("toSlug", () => {
  it("converts space-separated words to slug", () => {
    assert.equal(converter.slugify("hello world"), "hello-world");
  });
  it("removes special characters", () => {
    assert.equal(converter.slugify("hello, world!"), "hello-world");
  });
  it("handles apostrophes", () => {
    assert.equal(converter.slugify("it's a beautiful day"), "its-a-beautiful-day");
  });
  it("converts to lowercase", () => {
    assert.equal(converter.slugify("HELLO WORLD"), "hello-world");
  });
  it("handles longer phrase", () => {
    assert.equal(converter.slugify("the quick brown fox"), "the-quick-brown-fox");
  });
  it("trims leading and trailing spaces", () => {
    assert.equal(converter.slugify("  hello world  "), "hello-world");
  });
  it("collapses multiple spaces into one dash", () => {
    assert.equal(converter.slugify("hello   world"), "hello-world");
  });
  it("trims and collapses spaces together", () => {
    assert.equal(converter.slugify("  hello   world  "), "hello-world");
  });
  it("removes consecutive dashes after stripping special chars", () => {
    assert.equal(converter.slugify("hello -- world"), "hello-world");
  });
  it("handles single word", () => {
    assert.equal(converter.slugify("word"), "word");
  });
  it("handles empty string", () => {
    assert.equal(converter.slugify(""), "");
  });
  it("should not change a string that is already a valid slug", () => {
    assert.equal(converter.slugify("already-a-valid-slug"), "already-a-valid-slug");
  });
  it("handles strings that are already partially slugified", () => {
    assert.equal(converter.slugify("My-Blog-Post!"), "my-blog-post");
  });
});