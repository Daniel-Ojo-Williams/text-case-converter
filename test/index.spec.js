import { describe, it } from "node:test";
import assert from "node:assert/strict";

import converter from "../src/index.js";

describe("toUpperCase", () => {
  const testCases = [
    {
      input: "hello world",
      expected: "HELLO WORLD",
      description: "converts lowercase to uppercase"
    },
    {
      input: "mIxEd CaSe",
      expected: "MIXED CASE",
      description: "converts mixed case to uppercase"
    },
    {
      input: "HELLO WORLD",
      expected: "HELLO WORLD",
      description: "keeps uppercase as uppercase"
    },
    {
      input: "  hello world  ",
      expected: "HELLO WORLD",
      description: "trims leading and trailing spaces"
    },
    {
      input: "hello   world",
      expected: "HELLO WORLD",
      description: "collapses multiple spaces into one"
    },
    {
      input: "  hello   world  ",
      expected: "HELLO WORLD",
      description: "trims and collapses spaces together"
    },
    {
      input: "word",
      expected: "WORD",
      description: "handles single word"
    },
    {
      input: "",
      expected: "",
      description: "handles empty string"
    }
  ];

  testCases.forEach(({ input, expected, description }) => {
    it(description, () => {
      const output = converter.toUpperCase(input);
      assert.equal(output, expected);
    });
  });
});

describe("toLowerCase", () => {
  const testCases = [
    {
      input: "HELLO WORLD",
      expected: "hello world",
      description: "converts uppercase to lowercase"
    },
    {
      input: "mIxEd CaSe",
      expected: "mixed case",
      description: "converts mixed case to lowercase"
    },
    {
      input: "hello world",
      expected: "hello world",
      description: "keeps lowercase as lowercase"
    },
    {
      input: "  HELLO WORLD  ",
      expected: "hello world",
      description: "trims leading and trailing spaces"
    },
    {
      input: "HELLO   WORLD",
      expected: "hello world",
      description: "collapses multiple spaces into one"
    },
    {
      input: "  HELLO   WORLD  ",
      expected: "hello world",
      description: "trims and collapses spaces together"
    },
    {
      input: "WORD",
      expected: "word",
      description: "handles single word"
    },
    {
      input: "",
      expected: "",
      description: "handles empty string"
    }
  ];

  testCases.forEach(({ input, expected, description }) => {
    it(description, () => {
      const output = converter.toLowerCase(input);
      assert.equal(output, expected);
    });
  });
});

describe("toSentenceCase", () => {
  const testCases = [
    {
      input: "hello world",
      expected: "Hello world",
      description: "capitalizes first letter, lowercases rest"
    },
    {
      input: "HELLO WORLD",
      expected: "Hello world",
      description: "lowercases all-uppercase except first letter"
    },
    {
      input: "mIxEd CaSe StRiNg",
      expected: "Mixed case string",
      description: "handles mixed case"
    },
    {
      input: "Hello world",
      expected: "Hello world",
      description: "handles already correct sentence case"
    },
    {
      input: "  hello world  ",
      expected: "Hello world",
      description: "trims leading and trailing spaces"
    },
    {
      input: "hello   world",
      expected: "Hello world",
      description: "collapses multiple spaces into one"
    },
    {
      input: "  hello   world  ",
      expected: "Hello world",
      description: "trims and collapses spaces together"
    },
    {
      input: "word",
      expected: "Word",
      description: "handles single word"
    },
    {
      input: "",
      expected: "",
      description: "handles empty string"
    }
  ];

  testCases.forEach(({ input, expected, description }) => {
    it(description, () => {
      const output = converter.toSentenceCase(input);
      assert.equal(output, expected);
    });
  });
});

describe("toTitleCase", () => {
  const testCases = [
    {
      input: "hello world",
      expected: "Hello World",
      description: "capitalizes first letter of each word"
    },
    {
      input: "HELLO WORLD",
      expected: "Hello World",
      description: "handles all uppercase input"
    },
    {
      input: "mIxEd CaSe StRiNg",
      expected: "Mixed Case String",
      description: "handles mixed case"
    },
    {
      input: "the quick brown fox",
      expected: "The Quick Brown Fox",
      description: "handles longer phrase"
    },
    {
      input: "  hello world  ",
      expected: "Hello World",
      description: "trims leading and trailing spaces"
    },
    {
      input: "hello   world",
      expected: "Hello World",
      description: "collapses multiple spaces into one"
    },
    {
      input: "  hello   world  ",
      expected: "Hello World",
      description: "trims and collapses spaces together"
    },
    {
      input: "word",
      expected: "Word",
      description: "handles single word"
    },
    {
      input: "",
      expected: "",
      description: "handles empty string"
    },
    {
      input: "the lord of the rings",
      expected: "The Lord of the Rings",
      description: "capitalizes stop words if they are the first word"
    },
    {
      input: "A BEAUTIFUL DAY IN THE NEIGHBORHOOD",
      expected: "A Beautiful Day in the Neighborhood",
      description: "keeps stop words lowercase in the middle of a string"
    }
  ];

  testCases.forEach(({ input, expected, description }) => {
    it(description, () => {
      const output = converter.toTitleCase(input);
      assert.equal(output, expected);
    });
  });
});

describe("toKebabCase", () => {
  const testCases = [
    {
      input: "hello world",
      expected: "hello-world",
      description: "converts space-separated words to kebab-case"
    },
    {
      input: "HelloWorld",
      expected: "hello-world",
      description: "converts PascalCase to kebab-case"
    },
    {
      input: "helloWorld",
      expected: "hello-world",
      description: "converts camelCase to kebab-case"
    },
    {
      input: "hello_world",
      expected: "hello-world",
      description: "converts snake_case to kebab-case"
    },
    {
      input: "HELLO WORLD",
      expected: "hello-world",
      description: "converts UPPER CASE to kebab-case"
    },
    {
      input: "the quick brown fox",
      expected: "the-quick-brown-fox",
      description: "handles longer phrase"
    },
    {
      input: "  hello world  ",
      expected: "hello-world",
      description: "trims leading and trailing spaces"
    },
    {
      input: "hello   world",
      expected: "hello-world",
      description: "collapses multiple spaces into one dash"
    },
    {
      input: "  hello   world  ",
      expected: "hello-world",
      description: "trims and collapses spaces together"
    },
    {
      input: "word",
      expected: "word",
      description: "handles single word"
    },
    {
      input: "",
      expected: "",
      description: "handles empty string"
    }
  ];

  testCases.forEach(({ input, expected, description }) => {
    it(description, () => {
      const output = converter.toKebabCase(input);
      assert.equal(output, expected);
    });
  });
});

describe("toSnakeCase", () => {
  const testCases = [
    {
      input: "hello world",
      expected: "hello_world",
      description: "converts space-separated words to snake_case"
    },
    {
      input: "HelloWorld",
      expected: "hello_world",
      description: "converts PascalCase to snake_case"
    },
    {
      input: "helloWorld",
      expected: "hello_world",
      description: "converts camelCase to snake_case"
    },
    {
      input: "hello-world",
      expected: "hello_world",
      description: "converts kebab-case to snake_case"
    },
    {
      input: "HELLO WORLD",
      expected: "hello_world",
      description: "converts UPPER CASE to snake_case"
    },
    {
      input: "the quick brown fox",
      expected: "the_quick_brown_fox",
      description: "handles longer phrase"
    },
    {
      input: "  hello world  ",
      expected: "hello_world",
      description: "trims leading and trailing spaces"
    },
    {
      input: "hello   world",
      expected: "hello_world",
      description: "collapses multiple spaces into one underscore"
    },
    {
      input: "  hello   world  ",
      expected: "hello_world",
      description: "trims and collapses spaces together"
    },
    {
      input: "word",
      expected: "word",
      description: "handles single word"
    },
    {
      input: "",
      expected: "",
      description: "handles empty string"
    }
  ];

  testCases.forEach(({ input, expected, description }) => {
    it(description, () => {
      const output = converter.toSnakeCase(input);
      assert.equal(output, expected);
    });
  });
});

describe("toPascalCase", () => {
  const testCases = [
    {
      input: "hello world",
      expected: "HelloWorld",
      description: "converts space-separated words to PascalCase"
    },
    {
      input: "hello-world",
      expected: "HelloWorld",
      description: "converts kebab-case to PascalCase"
    },
    {
      input: "hello_world",
      expected: "HelloWorld",
      description: "converts snake_case to PascalCase"
    },
    {
      input: "helloWorld",
      expected: "HelloWorld",
      description: "converts camelCase to PascalCase"
    },
    {
      input: "HelloWorld",
      expected: "HelloWorld",
      description: "keeps PascalCase as PascalCase"
    },
    {
      input: "HELLO WORLD",
      expected: "HelloWorld",
      description: "converts UPPER CASE to PascalCase"
    },
    {
      input: "the quick brown fox",
      expected: "TheQuickBrownFox",
      description: "handles longer phrase"
    },
    {
      input: "  hello world  ",
      expected: "HelloWorld",
      description: "trims leading and trailing spaces"
    },
    {
      input: "hello   world",
      expected: "HelloWorld",
      description: "collapses multiple spaces"
    },
    {
      input: "  hello   world  ",
      expected: "HelloWorld",
      description: "trims and collapses spaces together"
    },
    {
      input: "word",
      expected: "Word",
      description: "handles single word"
    },
    {
      input: "",
      expected: "",
      description: "handles empty string"
    },
    {
      input: "version 2 update",
      expected: "Version2Update",
      description: "handles numbers at the start of words"
    }
  ];

  testCases.forEach(({ input, expected, description }) => {
    it(description, () => {
      const output = converter.toPascalCase(input);
      assert.equal(output, expected);
    });
  });
});

describe("toCamelCase", () => {
  const testCases = [
    {
      input: "hello world",
      expected: "helloWorld",
      description: "converts space-separated words to camelCase"
    },
    {
      input: "hello-world",
      expected: "helloWorld",
      description: "converts kebab-case to camelCase"
    },
    {
      input: "hello_world",
      expected: "helloWorld",
      description: "converts snake_case to camelCase"
    },
    {
      input: "helloWorld",
      expected: "helloWorld",
      description: "keeps camelCase as camelCase"
    },
    {
      input: "HelloWorld",
      expected: "helloWorld",
      description: "converts PascalCase to camelCase"
    },
    {
      input: "HELLO WORLD",
      expected: "helloWorld",
      description: "converts UPPER CASE to camelCase"
    },
    {
      input: "the quick brown fox",
      expected: "theQuickBrownFox",
      description: "handles longer phrase"
    },
    {
      input: "  hello world  ",
      expected: "helloWorld",
      description: "trims leading and trailing spaces"
    },
    {
      input: "hello   world",
      expected: "helloWorld",
      description: "collapses multiple spaces"
    },
    {
      input: "  hello   world  ",
      expected: "helloWorld",
      description: "trims and collapses spaces together"
    },
    {
      input: "word",
      expected: "word",
      description: "handles single word"
    },
    {
      input: "",
      expected: "",
      description: "handles empty string"
    },
    {
      input: "user 123 login",
      expected: "user123Login",
      description: "handles strings with numbers correctly"
    }
  ];

  testCases.forEach(({ input, expected, description }) => {
    it(description, () => {
      const output = converter.toCamelCase(input);
      assert.equal(output, expected);
    });
  });
});

describe("slugify", () => {
  const testCases = [
    {
      input: "hello world",
      expected: "hello-world",
      description: "converts space-separated words to slug"
    },
    {
      input: "hello, world!",
      expected: "hello-world",
      description: "removes special characters"
    },
    {
      input: "it's a beautiful day",
      expected: "its-a-beautiful-day",
      description: "handles apostrophes"
    },
    {
      input: "HELLO WORLD",
      expected: "hello-world",
      description: "converts to lowercase"
    },
    {
      input: "the quick brown fox",
      expected: "the-quick-brown-fox",
      description: "handles longer phrase"
    },
    {
      input: "  hello world  ",
      expected: "hello-world",
      description: "trims leading and trailing spaces"
    },
    {
      input: "hello   world",
      expected: "hello-world",
      description: "collapses multiple spaces into one dash"
    },
    {
      input: "  hello   world  ",
      expected: "hello-world",
      description: "trims and collapses spaces together"
    },
    {
      input: "hello -- world",
      expected: "hello-world",
      description: "removes consecutive dashes after stripping special chars"
    },
    {
      input: "word",
      expected: "word",
      description: "handles single word"
    },
    {
      input: "",
      expected: "",
      description: "handles empty string"
    },
    {
      input: "already-a-valid-slug",
      expected: "already-a-valid-slug",
      description: "should not change a string that is already a valid slug"
    },
    {
      input: "My-Blog-Post!",
      expected: "my-blog-post",
      description: "handles strings that are already partially slugified"
    }
  ];

  testCases.forEach(({ input, expected, description }) => {
    it(description, () => {
      const output = converter.slugify(input);
      assert.equal(output, expected);
    });
  });
});