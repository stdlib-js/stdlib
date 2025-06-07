/**
* @license Apache-2.0
*
* Copyright (c) 2016 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
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
* A numeric array containing only positive values.
*
* @typedef {NumericArray} PositiveNumericArray
*/

/**
* A numeric array containing only negative values.
*
* @typedef {NumericArray} NegativeNumericArray
*/

/**
* A numeric array containing only non-positive values.
*
* @typedef {NumericArray} NonPositiveNumericArray
*/

/**
* A numeric array containing only non-negative values.
*
* @typedef {NumericArray} NonNegativeNumericArray
*/

/**
* A numeric array containing only integer values.
*
* @typedef {(Array<number>|IntegerTypedArray)} IntegerArray
*/

/**
* An integer array containing only positive integer values.
*
* @typedef {IntegerArray} PositiveIntegerArray
*/

/**
* An integer array containing only negative integer values.
*
* @typedef {IntegerArray} NegativeIntegerArray
*/

/**
* An integer array containing only non-positive integer values.
*
* @typedef {IntegerArray} NonPositiveIntegerArray
*/

/**
* An integer array containing only nonnegative integer values.
*
* @typedef {IntegerArray} NonNegativeIntegerArray
*/

/**
* An array containing only string primitives.
*
* @typedef {Array<string>} StringArray
*/

/**
* An array containing only boolean primitives.
*
* @typedef {Array<boolean>} BooleanArray
*/

/**
* An array containing only plain objects.
*
* @typedef {Array<Object>} ObjectArray
*/

/**
* An array containing only functions.
*
* @typedef {Array<Function>} FunctionArray
*/

/**
* An array containing only other arrays.
*
* @typedef {Array<Array>} ArrayArray
*/

/**
* An empty array.
*
* @typedef {Array} EmptyArray
*/

/**
* A numeric array in which all elements are non-negative and the sum of all elements is `1`.
*
* @typedef {NonNegativeNumericArray} ProbabilityArray
*/

/**
* A 64-bit complex number array, in which the real and imaginary components are each stored as single-precision floating-point numbers.
*
* @typedef {Complex64Array} Complex64Array
*/

/**
* A 128-bit complex number array, in which the real and imaginary components are each stored as double-precision floating-point numbers.
*
* @typedef {Complex128Array} Complex128Array
*/

/**
* A complex number array.
*
* @typedef {(Complex64Array|Complex128Array)} ComplexArray
*/
