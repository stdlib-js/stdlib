/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isNull = require( '@stdlib/assert/is-null' );
var isUndefined = require( '@stdlib/assert/is-undefined' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Tests whether an input argument is valid.
*
* @private
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether the argument is valid
*
* @example
* var bool = isValid( 3 );
* // returns true
*
* bool = isValid( null );
* // returns true
*
* bool = isValid( void 0 );
* // returns true
*
* bool = isValid( '3' );
* // returns false
*/
function isValid( value ) {
	return ( isInteger( value ) || isNull( value ) || isUndefined( value ) );
}


// MAIN //

/**
* Slice constructor.
*
* @constructor
* @param {(integer|null|void)} [start] - starting index (inclusive)
* @param {(integer|null|void)} stop - ending index (exclusive)
* @param {(integer|null|void)} [step] - index increment
* @throws {TypeError} first argument must be an integer, null, or undefined
* @throws {TypeError} second argument must be an integer, null, or undefined
* @throws {TypeError} third argument must be an integer, null, or undefined
* @throws {RangeError} third argument cannot be zero
* @returns {Slice} Slice instance
*
* @example
* var s = new Slice( 10 );
* // returns <Slice>
*
* var start = s.start;
* // returns null
*
* var stop = s.stop;
* // returns 10
*
* var step = s.step;
* // returns null
*
* @example
* var s = new Slice( 3, 10 );
* // returns <Slice>
*
* var start = s.start;
* // returns 3
*
* var stop = s.stop;
* // returns 10
*
* var step = s.step;
* // returns null
*
* @example
* var s = new Slice( 3, 10, 2 );
* // returns <Slice>
*
* var start = s.start;
* // returns 3
*
* var stop = s.stop;
* // returns 10
*
* var step = s.step;
* // returns 2
*/
function Slice() {
	var nargs;
	var start;
	var stop;
	var step;

	nargs = arguments.length;
	if ( nargs === 0 ) {
		start = null;
		stop = null;
		step = null;
	} else if ( nargs === 1 ) {
		start = null;
		stop = arguments[ 0 ];
		step = null;
	} else if ( nargs === 2 ) {
		start = arguments[ 0 ];
		stop = arguments[ 1 ];
		step = null;
	} else {
		start = arguments[ 0 ];
		stop = arguments[ 1 ];
		step = arguments[ 2 ];
	}
	if ( !( this instanceof Slice ) ) {
		return new Slice( start, stop, step );
	}
	if ( !isValid( start ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.', start ) );
	}
	if ( !isValid( stop ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.', stop ) );
	}
	if ( !isValid( step ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.', step ) );
	} else if ( step === 0 ) {
		throw new RangeError( format( 'invalid argument. Third argument cannot be zero. Value: `%s`.', step ) );
	}
	this._start = ( start === void 0 ) ? null : start;
	this._stop = ( stop === void 0 ) ? null : stop;
	this._step = ( step === void 0 ) ? null : step;
	return this;
}

/**
* Constructor name.
*
* @name name
* @memberof Slice
* @readonly
* @type {string}
* @default 'Slice'
*
* @example
* var str = Slice.name;
* // returns 'Slice'
*/
setReadOnly( Slice, 'name', 'Slice' );

/**
* Returns the slice's starting index.
*
* @name start
* @memberof Slice.prototype
* @readonly
* @type {(integer|null)}
*
* @example
* var s = new Slice( 10 );
* // returns <Slice>
*
* var start = s.start;
* // returns null
*
* @example
* var s = new Slice( 3, 10 );
* // returns <Slice>
*
* var start = s.start;
* // returns 3
*
* @example
* var s = new Slice( 3, 10, 2 );
* // returns <Slice>
*
* var start = s.start;
* // returns 3
*/
setReadOnlyAccessor( Slice.prototype, 'start', function get() {
	return this._start;
});

/**
* Returns the slice's ending index.
*
* @name stop
* @memberof Slice.prototype
* @readonly
* @type {(integer|null)}
*
* @example
* var s = new Slice( 10 );
* // returns <Slice>
*
* var stop = s.stop;
* // returns 10
*
* @example
* var s = new Slice( 3, 10 );
* // returns <Slice>
*
* var stop = s.stop;
* // returns 10
*
* @example
* var s = new Slice( 3, 10, 2 );
* // returns <Slice>
*
* var stop = s.stop;
* // returns 10
*/
setReadOnlyAccessor( Slice.prototype, 'stop', function get() {
	return this._stop;
});

/**
* Returns the slice's index increment.
*
* @name step
* @memberof Slice.prototype
* @readonly
* @type {(integer|null)}
*
* @example
* var s = new Slice( 10 );
* // returns <Slice>
*
* var step = s.step;
* // returns null
*
* @example
* var s = new Slice( 3, 10 );
* // returns <Slice>
*
* var step = s.step;
* // returns null
*
* @example
* var s = new Slice( 3, 10, 2 );
* // returns <Slice>
*
* var step = s.step;
* // returns 2
*/
setReadOnlyAccessor( Slice.prototype, 'step', function get() {
	return this._step;
});

/**
* Serializes a slice to a string.
*
* @name toString
* @memberof Slice.prototype
* @type {Function}
* @returns {string} serialized Slice
*
* @example
* var s = new Slice( 10 );
* // returns <Slice>
*
* var str = s.toString();
* // returns 'Slice(null,10,null)'
*
* @example
* var s = new Slice( 3, 10 );
* // returns <Slice>
*
* var str = s.toString();
* // returns 'Slice(3,10,null)'
*
* @example
* var s = new Slice( 3, 10, 2 );
* // returns <Slice>
*
* var str = s.toString();
* // returns 'Slice(3,10,2)'
*/
setReadOnly( Slice.prototype, 'toString', function toString() {
	return 'Slice('+this._start+','+this._stop+','+this.step+')';
});

/**
* Serializes a slice as a JSON object.
*
* ## Notes
*
* -   `JSON.stringify()` implicitly calls this method when stringifying a `Slice` instance.
*
* @name toString
* @memberof Slice.prototype
* @type {Function}
* @returns {Object} serialized Slice
*
* @example
* var s = new Slice( 10 );
* // returns <Slice>
*
* var o = s.toJSON();
* // returns { 'type': 'Slice', 'data': [ null, 10, null ] }
*
* @example
* var s = new Slice( 3, 10 );
* // returns <Slice>
*
* var o = s.toJSON();
* // returns { 'type': 'Slice', 'data': [ 3, 10, null ] }
*
* @example
* var s = new Slice( 3, 10, 2 );
* // returns <Slice>
*
* var o = s.toJSON();
* // returns { 'type': 'Slice', 'data': [ 3, 10, 2 ] }
*/
setReadOnly( Slice.prototype, 'toJSON', function toJSON() {
	return {
		'type': 'Slice',
		'data': [
			this._start,
			this._stop,
			this._step
		]
	};
});


// EXPORTS //

module.exports = Slice;
