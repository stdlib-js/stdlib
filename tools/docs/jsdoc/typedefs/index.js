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
* A half-precision floating-point number.
*
* @typedef {number} Float16
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
* A number primitive which has an integer value on the interval  `[-2147483648, 2147483647]`. This number may be interpreted by the runtime engine as a 32-bit integer, which may very well be the case after performing bitwise operations; e.g., `3.14|0`.
*
* @typedef {number} integer32
*
* @see [bitwise operators]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators}
* @see [asm.js]{@link http://asmjs.org/spec/latest/}
*/

/**
* A number primitive which has an integer value on the interval `[0, 4294967295]`.
*
* @typedef {number} uinteger32
*/

/**
* A number primitive which has an integer value on the interval `[−32768, 32767]`.
*
* @typedef {number} integer16
*/

/**
* A number primitive which has an integer value on the interval `[0, 65535]`.
*
* @typedef {number} uinteger16
*/

/**
* A number primitive which has an integer value on the interval `[-128,127]`.
*
* @typedef {number} integer8
*/

/**
* A number primitive which has an integer value on the interval `[0,255]`.
*
* @typedef {number} uinteger8
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
* An integer typed array.
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
* An array containing only number primitives.
*
* @typedef {Array<number>} NumberArray
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
* A string primitive which is a valid URI.
*
* @typedef {string} URI
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
* An object which emits events.
*
* @typedef {Object} EventEmitter
*
* @see Node.js EventEmitter [documentation]{@link https://nodejs.org/api/events.html}
*/

/**
* A stream interface for reading from a data source.
*
* @typedef {EventEmitter} ReadableStream
*
* @see Node.js stream [documentation]{@link https://nodejs.org/api/stream.html}
*/

/**
* A stream interface for writing to a destination.
*
* @typedef {EventEmitter} WritableStream
*
* @see Node.js stream [documentation]{@link https://nodejs.org/api/stream.html}
*/

/**
* A stream interface implementing both readable and writable stream interfaces.
*
* @typedef {EventEmitter} DuplexStream
*
* @see Node.js stream [documentation]{@link https://nodejs.org/api/stream.html}
*/

/**
* A duplex stream where the output is causally connected to the input.
*
* @typedef {DuplexStream} TransformStream
*
* @see Node.js stream [documentation]{@link https://nodejs.org/api/stream.html}
*/

/**
* A Node.js stream.
*
* @typedef {(ReadableStream|WritableStream|DuplexStream|TransformStream)} Stream
*
* @see Node.js stream [documentation]{@link https://nodejs.org/api/stream.html}
*/

/**
* An HTTP request object. This object provides access request status, headers, and data and implements the [Readable Stream]{@link https://nodejs.org/api/stream.html} interface.
*
* @typedef {EventEmitter} IncomingMessage
*
* @see Node.js HTTP [documentation]{@link https://nodejs.org/api/http.html}
*/

/**
* An HTTP response object. This object implements, but does not inherit from, the [Writable Stream]{@link https://nodejs.org/api/stream.html} interface.
*
* @typedef {EventEmitter} ServerResponse
*
* @see Node.js HTTP [documentation]{@link https://nodejs.org/api/http.html}
*/
