'use strict';

/**
* ESLint JavaScript language options.
*
* @namespace features
*/
var features = {};

/**
* Do not allow arrow functions.
*
* @name arrowFunctions
* @memberof features
* @type {boolean}
* @default false
* @see [arrowFunctions]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}
*/
features.arrowFunctions = false;

/**
* Do not allow binary literals.
*
* @name binaryLiterals
* @memberof features
* @type {boolean}
* @default false
* @see [binaryLiterals]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}
*/
features.binaryLiterals = false;

/**
* Do not allow the use of `let` and `const`.
*
* @name blockBindings
* @memberof features
* @type {boolean}
* @default false
* @see [blockBindings]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}
*/
features.blockBindings = false;

/**
* Do not allow the use of classes.
*
* @name classes
* @memberof features
* @type {boolean}
* @default false
* @see [classes]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}
*/
features.classes = false;

/**
* Do not allow the use of default function parameters.
*
* @name defaultParams
* @memberof features
* @type {boolean}
* @default false
* @see [defaultParams]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}
*/
features.defaultParams = false;

/**
* Do not allow the use of destructuring.
*
* @name destructuring
* @memberof features
* @type {boolean}
* @default false
* @see [destructuring]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}
*/
features.destructuring = false;

/**
* Do not allow the use of `for-of` loops.
*
* @name forOf
* @memberof features
* @type {boolean}
* @default false
* @see [forOf]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}
*/
features.forOf = false;

/**
* Do not allow the use of generators.
*
* @name generators
* @memberof features
* @type {boolean}
* @default false
* @see [generators]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}
*/
features.generators = false;

/**
* Do not allow modules.
*
* @name modules
* @membeof features
* @type {boolean}
* @default false
* @see [modules]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}
*/
features.modules = false;

/**
* Do not allow computed object literal property names.
*
* @name objectLiteralComputedProperties
* @memberof features
* @type {boolean}
* @default false
* @see [objectLiteralComputedProperties]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}
*/
features.objectLiteralComputedProperties = false;

/**
* Do not allow duplicate properties.
*
* @name objectLiteralDuplicateProperties
* @memberof features
* @type {boolean}
* @default false
* @see [objectLiteralDuplicateProperties]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}
*/
features.objectLiteralDuplicateProperties = false;

/**
* Do not allow object literal shorthand methods.
*
* @name objectLiteralShorthandMethods
* @memberof features
* @type {boolean}
* @default false
* @see [objectLiteralShorthandMethods]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}
*/
features.objectLiteralShorthandMethods = false;

/**
* Do not allow object literal shorthand properties.
*
* @name objectLiteralShorthandProperties
* @memberof features
* @type {boolean}
* @default false
* @see [objectLiteralShorthandProperties]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}
*/
features.objectLiteralShorthandProperties = false;

/**
* Do not allow octal literals.
*
* @name octalLiterals
* @memberof features
* @type {boolean}
* @default false
* @see [octalLiterals]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}
*/
features.octalLiterals = false;

/**
* Do not allow the new `u` (unicode) regexp flag to be recognized.
*
* @name regexUFlag
* @memberof features
* @type {boolean}
* @default false
* @see [New ECMAScript 6 Flags]{@link http://eslint.org/docs/rules/no-invalid-regexp#new-ecmascript-6-flags}
*/
features.regexUFlag = false;

/**
* Do not allow the new `y` (sticky) regexp flag to be recognized.
*
* @name regexYFlag
* @memberof features
* @type {boolean}
* @default false
* @see [New ECMAScript 6 Flags]{@link http://eslint.org/docs/rules/no-invalid-regexp#new-ecmascript-6-flags}
*/
features.regexYFlag = false;

/**
* Do not allow using the rest parameters.
*
* @name restParams
* @memberof features
* @type {boolean}
* @default false
* @see [restParams]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}
*/
features.restParams = false;

/**
* Do not allow using the spread operator.
*
* @name spread
* @memberof features
* @type {boolean}
* @default false
* @see [spread]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}
*/
features.spread = false;

/**
* Do not allow super references in functions.
*
* @name superInFunctions
* @memberof features
* @type {boolean}
* @default false
* @see [superInFunctions]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}
*/
features.superInFunctions = false;

/**
* Do not allow template strings.
*
* @name templateStrings
* @memberof features
* @type {boolean}
* @default false
* @see [templateStrings]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}
*/
features.templateStrings = false;

/**
* Do not allow code point escapes.
*
* @name unicodeCodePointEscapes
* @memberof features
* @type {boolean}
* @default false
* @see [unicodeCodePointEscapes]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}
*/
features.unicodeCodePointEscapes = false;

/**
* Do not allow return statements in the global scope.
*
* @name globalReturn
* @memberof features
* @type {boolean}
* @default false
* @see [globalReturn]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}
*/
features.globalReturn = false;

/**
* Do not enable JSX.
*
* @name jsx
* @memberof features
* @type {boolean}
* @default false
* @see [jsx]{@link http://eslint.org/docs/user-guide/configuring#specifying-language-options}
*/
features.jsx = false;


// EXPORTS //

module.exports = features;
