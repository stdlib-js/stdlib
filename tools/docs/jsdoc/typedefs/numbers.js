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
* A 128-bit signed integer.
*
* @typedef {number} Int128
*/

/**
* A 128-bit unsigned integer.
*
* @typedef {number} Uint128
*/

/**
* A 64-bit signed integer.
*
* @typedef {number} Int64
*/

/**
* A 64-bit unsigned integer.
*
* @typedef {number} Uint64
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
* A finite number primitive; i.e., neither `NaN` or positive or negative infinity.
*
* @typedef {number} FiniteNumber
*/

/**
* A number primitive on the interval `[0,1]`.
*
* @typedef {number} Probability
*/

/**
* A 64-bit complex number, in which the real and imaginary components are each stored as single-precision floating-point numbers.
*
* @typedef {Object} Complex64
*/

/**
* A 128-bit complex number, in which the real and imaginary components are each stored as double-precision floating-point numbers.
*
* @typedef {Object} Complex128
*/

/**
* A complex number.
*
* @typedef {(Complex64|Complex128)} Complex
*/
