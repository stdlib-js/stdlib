/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var isCollection = require( '@stdlib/assert/is-collection' );
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var MAX_ITERATIONS = require( '@stdlib/constants/float64/max' );
var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Circular buffer constructor.
*
* @constructor
* @param {(PositiveInteger|Collection)} buffer - buffer size or an array-like object to use as the underlying buffer
* @throws {TypeError} must provide either a valid buffer size or an array-like object
* @returns {CircularBuffer} circular buffer instance
*
* @example
* var b = new CircularBuffer( 3 );
*
* // Fill the buffer...
* var v = b.push( 'foo' );
* // returns undefined
*
* v = b.push( 'bar' );
* // returns undefined
*
* v = b.push( 'beep' );
* // returns undefined
*
* // Add another value to the buffer and return the removed element:
* v = b.push( 'boop' );
* // returns 'foo'
*/
function CircularBuffer( buffer ) {
	var buf;
	var i;
	if ( !(this instanceof CircularBuffer) ) {
		return new CircularBuffer( buffer );
	}
	if ( isPositiveInteger( buffer ) ) {
		buf = [];
		for ( i = 0; i < buffer; i++ ) {
			buf.push( 0.0 ); // initialize with zeros, but could be any value (we're just ensuring a contiguous block of memory)
		}
	} else if ( isCollection( buffer ) ) {
		buf = buffer;
	} else {
		throw new TypeError( format( 'invalid argument. Must provide either a valid buffer size (i.e., a positive integer) or an array-like object which can serve as the underlying buffer. Value: `%s`.', buffer ) );
	}
	this._buffer = arraylike2object( buf );
	this._length = buf.length;
	this._count = 0;
	this._i = -1;
	return this;
}

/**
* Clears the buffer.
*
* @name clear
* @memberof CircularBuffer.prototype
* @type {Function}
* @returns {CircularBuffer} circular buffer instance
*
* @example
* var b = new CircularBuffer( 2 );
*
* // Add values to the buffer:
* b.push( 'foo' );
* b.push( 'bar' );
* b.push( 'beep' );
* b.push( 'boop' );
*
* // Get the number of elements currently in the buffer:
* var n = b.count;
* // returns 2
*
* // Clear the buffer:
* b.clear();
*
* // Get the number of buffer values:
* n = b.count;
* // returns 0
*/
setReadOnly( CircularBuffer.prototype, 'clear', function clear() {
	this._count = 0;
	this._i = -1; // this ensures that we always fill the buffer starting at index `0`.
	return this;
});

/**
* Number of elements currently in the buffer.
*
* @name count
* @memberof CircularBuffer.prototype
* @readonly
* @type {NonNegativeInteger}
*
* @example
* var b = new CircularBuffer( 4 );
*
* // Get the value count:
* var n = b.count;
* // returns 0
*
* // Add values to the buffer:
* b.push( 'foo' );
* b.push( 'bar' );
*
* // Get the value count:
* n = b.count;
* // returns 2
*/
setReadOnlyAccessor( CircularBuffer.prototype, 'count', function get() {
	return this._count;
});

/**
* Boolean indicating whether a circular buffer is full.
*
* @name full
* @memberof CircularBuffer.prototype
* @readonly
* @type {boolean}
*
* @example
* var b = new CircularBuffer( 3 );
*
* // Determine if the buffer is full:
* var bool = b.full;
* // returns false
*
* // Add values to the buffer:
* b.push( 'foo' );
* b.push( 'bar' );
* b.push( 'beep' );
* b.push( 'boop' );
*
* // Determine if the buffer is full:
* bool = b.full;
* // returns true
*/
setReadOnlyAccessor( CircularBuffer.prototype, 'full', function get() {
	return this._count === this._length;
});

/**
* Returns an iterator for iterating over a circular buffer.
*
* ## Notes
*
* -   An iterator does not iterate over partially full buffers.
*
* @name iterator
* @memberof CircularBuffer.prototype
* @type {Function}
* @param {NonNegativeInteger} [niters] - number of iterations
* @throws {TypeError} must provide a nonnegative integer
* @returns {Iterator} iterator
*
* @example
* var b = new CircularBuffer( 3 );
*
* // Add values to the buffer:
* b.push( 'foo' );
* b.push( 'bar' );
* b.push( 'beep' );
* b.push( 'boop' );
*
* // Create an iterator:
* var it = b.iterator( b.length );
*
* // Iterate over the buffer...
* var v = it.next().value;
* // returns 'bar'
*
* v = it.next().value;
* // returns 'beep'
*
* v = it.next().value;
* // returns 'boop'
*
* var bool = it.next().done;
* // returns true
*/
setReadOnly( CircularBuffer.prototype, 'iterator', function iterator( niters ) {
	var iter;
	var self;
	var FLG;
	var N;
	var n;
	var i;

	if ( arguments.length ) {
		if ( !isNonNegativeInteger( niters ) ) {
			throw new TypeError( format( 'invalid argument. Must provide a nonnegative integer. Value: `%s`.', niters ) );
		}
		N = niters;
	} else {
		N = MAX_ITERATIONS;
	}
	self = this;

	// Initialize the iteration index and counter:
	i = this._i;
	n = 0;

	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
	setReadOnly( iter, 'return', end );
	if ( iteratorSymbol ) {
		setReadOnly( iter, iteratorSymbol, factory );
	}
	return iter;

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next() {
		/* eslint-disable no-underscore-dangle */
		n += 1;
		if ( FLG || n > N ) {
			return {
				'done': true
			};
		}
		// If the buffer is only partially full, don't allow iteration over "undefined" elements (this ensures similar behavior with `toArray()`)...
		if ( self._count !== self._length ) {
			FLG = true;
			return {
				'done': true
			};
		}
		i = (i+1) % self._length;
		return {
			'value': self._buffer.accessors[ 0 ]( self._buffer.data, i ),
			'done': false
		};

		/* eslint-enable no-underscore-dangle */
	}

	/**
	* Finishes an iterator.
	*
	* @private
	* @param {*} [value] - value to return
	* @returns {Object} iterator protocol-compliant object
	*/
	function end( value ) {
		FLG = true;
		if ( arguments.length ) {
			return {
				'value': value,
				'done': true
			};
		}
		return {
			'done': true
		};
	}

	/**
	* Returns a new iterator.
	*
	* @private
	* @returns {Iterator} iterator
	*/
	function factory() {
		return self.iterator( N );
	}
});

/**
* Circular buffer length (i.e., capacity).
*
* @name length
* @memberof CircularBuffer.prototype
* @readonly
* @type {NonNegativeInteger}
*
* @example
* var b = new CircularBuffer( 4 );
*
* // Get the buffer capacity:
* var len = b.length;
* // returns 4
*/
setReadOnlyAccessor( CircularBuffer.prototype, 'length', function get() {
	return this._length;
});

/**
* Adds a value to the circular buffer.
*
* @name push
* @memberof CircularBuffer.prototype
* @type {Function}
* @param {*} value - value to add
* @returns {(*|void)} removed element or undefined
*
* @example
* var b = new CircularBuffer( 3 );
*
* // Fill the buffer:
* var v = b.push( 'foo' );
* // returns undefined
*
* v = b.push( 'bar' );
* // returns undefined
*
* v = b.push( 'beep' );
* // returns undefined
*
* // Add another value to the buffer and return the removed element:
* v = b.push( 'boop' );
* // returns 'foo'
*/
setReadOnly( CircularBuffer.prototype, 'push', function push( value ) {
	var set;
	var get;
	var buf;
	var v;

	buf = this._buffer.data;
	get = this._buffer.accessors[ 0 ];
	set = this._buffer.accessors[ 1 ];

	// Compute the next buffer index:
	this._i = (this._i+1) % this._length;

	// Check if we are still filling the buffer...
	if ( this._count < this._length ) {
		set( buf, this._i, value );
		this._count += 1;
		return;
	}
	// Replace an existing buffer element...
	v = get( buf, this._i );
	set( buf, this._i, value );
	return v;
});

/**
* Returns an array of circular buffer values.
*
* @name toArray
* @memberof CircularBuffer.prototype
* @type {Function}
* @returns {Array} circular buffer values
*
* @example
* var b = new CircularBuffer( 3 );
*
* // Add values to the buffer:
* b.push( 'foo' );
* b.push( 'bar' );
* b.push( 'beep' );
* b.push( 'boop' );
*
* // Get an array of buffer values:
* var vals = b.toArray();
* // returns [ 'bar', 'beep', 'boop' ]
*/
setReadOnly( CircularBuffer.prototype, 'toArray', function toArray() {
	var buf;
	var get;
	var out;
	var k;
	var i;

	buf = this._buffer.data;
	get = this._buffer.accessors[ 0 ];

	out = [];
	for ( i = 1; i <= this._count; i++ ) {
		// Note: in a full buffer, `count == length`; in a partially full buffer, we need to ensure we always start at index `0`
		k = (this._i+i) % this._count;
		out.push( get( buf, k ) );
	}
	return out;
});

/**
* Serializes a circular buffer as JSON.
*
* ## Notes
*
* -   `JSON.stringify()` implicitly calls this method when stringifying a `CircularBuffer` instance.
*
* @name toJSON
* @memberof CircularBuffer.prototype
* @type {Function}
* @returns {Object} serialized circular buffer
*
* @example
* var b = new CircularBuffer( 3 );
*
* // Add values to the buffer:
* b.push( 'foo' );
* b.push( 'bar' );
* b.push( 'beep' );
* b.push( 'boop' );
*
* // Serialize to JSON:
* var o = b.toJSON();
* // returns { 'type': 'circular-buffer', 'length': 3, 'data': [ 'bar', 'beep', 'boop' ] }
*/
setReadOnly( CircularBuffer.prototype, 'toJSON', function toJSON() {
	var out = {};
	out.type = 'circular-buffer';
	out.length = this._length;
	out.data = this.toArray();
	return out;
});


// EXPORTS //

module.exports = CircularBuffer;
