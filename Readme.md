
# Pluralize (ES Fork)

> Modern, ES-ready fork of the original [pluralize](https://github.com/blakeembrey/pluralize) library. The original is no longer maintained—this fork is actively updated and supports ES modules out of the box.

Pluralize is a robust TypeScript library for pluralizing and singularizing English (and some Unicode) words. It is designed for developers who need reliable inflection, custom rule extension, and runtime flexibility.

## Installation

```bash
npm install @jarrodek/pluralize
# or
yarn add @jarrodek/pluralize
```

### ES Module Usage

```js
import pluralize from '@jarrodek/pluralize';
```

### CommonJS Usage

```js
const pluralize = require('@jarrodek/pluralize');
```

### Browser

```html
<!-- Stop polluting the global namespace! -->
```

## Why Pluralize?

- **Actively maintained fork**: The original library is unmaintained; this fork is modernized and ES module compatible.
- **TypeScript-first**: Full type definitions and modern build pipeline.
- **Extensible**: Add custom plural/singular/irregular/uncountable rules at runtime.
- **Reliable inflection**: Handles edge cases, Unicode, and irregular forms.

## API & Examples

### Basic Usage

```js
pluralize('test') // "tests"
pluralize('test', 1) // "test"
pluralize('test', 5) // "tests"
pluralize('test', 1, true) // "1 test"
pluralize('test', 5, true) // "5 tests"
pluralize('蘋果', 2, true) // "2 蘋果"
```

### Advanced API

#### Pluralize a word

```js
pluralize.plural('person') // "people"
pluralize.plural('bus') // "buses"
```

#### Singularize a word

```js
pluralize.singular('geese') // "goose"
pluralize.singular('cars') // "car"
```

#### Check if a word is plural or singular

```js
pluralize.isPlural('dogs') // true
pluralize.isSingular('dog') // true
```

#### Add custom rules at runtime

```js
pluralize.addPluralRule(/gex$/i, 'gexii')
pluralize.plural('regex') // "regexii"

pluralize.addSingularRule(/singles$/i, 'singular')
pluralize.singular('singles') // "singular"

pluralize.addIrregularRule('person', 'people')
pluralize.plural('person') // "people"
pluralize.singular('people') // "person"

pluralize.addUncountableRule('sheep')
pluralize.plural('sheep') // "sheep"
pluralize.singular('sheep') // "sheep"
```

## Use Cases

- **UI/UX:** Display item counts: "1 file", "2 files".
- **Natural Language Processing:** Normalize user input for search, categorization, or reporting.
- **Domain Extensions:** Add custom inflection rules for medical, legal, or technical vocabulary.
- **Internationalization:** Handles Unicode and non-English words for basic pluralization.

## Extending & Testing

- Add new rules using the API methods above.
- All new rules and API extensions should be covered by unit tests in `tests/unit/`.
- See `tests/unit/methods.spec.ts` for test patterns.

## Maintainers & Fork Status

This is a fork of [blakeembrey/pluralize](https://github.com/blakeembrey/pluralize), which is no longer maintained. This fork is actively updated, ES module compatible, and modernized for developer use.

## License

MIT
