# Text Case Converter

A lightweight utility to convert texts into various cases (upper, lower, camel, kebab, snake, etc...).

## Installation

```bash
npm install @owdanny/text-case-converter
```

## Usage

```javascript
import converter from '@owdanny/text-case-converter';

// Convert to different cases
converter.toUpperCase("hello world");     // "HELLO WORLD"
converter.toLowerCase("HELLO WORLD");   // "hello world"
converter.toCamelCase("hello world");  // "helloWorld"
converter.toPascalCase("hello world"); // "HelloWorld"
converter.toSnakeCase("hello world"); // "hello_world"
converter.toKebabCase("hello world"); // "hello-world"
converter.toSentenceCase("hello world"); // "Hello world"
converter.toTitleCase("hello world");  // "Hello World"
converter.slugify("hello world");      // "hello-world"
```

## API Reference

### `toUpperCase(text)`

Converts text to uppercase.

- **Parameters:** `text` (string) - The text to convert
- **Returns:** string - Uppercase version of the text

### `toLowerCase(text)`

Converts text to lowercase.

- **Parameters:** `text` (string) - The text to convert
- **Returns:** string - Lowercase version of the text

### `toCamelCase(text)`

Converts text to camelCase.

- **Parameters:** `text` (string) - The text to convert
- **Returns:** string - camelCase version of the text

### `toPascalCase(text)`

Converts text to PascalCase.

- **Parameters:** `text` (string) - The text to convert
- **Returns:** string - PascalCase version of the text

### `toSnakeCase(text)`

Converts text to snake_case.

- **Parameters:** `text` (string) - The text to convert
- **Returns:** string - snake_case version of the text

### `toKebabCase(text)`

Converts text to kebab-case.

- **Parameters:** `text` (string) - The text to convert
- **Returns:** string - kebab-case version of the text

### `toSentenceCase(text)`

Converts text to sentence case (first letter capitalized, rest lowercase).

- **Parameters:** `text` (string) - The text to convert
- **Returns:** string - Sentence case version of the text

### `toTitleCase(text)`

Converts text to title case with smart handling of stop words.

- **Parameters:** `text` (string) - The text to convert
- **Returns:** string - Title case version of the text

### `slugify(text)`

Converts text to a URL-friendly slug.

- **Parameters:** `text` (string) - The text to convert
- **Returns:** string - URL-friendly slug

## Features

- **Multiple format support:** Handles space-separated, camelCase, PascalCase, snake_case, and kebab-case inputs
- **Smart normalization:** Automatically trims whitespace and collapses multiple spaces
- **Punctuation handling:** Removes or handles punctuation appropriately
- **Stop words support:** Title case preserves proper capitalization of stop words
- **Number handling:** Correctly processes numbers in text
- **Empty string safe:** All functions handle empty strings gracefully

## Examples

### Basic Conversions

```javascript
converter.toUpperCase("hello world");     // "HELLO WORLD"
converter.toLowerCase("HELLO WORLD");   // "hello world"
converter.toCamelCase("hello world");  // "helloWorld"
converter.toPascalCase("hello world"); // "HelloWorld"
```

### Format Interconversion

```javascript
// From camelCase
converter.toSnakeCase("helloWorld");   // "hello_world"
converter.toKebabCase("helloWorld");  // "hello-world"
converter.toSentenceCase("helloWorld"); // "Hello world"

// From snake_case
converter.toCamelCase("hello_world");  // "helloWorld"
converter.toPascalCase("hello_world"); // "HelloWorld"
converter.toKebabCase("hello_world"); // "hello-world"

// From kebab-case
converter.toCamelCase("hello-world");  // "helloWorld"
converter.toPascalCase("hello-world"); // "HelloWorld"
converter.toSnakeCase("hello-world");  // "hello_world"
```

### Advanced Features

```javascript
// Title case with stop words
converter.toTitleCase("the lord of the rings"); 
// "The Lord of the Rings"

// Number handling
converter.toCamelCase("user 123 login");   // "user123Login"
converter.toPascalCase("version 2 update"); // "Version2Update"

// Slugify with punctuation removal
converter.slugify("Hello, World!");      // "hello-world"
converter.slugify("It's a beautiful day"); // "its-a-beautiful-day"
```

### Whitespace Handling

```javascript
// All functions trim and normalize whitespace
converter.toCamelCase("  hello   world  "); // "helloWorld"
converter.toSnakeCase("HELLO   WORLD");    // "hello_world"
converter.toKebabCase("  hello   world  "); // "hello-world"
```

## Testing

Run the test suite:

```bash
npm test
```

The package includes comprehensive tests covering:
- All conversion functions
- Edge cases (empty strings, special characters)
- Format interconversion
- Whitespace handling
- Number processing

## License

MIT

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

## Version History

- **1.0.0** - Initial release with all basic case conversion functions
