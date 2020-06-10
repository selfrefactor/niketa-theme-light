import { shuffle, splitEvery } from 'rambdax'

import { missingScopes } from '../lambdas/find_missing_rules/missingScopes.json'

const [
  ADDITIONAL_0,
  ADDITIONAL_1,
  ADDITIONAL_2,
  ADDITIONAL_3,
  ADDITIONAL_4,
] = splitEvery(Math.ceil(missingScopes.length / 5), shuffle(missingScopes))

const COLOR_0 = [
  ...ADDITIONAL_0,
  'entity.name.method.js',
  'entity.name.tag.UNDERLINE',
  'keyword.operator.module.all.js',
  'markup',
  'meta.function.arrow',
  'meta.var.expr.js',
  'punctuation.accessor.js',
  'punctuation.separator.comma.js',
  'punctuation.separator.key-value.js',
  'source.go',
  'source.js',
  'storage.modifier.js',
  'storage.type',
  'support.class.console.js',
  'support.function.dom.js',
  'support.variable.property.js',
  'text.html.derivative',
  'variable.import.parameter.js',
  'variable.language.constructor.UNDERLINE',
  'variable.parameter',
]

const COLOR_1 = [
  ...ADDITIONAL_1,
  'constant.language.boolean',
  'constant.language.null.js',
  'constant.numeric',
  'entity.name.class.UNDERLINE',
  'entity.name.function.UNDERLINE',
  'entity.name.tag.class.js',
  'entity.name.type.UNDERLINE',
  'entity.name.type.js',
  'expression.ng',
  'keyword',
  'markup.heading.markdown',
  'meta.brace.round.js',
  'meta.definition.property.js',
  'meta.method-call.with-arguments.js',
  'meta.tag.attributes.js',
  'punctuation.definition.tag.js',
  'support.type.primitive.js',
  'support.variable.property.js',
  'variable',
  'variable.other.readwrite',
  'variable.other.readwrite.js',
  'variable.other.readwrite.alias.js',
  'variable.other.readwrite.decorator.js',
]

const COLOR_2 = [
  ...ADDITIONAL_2,
  'entity.other.attribute-name',
  'entity.other.attribute-name.js',
  'entity.name.class.js',
  'entity.name.module.js',
  'keyword.control.import.js',
  'keyword.control.module.js',
  'meta.class-method.js',
  'meta.import.js',
  'meta.paragraph.markdown',
  'punctuation.definition.block.js',
  'source.css',
  'source.json',
  'storage.type.function.js',
  'support.class.promise.js',
  'support.function',
  'support.function.console.js',
  'support.type.object.console.js',
  'support.type.object.module.js',
  'variable.language.prototype.js',
  'variable.language.this',
  'variable.language.this.js',
  'variable.other.constant.js',
  'variable.other.object.js',
]

const COLOR_3 = [
  ...ADDITIONAL_3,
  'constant.other.object.key.js',
  'entity.name.function.js',
  'entity.name.function.method',
  'entity.name.tag.js',
  'entity.other.ng-binding-name.property.html',
  'keyword.control.default.js',
  'keyword.control.export.js',
  'keyword.control.from.js',
  'keyword.operator.accessor',
  'markup.quote',
  'meta.brace.square.js',
  'meta.function.parameters.js',
  'meta.parameters.js',
  'meta.tag.js',
  'punctuation.definition.parameters.begin.js',
  'punctuation.definition.parameters.end.js',
  'punctuation.quasi.element.begin.js',
  'punctuation.quasi.element.end.js',
  'support.type.property-name.json',
  'variable.object.property.js',
  'variable.other.class.js',
  'variable.other.object.property.js',
  'variable.other.property.js',
]

const COLOR_4 = [
  ...ADDITIONAL_4,
  'comment',
  'comment.block.documentation',
  'comment.line.double-slash',
  'constant.character',
  'constant.language',
  'constant.other',
  'entity.other.inherited-class',
  'entity.other.ng-binding-name.outputReplEvent.html',
  'invalid.UNDERLINE',
  'keyword.operator.decorator.js',
  'markup',
  'meta.function.js',
  'meta.object-literal.key.js',
  'meta.template.expression.js',
  'punctuation.accessor.js',
  'punctuation.definition.string',
  'punctuation.definition.string.begin',
  'punctuation.definition.string.end',
  'punctuation.definition.template-expression.begin.js',
  'punctuation.definition.template-expression.end.js',
  'punctuation.separator.parameter.js',
  'storage.modifier.async.js',
  'string.quoted.double.html.ITALIC',
  'string.quoted.double.json.ITALIC',
  'string.quoted.single.js.ITALIC',
  'string.quoted.single.json.ITALIC',
  'string.template.ITALIC',
  'string.template.js.ITALIC',
  'string.unquoted.js.ITALIC',
  'string.unquoted.label.js.ITALIC',
  'support.class.builtin.js',
  'support.constant',
  'support.function.mutator.js',
  'tag.decorator.js',
  'variable.language'
]

export const baseBase = {
  name   : '_Palette',
  type   : 'light',
  colors : {},
}

export const baseData = {
  COLOR_0,
  COLOR_1,
  COLOR_2,
  COLOR_3,
  COLOR_4,
}

export const all = [
  ...COLOR_0,
  ...COLOR_1,
  ...COLOR_2,
  ...COLOR_3,
  ...COLOR_4,
]
