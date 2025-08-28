import { test } from '@japa/runner'
import pluralize from '../../src/pluralize.js'

test.group('prepend count', () => {
  test('plural words', ({ assert }) => {
    assert.equal(pluralize('test', 5, true), '5 tests')
  })

  test('singular words', ({ assert }) => {
    assert.equal(pluralize('test', 1, true), '1 test')
  })
})

test.group('adding new rules', () => {
  test('uncountable rules', ({ assert }) => {
    assert.equal(pluralize('paper'), 'papers')
    pluralize.addUncountableRule('paper')
    assert.equal(pluralize('paper'), 'paper')
  })

  test('should allow new irregular words', ({ assert }) => {
    assert.equal(pluralize('irregular'), 'irregulars')
    pluralize.addIrregularRule('irregular', 'regular')
    assert.equal(pluralize('irregular'), 'regular')
  })

  test('should allow new plural matching rules', ({ assert }) => {
    assert.equal(pluralize.plural('regex'), 'regexes')
    pluralize.addPluralRule(/gex$/i, 'gexii')
    assert.equal(pluralize.plural('regex'), 'regexii')
  })

  test('should allow new singular matching rules', ({ assert }) => {
    assert.equal(pluralize.singular('singles'), 'single')
    pluralize.addSingularRule(/singles$/, 'singular')
    assert.equal(pluralize.singular('singles'), 'singular')
  })

  test('should allow new plural matching rules to be strings', ({ assert }) => {
    assert.equal(pluralize.plural('person'), 'people')
    pluralize.addPluralRule('person', 'peeps')
    assert.equal(pluralize.plural('person'), 'peeps')
  })

  test('should allow new singular matching rules to be strings', ({ assert }) => {
    assert.equal(pluralize.singular('mornings'), 'morning')
    pluralize.addSingularRule('mornings', 'suck')
    assert.equal(pluralize.singular('mornings'), 'suck')
  })
})
