import { test } from '@japa/runner'
import pluralize from '../../src/pluralize.js'
import { BASIC_TESTS, PLURAL_TESTS, SINGULAR_TESTS } from '../fixtures/data.js'

test.group('plural', () => {
  BASIC_TESTS.concat(PLURAL_TESTS).forEach(([singular, plural]) => {
    test(`5 ${plural} -> ${plural}`, ({ assert }) => {
      assert.equal(pluralize(plural, 5), plural)
    })

    if (singular !== plural) {
      test(`5 ${singular} -> ${plural}`, ({ assert }) => {
        assert.equal(pluralize(singular, 5), plural)
      })
    }
  })
})

test.group('singular', () => {
  BASIC_TESTS.concat(SINGULAR_TESTS).forEach(([singular, plural]) => {
    test(`1 ${singular} -> ${singular}`, ({ assert }) => {
      assert.equal(pluralize(singular, 1), singular)
    })

    if (singular !== plural) {
      test(`1 ${plural} -> ${singular}`, ({ assert }) => {
        assert.equal(pluralize(plural, 1), singular)
      })
    }
  })
})
