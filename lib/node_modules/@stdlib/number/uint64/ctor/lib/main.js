/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

/* eslint-disable max-len, no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var hasBigIntSupport = require( '@stdlib/assert/has-bigint-support' );
var isUint32Array = require( '@stdlib/assert/is-uint32array' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isBigInt = require( '@stdlib/assert/is-bigint' ).isPrimitive;
var isCollection = require( '@stdlib/assert/is-collection' );
var isBetween = require( '@stdlib/assert/is-between' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var BigInt = require( '@stdlib/bigint/ctor' );
var Uint32Array = require( '@stdlib/array/uint32' );
var join = require( '@stdlib/array/base/join' );
var UINT32_MAX = require( '@stdlib/constants/uint32/max' );
var MAX_SAFE_INTEGER = require( '@stdlib/constants/float64/max-safe-integer' );
var format = require( '@stdlib/string/format' );
var indices = require( './indices.js' );
var int2str = require( './to_string.js' );


// VARIABLES //

var HAS_BIGINT = hasBigIntSupport();
var TWO_32 = 0x100000000; // 2^32


// MAIN //

/**
* Unsigned 64-bit integer constructor.
*
* @constructor
* @param {(NonNegativeInteger|bigint)} value - integer value
* @throws {TypeError} must invoke using the `new` keyword
* @throws {TypeError} must provide a valid number
* @returns {Uint64} unsigned 64-bit integer
*
* @example
* var v = new Uint64( 5 );
* // returns <Uint64>
*/
function Uint64( value ) {
	var buffer;
	var v;
	if ( !( this instanceof Uint64 ) ) {
		throw new TypeError( 'invalid invocation. Constructor must be called with the `new` keyword.' );
	}
	buffer = new Uint32Array( 2 );
	if ( isBigInt( value ) ) {
		v = BigInt.asUintN( 64, value );
		if ( v !== value ) {
			throw new TypeError( format( 'invalid argument. Must provide an integer on the interval [0, 2^64-1]. Value: `%s`.', value ) );
		}
		buffer[ indices.HIGH ] = v >> BigInt( 32 );
		buffer[ indices.LOW ] = v & BigInt( UINT32_MAX );
	} else if ( isInteger( value ) && isBetween( value, 0, MAX_SAFE_INTEGER ) ) {
		buffer[ indices.HIGH ] = ( value / TWO_32 ) >>> 0;
		buffer[ indices.LOW ] = value >>> 0;
	} else {
		throw new TypeError( format( 'invalid argument. Must provide an integer on the interval [0, 2^53-1]. Value: `%s`.', value ) );
	}
	setReadOnly( this, '_buffer', buffer );
	return this;
}

/**
* Constructor name.
*
* @name name
* @memberof Uint64
* @readonly
* @type {string}
* @default 'Uint64'
*
* @example
* var name = Uint64.name;
* // returns 'Uint64'
*/
setReadOnly( Uint64, 'name', 'Uint64' );

/**
* Creates a new unsigned 64-bit integer from an array-like object containing a high and low word.
*
* @name from
* @memberof Uint64
* @type {Function}
* @param {Collection} words - high and low words
* @throws {TypeError} must provide an array-like object containing two elements
* @returns {Uint64} unsigned 64-bit integer
*
* @example
* var x = Uint64.from( [ 1234, 5678 ] );
* // returns <Uint64>
*/
setReadOnly( Uint64, 'from', function fromWords( words ) {
	var v;
	if ( !isCollection( words ) ) {
		throw new TypeError( format( 'invalid argument. Must provide an array. Value: `%s`.', words ) );
	}
	if ( words.length !== 2 ) {
		throw new TypeError( format( 'invalid argument. Must provide an array of length 2. Value: `[%s]`.', join( words, ',' ) ) );
	}
	v = new Uint64( 0 );
	if ( isUint32Array( words ) ) {
		v._buffer[ indices.HIGH ] = words[ 0 ]; // eslint-disable-line no-underscore-dangle
		v._buffer[ indices.LOW ] = words[ 1 ]; // eslint-disable-line no-underscore-dangle
		return v;
	}

	// TODO: consider supporting any iterable object

	if (
		isInteger( words[ 0 ] ) &&
		isInteger( words[ 1 ] ) &&
		isBetween( words[ 0 ], 0, UINT32_MAX ) &&
		isBetween( words[ 1 ], 0, UINT32_MAX )
	) {
		// TODO: consider whether we should support accessor arrays here
		v._buffer[ indices.HIGH ] = words[ 0 ]; // eslint-disable-line no-underscore-dangle
		v._buffer[ indices.LOW ] = words[ 1 ]; // eslint-disable-line no-underscore-dangle
		return v;
	}
	throw new TypeError( format( 'invalid argument. Must provide an array of integer values on the interval [%u, %u]. Value: `[%s]`.', 0, UINT32_MAX, join( words, ', ' ) ) );
});

/**
* Creates a new unsigned 64-bit integer from a high and low word.
*
* @name of
* @memberof Uint64
* @type {Function}
* @param {NonNegativeInteger} high - high word
* @param {NonNegativeInteger} low - low word
* @throws {TypeError} first argument must be a nonnegative integer
* @throws {TypeError} second argument must be a nonnegative integer
* @returns {Uint64} unsigned 64-bit integer
*
* @example
* var x = Uint64.of( 1234, 5678 );
* // returns <Uint64>
*/
setReadOnly( Uint64, 'of', function of( high, low ) {
	var v;
	if ( !isInteger( high ) || !isBetween( high, 0, UINT32_MAX ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a nonnegative integer on the interval [%u, %u]. Value: `%s`.', 0, UINT32_MAX, high ) );
	}
	if ( !isInteger( low ) || !isBetween( low, 0, UINT32_MAX ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a nonnegative integer on the interval [%u, %u]. Value: `%s`.', 0, UINT32_MAX, low ) );
	}
	v = new Uint64( 0 );
	v._buffer[ indices.HIGH ] = high; // eslint-disable-line no-underscore-dangle
	v._buffer[ indices.LOW ] = low; // eslint-disable-line no-underscore-dangle
	return v;
});

/**
* Size (in bytes) of the underlying value.
*
* @name BYTES_PER_ELEMENT
* @memberof Uint64
* @type {integer}
* @returns {integer} size in bytes
*
* @example
* var nbytes = Uint64.BYTES_PER_ELEMENT;
* // returns 8
*/
setReadOnly( Uint64, 'BYTES_PER_ELEMENT', 8 );

/**
* Size (in bytes) of the underlying value.
*
* @name BYTES_PER_ELEMENT
* @memberof Uint64.prototype
* @type {integer}
* @returns {integer} size in bytes
*
* @example
* var x = new Uint64( 5 );
*
* var nbytes = x.BYTES_PER_ELEMENT;
* // returns 8
*/
setReadOnly( Uint64.prototype, 'BYTES_PER_ELEMENT', 8 );

/**
* Size (in bytes) of the underlying value.
*
* @name byteLength
* @memberof Uint64.prototype
* @type {integer}
* @returns {integer} size in bytes
*
* @example
* var x = new Uint64( 5 );
*
* var nbytes = x.byteLength;
* // returns 8
*/
setReadOnly( Uint64.prototype, 'byteLength', 8 );

/**
* Returns the high 32-bit word of an unsigned 64-bit integer.
*
* @name hi
* @memberof Uint64.prototype
* @type {uinteger}
* @returns {uinteger} 32-bit unsigned integer
*
* @example
* var x = Uint64.from( [ 1234, 5678 ] );
*
* var w = x.hi;
* // returns 1234
*/
setReadOnlyAccessor( Uint64.prototype, 'hi', function getHighWord() {
	return this._buffer[ indices.HIGH ];
});

/**
* Returns the low 32-bit word of an unsigned 64-bit integer.
*
* @name lo
* @memberof Uint64.prototype
* @type {uinteger}
* @returns {uinteger} 32-bit unsigned integer
*
* @example
* var x = Uint64.from( [ 1234, 5678 ] );
*
* var w = x.lo;
* // returns 5678
*/
setReadOnlyAccessor( Uint64.prototype, 'lo', function getLowWord() {
	return this._buffer[ indices.LOW ];
});

/**
* Serializes an unsigned 64-bit integer as a string.
*
* @name toString
* @memberof Uint64.prototype
* @type {Function}
* @param {PositiveInteger} [radix=10] - radix (base) to use for string conversion (2-36)
* @throws {TypeError} must provide an integer on the interval [2,36]
* @returns {string} serialized unsigned 64-bit integer
*
* @example
* var str = new Uint64( 5 ).toString();
* // returns '5'
*
* str = Uint64.from( [ 1, 0 ] ).toString();
* // returns '4294967296'
*
* str = new Uint64( 100000000001 ).toString();
* // returns '100000000001'
*
*/
setReadOnly( Uint64.prototype, 'toString', function toString( radix ) {
	var rad;
	if ( arguments.length < 1 ) {
		rad = 10;
	} else if ( isInteger( radix ) && isBetween( radix, 2, 36 ) ) {
		rad = radix;
	} else {
		throw new TypeError( format( 'invalid argument. Must provide an integer on the interval [%d, %d]. Value: `%s`.', 2, 36, radix ) );
	}
	if ( HAS_BIGINT ) {
		return BigInt( this.valueOf() ).toString( rad );
	}
	return int2str( [ this.hi, this.lo ], rad );
});

/**
* Serializes an unsigned 64-bit integer as a JSON object.
*
* ## Notes
*
* -   `JSON.stringify()` implicitly calls this method when stringifying a `Uint64` instance.
*
* @name toJSON
* @memberof Uint64.prototype
* @type {Function}
* @returns {Object} serialized unsigned 64-bit integer
*
* @example
* var x = new Uint64( 5 );
*
* var y = x.toJSON();
* // returns { 'type': 'Uint64', 'words': [ 0, 5 ] }
*/
setReadOnly( Uint64.prototype, 'toJSON', function toJSON() {
	return {
		'type': 'Uint64',
		'words': [ this.hi, this.lo ]
	};
});

/**
* Converts an unsigned 64-bit integer to a primitive value.
*
* @name valueOf
* @memberof Uint64.prototype
* @type {Function}
* @returns {(number|bigint)} primitive value
*
* @example
* var x = new Uint64( 5 );
*
* var v = x.valueOf();
* // e.g., returns <bigint>
*/
setReadOnly( Uint64.prototype, 'valueOf', function valueOf() {
	if ( HAS_BIGINT ) {
		return ( BigInt( this._buffer[ indices.HIGH ] ) << BigInt( 32 ) ) | BigInt( this._buffer[ indices.LOW ] );
	}
	return ( this._buffer[ indices.HIGH ] * TWO_32 ) + this._buffer[ indices.LOW ];
});


// EXPORTS //

module.exports = Uint64;
