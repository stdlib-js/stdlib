/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 2.0

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import contains = require( '@stdlib/assert/contains' );
import deepEqual = require( '@stdlib/assert/deep-equal' );
import deepHasOwnProp = require( '@stdlib/assert/deep-has-own-property' );
import deepHasProp = require( '@stdlib/assert/deep-has-property' );
import hasArrayBufferSupport = require( '@stdlib/assert/has-arraybuffer-support' );
import hasAsyncAwaitSupport = require( '@stdlib/assert/has-async-await-support' );
import hasAsyncIteratorSymbolSupport = require( '@stdlib/assert/has-async-iterator-symbol-support' );
import hasBigIntSupport = require( '@stdlib/assert/has-bigint-support' );
import hasClassSupport = require( '@stdlib/assert/has-class-support' );
import hasDataViewSupport = require( '@stdlib/assert/has-dataview-support' );
import hasDefinePropertiesSupport = require( '@stdlib/assert/has-define-properties-support' );
import hasDefinePropertySupport = require( '@stdlib/assert/has-define-property-support' );
import hasFloat32ArraySupport = require( '@stdlib/assert/has-float32array-support' );
import hasFloat64ArraySupport = require( '@stdlib/assert/has-float64array-support' );
import hasFunctionNameSupport = require( '@stdlib/assert/has-function-name-support' );
import hasGeneratorSupport = require( '@stdlib/assert/has-generator-support' );
import hasGlobalThisSupport = require( '@stdlib/assert/has-globalthis-support' );
import hasInt8ArraySupport = require( '@stdlib/assert/has-int8array-support' );
import hasInt16ArraySupport = require( '@stdlib/assert/has-int16array-support' );
import hasInt32ArraySupport = require( '@stdlib/assert/has-int32array-support' );
import hasIteratorSymbolSupport = require( '@stdlib/assert/has-iterator-symbol-support' );
import hasMapSupport = require( '@stdlib/assert/has-map-support' );
import hasNodeBufferSupport = require( '@stdlib/assert/has-node-buffer-support' );
import hasOwnProp = require( '@stdlib/assert/has-own-property' );
import hasProp = require( '@stdlib/assert/has-property' );
import hasProxySupport = require( '@stdlib/assert/has-proxy-support' );
import hasSetSupport = require( '@stdlib/assert/has-set-support' );
import hasSharedArrayBufferSupport = require( '@stdlib/assert/has-sharedarraybuffer-support' );
import hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
import hasToStringTagSupport = require( '@stdlib/assert/has-tostringtag-support' );
import hasUint8ArraySupport = require( '@stdlib/assert/has-uint8array-support' );
import hasUint8ClampedArraySupport = require( '@stdlib/assert/has-uint8clampedarray-support' );
import hasUint16ArraySupport = require( '@stdlib/assert/has-uint16array-support' );
import hasUint32ArraySupport = require( '@stdlib/assert/has-uint32array-support' );
import hasUTF16SurrogatePairAt = require( '@stdlib/assert/has-utf16-surrogate-pair-at' );
import hasWebAssemblySupport = require( '@stdlib/assert/has-wasm-support' );
import hasWeakMapSupport = require( '@stdlib/assert/has-weakmap-support' );
import hasWeakSetSupport = require( '@stdlib/assert/has-weakset-support' );
import instanceOf = require( '@stdlib/assert/instance-of' );
import isAbsolutePath = require( '@stdlib/assert/is-absolute-path' );
import isAccessorProperty = require( '@stdlib/assert/is-accessor-property' );
import isAccessorPropertyIn = require( '@stdlib/assert/is-accessor-property-in' );
import isAlphagram = require( '@stdlib/assert/is-alphagram' );
import isAlphaNumeric = require( '@stdlib/assert/is-alphanumeric' );
import isAnagram = require( '@stdlib/assert/is-anagram' );
import isArguments = require( '@stdlib/assert/is-arguments' );
import isArray = require( '@stdlib/assert/is-array' );
import isArrayArray = require( '@stdlib/assert/is-array-array' );
import isArrayLength = require( '@stdlib/assert/is-array-length' );
import isArrayLike = require( '@stdlib/assert/is-array-like' );
import isArrayLikeObject = require( '@stdlib/assert/is-array-like-object' );
import isArrayBuffer = require( '@stdlib/assert/is-arraybuffer' );
import isASCII = require( '@stdlib/assert/is-ascii' );
import isBetween = require( '@stdlib/assert/is-between' );
import isBetweenArray = require( '@stdlib/assert/is-between-array' );
import IS_BIG_ENDIAN = require( '@stdlib/assert/is-big-endian' );
import isBigInt = require( '@stdlib/assert/is-bigint' );
import isBinaryString = require( '@stdlib/assert/is-binary-string' );
import isBoolean = require( '@stdlib/assert/is-boolean' );
import isBooleanArray = require( '@stdlib/assert/is-boolean-array' );
import isBoxedPrimitive = require( '@stdlib/assert/is-boxed-primitive' );
import IS_BROWSER = require( '@stdlib/assert/is-browser' );
import isBuffer = require( '@stdlib/assert/is-buffer' );
import isCapitalized = require( '@stdlib/assert/is-capitalized' );
import isCentrosymmetricMatrix = require( '@stdlib/assert/is-centrosymmetric-matrix' );
import isCircular = require( '@stdlib/assert/is-circular' );
import isCircularArray = require( '@stdlib/assert/is-circular-array' );
import isCircularPlainObject = require( '@stdlib/assert/is-circular-plain-object' );
import isCollection = require( '@stdlib/assert/is-collection' );
import isComplex = require( '@stdlib/assert/is-complex' );
import isComplexLike = require( '@stdlib/assert/is-complex-like' );
import isComplexTypedArray = require( '@stdlib/assert/is-complex-typed-array' );
import isComplexTypedArrayLike = require( '@stdlib/assert/is-complex-typed-array-like' );
import isComplex64 = require( '@stdlib/assert/is-complex64' );
import isComplex64Array = require( '@stdlib/assert/is-complex64array' );
import isComplex128 = require( '@stdlib/assert/is-complex128' );
import isComplex128Array = require( '@stdlib/assert/is-complex128array' );
import isComposite = require( '@stdlib/assert/is-composite' );
import isConfigurableProperty = require( '@stdlib/assert/is-configurable-property' );
import isConfigurablePropertyIn = require( '@stdlib/assert/is-configurable-property-in' );
import isCubeNumber = require( '@stdlib/assert/is-cube-number' );
import IS_DARWIN = require( '@stdlib/assert/is-darwin' );
import isDataProperty = require( '@stdlib/assert/is-data-property' );
import isDataPropertyIn = require( '@stdlib/assert/is-data-property-in' );
import isDataView = require( '@stdlib/assert/is-dataview' );
import isDateObject = require( '@stdlib/assert/is-date-object' );
import isDigitString = require( '@stdlib/assert/is-digit-string' );
import IS_ELECTRON = require( '@stdlib/assert/is-electron' );
import IS_ELECTRON_MAIN = require( '@stdlib/assert/is-electron-main' );
import IS_ELECTRON_RENDERER = require( '@stdlib/assert/is-electron-renderer' );
import isEmailAddress = require( '@stdlib/assert/is-email-address' );
import isEmptyArray = require( '@stdlib/assert/is-empty-array' );
import isEmptyObject = require( '@stdlib/assert/is-empty-object' );
import isEmptyString = require( '@stdlib/assert/is-empty-string' );
import isEnumerableProperty = require( '@stdlib/assert/is-enumerable-property' );
import isEnumerablePropertyIn = require( '@stdlib/assert/is-enumerable-property-in' );
import isError = require( '@stdlib/assert/is-error' );
import isEvalError = require( '@stdlib/assert/is-eval-error' );
import isEven = require( '@stdlib/assert/is-even' );
import isFalsy = require( '@stdlib/assert/is-falsy' );
import isFalsyArray = require( '@stdlib/assert/is-falsy-array' );
import isFinite = require( '@stdlib/assert/is-finite' );
import isFiniteArray = require( '@stdlib/assert/is-finite-array' );
import isFloat32Array = require( '@stdlib/assert/is-float32array' );
import isFloat32MatrixLike = require( '@stdlib/assert/is-float32matrix-like' );
import isFloat32ndarrayLike = require( '@stdlib/assert/is-float32ndarray-like' );
import isFloat32VectorLike = require( '@stdlib/assert/is-float32vector-like' );
import isFloat64Array = require( '@stdlib/assert/is-float64array' );
import isFloat64MatrixLike = require( '@stdlib/assert/is-float64matrix-like' );
import isFloat64ndarrayLike = require( '@stdlib/assert/is-float64ndarray-like' );
import isFloat64VectorLike = require( '@stdlib/assert/is-float64vector-like' );
import isFunction = require( '@stdlib/assert/is-function' );
import isFunctionArray = require( '@stdlib/assert/is-function-array' );
import isGeneratorObject = require( '@stdlib/assert/is-generator-object' );
import isGeneratorObjectLike = require( '@stdlib/assert/is-generator-object-like' );
import isgzipBuffer = require( '@stdlib/assert/is-gzip-buffer' );
import isHexString = require( '@stdlib/assert/is-hex-string' );
import isInfinite = require( '@stdlib/assert/is-infinite' );
import isInheritedProperty = require( '@stdlib/assert/is-inherited-property' );
import isInt8Array = require( '@stdlib/assert/is-int8array' );
import isInt16Array = require( '@stdlib/assert/is-int16array' );
import isInt32Array = require( '@stdlib/assert/is-int32array' );
import isInteger = require( '@stdlib/assert/is-integer' );
import isIntegerArray = require( '@stdlib/assert/is-integer-array' );
import isIterableLike = require( '@stdlib/assert/is-iterable-like' );
import isIteratorLike = require( '@stdlib/assert/is-iterator-like' );
import isJSON = require( '@stdlib/assert/is-json' );
import isLeapYear = require( '@stdlib/assert/is-leap-year' );
import IS_LITTLE_ENDIAN = require( '@stdlib/assert/is-little-endian' );
import isLowercase = require( '@stdlib/assert/is-lowercase' );
import isMatrixLike = require( '@stdlib/assert/is-matrix-like' );
import isMethod = require( '@stdlib/assert/is-method' );
import isMethodIn = require( '@stdlib/assert/is-method-in' );
import isNamedTypedTupleLike = require( '@stdlib/assert/is-named-typed-tuple-like' );
import isnan = require( '@stdlib/assert/is-nan' );
import isNaNArray = require( '@stdlib/assert/is-nan-array' );
import isNativeFunction = require( '@stdlib/assert/is-native-function' );
import isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
import isNegativeInteger = require( '@stdlib/assert/is-negative-integer' );
import isNegativeIntegerArray = require( '@stdlib/assert/is-negative-integer-array' );
import isNegativeNumber = require( '@stdlib/assert/is-negative-number' );
import isNegativeNumberArray = require( '@stdlib/assert/is-negative-number-array' );
import isNegativeZero = require( '@stdlib/assert/is-negative-zero' );
import IS_NODE = require( '@stdlib/assert/is-node' );
import isNodeBuiltin = require( '@stdlib/assert/is-node-builtin' );
import isNodeDuplexStreamLike = require( '@stdlib/assert/is-node-duplex-stream-like' );
import isNodeReadableStreamLike = require( '@stdlib/assert/is-node-readable-stream-like' );
import isNodeREPL = require( '@stdlib/assert/is-node-repl' );
import isNodeStreamLike = require( '@stdlib/assert/is-node-stream-like' );
import isNodeTransformStreamLike = require( '@stdlib/assert/is-node-transform-stream-like' );
import isNodeWritableStreamLike = require( '@stdlib/assert/is-node-writable-stream-like' );
import isNonConfigurableProperty = require( '@stdlib/assert/is-nonconfigurable-property' );
import isNonConfigurablePropertyIn = require( '@stdlib/assert/is-nonconfigurable-property-in' );
import isNonEnumerableProperty = require( '@stdlib/assert/is-nonenumerable-property' );
import isNonEnumerablePropertyIn = require( '@stdlib/assert/is-nonenumerable-property-in' );
import isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' );
import isNonNegativeIntegerArray = require( '@stdlib/assert/is-nonnegative-integer-array' );
import isNonNegativeNumber = require( '@stdlib/assert/is-nonnegative-number' );
import isNonNegativeNumberArray = require( '@stdlib/assert/is-nonnegative-number-array' );
import isNonPositiveInteger = require( '@stdlib/assert/is-nonpositive-integer' );
import isNonPositiveIntegerArray = require( '@stdlib/assert/is-nonpositive-integer-array' );
import isNonPositiveNumber = require( '@stdlib/assert/is-nonpositive-number' );
import isNonPositiveNumberArray = require( '@stdlib/assert/is-nonpositive-number-array' );
import isNonSymmetricMatrix = require( '@stdlib/assert/is-nonsymmetric-matrix' );
import isNull = require( '@stdlib/assert/is-null' );
import isNullArray = require( '@stdlib/assert/is-null-array' );
import isNumber = require( '@stdlib/assert/is-number' );
import isNumberArray = require( '@stdlib/assert/is-number-array' );
import isNumericArray = require( '@stdlib/assert/is-numeric-array' );
import isObject = require( '@stdlib/assert/is-object' );
import isObjectArray = require( '@stdlib/assert/is-object-array' );
import isObjectLike = require( '@stdlib/assert/is-object-like' );
import isOdd = require( '@stdlib/assert/is-odd' );
import isPersymmetricMatrix = require( '@stdlib/assert/is-persymmetric-matrix' );
import isPlainObject = require( '@stdlib/assert/is-plain-object' );
import isPlainObjectArray = require( '@stdlib/assert/is-plain-object-array' );
import isPositiveInteger = require( '@stdlib/assert/is-positive-integer' );
import isPositiveIntegerArray = require( '@stdlib/assert/is-positive-integer-array' );
import isPositiveNumber = require( '@stdlib/assert/is-positive-number' );
import isPositiveNumberArray = require( '@stdlib/assert/is-positive-number-array' );
import isPositiveZero = require( '@stdlib/assert/is-positive-zero' );
import isPrime = require( '@stdlib/assert/is-prime' );
import isPrimitive = require( '@stdlib/assert/is-primitive' );
import isPrimitiveArray = require( '@stdlib/assert/is-primitive-array' );
import isPRNGLike = require( '@stdlib/assert/is-prng-like' );
import isProbability = require( '@stdlib/assert/is-probability' );
import isProbabilityArray = require( '@stdlib/assert/is-probability-array' );
import isPrototypeOf = require( '@stdlib/assert/is-prototype-of' );
import isRangeError = require( '@stdlib/assert/is-range-error' );
import isReadOnlyProperty = require( '@stdlib/assert/is-read-only-property' );
import isReadOnlyPropertyIn = require( '@stdlib/assert/is-read-only-property-in' );
import isReadWriteProperty = require( '@stdlib/assert/is-read-write-property' );
import isReadWritePropertyIn = require( '@stdlib/assert/is-read-write-property-in' );
import isReadableProperty = require( '@stdlib/assert/is-readable-property' );
import isReadablePropertyIn = require( '@stdlib/assert/is-readable-property-in' );
import isReferenceError = require( '@stdlib/assert/is-reference-error' );
import isRegExp = require( '@stdlib/assert/is-regexp' );
import isRegExpString = require( '@stdlib/assert/is-regexp-string' );
import isRelativePath = require( '@stdlib/assert/is-relative-path' );
import isSafeInteger = require( '@stdlib/assert/is-safe-integer' );
import isSafeIntegerArray = require( '@stdlib/assert/is-safe-integer-array' );
import isSameValue = require( '@stdlib/assert/is-same-value' );
import isSameValueZero = require( '@stdlib/assert/is-same-value-zero' );
import isSharedArrayBuffer = require( '@stdlib/assert/is-sharedarraybuffer' );
import isSkewCentrosymmetricMatrix = require( '@stdlib/assert/is-skew-centrosymmetric-matrix' );
import isSkewPersymmetricMatrix = require( '@stdlib/assert/is-skew-persymmetric-matrix' );
import isSkewSymmetricMatrix = require( '@stdlib/assert/is-skew-symmetric-matrix' );
import isSquareMatrix = require( '@stdlib/assert/is-square-matrix' );
import isSquareNumber = require( '@stdlib/assert/is-square-number' );
import isSquareTriangularNumber = require( '@stdlib/assert/is-square-triangular-number' );
import isStrictEqual = require( '@stdlib/assert/is-strict-equal' );
import isString = require( '@stdlib/assert/is-string' );
import isStringArray = require( '@stdlib/assert/is-string-array' );
import isSymbol = require( '@stdlib/assert/is-symbol' );
import isSymbolArray = require( '@stdlib/assert/is-symbol-array' );
import isSymmetricMatrix = require( '@stdlib/assert/is-symmetric-matrix' );
import isSyntaxError = require( '@stdlib/assert/is-syntax-error' );
import isTriangularNumber = require( '@stdlib/assert/is-triangular-number' );
import isTruthy = require( '@stdlib/assert/is-truthy' );
import isTruthyArray = require( '@stdlib/assert/is-truthy-array' );
import isTypeError = require( '@stdlib/assert/is-type-error' );
import isTypedArray = require( '@stdlib/assert/is-typed-array' );
import isTypedArrayLength = require( '@stdlib/assert/is-typed-array-length' );
import isTypedArrayLike = require( '@stdlib/assert/is-typed-array-like' );
import isUint8Array = require( '@stdlib/assert/is-uint8array' );
import isUint8ClampedArray = require( '@stdlib/assert/is-uint8clampedarray' );
import isUint16Array = require( '@stdlib/assert/is-uint16array' );
import isUint32Array = require( '@stdlib/assert/is-uint32array' );
import isUNCPath = require( '@stdlib/assert/is-unc-path' );
import isUndefined = require( '@stdlib/assert/is-undefined' );
import isUndefinedOrNull = require( '@stdlib/assert/is-undefined-or-null' );
import isUnityProbabilityArray = require( '@stdlib/assert/is-unity-probability-array' );
import isUppercase = require( '@stdlib/assert/is-uppercase' );
import isURI = require( '@stdlib/assert/is-uri' );
import isURIError = require( '@stdlib/assert/is-uri-error' );
import isVectorLike = require( '@stdlib/assert/is-vector-like' );
import IS_WEB_WORKER = require( '@stdlib/assert/is-web-worker' );
import isWhitespace = require( '@stdlib/assert/is-whitespace' );
import IS_WINDOWS = require( '@stdlib/assert/is-windows' );
import isWritableProperty = require( '@stdlib/assert/is-writable-property' );
import isWritablePropertyIn = require( '@stdlib/assert/is-writable-property-in' );
import isWriteOnlyProperty = require( '@stdlib/assert/is-write-only-property' );
import isWriteOnlyPropertyIn = require( '@stdlib/assert/is-write-only-property-in' );

/**
* Interface describing the `assert` namespace.
*/
interface Namespace {
	/**
	* Tests if an array-like value contains a search value.
	*
	* ## Notes
	*
	* -   When `val` is a string, the function checks whether the characters of the search string are found in the input string. The search is case-sensitive.
	* -   When `val` is an array-like object, the function checks whether the input array contains an element strictly equal to the specified search value.
	* -   For strings, this function is modeled after `String.prototype.includes`, part of the ECMAScript 6 specification. This function is different from a call to `String.prototype.includes.call` insofar as type-checking is performed for all arguments.
	* -   The function does not distinguish between positive and negative zero.
	* -   If `position < 0`, the search is performed for the entire input array or string.
	*
	* @param val - input value
	* @param searchValue - search value
	* @param position - position at which to start searching for `searchValue` (default: 0)
	* @throws second argument must be a primitive string primitive when the first argument is a string
	* @returns boolean indicating whether one value contains another
	*
	* @example
	* var bool = ns.contains( 'last man standing', 'stand' );
	* // returns true
	*
	* @example
	* var bool = ns.contains( [ 1, 2, 3, 4 ], 2 );
	* // returns true
	*
	* @example
	* var bool = ns.contains( 'presidential election', 'president' );
	* // returns true
	*
	* @example
	* var bool = ns.contains( [ NaN, 2, 3, 4 ], NaN );
	* // returns true
	*
	* @example
	* var bool = ns.contains( 'javaScript', 'js' );
	* // returns false
	*
	* @example
	* var bool = ns.contains( [ 1, 2, 3, {} ], {} );
	* // returns false
	*
	* @example
	* var bool = ns.contains( 'Hidden Treasures', '' );
	* // returns true
	*/
	contains: typeof contains;

	/**
	* Tests for deep equality between two values.
	*
	* @param a - first comparison value
	* @param b - second comparison value
	* @returns boolean indicating if `a` is deep equal to `b`
	*
	* @example
	* var bool = ns.deepEqual( [ 1, 2, 3 ], [ 1, 2, 3 ] );
	* // returns true
	*
	* @example
	* var bool = ns.deepEqual( [ 1, 2, 3 ], [ 1, 2, '3' ] );
	* // returns false
	*
	* @example
	* var bool = ns.deepEqual( { 'a': 2 }, { 'a': [ 2 ] } );
	* // returns false
	*
	* @example
	* var bool = ns.deepEqual( [], {} );
	* // returns false
	*
	* @example
	* var bool = ns.deepEqual( null, null );
	* // returns true
	*/
	deepEqual: typeof deepEqual;

	/**
	* Tests whether an object contains a nested key path.
	*
	* @param value - value to test
	* @param path - key path
	* @param options - function options
	* @param options.sep - key path separator (default: '.')
	* @throws must provide valid options
	* @returns boolean indicating whether an object has a nested property
	*
	* @example
	* var obj = { 'a': { 'b': { 'c': 'd' } } };
	* var bool = ns.deepHasOwnProp( obj, 'a.b.c' );
	* // returns true
	*
	* @example
	* var arr = [
	*     {
	*         'a': [
	*             {
	*                 'b': [
	*                     { 'c': 'd' },
	*                     { 'e': 'f' }
	*                 ]
	*             }
	*         ]
	*     }
	* ];
	* var bool = ns.deepHasOwnProp( arr, '0.a.0.b.0.c' );
	* // returns true
	*
	* @example
	* var obj = { 'a': { 'b': { 'c': 'd' } } };
	* var bool = ns.deepHasOwnProp( obj, [ 'a', 'b', 'c' ] );
	* // returns true
	*
	* @example
	* var obj = { 'a': { 'b': { 'c': 'd' } } };
	* var bool = ns.deepHasOwnProp( obj, 'a/b/c', {
	*     'sep': '/'
	* });
	* // returns true
	*
	* @example
	* var obj = { 'a': { 'b': { 'c': 'd' } } };
	* var has = ns.deepHasOwnProp.factory( 'a/b/c', {
	*     'sep': '/'
	* });
	* var bool = has( obj );
	* // returns true
	*/
	deepHasOwnProp: typeof deepHasOwnProp;

	/**
	* Tests whether an object contains a nested key path, either own or inherited.
	*
	* @param value - value to test
	* @param path - key path
	* @param options - function options
	* @param options.sep - key path separator (default: '.')
	* @throws must provide valid options
	* @returns boolean indicating whether an object has a nested property
	*
	* @example
	* function Foo() {
	*     return this;
	* }
	* Foo.prototype.b = {
	*     'c': 'd'
	* };
	*
	* var obj = {
	*     'a': new Foo()
	* };
	*
	* var bool = ns.deepHasProp( obj, 'a.b.c' );
	* // returns true
	*
	* @example
	* var arr = [
	*     {
	*         'a': [
	*             {
	*                 'b': [
	*                     { 'c': 'd' },
	*                     { 'e': 'f' }
	*                 ]
	*             }
	*         ]
	*     }
	* ];
	* var bool = ns.deepHasProp( arr, '0.a.0.b.0.c' );
	* // returns true
	*
	* @example
	* var obj = { 'a': { 'b': { 'c': 'd' } } };
	* var bool = ns.deepHasProp( obj, [ 'a', 'b', 'c' ] );
	* // returns true
	*
	* @example
	* var obj = { 'a': { 'b': { 'c': 'd' } } };
	* var bool = ns.deepHasProp( obj, 'a/b/c', {
	*     'sep': '/'
	* });
	* // returns true
	*/
	deepHasProp: typeof deepHasProp;

	/**
	* Tests for native `ArrayBuffer` support.
	*
	* @returns boolean indicating if an environment has `ArrayBuffer` support
	*
	* @example
	* var bool = ns.hasArrayBufferSupport();
	* // returns <boolean>
	*/
	hasArrayBufferSupport: typeof hasArrayBufferSupport;

	/**
	* Tests for native `async/await` support.
	*
	* @returns boolean indicating if an environment has native `async`/`await` support
	*
	* @example
	* var bool = ns.hasAsyncAwaitSupport();
	* if ( bool ) {
	*     console.log( 'Environment has native async/await support.' );
	* } else {
	*     console.log( 'Environment lacks native async/await support.' );
	* }
	*/
	hasAsyncAwaitSupport: typeof hasAsyncAwaitSupport;

	/**
	* Tests for native `Symbol.asyncIterator` support.
	*
	* @returns boolean indicating if an environment has `Symbol.asyncIterator` support
	*
	* @example
	* var bool = ns.hasAsyncIteratorSymbolSupport();
	* // returns <boolean>
	*/
	hasAsyncIteratorSymbolSupport: typeof hasAsyncIteratorSymbolSupport;

	/**
	* Tests for native `BigInt` support.
	*
	* @returns boolean indicating if an environment has `BigInt` support
	*
	* @example
	* var bool = ns.hasBigIntSupport();
	* // returns <boolean>
	*/
	hasBigIntSupport: typeof hasBigIntSupport;

	/**
	* Tests for native `class` support.
	*
	* @returns boolean indicating if an environment has native `class` support
	*
	* @example
	* var bool = ns.hasClassSupport();
	* if ( bool ) {
	*     console.log( 'Environment has native class support.' );
	* } else {
	*     console.log( 'Environment lacks native class support.' );
	* }
	*/
	hasClassSupport: typeof hasClassSupport;

	/**
	* Tests for native `DataView` support.
	*
	* @returns boolean indicating if an environment has `DataView` support
	*
	* @example
	* var bool = ns.hasDataViewSupport();
	* // returns <boolean>
	*/
	hasDataViewSupport: typeof hasDataViewSupport;

	/**
	* Tests for `Object.defineProperties` support.
	*
	* @returns boolean indicating if an environment has `Object.defineProperties` support
	*
	* @example
	* var bool = ns.hasDefinePropertiesSupport();
	* // returns <boolean>
	*/
	hasDefinePropertiesSupport: typeof hasDefinePropertiesSupport;

	/**
	* Tests for `Object.defineProperty` support.
	*
	* @returns boolean indicating if an environment has `Object.defineProperty` support
	*
	* @example
	* var bool = ns.hasDefinePropertySupport();
	* // returns <boolean>
	*/
	hasDefinePropertySupport: typeof hasDefinePropertySupport;

	/**
	* Tests for native `Float32Array` support.
	*
	* @returns boolean indicating if an environment has `Float32Array` support
	*
	* @example
	* var bool = ns.hasFloat32ArraySupport();
	* // returns <boolean>
	*/
	hasFloat32ArraySupport: typeof hasFloat32ArraySupport;

	/**
	* Tests for native `Float64Array` support.
	*
	* @returns boolean indicating if an environment has `Float64Array` support
	*
	* @example
	* var bool = ns.hasFloat64ArraySupport();
	* // returns <boolean>
	*/
	hasFloat64ArraySupport: typeof hasFloat64ArraySupport;

	/**
	* Tests for native function `name` support.
	*
	* @returns boolean indicating if an environment has function `name` support
	*
	* @example
	* var bool = ns.hasFunctionNameSupport();
	* // returns <boolean>
	*/
	hasFunctionNameSupport: typeof hasFunctionNameSupport;

	/**
	* Tests for native `function*()` support.
	*
	* @returns boolean indicating if an environment has native `function*()` support
	*
	* @example
	* var bool = ns.hasGeneratorSupport();
	* // returns <boolean>
	*/
	hasGeneratorSupport: typeof hasGeneratorSupport;

	/**
	* Tests for `globalThis` support.
	*
	* @returns boolean indicating if an environment has `globalThis` support
	*
	* @example
	* var bool = ns.hasGlobalThisSupport();
	* // returns <boolean>
	*/
	hasGlobalThisSupport: typeof hasGlobalThisSupport;

	/**
	* Tests for native `Int8Array` support.
	*
	* @returns boolean indicating if an environment has `Int8Array` support
	*
	* @example
	* var bool = ns.hasInt8ArraySupport();
	* // returns <boolean>
	*/
	hasInt8ArraySupport: typeof hasInt8ArraySupport;

	/**
	* Tests for native `Int16Array` support.
	*
	* @returns boolean indicating if an environment has `Int16Array` support
	*
	* @example
	* var bool = ns.hasInt16ArraySupport();
	* // returns <boolean>
	*/
	hasInt16ArraySupport: typeof hasInt16ArraySupport;

	/**
	* Tests for native `Int32Array` support.
	*
	* @returns boolean indicating if an environment has `Int32Array` support
	*
	* @example
	* var bool = ns.hasInt32ArraySupport();
	* // returns <boolean>
	*/
	hasInt32ArraySupport: typeof hasInt32ArraySupport;

	/**
	* Tests for native `Symbol.iterator` support.
	*
	* @returns boolean indicating if an environment has `Symbol.iterator` support
	*
	* @example
	* var bool = ns.hasIteratorSymbolSupport();
	* // returns <boolean>
	*/
	hasIteratorSymbolSupport: typeof hasIteratorSymbolSupport;

	/**
	* Tests for native `Map` support.
	*
	* @returns boolean indicating if an environment has `Map` support
	*
	* @example
	* var bool = ns.hasMapSupport();
	* // returns <boolean>
	*/
	hasMapSupport: typeof hasMapSupport;

	/**
	* Tests for native `Buffer` support.
	*
	* @returns boolean indicating if an environment has `Buffer` support
	*
	* @example
	* var bool = ns.hasNodeBufferSupport();
	* // returns <boolean>
	*/
	hasNodeBufferSupport: typeof hasNodeBufferSupport;

	/**
	* Tests if an object has a specified property.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object has a specified property
	*
	* @example
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = ns.hasOwnProp( beep, 'boop' );
	* // returns true
	*
	* @example
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = ns.hasOwnProp( beep, 'bap' );
	* // returns false
	*/
	hasOwnProp: typeof hasOwnProp;

	/**
	* Tests if an object has a specified property, either own or inherited.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object has a specified property
	*
	* @example
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = ns.hasProp( beep, 'boop' );
	* // returns true
	*
	* @example
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = ns.hasProp( beep, 'bap' );
	* // returns false
	*/
	hasProp: typeof hasProp;

	/**
	* Tests for native `Proxy` support.
	*
	* @returns boolean indicating if an environment has native `Proxy` support
	*
	* @example
	* var bool = ns.hasProxySupport();
	* // returns <boolean>
	*/
	hasProxySupport: typeof hasProxySupport;

	/**
	* Tests for native `Set` support.
	*
	* @returns boolean indicating if an environment has `Set` support
	*
	* @example
	* var bool = ns.hasSetSupport();
	* // returns <boolean>
	*/
	hasSetSupport: typeof hasSetSupport;

	/**
	* Tests for native `SharedArrayBuffer` support.
	*
	* @returns boolean indicating if an environment has `SharedArrayBuffer` support
	*
	* @example
	* var bool = ns.hasSharedArrayBufferSupport();
	* // returns <boolean>
	*/
	hasSharedArrayBufferSupport: typeof hasSharedArrayBufferSupport;

	/**
	* Tests for native `Symbol` support.
	*
	* @returns boolean indicating if an environment has `Symbol` support
	*
	* @example
	* var bool = ns.hasSymbolSupport();
	* // returns <boolean>
	*/
	hasSymbolSupport: typeof hasSymbolSupport;

	/**
	* Tests for native `toStringTag` support.
	*
	* @returns boolean indicating if an environment has `toStringTag` support
	*
	* @example
	* var bool = ns.hasToStringTagSupport();
	* // returns <boolean>
	*/
	hasToStringTagSupport: typeof hasToStringTagSupport;

	/**
	* Tests for native `Uint8Array` support.
	*
	* @returns boolean indicating if an environment has `Uint8Array` support
	*
	* @example
	* var bool = ns.hasUint8ArraySupport();
	* // returns <boolean>
	*/
	hasUint8ArraySupport: typeof hasUint8ArraySupport;

	/**
	* Tests for native `Uint8ClampedArray` support.
	*
	* @returns boolean indicating if an environment has `Uint8ClampedArray` support
	*
	* @example
	* var bool = ns.hasUint8ClampedArraySupport();
	* // returns <boolean>
	*/
	hasUint8ClampedArraySupport: typeof hasUint8ClampedArraySupport;

	/**
	* Tests for native `Uint16Array` support.
	*
	* @returns boolean indicating if an environment has `Uint16Array` support
	*
	* @example
	* var bool = ns.hasUint16ArraySupport();
	* // returns <boolean>
	*/
	hasUint16ArraySupport: typeof hasUint16ArraySupport;

	/**
	* Tests for native `Uint32Array` support.
	*
	* @returns boolean indicating if an environment has `Uint32Array` support
	*
	* @example
	* var bool = ns.hasUint32ArraySupport();
	* // returns <boolean>
	*/
	hasUint32ArraySupport: typeof hasUint32ArraySupport;

	/**
	* Tests if a position in a string marks the start of a UTF-16 surrogate pair.
	*
	* @param str - input string
	* @param pos - position
	* @throws first argument must be a string
	* @throws second argument must be a nonnegative integer
	* @throws position must be a valid index in string
	* @returns boolean indicating if a position in a string marks the start of a UTF-16 surrogate pair
	*
	* @example
	* var bool = ns.hasUTF16SurrogatePairAt( '🌷', 0 );
	* // returns true
	*
	* @example
	* var bool = ns.hasUTF16SurrogatePairAt( '🌷', 1 );
	* // returns false
	*/
	hasUTF16SurrogatePairAt: typeof hasUTF16SurrogatePairAt;

	/**
	* Tests for native WebAssembly support.
	*
	* @returns boolean indicating if an environment has native WebAssembly support
	*
	* @example
	* var bool = ns.hasWebAssemblySupport();
	* // returns <boolean>
	*/
	hasWebAssemblySupport: typeof hasWebAssemblySupport;

	/**
	* Tests for native `WeakMap` support.
	*
	* @returns boolean indicating if an environment has `WeakMap` support
	*
	* @example
	* var bool = ns.hasWeakMapSupport();
	* // returns <boolean>
	*/
	hasWeakMapSupport: typeof hasWeakMapSupport;

	/**
	* Tests for native `WeakSet` support.
	*
	* @returns boolean indicating if an environment has `WeakSet` support
	*
	* @example
	* var bool = ns.hasWeakSetSupport();
	* // returns <boolean>
	*/
	hasWeakSetSupport: typeof hasWeakSetSupport;

	/**
	* Tests whether a value has in its prototype chain a specified constructor as a prototype property.
	*
	* @param value - value to test
	* @param constructor - constructor to test against
	* @throws constructor must be callable
	* @returns boolean indicating whether a value is an instance of a provided constructor
	*
	* @example
	* var bool = ns.instanceOf( [], Array );
	* // returns true
	*
	* @example
	* var bool = ns.instanceOf( {}, Object ); // exception
	* // returns true
	*
	* @example
	* var bool = ns.instanceOf( 'beep', String );
	* // returns false
	*
	* @example
	* var bool = ns.instanceOf( null, Object );
	* // returns false
	*
	* @example
	* var bool = ns.instanceOf( 5, Object );
	* // returns false
	*/
	instanceOf: typeof instanceOf;

	/**
	* Tests if a value is an absolute path.
	*
	* ## Notes
	*
	* -   Function behavior is platform-specific. On Windows platforms, the function is equal to `.win32()`. On POSIX platforms, the function is equal to `.posix()`.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an absolute path
	*
	* @example
	* var IS_WINDOWS = require( `@stdlib/assert/is-windows` );
	* var bool;
	* if ( IS_WINDOWS ) {
	*     bool = ns.isAbsolutePath( 'C:\\foo\\bar\\baz' );
	*     // returns true
	* } else {
	*     bool = ns.isAbsolutePath( '/foo/bar/baz' );
	*     // returns true
	* }
	*
	* @example
	* var bool = ns.isAbsolutePath.posix( '/foo/bar/baz' );
	* // returns true
	*
	* @example
	* var bool = ns.isAbsolutePath.posix( 'foo/bar/baz' );
	* // returns false
	*
	* @example
	* var bool = ns.isAbsolutePath.win32( 'C:\\foo\\bar\\baz' );
	* // returns true
	*
	* @example
	* var bool = ns.isAbsolutePath.win32( 'foo\\bar\\baz' );
	* // returns false
	*/
	isAbsolutePath: typeof isAbsolutePath;

	/**
	* Tests if an object's own property has an accessor descriptor.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object property has an accessor descriptor
	*
	* @example
	* var defineProperty = require( `@stdlib/utils/define-property` );
	*
	* var obj = {
	*     'boop': true
	* };
	*
	* function getter() {
	*     return 'beep';
	* }
	*
	* defineProperty( obj, 'beep', {
	*     'configurable': false,
	*     'enumerable': false,
	*     'get': getter
	* });
	*
	* var bool = ns.isAccessorProperty( obj, 'boop' );
	* // returns false
	*
	* bool = ns.isAccessorProperty( obj, 'beep' );
	* // returns true
	*/
	isAccessorProperty: typeof isAccessorProperty;

	/**
	* Tests if an object's own or inherited property has an accessor descriptor.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object property has an accessor descriptor
	*
	* @example
	* var defineProperty = require( `@stdlib/utils/define-property` );
	*
	* var obj = {
	*     'boop': true
	* };
	*
	* function getter() {
	*     return 'beep';
	* }
	*
	* defineProperty( obj, 'beep', {
	*     'configurable': false,
	*     'enumerable': false,
	*     'get': getter
	* });
	*
	* var bool = ns.isAccessorPropertyIn( obj, 'boop' );
	* // returns false
	*
	* bool = ns.isAccessorPropertyIn( obj, 'beep' );
	* // returns true
	*/
	isAccessorPropertyIn: typeof isAccessorPropertyIn;

	/**
	* Tests if a value is an alphagram (i.e., a sequence of characters arranged in alphabetical order).
	*
	* ## Notes
	*
	* -   The function first checks that an input value is a string before validating that the value is an alphagram. For non-string values, the function returns `false`.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is an alphagram
	*
	* @example
	* var out = ns.isAlphagram( 'beep' );
	* // returns true
	*
	* @example
	* var out = ns.isAlphagram( new String( 'beep' ) );
	* // returns true
	*
	* @example
	* var out = ns.isAlphagram( 'zba' );
	* // returns false
	*
	* @example
	* var out = ns.isAlphagram( '' );
	* // returns false
	*
	* @example
	* var out = ns.isAlphagram( 123 );
	* // returns false
	*/
	isAlphagram: typeof isAlphagram;

	/**
	* Tests whether a string contains only alphanumeric characters.
	*
	* @param value - value to test
	* @returns boolean indicating if a string contains only alphanumeric characters
	*
	* @example
	* var out = ns.isAlphaNumeric( 'abc123def456' );
	* // returns true
	*
	* @example
	* var out = ns.isAlphaNumeric( '0xffffff' );
	* // returns true
	*
	* @example
	* var out = ns.isAlphaNumeric( '123' );
	* // returns true
	*
	* @example
	* var out = ns.isAlphaNumeric( '' );
	* // returns false
	*
	* @example
	* var out = ns.isAlphaNumeric( 123 );
	* // returns false
	*/
	isAlphaNumeric: typeof isAlphaNumeric;

	/**
	* Tests if a value is an anagram.
	*
	* @param str - comparison string
	* @param x - value to test
	* @returns boolean indicating if a value is an anagram
	*
	* @example
	* var bool = ns.isAnagram( 'I am a weakish speller', 'William Shakespeare' );
	* // returns true
	*
	* @example
	* var bool = ns.isAnagram( 'bat', 'tabba' );
	* // returns false
	*/
	isAnagram: typeof isAnagram;

	/**
	* Tests whether a value is an `arguments` object.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is an `arguments` object
	*
	* @example
	* function foo() {
	*     return arguments;
	* }
	*
	* var bool = ns.isArguments( foo() );
	* // returns true
	*
	* @example
	* var bool = ns.isArguments( [] );
	* // returns false
	*/
	isArguments: typeof isArguments;

	/**
	* Tests if a value is an array.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array
	*
	* @example
	* var bool = ns.isArray( [] );
	* // returns true
	*
	* @example
	* var bool = ns.isArray( {} );
	* // returns false
	*/
	isArray: typeof isArray;

	/**
	* Tests if a value is an array of arrays.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is an array of arrays
	*
	* @example
	* var bool = ns.isArrayArray( [ [], [] ] );
	* // returns true
	*
	* bool = ns.isArrayArray( [ {}, {} ] );
	* // returns false
	*
	* bool = ns.isArrayArray( [] );
	* // returns false
	*/
	isArrayArray: typeof isArrayArray;

	/**
	* Tests if a value is a valid array length.
	*
	* ## Notes
	*
	* -   A valid length property for an Array instance is any integer value on the interval `[0, 2^32-1]`.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a valid array length
	*
	* @example
	* var bool = ns.isArrayLength( 3 );
	* // returns true
	*
	* @example
	* var bool = ns.isArrayLength( 3.14 );
	* // returns false
	*/
	isArrayLength: typeof isArrayLength;

	/**
	* Tests if a value is array-like.
	*
	* ## Notes
	*
	* -   If provided a string, the function returns `true`.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is array-like
	*
	* @example
	* var bool = ns.isArrayLike( [] );
	* // returns true
	*
	* @example
	* var bool = ns.isArrayLike( {'length':10} );
	* // returns true
	*/
	isArrayLike: typeof isArrayLike;

	/**
	* Tests if a value is an array-like object.
	*
	* ## Notes
	*
	* -   If provided a string, the function returns `false`.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is an array-like object
	*
	* @example
	* var bool = ns.isArrayLikeObjectObject( [] );
	* // returns true
	*
	* @example
	* var bool = ns.isArrayLikeObjectObject( { 'length':10 } );
	* // returns true
	*
	* @example
	* var bool = ns.isArrayLikeObjectObject( 'beep' );
	* // returns false
	*/
	isArrayLikeObject: typeof isArrayLikeObject;

	/**
	* Tests if a value is an ArrayBuffer.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an ArrayBuffer
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	*
	* var bool = ns.isArrayBuffer( new ArrayBuffer( 10 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isArrayBuffer( [] );
	* // returns false
	*/
	isArrayBuffer: typeof isArrayBuffer;

	/**
	* Tests whether a character belongs to the ASCII character set and whether this is true for all characters in a provided string.
	*
	* @param value - value to test
	* @returns boolean indicating if a string has all ASCII characters
	*
	* @example
	* var out = ns.isASCII( 'beep' );
	* // returns true
	*
	* @example
	* var out = ns.isASCII( 'È' );
	* // returns false
	*
	* @example
	* var out = ns.isASCII( '' );
	* // returns false
	*
	* @example
	* var out = ns.isASCII( 123 );
	* // returns false
	*/
	isASCII: typeof isASCII;

	/**
	* Tests if a value is between two values.
	*
	* @param value - value to test
	* @param a - left comparison value
	* @param b - right comparison value
	* @param left - indicates whether the left comparison value is inclusive (default: 'closed')
	* @param right - indicates whether the right comparison value is inclusive (default: 'closed')
	* @returns boolean indicating whether a value is between two values
	*
	* @example
	* var bool = ns.isBetween( 3.14, 3.0, 4.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isBetween( 4.5, 3.0, 4.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isBetween( 3.14, 3.14, 4.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isBetween( 3.14, 3.14, 4.0, 'open', 'closed' );
	* // returns false
	*
	* @example
	* var bool = ns.isBetween( 3.14, 3.0, 3.14 );
	* // returns true
	*
	* @example
	* var bool = ns.isBetween( 3.14, 3.0, 3.14, 'closed', 'open' );
	* // returns false
	*/
	isBetween: typeof isBetween;

	/**
	* Tests if a value is an array-like object where every element is between two values.
	*
	* @param value - value to test
	* @param a - left comparison value
	* @param b - right comparison value
	* @param left - indicates whether the left comparison value is inclusive (default: 'closed')
	* @param right - indicates whether the right comparison value is inclusive (default: 'closed')
	* @returns boolean indicating whether a value is an array-like object where every element is between two values
	*
	* @example
	* var arr = [ 3.0, 3.14, 4.0 ];
	* var bool = ns.isBetweenArray( arr, 3.0, 4.0 );
	* // returns true
	*
	* @example
	* var arr = [ 3.0, 3.14, 4.0 ];
	* var bool = ns.isBetweenArray( arr, 3.14, 4.0 );
	* // returns false
	*
	* @example
	* var arr = [ 3.0, 3.14, 4.0 ];
	* var bool = ns.isBetweenArray( arr, 3.0, 3.14 );
	* // returns false
	*
	* @example
	* var arr = [ 3.0, 3.14, 4.0 ];
	* var bool = ns.isBetweenArray( arr, 3.0, 4.0, 'open', 'closed' );
	* // returns false
	*
	* @example
	* var arr = [ 3.0, 3.14, 4.0 ];
	* var bool = ns.isBetweenArray( arr, 3.0, 4.0, 'closed', 'open' );
	* // returns false
	*/
	isBetweenArray: typeof isBetweenArray;

	/**
	* Boolean indicating if the environment is big endian.
	*
	* @example
	* var bool = ns.IS_BIG_ENDIAN;
	* // returns <boolean>
	*/
	IS_BIG_ENDIAN: typeof IS_BIG_ENDIAN;

	/**
	* Tests if a value is a BigInt.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a BigInt
	*
	* @example
	* var BigInt = require( `@stdlib/bigint/ctor` );
	*
	* var bool = ns.isBigInt.isPrimitive( BigInt( '1' ) );
	* // returns true
	*
	* @example
	* var BigInt = require( `@stdlib/bigint/ctor` );
	*
	* var bool = ns.isBigInt.isPrimitive( Object( BigInt( '1' ) ) );
	* // returns false
	*
	* @example
	* var BigInt = require( `@stdlib/bigint/ctor` );
	*
	* var bool = ns.isBigInt.isPrimitive( BigInt( '1' ) );
	* // returns true
	*
	* @example
	* var BigInt = require( `@stdlib/bigint/ctor` );
	*
	* var bool = ns.isBigInt.isPrimitive( Object( BigInt( '1' ) ) );
	* // returns false
	*
	* @example
	* var BigInt = require( `@stdlib/bigint/ctor` );
	*
	* var bool = ns.isBigInt.isObject( BigInt( '1' ) );
	* // returns false
	*
	* @example
	* var BigInt = require( `@stdlib/bigint/ctor` );
	*
	* var bool = ns.isBigInt.isObject( Object( BigInt( '1' ) ) );
	* // returns true
	*/
	isBigInt: typeof isBigInt;

	/**
	* Tests if a value is a binary string.
	*
	* @param value - value to test
	* @returns boolean indicating if an input value is a binary string
	*
	* @example
	* var bool = ns.isBinaryString( '1000101' );
	* // returns true
	*
	* @example
	* var bool = ns.isBinaryString( 'beep' );
	* // returns false
	*
	* @example
	* var bool = ns.isBinaryString( '' );
	* // returns false
	*/
	isBinaryString: typeof isBinaryString;

	/**
	* Tests if a value is a boolean.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a boolean
	*
	* @example
	* var bool = ns.isBoolean( false );
	* // returns true
	*
	* @example
	* var bool = ns.isBoolean( true );
	* // returns true
	*
	* @example
	* var bool = ns.isBoolean.isPrimitive( new Boolean( true ) );
	* // returns false
	*
	* @example
	* var bool = ns.isBoolean.isObject( new Boolean( false ) );
	* // returns true
	*/
	isBoolean: typeof isBoolean;

	/**
	* Tests if a value is an array-like object of booleans.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object of booleans
	*
	* @example
	* var bool = ns.isBooleanArray( [ true, false, true ] );
	* // returns true
	*
	* @example
	* var bool = ns.isBooleanArray( [ true, 'abc', false ] );
	* // returns false
	*
	* @example
	* var bool = ns.isBooleanArray.primitives( [ true, false ] );
	* // returns true
	*
	* @example
	* var bool = ns.isBooleanArray.objects( [ new Boolean( false ), new Boolean( true ) ] );
	* // returns true
	*/
	isBooleanArray: typeof isBooleanArray;

	/**
	* Tests if a value is a JavaScript boxed primitive.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a JavaScript boxed primitive
	*
	* @example
	* var bool = ns.isBoxedPrimitive( new String( 'beep' ) );
	* // returns true
	*
	* @example
	* var bool = ns.isBoxedPrimitive( new Number( 3.21 ) );
	* // returns true
	*
	* @example
	* var Symbol = require( `@stdlib/symbol/ctor` );
	* var bool = ns.isBoxedPrimitive( Object( Symbol( 'beep' ) ) );
	* // returns true
	*
	* @example
	* var bool = ns.isBoxedPrimitive( true );
	* // returns false
	*
	* @example
	* var bool = ns.isBoxedPrimitive( {} );
	* // returns false
	*
	* @example
	* var Symbol = require( `@stdlib/symbol/ctor` );
	* var bool = ns.isBoxedPrimitive( Symbol( 'beep' ) );
	* // returns false
	*/
	isBoxedPrimitive: typeof isBoxedPrimitive;

	/**
	* Boolean indicating if the runtime is a web browser.
	*
	* @example
	* var bool = ns.IS_BROWSER;
	* // returns <boolean>
	*/
	IS_BROWSER: typeof IS_BROWSER;

	/**
	* Tests if a value is a Buffer instance.
	*
	* @param value - value to validate
	* @returns boolean indicating if a value is a Buffer instance
	*
	* @example
	* var v = ns.isBuffer( new Buffer( 'beep' ) );
	* // returns true
	*
	* @example
	* var v = ns.isBuffer( new Buffer( [1,2,3,4] ) );
	* // returns true
	*
	* @example
	* var v = ns.isBuffer( {} );
	* // returns false
	*
	* @example
	* var v = ns.isBuffer( [] );
	* // returns false
	*/
	isBuffer: typeof isBuffer;

	/**
	* Tests if a value is a string having an uppercase first character.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is a string with an uppercase first character
	*
	* @example
	* var bool = ns.isCapitalized( 'Hello' );
	* // returns true
	*
	* @example
	* var bool = ns.isCapitalized( 'WORLD' );
	* // returns true
	*
	* @example
	* var bool = ns.isCapitalized( '!' );
	* // returns false
	*
	* @example
	* var bool = ns.isCapitalized( 'salt and light' );
	* // returns false
	*/
	isCapitalized: typeof isCapitalized;

	/**
	* Tests if a value is a centrosymmetric matrix.
	*
	* ## Notes
	*
	* -   The implementation must rely on manually checking that \\(M_{ij} = M_{N-i-1,N-j-1}\\), and, while element access is deterministic, no way exists to prevent cache misses outside of reordering the underlying matrix elements, thus incurring a larger performance penalty than just "jumping around" in a single pass.
	* -   Worst case scenario: O(N^2).
	*
	* @param v - value to test
	* @returns boolean indicating if a value is a centrosymmetric matrix
	*
	* @example
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* var arr = ndarray( 'generic', [ 2, 1, 1, 2 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	*
	* var bool = ns.isCentrosymmetricMatrix( arr );
	* // returns true
	*
	* bool = ns.isCentrosymmetricMatrix( [] );
	* // returns false
	*/
	isCentrosymmetricMatrix: typeof isCentrosymmetricMatrix;

	/**
	* Tests if an object-like value contains a circular reference.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is object-like and contains a circular reference
	*
	* @example
	* var obj = {
	*   'a': 'beep',
	*   'b': {
	*     'c': 'boop'
	*   }
	* };
	* obj.b.self = obj;
	* var bool = ns.isCircular( obj );
	* // returns true
	*
	* @example
	* var arr = [ 1, 2, 3 ];
	* arr.push( arr );
	* var bool = ns.isCircular( arr );
	* // returns true
	*
	* @example
	* var bool = ns.isCircular( {} );
	* // returns false
	*
	* @example
	* var bool = ns.isCircular( null );
	* // returns false
	*/
	isCircular: typeof isCircular;

	/**
	* Tests if a value is an array containing a circular reference.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array containing a circular reference
	*
	* @example
	* var arr = [ 1, 2, 3 ];
	* arr.push( arr );
	* var bool = ns.isCircularArray( arr );
	* // returns true
	*
	* @example
	* var obj = {
	*   'a': 'beep',
	*   'b': {
	*     'c': 'boop'
	*   }
	* };
	* obj.b.self = obj;
	* var bool = ns.isCircularArray( obj );
	* // returns false
	*
	* @example
	* var bool = ns.isCircularArray( [] );
	* // returns false
	*
	* @example
	* var bool = ns.isCircularArray( null );
	* // returns false
	*/
	isCircularArray: typeof isCircularArray;

	/**
	* Tests if a value is a plain object containing a circular reference.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a plain object containing a circular reference
	*
	* @example
	* var obj = {
	*   'a': 'beep',
	*   'b': {
	*     'c': 'boop'
	*   }
	* };
	* obj.b.self = obj;
	* var bool = ns.isCircularPlainObject( obj );
	* // returns true
	*
	* @example
	* var arr = [ 1, 2, 3 ];
	* arr.push( arr );
	* var bool = ns.isCircularPlainObject( arr );
	* // returns false
	*
	* @example
	* var bool = ns.isCircularPlainObject( {} );
	* // returns false
	*
	* @example
	* var bool = ns.isCircularPlainObject( null );
	* // returns false
	*/
	isCircularPlainObject: typeof isCircularPlainObject;

	/**
	* Tests if a value is a collection.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is a collection
	*
	* @example
	* var bool = ns.isCollection( [] );
	* // returns true
	*
	* @example
	* var bool = ns.isCollection( {} );
	* // returns false
	*/
	isCollection: typeof isCollection;

	/**
	* Tests if a value is a 64-bit or 128-bit complex number.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a 64-bit or 128-bit complex number
	*
	* @example
	* var Complex128 = require( `@stdlib/complex/float64` );
	* var Complex64 = require( `@stdlib/complex/float32` );
	*
	* var x = new Complex128( 4.0, 2.0 );
	* var bool = ns.isComplex( x );
	* // returns true
	*
	* x = new Complex64( 4.0, 2.0 );
	* bool = ns.isComplex( x );
	* // returns true
	*/
	isComplex: typeof isComplex;

	/**
	* Tests if a value is a complex number-like object.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a complex number-like object.
	*
	* @example
	* var Complex128 = require( `@stdlib/complex/float64` );
	* var Complex64 = require( `@stdlib/complex/float32` );
	*
	* var x = new Complex128( 4.0, 2.0 );
	* var bool = ns.isComplexLike( x );
	* // returns true
	*
	* x = new Complex64( 4.0, 2.0 );
	* bool = ns.isComplexLike( x );
	* // returns true
	*/
	isComplexLike: typeof isComplexLike;

	/**
	* Tests if a value is a complex typed array.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a complex typed array
	*
	* @example
	* var Complex128Array = require( `@stdlib/array/complex128` );
	*
	* var bool = ns.isComplexTypedArray( new Complex128Array( 10 ) );
	* // returns true
	*/
	isComplexTypedArray: typeof isComplexTypedArray;

	/**
	* Tests if a value is complex-typed-array-like.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is complex-typed-array-like
	*
	* @example
	* var arr = {
	*	'BYTES_PER_ELEMENT': 8,
	*	'length': 10,
	*	'byteOffset': 0,
	*	'byteLength': 10,
	*   'get': function get() {},
	*   'set': function set() {}
	* };
	* var val = ns.isComplexTypedArrayLike( arr );
	* // returns true
	*
	* @example
	* var Complex128Array = require( `@stdlib/array/complex128` );
	*
	* var val = ns.isComplexTypedArrayLike( new Complex128Array( 4 ) );
	* // returns true
	*
	* @example
	* var val = ns.isComplexTypedArrayLike( [] );
	* // returns false
	*
	* @example
	* var val = ns.isComplexTypedArrayLike( {} );
	* // returns false
	*
	* @example
	* var val = ns.isComplexTypedArrayLike( null );
	* // returns false
	*
	* @example
	* var val = ns.isComplexTypedArrayLike( 'beep' );
	* // returns false
	*/
	isComplexTypedArrayLike: typeof isComplexTypedArrayLike;

	/**
	* Tests if a value is a 64-bit complex number.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a 64-bit complex number
	*
	* @example
	* var Complex64 = require( `@stdlib/complex/float32` );
	*
	* var x = new Complex64( 4.0, 2.0 );
	*
	* var bool = ns.isComplex64( x );
	* // returns true
	*/
	isComplex64: typeof isComplex64;

	/**
	* Tests if a value is a Complex64Array.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a Complex64Array
	*
	* @example
	* var bool = ns.isComplex64Array( new Complex64Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isComplex64Array( [] );
	* // returns false
	*/
	isComplex64Array: typeof isComplex64Array;

	/**
	* Tests if a value is a 128-bit complex number.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a 128-bit complex number
	*
	* @example
	* var Complex128 = require( `@stdlib/complex/float64` );
	*
	* var x = new Complex128( 4.0, 2.0 );
	*
	* var bool = ns.isComplex128( x );
	* // returns true
	*/
	isComplex128: typeof isComplex128;

	/**
	* Tests if a value is a Complex128Array.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a Complex128Array
	*
	* @example
	* var bool = ns.isComplex128Array( new Complex128Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isComplex128Array( [] );
	* // returns false
	*/
	isComplex128Array: typeof isComplex128Array;

	/**
	* Tests if a value is a composite number.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a composite number
	*
	* @example
	* var bool = ns.isComposite( 4.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isComposite( new Number( 4.0 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isComposite( 3.14 );
	* // returns false
	*
	* @example
	* var bool = ns.isComposite( -4.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isComposite( null );
	* // returns false
	*
	* @example
	* var bool = ns.isComposite.isPrimitive( 4.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isComposite.isObject( new Number( 4.0 ) );
	* // returns true
	*/
	isComposite: typeof isComposite;

	/**
	* Tests if an object's own property is configurable.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object property is configurable
	*
	* @example
	* var defineProperty = require( `@stdlib/utils/define-property` );
	*
	* var obj = {
	*     'boop': true
	* };
	*
	* defineProperty( obj, 'beep', {
	*     'configurable': false,
	*     'enumerable': true,
	*     'writable': true,
	*     'value': true
	* });
	*
	* var bool = ns.isConfigurableProperty( obj, 'boop' );
	* // returns true
	*
	* bool = ns.isConfigurableProperty( obj, 'beep' );
	* // returns false
	*/
	isConfigurableProperty: typeof isConfigurableProperty;

	/**
	* Tests if an object's own or inherited property is configurable.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object property is configurable
	*
	* @example
	* var defineProperty = require( `@stdlib/utils/define-property` );
	*
	* var obj = {
	*     'boop': true
	* };
	*
	* defineProperty( obj, 'beep', {
	*     'configurable': false,
	*     'enumerable': true,
	*     'writable': true,
	*     'value': true
	* });
	*
	* var bool = ns.isConfigurablePropertyIn( obj, 'boop' );
	* // returns true
	*
	* bool = ns.isConfigurablePropertyIn( obj, 'beep' );
	* // returns false
	*/
	isConfigurablePropertyIn: typeof isConfigurablePropertyIn;

	/**
	* Tests if a value is a cube number.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a cube number
	*
	* @example
	* var bool = ns.isCubeNumber( 8.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isCubeNumber( new Number( 8.0 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isCubeNumber( 3.14 );
	* // returns false
	*
	* @example
	* var bool = ns.isCubeNumber( -5.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isCubeNumber( null );
	* // returns false
	*
	* @example
	* var bool = ns.isCubeNumber.isPrimitive( 8.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isCubeNumber.isObject( new Number( 8.0 ) );
	* // returns true
	*/
	isCubeNumber: typeof isCubeNumber;

	/**
	* Boolean indicating if the current process is running on Darwin.
	*
	* @example
	* var PLATFORM = require( `@stdlib/os/platform` );
	*
	* if ( ns.IS_DARWIN ) {
	*     console.log( 'Running on Darwin...' );
	* } else {
	*     console.log( 'Running on %s...', PLATFORM );
	* }
	*/
	IS_DARWIN: typeof IS_DARWIN;

	/**
	* Tests if an object's own property has a data descriptor.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object property has a data descriptor
	*
	* @example
	* var defineProperty = require( `@stdlib/utils/define-property` );
	*
	* var obj = {
	*     'boop': true
	* };
	*
	* function getter() {
	*     return 'beep';
	* }
	*
	* defineProperty( obj, 'beep', {
	*     'configurable': false,
	*     'enumerable': false,
	*     'get': getter
	* });
	*
	* var bool = ns.isDataProperty( obj, 'boop' );
	* // returns true
	*
	* bool = ns.isDataProperty( obj, 'beep' );
	* // returns false
	*/
	isDataProperty: typeof isDataProperty;

	/**
	* Tests if an object's own or inherited property has a data descriptor.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object property has a data descriptor
	*
	* @example
	* var defineProperty = require( `@stdlib/utils/define-property` );
	*
	* var obj = {
	*     'boop': true
	* };
	*
	* function getter() {
	*     return 'beep';
	* }
	*
	* defineProperty( obj, 'beep', {
	*     'configurable': false,
	*     'enumerable': false,
	*     'get': getter
	* });
	*
	* var bool = ns.isDataPropertyIn( obj, 'boop' );
	* // returns true
	*
	* bool = ns.isDataPropertyIn( obj, 'beep' );
	* // returns false
	*/
	isDataPropertyIn: typeof isDataPropertyIn;

	/**
	* Tests if a value is a `DataView`.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a DataView
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	* var DataView = require( `@stdlib/array/dataview` );
	*
	* var bool = ns.isDataView( new DataView( new ArrayBuffer( 10 ) ) );
	* // returns true
	*
	* @example
	* var bool = ns.isDataView( [] );
	* // returns false
	*/
	isDataView: typeof isDataView;

	/**
	* Tests if a value is a `Date` object.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a `Date` object
	*
	* @example
	* var bool = ns.isDateObject( new Date() );
	* // returns true
	*
	* @example
	* var bool = ns.isDateObject( '2017-01-01' );
	* // returns false
	*/
	isDateObject: typeof isDateObject;

	/**
	* Tests whether a string contains only numeric digits.
	*
	* @param value - value to test
	* @returns boolean indicating if a string contains only numeric digits
	*
	* @example
	* var out = ns.isDigitString( '0123456789' );
	* // returns true
	*
	* @example
	* var out = ns.isDigitString( '0xffffff' );
	* // returns false
	*
	* @example
	* var out = ns.isDigitString( '' );
	* // returns false
	*
	* @example
	* var out = ns.isDigitString( 123 );
	* // returns false
	*/
	isDigitString: typeof isDigitString;

	/**
	* Boolean indicating if the runtime is Electron.
	*
	* @example
	* var bool = ns.IS_ELECTRON;
	* // returns <boolean>
	*/
	IS_ELECTRON: typeof IS_ELECTRON;

	/**
	* Boolean indicating if the runtime is the main Electron process.
	*
	* @example
	* var bool = ns.IS_ELECTRON_MAIN;
	* // returns <boolean>
	*/
	IS_ELECTRON_MAIN: typeof IS_ELECTRON_MAIN;

	/**
	* Boolean indicating if the runtime is the Electron renderer process.
	*
	* @example
	* var bool = ns.IS_ELECTRON_RENDERER;
	* // returns <boolean>
	*/
	IS_ELECTRON_RENDERER: typeof IS_ELECTRON_RENDERER;

	/**
	* Tests if a value is a valid(ish) email address.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is a valid(ish) email address
	*
	* @example
	* var bool = ns.isEmailAddress( 'beep@boop.com' );
	* // returns true
	*
	* @example
	* var bool = ns.isEmailAddress( 'beep' );
	* // returns false
	*
	* @example
	* var bool = ns.isEmailAddress( 'beep.com' );
	* // returns false
	*
	* @example
	* var bool = ns.isEmailAddress( null );
	* // returns false
	*/
	isEmailAddress: typeof isEmailAddress;

	/**
	* Tests if a value is an empty array.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an empty array
	*
	* @example
	* var bool = ns.isEmptyArray( [] );
	* // returns true
	*
	* @example
	* var bool = ns.isEmptyArray( [ 1, 2, 3 ] );
	* // returns false
	*
	* @example
	* var bool = ns.isEmptyArray( {} );
	* // returns false
	*/
	isEmptyArray: typeof isEmptyArray;

	/**
	* Tests if a value is an empty object.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an empty object
	*
	* @example
	* var bool = ns.isEmptyObject( {} );
	* // returns true
	*
	* @example
	* var bool = ns.isEmptyObject( { 'beep': 'boop' } );
	* // returns false
	*
	* @example
	* var bool = ns.isEmptyObject( [] );
	* // returns false
	*/
	isEmptyObject: typeof isEmptyObject;

	/**
	* Tests if a value is an empty string.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an empty string
	*
	* @example
	* var bool = ns.isEmptyString( '' );
	* // returns true
	*
	* @example
	* var bool = ns.isEmptyString( 'beep' );
	* // returns false
	*
	* @example
	* var bool = ns.isEmptyString( [] );
	* // returns false
	*
	* @example
	* var bool = ns.isEmptyString.isPrimitive( '' );
	* // returns true
	*
	* @example
	* var bool = ns.isEmptyString.isObject( '' );
	* // returns false
	*/
	isEmptyString: typeof isEmptyString;

	/**
	* Tests if an object's own property is enumerable.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object property is enumerable
	*
	* @example
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = ns.isEnumerableProperty( beep, 'boop' );
	* // returns true
	*
	* @example
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = ns.isEnumerableProperty( beep, 'hasOwnProperty' );
	* // returns false
	*/
	isEnumerableProperty: typeof isEnumerableProperty;

	/**
	* Tests if an object's own or inherited property is enumerable.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object property is enumerable
	*
	* @example
	* var defineProperty = require( `@stdlib/utils/define-property` );
	*
	* var obj = {
	*     'boop': true
	* };
	*
	* defineProperty( obj, 'beep', {
	*     'configurable': true,
	*     'enumerable': false,
	*     'writable': true,
	*     'value': true
	* });
	*
	* var bool = ns.isEnumerablePropertyIn( obj, 'boop' );
	* // returns true
	*
	* bool = ns.isEnumerablePropertyIn( obj, 'beep' );
	* // returns false
	*/
	isEnumerablePropertyIn: typeof isEnumerablePropertyIn;

	/**
	* Tests if a value is an `Error` object.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is an `Error` object
	*
	* @example
	* var bool = ns.isError( new Error( 'beep' ) );
	* // returns true
	*
	* @example
	* var bool = ns.isError( {} );
	* // returns false
	*/
	isError: typeof isError;

	/**
	* Tests if a value is an `EvalError` object.
	*
	* ## Notes
	*
	* -   This function should **not** be considered robust. While the function should always return `true` if provided an EvalError (or a descendant) object, false positives may occur due to the fact that the EvalError constructor inherits from Error and has no internal class of its own. Hence, EvalError impersonation is possible.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is an `EvalError` object
	*
	* @example
	* var bool = ns.isEvalError( new EvalError( 'beep' ) );
	* // returns true
	*
	* @example
	* var bool = ns.isEvalError( {} );
	* // returns false
	*/
	isEvalError: typeof isEvalError;

	/**
	* Tests if a value is an even number.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an even number
	*
	* @example
	* var bool = ns.isEven( 4.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isEven( new Number( 4.0 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isEven( 3.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isEven.isPrimitive( new Number( 4.0 ) );
	* // returns false
	*
	* @example
	* var bool = ns.isEven.isObject( 4.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isEven( null );
	* // returns false
	*/
	isEven: typeof isEven;

	/**
	* Tests if a value is falsy.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is falsy
	*
	* @example
	* var bool = ns.isFalsy( false );
	* // returns true
	*
	* @example
	* var bool = ns.isFalsy( null );
	* // returns true
	*
	* @example
	* var bool = ns.isFalsy( '' );
	* // returns true
	*
	* @example
	* var bool = ns.isFalsy( 0 );
	* // returns true
	*
	* @example
	* var bool = ns.isFalsy( void 0 );
	* // returns true
	*
	* @example
	* var bool = ns.isFalsy( NaN );
	* // returns true
	*
	* @example
	* var bool = ns.isFalsy( [] );
	* // returns false
	*/
	isFalsy: typeof isFalsy;

	/**
	* Test if a value is an array-like object containing only falsy values.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is an array-like object containing only falsy values
	*
	* @example
	* var bool = ns.isFalsyArray( [ false, null, void 0, '', 0, NaN ] );
	* // returns true
	*
	* bool = ns.isFalsyArray( [ {}, [] ] );
	* // returns false
	*
	* bool = ns.isFalsyArray( [] );
	* // returns false
	*/
	isFalsyArray: typeof isFalsyArray;

	/**
	* Tests if a value is a finite number.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is a finite number
	*
	* @example
	* var bool = ns.isFinite( 5.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isFinite( new Number( 5.0 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isFinite( 1.0/0.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isFinite( null );
	* // returns false
	*
	* @example
	* var bool = ns.isFinite.isPrimitive( new Number( -3.0 ) );
	* // returns false
	*
	* @example
	* var bool = ns.isFinite.isObject( new Number( 3.0 ) );
	* // returns true
	*/
	isFinite: typeof isFinite;

	/**
	* Tests if a value is an array-like object of finite numbers.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is an array-like object of finite numbers
	*
	* @example
	* var bool = ns.isFiniteArray( [ -3.0, new Number(0.0), 2.0 ] );
	* // returns true
	*
	* @example
	* var bool = ns.isFiniteArray( [ -3.0, 1.0/0.0 ] );
	* // returns false
	*
	* @example
	* var bool = ns.isFiniteArray.primitives( [ -1.0, 10.0 ] );
	* // returns true
	*
	* @example
	* var bool = ns.isFiniteArray.primitives( [ -1.5, 0.0, 5.0 ] );
	* // returns true
	*
	* @example
	* var bool = ns.isFiniteArray.primitives( [ -3.0, new Number(-1.0) ] );
	* // returns false
	*
	* @example
	* var bool = ns.isFiniteArray.objects( [ new Number(1.0), new Number(3.0) ] );
	* // returns true
	*
	* @example
	* var bool = ns.isFiniteArray.objects( [ -1.0, 0.0, 3.0 ] );
	* // returns false
	*
	* @example
	* var bool = ns.isFiniteArray.objects( [ 3.0, new Number(-1.0) ] );
	* // returns false
	*/
	isFiniteArray: typeof isFiniteArray;

	/**
	* Tests if a value is a Float32Array.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a Float32Array
	*
	* @example
	* var bool = ns.isFloat32Array( new Float32Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isFloat32Array( [] );
	* // returns false
	*/
	isFloat32Array: typeof isFloat32Array;

	/**
	* Tests if a value is a 2-dimensional ndarray-like object whose underlying data type is `float32`.
	*
	* @param v - value to test
	* @returns boolean indicating if a value is a 2-dimensional ndarray-like object whose underlying data type is `float32`
	*
	* @example
	* var Float32Array = require( `@stdlib/array/float32` );
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* var arr = ndarray( 'float32', new Float32Array( [ 0, 0, 0, 0 ] ), [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	*
	* var bool = ns.isFloat32MatrixLike( arr );
	* // returns true
	*
	* bool = ns.isFloat32MatrixLike( [] );
	* // returns false
	*/
	isFloat32MatrixLike: typeof isFloat32MatrixLike;

	/**
	* Tests if a value is an ndarray-like object whose underlying data type is `float32`.
	*
	* @param v - value to test
	* @returns boolean indicating if a value is an ndarray-like object whose underlying data type is `float32`
	*
	* @example
	* var Float32Array = require( `@stdlib/array/float32` );
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* var arr = ndarray( 'float32', new Float32Array( [ 0, 0, 0, 0 ] ), [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	*
	* var bool = ns.isFloat32ndarrayLike( arr );
	* // returns true
	*
	* bool = ns.isFloat32ndarrayLike( [] );
	* // returns false
	*/
	isFloat32ndarrayLike: typeof isFloat32ndarrayLike;

	/**
	* Tests if a value is a 1-dimensional ndarray-like object whose underlying data type is `float32`.
	*
	* @param v - value to test
	* @returns boolean indicating if a value is a 1-dimensional ndarray-like object whose underlying data type is `float32`
	*
	* @example
	* var Float32Array = require( `@stdlib/array/float32` );
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* var arr = ndarray( 'float32', new Float32Array( [ 0, 0, 0, 0 ] ), [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var bool = ns.isFloat32VectorLike( arr );
	* // returns true
	*
	* bool = ns.isFloat32VectorLike( [] );
	* // returns false
	*/
	isFloat32VectorLike: typeof isFloat32VectorLike;

	/**
	* Tests if a value is a Float64Array.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a Float64Array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var bool = ns.isFloat64Array( new Float64Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isFloat64Array( [] );
	* // returns false
	*/
	isFloat64Array: typeof isFloat64Array;

	/**
	* Tests if a value is a 2-dimensional ndarray-like object whose underlying data type is `float64`.
	*
	* @param v - value to test
	* @returns boolean indicating if a value is a 2-dimensional ndarray-like object whose underlying data type is `float64`
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* var arr = ndarray( 'float64', new Float64Array( [ 0, 0, 0, 0 ] ), [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	*
	* var bool = ns.isFloat64MatrixLike( arr );
	* // returns true
	*
	* bool = ns.isFloat64MatrixLike( [] );
	* // returns false
	*/
	isFloat64MatrixLike: typeof isFloat64MatrixLike;

	/**
	* Tests if a value is an ndarray-like object whose underlying data type is `float64`.
	*
	* @param v - value to test
	* @returns boolean indicating if a value is an ndarray-like object whose underlying data type is `float64`
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* var arr = ndarray( 'float64', new Float64Array( [ 0, 0, 0, 0 ] ), [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	*
	* var bool = ns.isFloat64ndarrayLike( arr );
	* // returns true
	*
	* bool = ns.isFloat64ndarrayLike( [] );
	* // returns false
	*/
	isFloat64ndarrayLike: typeof isFloat64ndarrayLike;

	/**
	* Tests if a value is a 1-dimensional ndarray-like object whose underlying data type is `float64`.
	*
	* @param v - value to test
	* @returns boolean indicating if a value is a 1-dimensional ndarray-like object whose underlying data type is `float64`
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* var arr = ndarray( 'float64', new Float64Array( [ 0, 0, 0, 0 ] ), [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var bool = ns.isFloat64VectorLike( arr );
	* // returns true
	*
	* bool = ns.isFloat64VectorLike( [] );
	* // returns false
	*/
	isFloat64VectorLike: typeof isFloat64VectorLike;

	/**
	* Tests if a value is a function.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a function
	*
	* @example
	* function beep() {
	*     return 'beep';
	* }
	*
	* var bool = ns.isFunction( beep );
	* // returns true
	*/
	isFunction: typeof isFunction;

	/**
	* Test if a value is an array-like object containing only functions.
	*
	* @param value - value to test
	* @returns boolean indicating whether an input value is an array-like object containing only functions
	*
	* @example
	* function beep() {}
	*
	* function boop() {}
	*
	* var bool = ns.isFunctionArray( [ beep, boop ] );
	* // returns true
	*
	* bool = ns.isFunctionArray( [ {}, beep ] );
	* // returns false
	*
	* bool = ns.isFunctionArray( [] );
	* // returns false
	*/
	isFunctionArray: typeof isFunctionArray;

	/**
	* Tests if a value is a generator object.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a generator object
	*
	* @example
	* function* generateID() {
	*     var idx = 0;
	*     while ( idx < idx+1 ) {
	*         yield idx;
	*         idx += 1;
	*     }
	* }
	* var bool = ns.isGeneratorObject( generateID() );
	* // returns true
	*
	* @example
	* var bool = ns.isGeneratorObject( {} );
	* // returns false
	*
	* @example
	* var bool = ns.isGeneratorObject( null );
	* // returns false
	*/
	isGeneratorObject: typeof isGeneratorObject;

	/**
	* Tests if a value is generator object-like.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is generator object-like
	*
	* @example
	* var gen = {
	*     'next': function noop() {},
	*     'return': function noop() {},
	*     'throw': function noop() {}
	* };
	* var bool = ns.isGeneratorObjectLike( gen );
	* // returns true
	*
	* @example
	* function* generateID() {
	*     var idx = 0;
	*     while ( idx < idx+1 ) {
	*         yield idx;
	*         idx += 1;
	*     }
	* }
	* var bool = ns.isGeneratorObjectLike( generateID() );
	* // returns true
	*
	* @example
	* var bool = ns.isGeneratorObjectLike( {} );
	* // returns false
	*
	* @example
	* var bool = ns.isGeneratorObjectLike( null );
	* // returns false
	*/
	isGeneratorObjectLike: typeof isGeneratorObjectLike;

	/**
	* Tests if a value is a gzip buffer (or Uint8Array).
	*
	* ## Notes
	*
	* -   A gzip buffer is defined as either a Node.js Buffer or Uint8Array which contains a 10-byte header, a body containing the compressed payload, and an 8-byte footer containing a CRC-32 checksum and the length of the original uncompressed data, modulo 2^32.
	* -   This function only examines the 10-byte header to ensure the header includes the expected magic number and compression method. The function does not perform an integrity check.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is a gzip buffer
	*
	* @example
	* var Uint8Array = require( `@stdlib/array/uint8` );
	*
	* var buf = new Uint8Array( 20 );
	* buf[ 0 ] = 31;  // 0x1f => magic number
	* buf[ 1 ] = 139; // 0x8b
	* buf[ 2 ] = 8;   // 0x08 => compression method
	*
	* var bool = ns.isgzipBuffer( buf );
	* // returns true
	*
	* @example
	* var bool = ns.isgzipBuffer( [] );
	* // returns false
	*/
	isgzipBuffer: typeof isgzipBuffer;

	/**
	* Tests whether a string contains only hexadecimal digits.
	*
	* @param x - value to test
	* @returns boolean indicating if a string contains only hexadecimal digits
	*
	* @example
	* var out = ns.isHexString( '0123456789abcdefABCDEF' );
	* // returns true
	*
	* @example
	* var out = ns.isHexString( '0xffffff' );
	* // returns false
	*
	* @example
	* var out = ns.isHexString( '' );
	* // returns false
	*
	* @example
	* var out = ns.isHexString( 123 );
	* // returns false
	*/
	isHexString: typeof isHexString;

	/**
	* Tests if a value is an infinite number.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is an infinite number
	*
	* @example
	* var bool = ns.isInfinite( 1.0/0.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isInfinite( new Number( 1.0/0.0 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isInfinite( 5.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isInfinite( null );
	* // returns false
	*/
	isInfinite: typeof isInfinite;

	/**
	* Tests if an object has an inherited property.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object has an inherited property
	*
	* @example
	* var obj = {
	*     'boop': true
	* };
	*
	* var bool = ns.isInheritedProperty( obj, 'toString' );
	* // returns true
	*
	* @example
	* var obj = {
	*     'boop': true
	* };
	*
	* var bool = ns.isInheritedProperty( obj, 'boop' );
	* // returns false
	*
	* @example
	* var obj = {
	*     'boop': true
	* };
	*
	* var bool = ns.isInheritedProperty( obj, 'bap' );
	* // returns false
	*/
	isInheritedProperty: typeof isInheritedProperty;

	/**
	* Tests if a value is an Int8Array.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an Int8Array
	*
	* @example
	* var bool = ns.isInt8Array( new Int8Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isInt8Array( [] );
	* // returns false
	*/
	isInt8Array: typeof isInt8Array;

	/**
	* Tests if a value is an Int16Array.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an Int16Array
	*
	* @example
	* var bool = ns.isInt16Array( new Int16Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isInt16Array( [] );
	* // returns false
	*/
	isInt16Array: typeof isInt16Array;

	/**
	* Tests if a value is an Int32Array.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an Int32Array
	*
	* @example
	* var bool = ns.isInt32Array( new Int32Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isInt32Array( [] );
	* // returns false
	*/
	isInt32Array: typeof isInt32Array;

	/**
	* Tests if a value is an integer.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an integer
	*
	* @example
	* var bool = ns.isInteger( 5.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isInteger( new Number( 5.0 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isInteger( -3.14 );
	* // returns false
	*
	* @example
	* var bool = ns.isInteger( null );
	* // returns false
	*
	* @example
	* var bool = ns.isInteger.isPrimitive( -3.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isInteger.isObject( new Number( 3.0 ) );
	* // returns true
	*/
	isInteger: typeof isInteger;

	/**
	* Tests if a value is an array-like object containing only integers.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only integers
	*
	* @example
	* var bool = ns.isIntegerArray( [ -3.0, new Number(0.0), 2.0 ] );
	* // returns true
	*
	* @example
	* var bool = ns.isIntegerArray( [ -3.0, '3.0' ] );
	* // returns false
	* @example
	* var bool = ns.isIntegerArray.primitives( [ -1.0, 0.0, 5.0 ] );
	* // returns true
	*
	* @example
	* var bool = ns.isIntegerArray.objects( [ new Number(1.0), new Number(3.0) ] );
	* // returns true
	*/
	isIntegerArray: typeof isIntegerArray;

	/**
	* Tests if a value is iterable-like.
	*
	* ## Notes
	*
	* -   In order to be iterable, an object must implement the @@iterator method, which, when called, returns an iterator protocol-compliant object.
	* -   An iterator protocol-compliant object is an object having a `next` method which adheres to the iterator protocol.
	* -   As full iterator compliance is impossible to achieve without evaluating an iterator, this function checks *only* for interface compliance.
	* -   In environments lacking Symbol.iterator support, this function always returns `false`.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is iterable-like
	*
	* @example
	* var bool = ns.isIterableLike( [] );
	* // returns <boolean>
	*
	* @example
	* var bool = ns.isIterableLike( {} );
	* // returns false
	*
	* @example
	* var bool = ns.isIterableLike( null );
	* // returns false
	*/
	isIterableLike: typeof isIterableLike;

	/**
	* Tests if a value is iterator-like.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is iterator-like
	*
	* @example
	* var it = {
	*     'next': function noop() {}
	* };
	* var bool = ns.isIteratorLike( it );
	* // returns true
	*
	* @example
	* var bool = ns.isIteratorLike( {} );
	* // returns false
	*
	* @example
	* var bool = ns.isIteratorLike( null );
	* // returns false
	*/
	isIteratorLike: typeof isIteratorLike;

	/**
	* Tests if a value is a parseable JSON string.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a parseable JSON string
	*
	* @example
	* var v = ns.isJSON( '{"a":5}' );
	* // returns true
	*
	* @example
	* var v = ns.isJSON( '{a":5}' );
	* // returns false
	*/
	isJSON: typeof isJSON;

	/**
	* Tests whether a value corresponds to a leap year in the Gregorian calendar.
	*
	* ## Notes
	*
	* -   According to the Gregorian calendar, every year that is exactly divisible by `4` is a leap year, except those years which are also divisible by `100` and not by `400` (e.g., `1900`).
	*
	* @param value - input value
	* @returns boolean whether a value corresponds to a leap year
	*
	* @example
	* var bool = ns.isLeapYear();
	* // returns <boolean>
	*
	* @example
	* var bool = ns.isLeapYear( new Date() );
	* // returns <boolean>
	*
	* @example
	* var bool = ns.isLeapYear( 1996 );
	* // returns true
	*
	* @example
	* var bool = ns.isLeapYear( 2001 );
	* // returns false
	*/
	isLeapYear: typeof isLeapYear;

	/**
	* Return a boolean indicating if an environment is little endian.
	*
	* @example
	* var bool = ns.IS_LITTLE_ENDIAN;
	* // returns <boolean>
	*/
	IS_LITTLE_ENDIAN: typeof IS_LITTLE_ENDIAN;

	/**
	* Tests if a value is a lowercase string.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a lowercase string
	*
	* @example
	* var bool = ns.isLowercase( 'salt and light' );
	* // returns true
	*
	* @example
	* var bool = ns.isLowercase( 'HELLO' );
	* // returns false
	*
	* @example
	* var bool = ns.isLowercase( 'World' );
	* // returns false
	*
	* @example
	* var bool = ns.isLowercase( '!' );
	* // returns false
	*/
	isLowercase: typeof isLowercase;

	/**
	* Tests if a value is a 2-dimensional ndarray-like object.
	*
	* @param v - value to test
	* @returns boolean indicating if a value is a 2-dimensional ndarray-like object
	*
	* @example
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* var arr = ndarray( 'generic', [ 0, 0, 0, 0 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	*
	* var bool = ns.isMatrixLike( arr );
	* // returns true
	*
	* bool = ns.isMatrixLike( [] );
	* // returns false
	*/
	isMatrixLike: typeof isMatrixLike;

	/**
	* Tests if an object has a specified method name.
	*
	* ## Notes
	*
	* -   Value arguments other than `null` or `undefined` are coerced to objects.
	* -   Property arguments are coerced to strings.
	* -   The function only searches own properties.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object has a specified method name
	*
	* @example
	* var beep = {
	*     'boop': ns.isMethod
	* };
	*
	* var bool = ns.isMethod( beep, 'boop' );
	* // returns true
	*
	* var bool = ns.isMethod( beep, 'toString' );
	* // returns false
	*/
	isMethod: typeof isMethod;

	/**
	* Tests if an object has a specified method name, either own or inherited.
	*
	* ## Notes
	*
	* -   Value arguments other than `null` or `undefined` are coerced to objects.
	* -   Non-symbol property arguments are coerced to strings.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object has a specified method name
	*
	* @example
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = ns.isMethodIn( beep, 'toString' );
	* // returns true
	*
	* bool = ns.isMethodIn( beep, 'boop' );
	* // returns false
	*/
	isMethodIn: typeof isMethodIn;

	/**
	* Tests if a value is named typed tuple-like.
	*
	* @param v - value to test
	* @returns boolean indicating if a value is named typed tuple-like
	*
	* @example
	* var namedtypedtuple = require( `@stdlib/utils/named-typed-tuple` );
	*
	* var Point = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var p = new Point();
	*
	* var bool = ns.isNamedTypedTupleLike( p );
	* // returns true
	*
	* bool = ns.isNamedTypedTupleLike( [] );
	* // returns false
	*/
	isNamedTypedTupleLike: typeof isNamedTypedTupleLike;

	/**
	* Tests if a value is `NaN`.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is `NaN`
	*
	* @example
	* var bool = ns.isnan( NaN );
	* // returns true
	*
	* @example
	* var bool = ns.isnan( new Number( NaN ) );
	* // returns true
	*
	* @example
	* var bool = ns.isnan( 3.14 );
	* // returns false
	*
	* @example
	* var bool = ns.isnan( null );
	* // returns false
	*
	* @example
	* var bool = ns.isnan.isPrimitive( NaN );
	* // returns true
	*
	* @example
	* var bool = ns.isnan.isObject( new Number( NaN ) );
	* // returns true
	*/
	isnan: typeof isnan;

	/**
	* Tests if a value is an array-like object containing only NaN values.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only NaN values
	*
	* @example
	* var bool = ns.isNaNArray( [NaN,NaN,NaN] );
	* // returns true
	*
	* @example
	* var bool = ns.isNaNArray( [NaN,2] );
	* // returns false
	*
	* @example
	* var bool = ns.isNaNArray.primitives( [NaN,NaN,NaN] );
	* // returns true
	*
	* @example
	* var bool = ns.isNaNArray.objects( [new Number( NaN ),new Number( NaN )] );
	* // returns true
	*/
	isNaNArray: typeof isNaNArray;

	/**
	* Tests if a value is a native function.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a native function
	*
	* @example
	* function beep() {
	*     console.log( 'boop' );
	* }
	*
	* var bool = ns.isNativeFunction( beep );
	* // returns false
	*
	* bool = ns.isNativeFunction( Date );
	* // returns true
	*/
	isNativeFunction: typeof isNativeFunction;

	/**
	* Tests if a value is ndarray-like.
	*
	* @param v - value to test
	* @returns boolean indicating if a value is ndarray-like
	*
	* @example
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* var arr = ndarray( 'generic', [ 0, 0, 0, 0 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	*
	* var bool = ns.isndarrayLike( arr );
	* // returns true
	*
	* bool = ns.isndarrayLike( [] );
	* // returns false
	*/
	isndarrayLike: typeof isndarrayLike;

	/**
	* Tests if a value is a negative integer.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a negative integer
	*
	* @example
	* var bool = ns.isNegativeInteger( -5.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNegativeInteger( new Number( -5.0 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isNegativeInteger( 5.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isNegativeInteger( -3.14 );
	* // returns false
	*
	* @example
	* var bool = ns.isNegativeInteger( null );
	* // returns false
	*
	* @example
	* var bool = ns.isNegativeInteger.isPrimitive( -3.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNegativeInteger.isObject( new Number( -3.0 ) );
	* // returns true
	*/
	isNegativeInteger: typeof isNegativeInteger;

	/**
	* Tests if a value is an array-like object containing only negative integers.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only negative integers
	*
	* @example
	* var bool = ns.isNegativeIntegerArray( [ -3.0, new Number(-3.0) ] );
	* // returns true
	*
	* @example
	* var bool = ns.isNegativeIntegerArray( [ -3.0, '-3.0' ] );
	* // returns false
	*
	* @example
	* var bool = ns.isNegativeIntegerArray.primitives( [ -1.0, -10.0 ] );
	* // returns true
	*
	* @example
	* var bool = ns.isNegativeIntegerArray.objects( [ new Number(-1.0), new Number(-10.0) ] );
	* // returns true
	*/
	isNegativeIntegerArray: typeof isNegativeIntegerArray;

	/**
	* Tests if a value is a negative number.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a negative number
	*
	* @example
	* var bool = ns.isNegativeNumber( -5.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNegativeNumber( new Number( -5.0 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isNegativeNumber( -3.14 );
	* // returns true
	*
	* @example
	* var bool = ns.isNegativeNumber( 5.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isNegativeNumber( null );
	* // returns false
	*
	* @example
	* var bool = ns.isNegativeNumber.isPrimitive( -3.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNegativeNumber.isObject( new Number( -3.0 ) );
	* // returns true
	*/
	isNegativeNumber: typeof isNegativeNumber;

	/**
	* Tests if a value is an array-like object containing only negative numbers.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only negative numbers
	*
	* @example
	* var bool = ns.isNegativeNumberArray( [ -3.7, new Number(-3.0) ] );
	* // returns true
	*
	* @example
	* var bool = ns.isNegativeNumberArray( [ -3.7, '-3.0' ] );
	* // returns false
	*
	* @example
	* var bool = ns.isNegativeNumberArray.primitives( [ -1.3, -10.0 ] );
	* // returns true
	*
	* @example
	* var bool = ns.isNegativeNumberArray.objects( [ new Number(-1.3), new Number(-10.0) ] );
	* // returns true
	*/
	isNegativeNumberArray: typeof isNegativeNumberArray;

	/**
	* Tests if a value is equal to negative zero.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is equal to negative zero
	*
	* @example
	* var bool = ns.isNegativeZero( -0.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNegativeZero( new Number( -0.0 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isNegativeZero( -3.14 );
	* // returns false
	*
	* @example
	* var bool = ns.isNegativeZero( 5.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isNegativeZero( 0.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isNegativeZero( null );
	* // returns false
	*
	* @example
	* var bool = ns.isNegativeZero.isPrimitive( -0.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNegativeZero.isObject( new Number( -0.0 ) );
	* // returns true
	*/
	isNegativeZero: typeof isNegativeZero;

	/**
	* Boolean indicating if the runtime is Node.js.
	*
	* @example
	* var bool = ns.IS_NODE;
	* // returns <boolean>
	*/
	IS_NODE: typeof IS_NODE;

	/**
	* Tests whether a string matches a Node.js built-in module name.
	*
	* @param x - value to test
	* @returns boolean indicating whether a string matches a Node.js built-in module name
	*
	* @example
	* var out = ns.isNodeBuiltin( 'cluster' );
	* // returns true
	*
	* @example
	* var out = ns.isNodeBuiltin( 'crypto' );
	* // returns true
	*
	* @example
	* var out = ns.isNodeBuiltin( 'fs-extra' );
	* // returns false
	*
	* @example
	* var out = ns.isNodeBuiltin( '' );
	* // returns false
	*/
	isNodeBuiltin: typeof isNodeBuiltin;

	/**
	* Tests if a value is Node duplex stream-like.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is Node duplex stream-like
	*
	* @example
	* var transformStream = require( `@stdlib/streams/node/transform` );
	*
	* var stream = transformStream();
	*
	* var bool = ns.isNodeDuplexStreamLike( stream );
	* // returns true
	*
	* bool = ns.isNodeDuplexStreamLike( {} );
	* // returns false
	*/
	isNodeDuplexStreamLike: typeof isNodeDuplexStreamLike;

	/**
	* Tests if a value is Node readable stream-like.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is Node readable stream-like
	*
	* @example
	* var transformStream = require( `@stdlib/streams/node/transform` );
	*
	* var stream = transformStream();
	*
	* var bool = ns.isNodeReadableStreamLike( stream );
	* // returns true
	*
	* bool = ns.isNodeReadableStreamLike( {} );
	* // returns false
	*/
	isNodeReadableStreamLike: typeof isNodeReadableStreamLike;

	/**
	* Returns a boolean indicating if the function is called from a Node.js REPL environment.
	*
	* ## Notes
	*
	* -   False positives are possible due to the existence of a userland package having the same module `id` (see [repl][repl-template-lib]) as the builtin Node.js `repl`.
	*
	* [repl-template-lib]: https://www.npmjs.com/package/repl
	*
	* @returns boolean indicating if the function is called from a Node.js REPL environment
	*
	* @example
	* var bool = ns.isNodeREPL();
	* // returns <boolean>
	*/
	isNodeREPL: typeof isNodeREPL;

	/**
	* Tests if a value is Node stream-like.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is Node stream-like
	*
	* @example
	* var transformStream = require( `@stdlib/streams/node/transform` );
	*
	* var stream = transformStream();
	*
	* var bool = ns.isNodeStreamLike( stream );
	* // returns true
	*
	* bool = ns.isNodeStreamLike( {} );
	* // returns false
	*/
	isNodeStreamLike: typeof isNodeStreamLike;

	/**
	* Tests if a value is Node transform stream-like.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is Node transform stream-like
	*
	* @example
	* var transformStream = require( `@stdlib/streams/node/transform` );
	*
	* var stream = transformStream();
	*
	* var bool = ns.isNodeTransformStreamLike( stream );
	* // returns true
	*
	* bool = ns.isNodeTransformStreamLike( {} );
	* // returns false
	*/
	isNodeTransformStreamLike: typeof isNodeTransformStreamLike;

	/**
	* Tests if a value is Node writable stream-like.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is Node writable stream-like
	*
	* @example
	* var transformStream = require( `@stdlib/streams/node/transform` );
	*
	* var stream = transformStream();
	*
	* var bool = ns.isNodeWritableStreamLike( stream );
	* // returns true
	*
	* bool = ns.isNodeWritableStreamLike( {} );
	* // returns false
	*/
	isNodeWritableStreamLike: typeof isNodeWritableStreamLike;

	/**
	* Tests if an object's own property is non-configurable.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object property is non-configurable
	*
	* @example
	* var defineProperty = require( `@stdlib/utils/define-property` );
	*
	* var obj = {
	*     'boop': true
	* };
	*
	* defineProperty( obj, 'beep', {
	*     'configurable': false,
	*     'enumerable': true,
	*     'writable': true,
	*     'value': 'beep'
	* });
	*
	* var bool = ns.isNonConfigurableProperty( obj, 'boop' );
	* // returns false
	*
	* bool = ns.isNonConfigurableProperty( obj, 'beep' );
	* // returns true
	*/
	isNonConfigurableProperty: typeof isNonConfigurableProperty;

	/**
	* Tests if an object's own or inherited property is non-configurable.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object property is non-configurable
	*
	* @example
	* var defineProperty = require( `@stdlib/utils/define-property` );
	*
	* var obj = {
	*     'boop': true
	* };
	*
	* defineProperty( obj, 'beep', {
	*     'configurable': false,
	*     'enumerable': true,
	*     'writable': true,
	*     'value': true
	* });
	*
	* var bool = ns.isNonConfigurablePropertyIn( obj, 'boop' );
	* // returns false
	*
	* bool = ns.isNonConfigurablePropertyIn( obj, 'beep' );
	* // returns true
	*/
	isNonConfigurablePropertyIn: typeof isNonConfigurablePropertyIn;

	/**
	* Tests if an object's own property is non-enumerable.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object property is non-enumerable
	*
	* @example
	* var defineProperty = require( `@stdlib/utils/define-property` );
	*
	* var obj = {
	*     'boop': true
	* };
	*
	* defineProperty( obj, 'beep', {
	*     'configurable': false,
	*     'enumerable': false,
	*     'writable': true,
	*     'value': 'beep'
	* });
	*
	* var bool = ns.isNonEnumerableProperty( obj, 'boop' );
	* // returns false
	*
	* bool = ns.isNonEnumerableProperty( obj, 'beep' );
	* // returns true
	*/
	isNonEnumerableProperty: typeof isNonEnumerableProperty;

	/**
	* Tests if an object's own or inherited property is non-enumerable.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object property is non-enumerable
	*
	* @example
	* var defineProperty = require( `@stdlib/utils/define-property` );
	*
	* var obj = {
	*     'boop': true
	* };
	*
	* defineProperty( obj, 'beep', {
	*     'configurable': true,
	*     'enumerable': false,
	*     'writable': true,
	*     'value': true
	* });
	*
	* var bool = ns.isNonEnumerablePropertyIn( obj, 'boop' );
	* // returns false
	*
	* bool = ns.isNonEnumerablePropertyIn( obj, 'beep' );
	* // returns true
	*/
	isNonEnumerablePropertyIn: typeof isNonEnumerablePropertyIn;

	/**
	* Tests if a value is a nonnegative integer.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a nonnegative integer
	*
	* @example
	* var bool = ns.isNonNegativeInteger( 5.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNonNegativeInteger( new Number( 5.0 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isNonNegativeInteger( -5.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isNonNegativeInteger( 3.14 );
	* // returns false
	*
	* @example
	* var bool = ns.isNonNegativeInteger( null );
	* // returns false
	*
	* @example
	* var bool = ns.isNonNegativeInteger.isPrimitive( 3.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNonNegativeInteger.isObject( new Number( 3.0 ) );
	* // returns true
	*/
	isNonNegativeInteger: typeof isNonNegativeInteger;

	/**
	* Tests if a value is an array-like object containing only nonnegative integers.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only nonnegative integers
	*
	* @example
	* var bool = ns.isNonNegativeIntegerArray( [ 3.0, new Number(3.0) ] );
	* // returns true
	*
	* @example
	* var bool = ns.isNonNegativeIntegerArray( [ 3.0, '3.0' ] );
	* // returns false
	*
	* @example
	* var bool = ns.isNonNegativeIntegerArray.primitives( [ 1.0, 0.0, 10.0 ] );
	* // returns true
	*
	* @example
	* var bool = ns.isNonNegativeIntegerArray.objects( [ new Number(3.0), new Number(1.0) ] );
	* // returns true
	*/
	isNonNegativeIntegerArray: typeof isNonNegativeIntegerArray;

	/**
	* Tests if a value is a nonnegative number.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a nonnegative number
	*
	* @example
	* var bool = ns.isNonNegativeNumber( 5.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNonNegativeNumber( new Number( 5.0 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isNonNegativeNumber( 3.14 );
	* // returns true
	*
	* @example
	* var bool = ns.isNonNegativeNumber( -5.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isNonNegativeNumber( null );
	* // returns false
	*
	* @example
	* var bool = ns.isNonNegativeNumber.isPrimitive( 3.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNonNegativeNumber.isObject( new Number( 3.0 ) );
	* // returns true
	*/
	isNonNegativeNumber: typeof isNonNegativeNumber;

	/**
	* Tests if a value is an array-like object containing only nonnegative numbers.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only nonnegative numbers
	*
	* @example
	* var bool = ns.isNonNegativeNumberArray( [ 3.0, new Number(3.0) ] );
	* // returns true
	*
	* @example
	* var bool = ns.isNonNegativeNumberArray( [ 3.0, '3.0' ] );
	* // returns false
	*
	* @example
	* var bool = ns.isNonNegativeNumberArray.primitives( [ 1.0, 0.0, 10.0 ] );
	* // returns true
	*
	* @example
	* var bool = ns.isNonNegativeNumberArray.objects( [ new Number(3.0), new Number(1.0) ] );
	* // returns true
	*/
	isNonNegativeNumberArray: typeof isNonNegativeNumberArray;

	/**
	* Tests if a value is a nonpositive integer.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a nonpositive integer
	*
	* @example
	* var bool = ns.isNonPositiveInteger( -5.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNonPositiveInteger( new Number( -5.0 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isNonPositiveInteger( 5.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isNonPositiveInteger( -3.14 );
	* // returns false
	*
	* @example
	* var bool = ns.isNonPositiveInteger( null );
	* // returns false
	*
	* @example
	* var bool = ns.isNonPositiveInteger.isPrimitive( -3.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNonPositiveInteger.isObject( new Number( -3.0 ) );
	* // returns true
	*/
	isNonPositiveInteger: typeof isNonPositiveInteger;

	/**
	* Tests if a value is an array-like object containing only nonpositive integers.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only nonpositive integers
	*
	* @example
	* var bool = ns.isNonPositiveIntegerArray( [ -3.0, new Number(-3.0) ] );
	* // returns true
	*
	* @example
	* var bool = ns.isNonPositiveIntegerArray( [ -3.0, '-3.0' ] );
	* // returns false
	*
	* @example
	* var bool = ns.isNonPositiveIntegerArray.primitives( [ -1.0, -10.0 ] );
	* // returns true
	*
	* @example
	* var bool = ns.isNonPositiveIntegerArray.objects( [ new Number(-1.0), new Number(-10.0) ] );
	* // returns true
	*/
	isNonPositiveIntegerArray: typeof isNonPositiveIntegerArray;

	/**
	* Tests if a value is a nonpositive number.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a nonpositive number
	*
	* @example
	* var bool = ns.isNonPositiveNumber( -5.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNonPositiveNumber( new Number( -5.0 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isNonPositiveNumber( -3.14 );
	* // returns true
	*
	* @example
	* var bool = ns.isNonPositiveNumber( 5.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isNonPositiveNumber( null );
	* // returns false
	*
	* @example
	* var bool = ns.isNonPositiveNumber.isPrimitive( -3.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNonPositiveNumber.isObject( new Number( -3.0 ) );
	* // returns true
	*/
	isNonPositiveNumber: typeof isNonPositiveNumber;

	/**
	* Tests if a value is an array-like object containing only nonpositive numbers.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only nonpositive numbers
	*
	* @example
	* var bool = ns.isNonPositiveNumberArray( [ -3.0, new Number(-3.0) ] );
	* // returns true
	*
	* @example
	* var bool = ns.isNonPositiveNumberArray( [ -3.0, '-3.0' ] );
	* // returns false
	*
	* @example
	* var bool = ns.isNonPositiveNumberArray.primitives( [ -1.0, -10.0 ] );
	* // returns true
	*
	* @example
	* var bool = ns.isNonPositiveNumberArray.objects( [ new Number(-1.0), new Number(-10.0) ] );
	* // returns true
	*/
	isNonPositiveNumberArray: typeof isNonPositiveNumberArray;

	/**
	* Tests if a value is a non-symmetric matrix.
	*
	* ## Notes
	*
	* -   The implementation must rely on manually checking that \\(M_{ij} \neq M_{ji}\\), and, while element access is deterministic, no way exists to prevent cache misses outside of reordering the underlying matrix elements, thus incurring a larger performance penalty than just "jumping around" in a single pass.
	* -   Worst case scenario: O(N^2).
	*
	* @param v - value to test
	* @returns boolean indicating if a value is a non-symmetric matrix
	*
	* @example
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* var arr = ndarray( 'generic', [ 1, 2, 3, 4 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	* var bool = ns.isNonSymmetricMatrix( arr );
	* // returns true
	*
	* bool = ns.isNonSymmetricMatrix( [] );
	* // returns false
	*/
	isNonSymmetricMatrix: typeof isNonSymmetricMatrix;

	/**
	* Tests if a value is `null`.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is null
	*
	* @example
	* var bool = ns.isNull( null );
	* // returns true
	*
	* bool = ns.isNull( true );
	* // returns false
	*/
	isNull: typeof isNull;

	/**
	* Tests if a value is an array-like object containing only `null` values.
	*
	* @param value - value to test
	* @returns boolean indicating whether an input value is an array-like object containing only `null` values
	*
	* @example
	* var bool = ns.isNullArray( [null,null,null] );
	* // returns true
	*
	* bool = ns.isNullArray( [NaN,2,null] );
	* // returns false
	*/
	isNullArray: typeof isNullArray;

	/**
	* Tests if a value is a number.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a number
	*
	* @example
	* var bool = ns.isNumber( 3.14 );
	* // returns true
	*
	* @example
	* var bool = ns.isNumber( new Number( 3.14 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isNumber( NaN );
	* // returns true
	*
	* @example
	* var bool = ns.isNumber( null );
	* // returns false
	*
	* @example
	* var bool = ns.isNumber.isPrimitive( 3.14 );
	* // returns true
	*
	* @example
	* var bool = ns.isNumber.isObject( new Number( 3.14 ) );
	* // returns true
	*/
	isNumber: typeof isNumber;

	/**
	* Tests if a value is an array-like object containing only numbers.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only numbers
	*
	* @example
	* var bool = ns.isNumberArray( [ -3.0, new Number(0.0), 2.0 ] );
	* // returns true
	*
	* @example
	* var bool = ns.isNumberArray( [ -3.0, '3.0' ] );
	* // returns false
	* @example
	* var bool = ns.isNumberArray.primitives( [ -1.0, 0.0, 5.0 ] );
	* // returns true
	*
	* @example
	* var bool = ns.isNumberArray.objects( [ new Number(1.0), new Number(3.0) ] );
	* // returns true
	*/
	isNumberArray: typeof isNumberArray;

	/**
	* Tests if a value is a numeric array.
	*
	* @param v - value to test
	* @returns boolean indicating if a value is a numeric array
	*
	* @example
	* var bool = ns.isNumericArray( new Int8Array( 10 ) );
	* // returns true
	*
	* bool = ns.isNumericArray( [ 1, 2, 3 ] );
	* // returns true
	*
	* bool = ns.isNumericArray( [ '1', '2', '3' ] );
	* // returns false
	*/
	isNumericArray: typeof isNumericArray;

	/**
	* Tests if a value is an object; e.g., `{}`.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an object
	*
	* @example
	* var bool = ns.isObject( {} );
	* // returns true
	*
	* @example
	* var bool = ns.isObject( null );
	* // returns false
	*/
	isObject: typeof isObject;

	/**
	* Test if a value is an array-like object containing only objects.
	*
	* @param value - value to test
	* @returns boolean indicating whether an input value is an array-like object containing only objects
	*
	* @example
	* var bool = ns.isObjectArray( [ {}, new Number(3.0) ] );
	* // returns true
	*
	* bool = ns.isObjectArray( [ {}, { 'beep': 'boop' } ] );
	* // returns true
	*
	* bool = ns.isObjectArray( [ {}, '3.0' ] );
	* // returns false
	*/
	isObjectArray: typeof isObjectArray;

	/**
	* Tests if a value is object-like.
	*
	* ## Notes
	*
	* -   Return values are the same as would be obtained using the built-in `typeof` operator except that `null` is not considered an object.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is object-like
	*
	* @example
	* var bool = ns.isObjectLike( {} );
	* // returns true
	*
	* @example
	* var bool = ns.isObjectLike( [] );
	* // returns true
	*
	* @example
	* var bool = ns.isObjectLike( null );
	* // returns false
	*/
	isObjectLike: typeof isObjectLike;

	/**
	* Tests if a value is an odd number.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an odd number
	*
	* @example
	* var bool = ns.isOdd( 5.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isOdd( new Number( 6.0 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isOdd( 3.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isOdd.isPrimitive( new Number( 5.0 ) );
	* // returns false
	*
	* @example
	* var bool = ns.isOdd.isObject( 5.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isOdd( null );
	* // returns false
	*/
	isOdd: typeof isOdd;

	/**
	* Tests if a value is a persymmetric matrix.
	*
	* ## Notes
	*
	* -   The implementation must rely on manually checking that \\(M_{ij} = M_{N-j-1,N-i-1}\\), and, while element access is deterministic, no way exists to prevent cache misses outside of reordering the underlying matrix elements, thus incurring a larger performance penalty than just "jumping around" in a single pass.
	* -   Worst case scenario: O(N^2).
	*
	* @param v - value to test
	* @returns boolean indicating if a value is a persymmetric matrix
	*
	* @example
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* var arr = ndarray( 'generic', [ 1, 2, 3, 1 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	* var bool = ns.isPersymmetricMatrix( arr );
	* // returns true
	*
	* bool = ns.isPersymmetricMatrix( [] );
	* // returns false
	*/
	isPersymmetricMatrix: typeof isPersymmetricMatrix;

	/**
	* Tests if a value is a plain object.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a plain object
	*
	* @example
	* var bool = ns.isPlainObject( {} );
	* // returns true
	*
	* @example
	* var bool = ns.isPlainObject( null );
	* // returns false
	*/
	isPlainObject: typeof isPlainObject;

	/**
	* Tests if a value is an array-like object containing only plain objects.
	*
	* @param value - value to test
	* @returns boolean indicating whether an input value is an array-like object containing only plain objects
	*
	* @example
	* var bool = ns.isPlainObjectArray( [ {}, { 'beep': 'boop' } ] );
	* // returns true
	*
	* bool = ns.isPlainObjectArray( [ {}, new Number(3.0) ] );
	* // returns false
	*
	* bool = ns.isPlainObjectArray( [ {}, '3.0' ] );
	* // returns false
	*/
	isPlainObjectArray: typeof isPlainObjectArray;

	/**
	* Tests if a value is a positive integer.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a positive integer
	*
	* @example
	* var bool = ns.isPositiveInteger( 5.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isPositiveInteger( new Number( 5.0 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isPositiveInteger( 0.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isPositiveInteger( -5.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isPositiveInteger( 3.14 );
	* // returns false
	*
	* @example
	* var bool = ns.isPositiveInteger( null );
	* // returns false
	*
	* @example
	* var bool = ns.isPositiveInteger.isPrimitive( 3.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isPositiveInteger.isObject( 3.0 );
	* // returns false
	*/
	isPositiveInteger: typeof isPositiveInteger;

	/**
	* Tests if a value is an array-like object containing only positive integers.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only positive integers
	*
	* @example
	* var bool = ns.isPositiveIntegerArray( [ 3.0, new Number(3.0) ] );
	* // returns true
	*
	* @example
	* var bool = ns.isPositiveIntegerArray( [ 3.0, '3.0' ] );
	* // returns false
	*
	* @example
	* var bool = ns.isPositiveIntegerArray.primitives( [ 1.0, 2.0, 10.0 ] );
	* // returns true
	*
	* @example
	* var bool = ns.isPositiveIntegerArray.objects( [ new Number(3.0), new Number(1.0) ] );
	* // returns true
	*/
	isPositiveIntegerArray: typeof isPositiveIntegerArray;

	/**
	* Tests if a value is a positive number.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a positive number
	*
	* @example
	* var bool = ns.isPositiveNumber( 5.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isPositiveNumber( new Number( 5.0 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isPositiveNumber( 3.14 );
	* // returns true
	*
	* @example
	* var bool = ns.isPositiveNumber( -5.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isPositiveNumber( null );
	* // returns false
	*
	* @example
	* var bool = ns.isPositiveNumber.isPrimitive( 3.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isPositiveNumber.isObject( 3.0 );
	* // returns false
	*/
	isPositiveNumber: typeof isPositiveNumber;

	/**
	* Tests if a value is an array-like object containing only positive numbers.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only positive numbers
	*
	* @example
	* var bool = ns.isPositiveNumberArray( [ 2.7, new Number(3.0) ] );
	* // returns true
	*
	* @example
	* var bool = ns.isPositiveNumberArray( [ 2.7, '3.0' ] );
	* // returns false
	*
	* @example
	* var bool = ns.isPositiveNumberArray.primitives( [ 1.0, 2.0, 10.1 ] );
	* // returns true
	*
	* @example
	* var bool = ns.isPositiveNumberArray.objects( [ new Number(3.0), new Number(1.0) ] );
	* // returns true
	*/
	isPositiveNumberArray: typeof isPositiveNumberArray;

	/**
	* Tests if a value is equal to positive zero.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is equal to positive zero
	*
	* @example
	* var bool = ns.isPositiveZero( 0.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isPositiveZero( new Number( 0.0 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isPositiveZero( -3.14 );
	* // returns false
	*
	* @example
	* var bool = ns.isPositiveZero( 5.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isPositiveZero( -0.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isPositiveZero( null );
	* // returns false
	*
	* @example
	* var bool = ns.isPositiveZero.isPrimitive( 0.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isPositiveZero.isObject( new Number( 0.0 ) );
	* // returns true
	*/
	isPositiveZero: typeof isPositiveZero;

	/**
	* Tests if a value is a prime number.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a prime number
	*
	* @example
	* var bool = ns.isPrime( 5.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isPrime( new Number( 5.0 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isPrime( 3.14 );
	* // returns false
	*
	* @example
	* var bool = ns.isPrime( -5.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isPrime( null );
	* // returns false
	*
	* @example
	* var bool = ns.isPrime.isPrimitive( 5.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isPrime.isObject( new Number( 5.0 ) );
	* // returns true
	*/
	isPrime: typeof isPrime;

	/**
	* Tests if a value is a JavaScript primitive.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a JavaScript primitive
	*
	* @example
	* var bool = ns.isPrimitive( true );
	* // returns true
	*
	* @example
	* var bool = ns.isPrimitive( {} );
	* // returns false
	*/
	isPrimitive: typeof isPrimitive;

	/**
	* Tests if a value is an array-like object containing only JavaScript primitives.
	*
	* @param value - value to test
	* @returns boolean indicating whether an input value is an array-like object containing only JavaScript primitives
	*
	* @example
	* var bool = ns.isPrimitiveArray( [ '3', 2, null ] );
	* // returns true
	*
	* bool = ns.isPrimitiveArray( [ {}, 2, 1 ] );
	* // returns false
	*
	* bool = ns.isPrimitiveArray( [ new String('abc'), '3.0' ] );
	* // returns false
	*/
	isPrimitiveArray: typeof isPrimitiveArray;

	/**
	* Tests if a value is PRNG-like.
	*
	* @param v - value to test
	* @returns boolean indicating if a value is PRNG-like
	*
	* @example
	* var randu = require( `@stdlib/random/base/randu` );
	*
	* var bool = ns.isPRNGLike( randu );
	* // returns true
	*
	* bool = ns.isPRNGLike( [] );
	* // returns false
	*/
	isPRNGLike: typeof isPRNGLike;

	/**
	* Tests if a value is a probability.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a probability
	*
	* @example
	* var bool = ns.isProbability( 0.5 );
	* // returns true
	*
	* @example
	* var bool = ns.isProbability( new Number( 0.5 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isProbability( 3.14 );
	* // returns false
	*
	* @example
	* var bool = ns.isProbability( -5.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isProbability( null );
	* // returns false
	*
	* @example
	* var bool = ns.isProbability.isPrimitive( 0.66 );
	* // returns true
	*
	* @example
	* var bool = ns.isProbability.isObject( new Number( 0.5 ) );
	* // returns true
	*/
	isProbability: typeof isProbability;

	/**
	* Test if a value is an array-like object containing only probabilities.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a positive integer
	*
	* @example
	* var bool = ns.isProbabilityArray( [ 0.3, new Number(0.3) ] );
	* // returns true
	*
	* @example
	* var bool = ns.isProbabilityArray( [ 0.3, '0.3' ] );
	* // returns false
	*
	* @example
	* var bool = ns.isProbabilityArray.primitives( [ 0.1, 0.2, 0.3 ] );
	* // returns true
	*
	* @example
	* var bool = ns.isProbabilityArray.objects( [ new Number(0.3), new Number(0.9) ] );
	* // returns true
	*/
	isProbabilityArray: typeof isProbabilityArray;

	/**
	* Tests if an object's prototype chain contains a provided prototype.
	*
	* @param value - value to test
	* @param proto - prototype
	* @throws second argument must be an object and not null
	* @returns boolean indicating if a provided prototype exists in a prototype chain
	*
	* @example
	* var inherit = require( `@stdlib/utils/inherit` );
	*
	* function Foo() {
	*     return this;
	* }
	*
	* function Bar() {
	*     return this;
	* }
	* inherit( Bar, Foo );
	*
	* var bar = new Bar();
	*
	* var bool = ns.isPrototypeOf( bar, Foo.prototype );
	* // returns true
	*/
	isPrototypeOf: typeof isPrototypeOf;

	/**
	* Tests if a value is a `RangeError` object.
	*
	* ## Notes
	*
	* -   This function should **not** be considered robust. While the function should always return `true` if provided a RangeError (or a descendant) object, false positives may occur due to the fact that the RangeError constructor inherits from Error and has no internal class of its own. Hence, RangeError impersonation is possible.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is a `RangeError` object
	*
	* @example
	* var bool = ns.isRangeError( new RangeError( 'beep' ) );
	* // returns true
	*
	* @example
	* var bool = ns.isRangeError( {} );
	* // returns false
	*/
	isRangeError: typeof isRangeError;

	/**
	* Tests if an object's own property is read-only.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object property is read-only
	*
	* @example
	* var defineProperty = require( `@stdlib/utils/define-property` );
	*
	* var obj = {
	*     'boop': true
	* };
	*
	* defineProperty( obj, 'beep', {
	*     'configurable': false,
	*     'enumerable': true,
	*     'writable': false,
	*     'value': true
	* });
	*
	* var bool = ns.isReadOnlyProperty( obj, 'boop' );
	* // returns false
	*
	* bool = ns.isReadOnlyProperty( obj, 'beep' );
	* // returns true
	*/
	isReadOnlyProperty: typeof isReadOnlyProperty;

	/**
	* Tests if an object's own or inherited property is read-only.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object property is read-only
	*
	* @example
	* var defineProperty = require( `@stdlib/utils/define-property` );
	*
	* var obj = {
	*     'boop': true
	* };
	*
	* defineProperty( obj, 'beep', {
	*     'configurable': false,
	*     'enumerable': true,
	*     'writable': false,
	*     'value': true
	* });
	*
	* var bool = ns.isReadOnlyPropertyIn( obj, 'boop' );
	* // returns false
	*
	* bool = ns.isReadOnlyPropertyIn( obj, 'beep' );
	* // returns true
	*/
	isReadOnlyPropertyIn: typeof isReadOnlyPropertyIn;

	/**
	* Tests if an object's own property is readable and writable.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object property is readable and writable
	*
	* @example
	* var defineProperty = require( `@stdlib/utils/define-property` );
	*
	* var obj = {
	*     'boop': true
	* };
	*
	* function setter( v ) {
	*     obj.boop = v;
	* }
	*
	* defineProperty( obj, 'beep', {
	*     'configurable': false,
	*     'enumerable': false,
	*     'set': setter
	* });
	*
	* var bool = ns.isReadWriteProperty( obj, 'boop' );
	* // returns true
	*
	* bool = ns.isReadWriteProperty( obj, 'beep' );
	* // returns false
	*/
	isReadWriteProperty: typeof isReadWriteProperty;

	/**
	* Tests if an object's own or inherited property is readable and writable.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object property is readable and writable
	*
	* @example
	* var defineProperty = require( `@stdlib/utils/define-property` );
	*
	* var obj = {
	*     'boop': true
	* };
	*
	* function setter( v ) {
	*     obj.boop = v;
	* }
	*
	* defineProperty( obj, 'beep', {
	*     'configurable': false,
	*     'enumerable': false,
	*     'set': setter
	* });
	*
	* var bool = ns.isReadWritePropertyIn( obj, 'boop' );
	* // returns true
	*
	* bool = ns.isReadWritePropertyIn( obj, 'beep' );
	* // returns false
	*/
	isReadWritePropertyIn: typeof isReadWritePropertyIn;

	/**
	* Tests if an object's own property is readable.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns  boolean indicating if an object property is readable
	*
	* @example
	* var defineProperty = require( `@stdlib/utils/define-property` );
	*
	* var obj = {
	*     'boop': true
	* };
	*
	* function setter( v ) {
	*     obj.boop = v;
	* }
	*
	* defineProperty( obj, 'beep', {
	*     'configurable': false,
	*     'enumerable': false,
	*     'set': setter
	* });
	*
	* var bool = ns.isReadableProperty( obj, 'boop' );
	* // returns true
	*
	* bool = ns.isReadableProperty( obj, 'beep' );
	* // returns false
	*/
	isReadableProperty: typeof isReadableProperty;

	/**
	* Tests if an object's own or inherited property is readable.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object property is readable
	*
	* @example
	* var defineProperty = require( `@stdlib/utils/define-property` );
	*
	* var obj = {
	*     'boop': true
	* };
	*
	* function setter( v ) {
	*     obj.boop = v;
	* }
	*
	* defineProperty( obj, 'beep', {
	*     'configurable': false,
	*     'enumerable': false,
	*     'set': setter
	* });
	*
	* var bool = ns.isReadablePropertyIn( obj, 'boop' );
	* // returns true
	*
	* bool = ns.isReadablePropertyIn( obj, 'beep' );
	* // returns false
	*/
	isReadablePropertyIn: typeof isReadablePropertyIn;

	/**
	* Tests if a value is a `ReferenceError` object.
	*
	* ## Notes
	*
	* -   This function should **not** be considered robust. While the function should always return `true` if provided a ReferenceError (or a descendant) object, false positives may occur due to the fact that the ReferenceError constructor inherits from Error and has no internal class of its own. Hence, ReferenceError impersonation is possible.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is a `ReferenceError` object
	*
	* @example
	* var bool = ns.isReferenceError( new ReferenceError( 'beep' ) );
	* // returns true
	*
	* @example
	* var bool = ns.isReferenceError( {} );
	* // returns false
	*/
	isReferenceError: typeof isReferenceError;

	/**
	* Tests if a value is a regular expression.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a regular expression
	*
	* @example
	* var bool = ns.isRegExp( /\.+/ );
	* // returns true
	*
	* @example
	* var bool = ns.isRegExp( {} );
	* // returns false
	*/
	isRegExp: typeof isRegExp;

	/**
	* Tests if a value is a regular expression string.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is a regular expression string
	*
	* @example
	* var bool = ns.isRegExpString( '/beep/' );
	* // returns true
	*
	* @example
	* var bool = ns.isRegExpString( '/beep/gim' );
	* // returns true
	*
	* @example
	* var bool = ns.isRegExpString( 'beep' );
	* // returns false
	*
	* @example
	* var bool = ns.isRegExpString( '' );
	* // returns false
	*
	* @example
	* var bool = ns.isRegExpString( null );
	* // returns false
	*/
	isRegExpString: typeof isRegExpString;

	/**
	* Tests if a value is a relative path.
	*
	* ## Notes
	*
	* -   Function behavior is platform-specific. On Windows platforms, the function is equal to `.win32()`. On POSIX platforms, the function is equal to `.posix()`.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a relative path
	*
	* @example
	* var IS_WINDOWS = require( `@stdlib/assert/is-windows` );
	* var bool;
	* if ( IS_WINDOWS ) {
	*     bool = ns.isRelativePath( 'foo\\bar\\baz' );
	*     // returns true
	*
	*     bool = ns.isRelativePath( 'C:\\foo\\..\\bar\\baz' );
	*     // returns false
	* } else {
	*     bool = ns.isRelativePath( './foo/bar/baz' );
	*     // returns true
	*
	*     bool = ns.isRelativePath( '/foo/../bar/baz' );
	*     // returns false
	* }
	*
	* @example
	* var bool = ns.isRelativePath.posix( './foo/bar/baz' );
	* // returns true
	*
	* @example
	* var bool = ns.isRelativePath.posix( '/foo/../bar/baz' );
	* // returns false
	*
	* @example
	* var bool = ns.isRelativePath.win32( 'foo\\bar\\baz' );
	* // returns true
	*
	* @example
	* var bool = ns.isRelativePath.win32( 'C:\\foo\\..\\bar\\baz' );
	* // returns false
	*/
	isRelativePath: typeof isRelativePath;

	/**
	* Tests if a value is a safe integer.
	*
	* ## Notes
	*
	* -   An integer valued number is "safe" when the number can be exactly represented as a double-precision floating-point number.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a safe integer
	*
	* @example
	* var bool = ns.isSafeInteger( 5.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isSafeInteger( new Number( 5.0 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isSafeInteger( 2.0e300 );
	* // returns false
	*
	* @example
	* var bool = ns.isSafeInteger( -3.14 );
	* // returns false
	*
	* @example
	* var bool = ns.isSafeInteger( null );
	* // returns false
	*
	* @example
	* var bool = ns.isSafeInteger.isPrimitive( -3.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isSafeInteger.isObject( new Number( 3.0 ) );
	* // returns true
	*/
	isSafeInteger: typeof isSafeInteger;

	/**
	* Tests if a value is an array-like object containing only safe integers.
	*
	* ## Notes
	*
	* -   An integer valued number is "safe" when the number can be exactly represented as a double-precision floating-point number.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only safe integers
	*
	* @example
	* var bool = ns.isSafeIntegerArray( [ -3.0, new Number(0.0), 2.0 ] );
	* // returns true
	*
	* @example
	* var bool = ns.isSafeIntegerArray( [ -3.0, '3.0' ] );
	* // returns false
	*
	* @example
	* var bool = ns.isSafeIntegerArray.primitives( [ -1.0, 10.0 ] );
	* // returns true
	*
	* @example
	* var bool = ns.isSafeIntegerArray.primitives( [ -1.0, 0.0, 5.0 ] );
	* // returns true
	*
	* @example
	* var bool = ns.isSafeIntegerArray.primitives( [ -3.0, new Number(-1.0) ] );
	* // returns false
	*
	* @example
	* var bool = ns.isSafeIntegerArray.objects( [ new Number(1.0), new Number(3.0) ] );
	* // returns true
	*
	* @example
	* var bool = ns.isSafeIntegerArray.objects( [ -1.0, 0.0, 3.0 ] );
	* // returns false
	*
	* @example
	* var bool = ns.isSafeIntegerArray.objects( [ 3.0, new Number(-1.0) ] );
	* // returns false
	*/
	isSafeIntegerArray: typeof isSafeIntegerArray;

	/**
	* Tests if two arguments are the same value.
	*
	* ## Notes
	*
	* -   The function differs from the `===` operator in that the function treats `-0` and `+0` as distinct and `NaNs` as the same.
	*
	* @param a - first input value
	* @param b - second input value
	* @returns boolean indicating whether two arguments are the same value
	*
	* @example
	* var bool = ns.isSameValue( true, true );
	* // returns true
	*
	* @example
	* var bool = ns.isSameValue( 3.14, 3.14 );
	* // returns true
	*
	* @example
	* var bool = ns.isSameValue( {}, {} );
	* // returns false
	*
	* @example
	* var bool = ns.isSameValue( -0.0, -0.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isSameValue( -0.0, 0.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isSameValue( NaN, NaN );
	* // returns true
	*
	* @example
	* var bool = ns.isSameValue( [], [] );
	* // returns false
	*/
	isSameValue: typeof isSameValue;

	/**
	* Tests if two arguments are the same value.
	*
	* ## Notes
	*
	* -   The function differs from the `===` operator in that the function treats `NaNs` as the same.
	*
	* @param a - first input value
	* @param b - second input value
	* @returns boolean indicating whether two arguments are the same value
	*
	* @example
	* var bool = ns.isSameValueZero( true, true );
	* // returns true
	*
	* @example
	* var bool = ns.isSameValueZero( 3.14, 3.14 );
	* // returns true
	*
	* @example
	* var bool = ns.isSameValueZero( {}, {} );
	* // returns false
	*
	* @example
	* var bool = ns.isSameValueZero( -0.0, -0.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isSameValueZero( -0.0, 0.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isSameValueZero( NaN, NaN );
	* // returns true
	*
	* @example
	* var bool = ns.isSameValueZero( [], [] );
	* // returns false
	*/
	isSameValueZero: typeof isSameValueZero;

	/**
	* Tests if a value is a `SharedArrayBuffer`.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a `SharedArrayBuffer`
	*
	* @example
	* var SharedArrayBuffer = require( `@stdlib/array/shared-buffer` );
	*
	* try {
	*     var bool = ns.isSharedArrayBuffer( new SharedArrayBuffer( 10 ) );
	*     // returns true
	* } catch ( err ) {
	*     console.log( 'Environment does not support SharedArrayBuffers.' );
	* }
	*
	* @example
	* var bool = ns.isSharedArrayBuffer( [] );
	* // returns false
	*/
	isSharedArrayBuffer: typeof isSharedArrayBuffer;

	/**
	* Tests if a value is a skew-centrosymmetric matrix.
	*
	* ## Notes
	*
	* -   The implementation must rely on manually checking that \\(M_{ij} = -M_{N-i-1,N-j-1}\\), and, while element access is deterministic, no way exists to prevent cache misses outside of reordering the underlying matrix elements, thus incurring a larger performance penalty than just "jumping around" in a single pass.
	* -   Worst case scenario: O(N^2).
	*
	* @param v - value to test
	* @returns boolean indicating if a value is a skew-centrosymmetric matrix
	*
	* @example
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* var arr = ndarray( 'generic', [ 2, 1, -1, -2 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	* var bool = ns.isSkewCentrosymmetricMatrix( arr );
	* // returns true
	*
	* bool = ns.isSkewCentrosymmetricMatrix( [] );
	* // returns false
	*/
	isSkewCentrosymmetricMatrix: typeof isSkewCentrosymmetricMatrix;

	/**
	* Tests if a value is a skew-persymmetric matrix.
	*
	* ## Notes
	*
	* -   The implementation must rely on manually checking that \\(M_{ij} = -M_{N-j-1,N-i-1}\\), and, while element access is deterministic, no way exists to prevent cache misses outside of reordering the underlying matrix elements, thus incurring a larger performance penalty than just "jumping around" in a single pass.
	* -   Worst case scenario: O(N^2).
	*
	* @param v - value to test
	* @returns boolean indicating if a value is a skew-persymmetric matrix
	*
	* @example
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* var arr = ndarray( 'generic', [ 1, 0, 0, -1 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	* var bool = ns.isSkewPersymmetricMatrix( arr );
	* // returns true
	*
	* bool = ns.isSkewPersymmetricMatrix( [] );
	* // returns false
	*/
	isSkewPersymmetricMatrix: typeof isSkewPersymmetricMatrix;

	/**
	* Tests if a value is a skew-symmetric matrix.
	*
	* ## Notes
	*
	* -   The implementation must rely on manually checking that \\(M_{ij} = -M_{ji}\\), and, while element access is deterministic, no way exists to prevent cache misses outside of reordering the underlying matrix elements, thus incurring a larger performance penalty than just "jumping around" in a single pass.
	* -   Worst case scenario: O(N^2).
	*
	* @param v - value to test
	* @returns boolean indicating if a value is a skew-symmetric matrix
	*
	* @example
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* var arr = ndarray( 'generic', [ 0, -1, 1, 0 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	* var bool = ns.isSkewSymmetricMatrix( arr );
	* // returns true
	*
	* bool = ns.isSkewSymmetricMatrix( [] );
	* // returns false
	*/
	isSkewSymmetricMatrix: typeof isSkewSymmetricMatrix;

	/**
	* Tests if a value is a 2-dimensional ndarray-like object having equal dimensions.
	*
	* @param v - value to test
	* @returns boolean indicating if a value is a 2-dimensional ndarray-like object having equal dimensions
	*
	* @example
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* var arr = ndarray( 'generic', [ 0, 0, 0, 0 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	* var bool = ns.isSquareMatrix( arr );
	* // returns true
	*
	* bool = ns.isSquareMatrix( [] );
	* // returns false
	*/
	isSquareMatrix: typeof isSquareMatrix;

	/**
	* Tests if a value is a square number.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a square number
	*
	* @example
	* var bool = ns.isSquareNumber( 4.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isSquareNumber( new Number( 4.0 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isSquareNumber( 3.14 );
	* // returns false
	*
	* @example
	* var bool = ns.isSquareNumber( -5.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isSquareNumber( null );
	* // returns false
	*
	* @example
	* var bool = ns.isSquareNumber.isPrimitive( 4.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isSquareNumber.isObject( new Number( 4.0 ) );
	* // returns true
	*/
	isSquareNumber: typeof isSquareNumber;

	/**
	* Tests if a value is a square triangular number.
	*
	* ## Notes
	*
	* -   Return values are not reliable for numbers greater than `1125899906842624`.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a square triangular number
	*
	* @example
	* var bool = ns.isSquareTriangularNumber( 36.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isSquareTriangularNumber( new Number( 36.0 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isSquareTriangularNumber( 3.14 );
	* // returns false
	*
	* @example
	* var bool = ns.isSquareTriangularNumber( -5.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isSquareTriangularNumber( null );
	* // returns false
	*
	* @example
	* var bool = ns.isSquareTriangularNumber.isPrimitive( 36.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isSquareTriangularNumber.isObject( new Number( 36.0 ) );
	* // returns true
	*/
	isSquareTriangularNumber: typeof isSquareTriangularNumber;

	/**
	* Tests if two arguments are strictly equal.
	*
	* ## Notes
	*
	* -   The function differs from the `===` operator in that the function treats `-0` and `+0` as distinct.
	*
	* @param a - first input value
	* @param b - second input value
	* @returns boolean indicating whether two arguments are strictly equal
	*
	* @example
	* var bool = ns.isStrictEqual( true, true );
	* // returns true
	*
	* @example
	* var bool = ns.isStrictEqual( 3.14, 3.14 );
	* // returns true
	*
	* @example
	* var bool = ns.isStrictEqual( {}, {} );
	* // returns false
	*
	* @example
	* var bool = ns.isStrictEqual( -0.0, -0.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isStrictEqual( -0.0, 0.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isStrictEqual( NaN, NaN );
	* // returns false
	*
	* @example
	* var bool = ns.isStrictEqual( [], [] );
	* // returns false
	*/
	isStrictEqual: typeof isStrictEqual;

	/**
	* Tests if a value is a string.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a string
	*
	* @example
	* var bool = ns.isString( new String( 'beep' ) );
	* // returns true
	*
	* @example
	* var bool = ns.isString( 'beep' );
	* // returns true
	*
	* @example
	* var bool = ns.isString.isPrimitive( 'beep' );
	* // returns true
	*
	* @example
	* var bool = ns.isString.isObject( 'beep' );
	* // returns false
	*/
	isString: typeof isString;

	/**
	* Tests if a value is an array of strings.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array of strings
	*
	* @example
	* var bool = ns.isStringArray( [ 'abc', 'def' ] );
	* // returns true
	*
	* @example
	* var bool = ns.isStringArray( [ 'abc', 123 ] );
	* // returns false
	*
	* @example
	* var bool = ns.isStringArray.primitives( [ 'abc', 'def' ] );
	* // returns true
	*
	* @example
	* var bool = ns.isStringArray.objects( [ new String( 'abc' ), new String( 'def' ) ] );
	* // returns true
	*/
	isStringArray: typeof isStringArray;

	/**
	* Tests if a value is a symbol.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a symbol
	*
	* @example
	* var Symbol = require( `@stdlib/symbol/ctor` );
	*
	* var bool = ns.isSymbol.isPrimitive( Symbol( 'beep' ) );
	* // returns true
	*
	* @example
	* var Symbol = require( `@stdlib/symbol/ctor` );
	*
	* var bool = ns.isSymbol.isPrimitive( Object( Symbol( 'beep' ) ) );
	* // returns false
	*
	* @example
	* var Symbol = require( `@stdlib/symbol/ctor` );
	*
	* var bool = ns.isSymbol.isPrimitive( Symbol( 'beep' ) );
	* // returns true
	*
	* @example
	* var Symbol = require( `@stdlib/symbol/ctor` );
	*
	* var bool = ns.isSymbol.isPrimitive( Object( Symbol( 'beep' ) ) );
	* // returns false
	*
	* @example
	* var Symbol = require( `@stdlib/symbol/ctor` );
	*
	* var bool = ns.isSymbol.isObject( Symbol( 'beep' ) );
	* // returns false
	*
	* @example
	* var Symbol = require( `@stdlib/symbol/ctor` );
	*
	* var bool = ns.isSymbol.isObject( Object( Symbol( 'beep' ) ) );
	* // returns true
	*/
	isSymbol: typeof isSymbol;

	/**
	* Tests if a value is an array-like object containing only symbols.
	*
	* ## Notes
	*
	* -   In pre-ES2015 environments, the function always returns `false`.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array of strings
	*
	* @example
	* var bool = ns.isSymbolArray( [ Symbol( 'abc' ), Symbol( 'def' ) ] );
	* // returns true
	*
	* @example
	* var bool = ns.isSymbolArray( [ Symbol( 'abc' ), 'def' ] );
	* // returns false
	*
	* @example
	* var bool = ns.isSymbolArray.primitives( [ Symbol( 'abc' ), Symbol( 'def' ) ] );
	* // returns true
	*
	* @example
	* var bool = ns.isSymbolArray.objects( [ Object( Symbol( 'abc' ) ), Object( Symbol( 'def' ) ) ] );
	* // returns true
	*/
	isSymbolArray: typeof isSymbolArray;

	/**
	* Tests if a value is a symmetric matrix.
	*
	* ## Notes
	*
	* -   The implementation must rely on manually checking that \\(M_{ij} = M_{ji}\\), and, while element access is deterministic, no way exists to prevent cache misses outside of reordering the underlying matrix elements, thus incurring a larger performance penalty than just "jumping around" in a single pass.
	* -   Worst case scenario: O(N^2).
	*
	* @param v - value to test
	* @returns boolean indicating if a value is a symmetric matrix
	*
	* @example
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* var arr = ndarray( 'generic', [ 0, 1, 1, 2 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	* var bool = ns.isSymmetricMatrix( arr );
	* // returns true
	*
	* bool = ns.isSymmetricMatrix( [] );
	* // returns false
	*/
	isSymmetricMatrix: typeof isSymmetricMatrix;

	/**
	* Tests if a value is a `SyntaxError` object.
	*
	* ## Notes
	*
	* - This function should **not** be considered robust. While the function should always return `true` if provided a SyntaxError (or a descendant) object, false positives may occur due to the fact that the SyntaxError constructor inherits from Error and has no internal class of its own. Hence, SyntaxError impersonation is possible.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is a `SyntaxError` object
	*
	* @example
	* var bool = ns.isSyntaxError( new SyntaxError( 'beep' ) );
	* // returns true
	*
	* @example
	* var bool = ns.isSyntaxError( {} );
	* // returns false
	*/
	isSyntaxError: typeof isSyntaxError;

	/**
	* Tests if a value is a triangular number.
	*
	* ## Notes
	*
	* -   Return values are not reliable for numbers greater than `1125899906842624`.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a triangular number
	*
	* @example
	* var bool = ns.isTriangularNumber( 36.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isTriangularNumber( new Number( 36.0 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isTriangularNumber( 3.14 );
	* // returns false
	*
	* @example
	* var bool = ns.isTriangularNumber( -5.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isTriangularNumber( null );
	* // returns false
	*
	* @example
	* var bool = ns.isTriangularNumber.isPrimitive( 36.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isTriangularNumber.isObject( new Number( 36.0 ) );
	* // returns true
	*/
	isTriangularNumber: typeof isTriangularNumber;

	/**
	* Tests if a value is truthy.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is truthy
	*
	* @example
	* var bool = ns.isTruthy( true );
	* // returns true
	*
	* @example
	* var bool = ns.isTruthy( [] );
	* // returns true
	*
	* @example
	* var bool = ns.isTruthy( false );
	* // returns false
	*
	* @example
	* var bool = ns.isTruthy( null );
	* // returns false
	*
	* @example
	* var bool = ns.isTruthy( '' );
	* // returns false
	*
	* @example
	* var bool = ns.isTruthy( 0 );
	* // returns false
	*
	* @example
	* var bool = ns.isTruthy( void 0 );
	* // returns false
	*
	* @example
	* var bool = ns.isTruthy( NaN );
	* // returns false
	*/
	isTruthy: typeof isTruthy;

	/**
	* Tests if a value is an array-like object containing only truthy values.
	*
	* @param value - value to test
	* @returns boolean indicating whether an input value is an array-like object containing only truthy values
	*
	* @example
	* var bool = ns.isTruthyArray( [ {}, [] ] );
	* // returns true
	*
	* bool = ns.isTruthyArray( [ false, null, void 0, '', 0, NaN ] );
	* // returns false
	*
	* bool = ns.isTruthyArray( [] );
	* // returns false
	*/
	isTruthyArray: typeof isTruthyArray;

	/**
	* Tests if a value is a `TypeError` object.
	*
	* ## Notes
	*
	* - This function should **not** be considered robust. While the function should always return `true` if provided a TypeError (or a descendant) object, false positives may occur due to the fact that the TypeError constructor inherits from Error and has no internal class of its own. Hence, TypeError impersonation is possible.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is a `TypeError` object
	*
	* @example
	* var bool = ns.isTypeError( new TypeError( 'beep' ) );
	* // returns true
	*
	* @example
	* var bool = ns.isTypeError( {} );
	* // returns false
	*/
	isTypeError: typeof isTypeError;

	/**
	* Tests if a value is a typed array.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a typed array
	*
	* @example
	* var Int8Array = require( `@stdlib/array/int8` );
	*
	* var bool = ns.isTypedArray( new Int8Array( 10 ) );
	* // returns true
	*/
	isTypedArray: typeof isTypedArray;

	/**
	* Tests if a value is a valid typed array length.
	*
	* ## Notes
	*
	* -   A valid length property for a typed array instance is any integer value on the interval `[0, 2^53-1]`.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a valid typed array length
	*
	* @example
	* var bool = ns.isTypedArrayLength( 3 );
	* // returns true
	*
	* @example
	* var bool = ns.isTypedArrayLength( 3.14 );
	* // returns false
	*/
	isTypedArrayLength: typeof isTypedArrayLength;

	/**
	* Tests if a value is typed-array-like.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is typed-array-like
	*
	* @example
	* var arr = {
	*	'BYTES_PER_ELEMENT': 8,
	*	'length': 10,
	*	'byteOffset': 0,
	*	'byteLength': 10
	* };
	* var val = ns.isTypedArrayLike( arr );
	* // returns true
	*
	* @example
	* var Int8Array = require( `@stdlib/array/int8` );
	*
	* var val = ns.isTypedArrayLike( new Int8Array( 4 ) );
	* // returns true
	*
	* @example
	* var val = ns.isTypedArrayLike( [] );
	* // returns false
	*
	* @example
	* var val = ns.isTypedArrayLike( {} );
	* // returns false
	*
	* @example
	* var val = ns.isTypedArrayLike( null );
	* // returns false
	*
	* @example
	* var val = ns.isTypedArrayLike( 'beep' );
	* // returns false
	*/
	isTypedArrayLike: typeof isTypedArrayLike;

	/**
	* Tests if a value is a Uint8Array.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a Uint8Array
	*
	* @example
	* var bool = ns.isUint8Array( new Uint8Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isUint8Array( [] );
	* // returns false
	*/
	isUint8Array: typeof isUint8Array;

	/**
	* Tests if a value is a Uint8ClampedArray.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a Uint8ClampedArray
	*
	* @example
	* var bool = ns.isUint8ClampedArray( new Uint8ClampedArray( 10 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isUint8ClampedArray( [] );
	* // returns false
	*/
	isUint8ClampedArray: typeof isUint8ClampedArray;

	/**
	* Tests if a value is a Uint16Array.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a Uint16Array
	*
	* @example
	* var bool = ns.isUint16Array( new Uint16Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isUint16Array( [] );
	* // returns false
	*/
	isUint16Array: typeof isUint16Array;

	/**
	* Tests if a value is a Uint32Array.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a Uint32Array
	*
	* @example
	* var bool = ns.isUint32Array( new Uint32Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = ns.isUint32Array( [] );
	* // returns false
	*/
	isUint32Array: typeof isUint32Array;

	/**
	* Tests if a value is a UNC path.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a UNC path
	*
	* @example
	* var bool = ns.isUNCPath( '\\\\server\\share\\foo\\bar\\baz' );
	* // returns true
	*
	* @example
	* var bool = ns.isUNCPath( '/foo/bar/baz' );
	* // returns false
	*/
	isUNCPath: typeof isUNCPath;

	/**
	* Tests if a value is `undefined`.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is undefined
	*
	* @example
	* var bool = ns.isUndefined( undefined );
	* // returns true
	*
	* bool = ns.isUndefined( null );
	* // returns false
	*/
	isUndefined: typeof isUndefined;

	/**
	* Tests if a value is `undefined` or `null`.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is undefined
	*
	* @example
	* var bool = ns.isUndefinedOrNull( undefined );
	* // returns true
	*
	* bool = ns.isUndefinedOrNull( null );
	* // returns true
	*
	* bool = ns.isUndefinedOrNull( false );
	* // returns false
	*/
	isUndefinedOrNull: typeof isUndefinedOrNull;

	/**
	* Tests if a value is an array of probabilities that sum to one.
	*
	* @param v - value to test
	* @returns boolean indicating if a value is a probability array
	*
	* @example
	* var bool = ns.isUnityProbabilityArray( [ 0.25, 0.5, 0.25 ] );
	* // returns true
	*
	* @example
	* var bool = ns.isUnityProbabilityArray( new Uint8Array( [ 0, 1 ] ) );
	* // returns true
	*
	* @example
	* var bool = ns.isUnityProbabilityArray( [ 0.4, 0.4, 0.4 ] );
	* // returns false
	*
	* @example
	* var bool = ns.isUnityProbabilityArray( [ 3.14, 0.0 ] );
	* // returns false
	*/
	isUnityProbabilityArray: typeof isUnityProbabilityArray;

	/**
	* Tests if a value is an uppercase string.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an uppercase string
	*
	* @example
	* var bool = ns.isUppercase( 'HELLO' );
	* // returns true
	*
	* @example
	* var bool = ns.isUppercase( 'World' );
	* // returns false
	*
	* @example
	* var bool = ns.isUppercase( '!' );
	* // returns false
	*
	* @example
	* var bool = ns.isUppercase( 'salt and light' );
	* // returns false
	*/
	isUppercase: typeof isUppercase;

	/**
	* Tests if a value is a URI.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a URI
	*
	* @example
	* var bool = ns.isURI( 'http://google.com' );
	* // returns true
	*
	* @example
	* var bool = ns.isURI( 'http://localhost/' );
	* // returns true
	*
	* @example
	* var bool = ns.isURI( 'http://example.w3.org/path%20with%20spaces.html' );
	* // returns true
	*
	* @example
	* var bool = ns.isURI( 'http://example.w3.org/%20' );
	* // returns true
	*
	* @example
	* var bool = ns.isURI( 'ftp://ftp.is.co.za/rfc/rfc1808.txt' );
	* // returns true
	*
	* @example
	* var bool = ns.isURI( 'ftp://ftp.is.co.za/../../../rfc/rfc1808.txt' );
	* // returns true
	*
	* @example
	* var bool = ns.isURI( 'http://www.ietf.org/rfc/rfc2396.txt' );
	* // returns true
	*
	* @example
	* var bool = ns.isURI( 'ldap://[2001:db8::7]/c=GB?objectClass?one' );
	* // returns true
	*
	* @example
	* var bool = ns.isURI( 'mailto:John.Doe@example.com' );
	* // returns true
	*
	* @example
	* var bool = ns.isURI( 'news:comp.infosystems.www.servers.unix' );
	* // returns true
	*
	* @example
	* var bool = ns.isURI( 'tel:+1-816-555-1212' );
	* // returns true
	*
	* @example
	* var bool = ns.isURI( 'telnet://192.0.2.16:80/' );
	* // returns true
	*
	* @example
	* var bool = ns.isURI( 'urn:oasis:names:specification:docbook:dtd:xml:4.1.2' );
	* // returns true
	*
	* @example
	* // No scheme:
	* var bool = ns.isURI( '' );
	* // returns false
	*
	* @example
	* // No scheme:
	* var bool = ns.isURI( 'foo' );
	* // returns false
	*
	* @example
	* // No scheme:
	* var bool = ns.isURI( 'foo@bar' );
	* // returns false
	*
	* @example
	* // No scheme:
	* var bool = ns.isURI( '://foo/' );
	* // returns false
	*
	* @example
	* // Illegal characters:
	* var bool = ns.isURI( 'http://<foo>' );
	* // returns false
	*
	* @example
	* // Invalid path:
	* var bool = ns.isURI( 'http:////foo.html' );
	* // returns false
	*
	* @example
	* // Incomplete hex escapes...
	* var bool = ns.isURI( 'http://example.w3.org/%a' );
	* // returns false
	*
	* @example
	* var bool = ns.isURI( 'http://example.w3.org/%a/foo' );
	* // returns false
	*
	* @example
	* var bool = ns.isURI( 'http://example.w3.org/%at' );
	* // returns false
	*/
	isURI: typeof isURI;

	/**
	* Tests if a value is a `URIError` object.
	*
	* ## Notes
	*
	* - This function should **not** be considered robust. While the function should always return `true` if provided a URIError (or a descendant) object, false positives may occur due to the fact that the URIError constructor inherits from Error and has no internal class of its own. Hence, URIError impersonation is possible.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is a `URIError` object
	*
	* @example
	* var bool = ns.isURIError( new URIError( 'beep' ) );
	* // returns true
	*
	* @example
	* var bool = ns.isURIError( {} );
	* // returns false
	*/
	isURIError: typeof isURIError;

	/**
	* Tests if a value is a 1-dimensional ndarray-like object.
	*
	* @param v - value to test
	* @returns boolean indicating if a value is a 1-dimensional ndarray-like object
	*
	* @example
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* var arr = ndarray( 'generic', [ 0, 0, 0, 0 ], [ 4 ], [ 1 ], 0, 'row-major' );
	* var bool = ns.isVectorLike( arr );
	* // returns true
	*
	* bool = ns.isVectorLike( [] );
	* // returns false
	*/
	isVectorLike: typeof isVectorLike;

	/**
	* Boolean indicating if the runtime is a web worker.
	*
	* @example
	* var bool = ns.IS_WEB_WORKER;
	* // returns <boolean>
	*/
	IS_WEB_WORKER: typeof IS_WEB_WORKER;

	/**
	* Tests whether a string contains only white space characters.
	*
	* @param x - value to test
	* @returns boolean indicating if a string contains only white space characters
	*
	* @example
	* var out = ns.isWhitespace( '           ' );
	* // returns true
	*
	* @example
	* var out = ns.isWhitespace( 'beep boop' );
	* // returns false
	*
	* @example
	* var out = ns.isWhitespace( '' );
	* // returns false
	*
	* @example
	* var out = ns.isWhitespace( 123 );
	* // returns false
	*/
	isWhitespace: typeof isWhitespace;

	/**
	* Boolean indicating if the current process is running on Windows.
	*
	* @example
	* var PLATFORM = require( `@stdlib/os/platform` );
	*
	* if ( ns.IS_WINDOWS ) {
	*     console.log( 'Running on Windows...' );
	* } else {
	*     console.log( 'Running on %s...', PLATFORM );
	* }
	*/
	IS_WINDOWS: typeof IS_WINDOWS;

	/**
	* Tests if an object's own property is writable.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object property is writable
	*
	* @example
	* var defineProperty = require( `@stdlib/utils/define-property` );
	*
	* var obj = {
	*     'boop': true
	* };
	*
	* defineProperty( obj, 'beep', {
	*     'configurable': false,
	*     'enumerable': false,
	*     'writable': false,
	*     'value': 'beep'
	* });
	*
	* var bool = ns.isWritableProperty( obj, 'boop' );
	* // returns true
	*
	* bool = ns.isWritableProperty( obj, 'beep' );
	* // returns false
	*/
	isWritableProperty: typeof isWritableProperty;

	/**
	* Tests if an object's own or inherited property is writable.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object property is writable
	*
	* @example
	* var defineProperty = require( `@stdlib/utils/define-property` );
	*
	* var obj = {
	*     'boop': true
	* };
	*
	* defineProperty( obj, 'beep', {
	*     'configurable': false,
	*     'enumerable': false,
	*     'writable': false,
	*     'value': 'beep'
	* });
	*
	* var bool = ns.isWritablePropertyIn( obj, 'boop' );
	* // returns true
	*
	* bool = ns.isWritablePropertyIn( obj, 'beep' );
	* // returns false
	*/
	isWritablePropertyIn: typeof isWritablePropertyIn;

	/**
	* Tests if an object's own property is write-only.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object property is write-only
	*
	* @example
	* var defineProperty = require( `@stdlib/utils/define-property` );
	*
	* var obj = {
	*     'boop': true
	* };
	*
	* function setter( v ) {
	*     obj.boop = v;
	* }
	*
	* defineProperty( obj, 'beep', {
	*     'configurable': false,
	*     'enumerable': true,
	*     'set': setter
	* });
	*
	* var bool = ns.isWriteOnlyProperty( obj, 'boop' );
	* // returns false
	*
	* bool = ns.isWriteOnlyProperty( obj, 'beep' );
	* // returns true
	*/
	isWriteOnlyProperty: typeof isWriteOnlyProperty;

	/**
	* Tests if an object's own or inherited property is write-only.
	*
	* @param value - value to test
	* @param property - property to test
	* @returns boolean indicating if an object property is write-only
	*
	* @example
	* var defineProperty = require( `@stdlib/utils/define-property` );
	*
	* var obj = {
	*     'boop': true
	* };
	*
	* function setter( v ) {
	*     obj.boop = v;
	* }
	*
	* defineProperty( obj, 'beep', {
	*     'configurable': false,
	*     'enumerable': true,
	*     'set': setter
	* });
	*
	* var bool = ns.isWriteOnlyPropertyIn( obj, 'boop' );
	* // returns false
	*
	* bool = ns.isWriteOnlyPropertyIn( obj, 'beep' );
	* // returns true
	*/
	isWriteOnlyPropertyIn: typeof isWriteOnlyPropertyIn;
}

/**
* Standard assertion utilities.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
