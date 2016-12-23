'use strict';

/**
* ESLint JavaScript language options.
*
* @namespace features
*/
var features = {};

/**
* Do not allow return statements in the global scope.
*
* @name globalReturn
* @memberof features
* @type {boolean}
* @default false
* @see [globalReturn]{@link http://eslint.org/docs/user-guide/configuring#specifying-parser-options}
*/
features.globalReturn = false;

/**
* Disable implied global strict mode.
*
* @name impliedStrict
* @memberof features
* @type {boolean}
* @default false
* @see [impliedStrict]{@link http://eslint.org/docs/user-guide/configuring#specifying-parser-options}
*/
features.impliedStrict = false;

/**
* Do not enable JSX.
*
* @name jsx
* @memberof features
* @type {boolean}
* @default false
* @see [jsx]{@link http://eslint.org/docs/user-guide/configuring#specifying-parser-options}
*/
features.jsx = false;

/**
* Do not enable experimental object rest spread.
*
* @name experimentalObjectRestSpread
* @memberof features
* @type {boolean}
* @default false
* @see [experimentalObjectRestSpread]{@link http://eslint.org/docs/user-guide/configuring#specifying-parser-options}
*/
features.experimentalObjectRestSpread = false;


// EXPORTS //

module.exports = features;
