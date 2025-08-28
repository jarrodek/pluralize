import { test } from '@japa/runner'
import pluralize from '../../src/pluralize.js'
import { BASIC_TESTS, PLURAL_TESTS, SINGULAR_TESTS } from '../fixtures/data.js'

test.group('plural', () => {
  BASIC_TESTS.concat(PLURAL_TESTS).forEach(([singular, plural]) => {
    test(`${singular} -> ${plural}`, ({ assert }) => {
      assert.equal(pluralize.plural(singular), plural)
    })
  })
})

test.group('isPlural', () => {
  BASIC_TESTS.concat(PLURAL_TESTS).forEach(([_, plural]) => {
    test(`isPlural(${plural})`, ({ assert }) => {
      assert.isTrue(pluralize.isPlural(plural))
    })
  })
})

test.group('singular', () => {
  BASIC_TESTS.concat(SINGULAR_TESTS).forEach(([singular, plural]) => {
    test(`${plural} -> ${singular}`, ({ assert }) => {
      assert.equal(pluralize.singular(plural), singular)
    })
  })
})

test.group('isSingular', () => {
  BASIC_TESTS.concat(SINGULAR_TESTS).forEach(([singular, _]) => {
    test(`isSingular(${singular})`, ({ assert }) => {
      assert.isTrue(pluralize.isSingular(singular))
    })
  })
})
