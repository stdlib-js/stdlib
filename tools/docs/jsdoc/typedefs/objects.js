/**
* An array-like object.
*
* @typedef {(Array|string|String|Object)} ArrayLike
*/

/**
* An array-like object (excluding string primitives).
*
* @typedef {(Array|String|Object)} ArrayLikeObject
*/

/**
* A plain object; i.e., either `{}` or an object created via `Object.create( null )`.
*
* @typedef {Object} PlainObject
*/

/**
* A value which is object-like. Basically, any value which is not `null` and, when operated on by `typeof`, returns `object`.
*
* @typedef {Object} ObjectLike
*/

/**
* An object which is valid JSON.
*
* @typedef {PlainObject} JSON
*
* @see [JSON]{@link http://www.json.org/}
*/

/**
* An object containing function options.
*
* @typedef {PlainObject} Options
*/

/**
* An object that creates a namespace for its members.
*
* @typedef {Object} Namespace
*/

/**
* A Node.js `Buffer` instance.
*
* @typedef {(Object|Uint8Array)} Buffer
*
* @see [Buffer]{@link https://nodejs.org/api/buffer.html}
*/

/**
* A collection, which is defined as either an array, typed array, or an array-like object (excluding strings and functions).
*
* @typedef {(Array|TypedArray|Object)} Collection
*/

/**
* An instance of the built-in `Date` object.
*
* @typedef {Date} Date
*
* @see [Date]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date}
*/

/**
* An instance of the built-in `RegExp` object.
*
* @typedef {RegExp} RegExp
*
* @see [RegExp]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp}
*/

/**
* An iterator protocol-compliant object.
*
* @typeof {Object} Iterator
*
* @see [Iteration protocols]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols}
*/

/**
* An iterable protocol-compliant object.
*
* @typeof {Object} Iterable
*
* @see [Iteration protocols]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols}
*/
