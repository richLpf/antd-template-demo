/*
 * @Author: pengfei.lv
 * @LastModifiedBy: pengfei.lv
 * @LastEditTime: 2021-10-25 21:34:43
 * @LastEditors: pengfei.lv
 * @Description: 
 */
const {types, scopes, allowCustomScopes} = require('./commitizen.config.js');

const validTypes = types.map(type => type.value);
const validScopes = scopes.map(scope => scope.name);
const scopeValidationLevel = allowCustomScopes ? 1 : 2;

module.exports = {
  extends: ['@commitlint/config-conventional'],

  // Add your own rules. See http://marionebl.github.io/commitlint
  rules: {
    // Apply valid scopes and types
    'scope-enum': [scopeValidationLevel, 'always', validScopes],
    'type-enum': [2, 'always', validTypes]
  }
};