/**
* A JavaScript primitive.
*
* @typedef {(number|string|boolean|null|undefined)} primitive
*/

/**
* A double-precision floating-point number.
*
* @typedef {number} Float64
*
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/

/**
* A single-precision floating-point number.
*
* @typedef {number} Float32
*
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/

/**
* A 32-bit signed integer.
*
* @typedef {number} Int32
*/

/**
* A 32-bit unsigned integer.
*
* @typedef {number} Uint32
*/

/**
* A 16-bit signed integer.
*
* @typedef {number} Int16
*/

/**
* A 16-bit unsigned integer.
*
* @typedef {number} Uint16
*/

/**
* An 8-bit signed integer.
*
* @typedef {number} Int8
*/

/**
* An 8-bit unsigned integer.
*
* @typedef {number} Uint8
*/

/**
* A number primitive which has an integer value.
*
* @typedef {number} integer
*/

/**
* A number primitive which has a nonnegative integer value.
*
* @typedef {integer} NonNegativeInteger
*/

/**
* A number primitive which has a positive integer value.
*
* @typedef {integer} PositiveInteger
*/

/**
* A number primitive which has a nonpositive integer value.
*
* @typedef {integer} NonPositiveInteger
*/

/**
* A number primitive which has a negative integer value.
*
* @typedef {integer} NegativeInteger
*/

/**
* A number primitive which has a nonnegative value.
*
* @typedef {number} NonNegativeNumber
*/

/**
* A number primitive which has a positive value.
*
* @typedef {number} PositiveNumber
*/

/**
* A number primitive which has a nonpositive value.
*
* @typedef {number} NonPositiveNumber
*/

/**
* A number primitive which has a negative value.
*
* @typedef {number} NegativeNumber
*/

/**
* A typed array.
*
* @typedef {(Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array)} TypedArray
*
* @see [TypedArray]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray}
* @see [Int8Array]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array}
* @see [Uint8Array]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array}
* @see [Uint8ClampedArray]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray}
* @see [Int16Array]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array}
* @see [Uint16Array]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array}
* @see [Int32Array]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array}
* @see [Uint32Array]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array}
* @see [Float32Array]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array}
* @see [Float64Array]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array}
*/

/**
* A typed array containing only integers.
*
* @typedef {(Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array)} IntegerTypedArray
*
* @see [TypedArray]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray}
* @see [Int8Array]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array}
* @see [Uint8Array]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array}
* @see [Uint8ClampedArray]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray}
* @see [Int16Array]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array}
* @see [Uint16Array]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array}
* @see [Int32Array]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array}
* @see [Uint32Array]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array}
*/

/**
* A numeric array.
*
* @typedef {(Array<number>|TypedArray)} NumericArray
*/

/**
* A numeric array containing only integer values.
*
* @typedef {(Array<number>|IntegerTypedArray)} IntegerNumericArray
*/

/**
* A string array.
*
* @typedef {Array<string>} StringArray
*/

/**
* A function to be invoked after completing an asynchronous task.
*
* @typedef {Function} Callback
*/

/**
* A callback whose first argument is either an `Error` or `null`.
*
* @typedef {Callback} Errback
*/

/**
* An array-like object.
*
* @typedef {(Array|string|String|Object)} ArrayLike
*/

/**
* A value which is object-like. Basically, any value which is not `null` and, when operated on by `typeof`, returns `object`.
*
* @typedef {Object} ObjectLike
*/

/**
* An object which is valid JSON.
*
* @typedef {Object} JSON
*
* @see [JSON]{@link http://www.json.org/}
*/

/**
* An object containing function options.
*
* @typedef {Object} Options
*/

/**
* A string which only contains `'0'` and `'1'` characters.
*
* @typedef {string} bitstring
*/

/**
* A string which is a valid URI.
*
* @typedef {(string|String)} URI
*
* @see [URI]{@link https://en.wikipedia.org/wiki/Uniform_Resource_Identifier}
*/

/**
* A Node.js `Buffer` instance.
*
* @typedef {(Object|Uint8Array)} Buffer
*
* @see [Buffer]{@link https://nodejs.org/api/buffer.html}
*/
