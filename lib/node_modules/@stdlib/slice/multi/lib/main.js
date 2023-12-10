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
var isSlice = require( '@stdlib/assert/is-slice' );
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
	return (
		isInteger( value ) ||
		isNull( value ) ||
		isUndefined( value ) ||
		isSlice( value )
	);
}


// MAIN //

/**
* Multi-slice constructor.
*
* @constructor
* @param {...(Slice|integer|null)} slice - slice
* @throws {TypeError} a provided argument must be either a Slice, integer, null, or undefined
* @returns {MultiSlice} MultiSlice instance
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
*
* var s1 = new Slice( 0, 10, 1 );
* var s2 = new Slice( 2, 12, 2 );
*
* var ms = new MultiSlice( null, s1, s2, 2 );
* // returns <MultiSlice>
*/
function MultiSlice() {
	var nargs;
	var proxy;
	var args;
	var v;
	var i;

	nargs = arguments.length;
	if ( !( this instanceof MultiSlice ) ) {
		if ( nargs === 1 ) {
			return new MultiSlice( arguments[ 0 ] );
		}
		if ( nargs === 2 ) {
			return new MultiSlice( arguments[ 0 ], arguments[ 1 ] );
		}
		if ( nargs === 3 ) {
			return new MultiSlice( arguments[ 0 ], arguments[ 1 ], arguments[ 2 ] ); // eslint-disable-line max-len
		}
		if ( nargs === 4 ) {
			return new MultiSlice( arguments[ 0 ], arguments[ 1 ], arguments[ 2 ], arguments[ 3 ] ); // eslint-disable-line max-len
		}
		if ( nargs === 5 ) {
			return new MultiSlice( arguments[ 0 ], arguments[ 1 ], arguments[ 2 ], arguments[ 3 ], arguments[ 4 ] ); // eslint-disable-line max-len
		}
		args = [];
		for ( i = 0; i < nargs; i++ ) {
			args.push( arguments[ i ] );
		}
		// Use a workaround for being unable to combine `.apply` with the `new` operator:
		proxy = Object.create( MultiSlice.prototype );
		return MultiSlice.apply( proxy, args );
	}
	this._data = [];
	for ( i = 0; i < nargs; i++ ) {
		v = arguments[ i ];
		if ( !isValid( v ) ) {
			throw new TypeError( format( 'invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.', i, String( v ) ) );
		}
		this._data.push( ( v === void 0 ) ? null : v );
	}
	return this;
}

/**
* Constructor name.
*
* @name name
* @memberof MultiSlice
* @readonly
* @type {string}
* @default 'MultiSlice'
*
* @example
* var str = MultiSlice.name;
* // returns 'MultiSlice'
*/
setReadOnly( MultiSlice, 'name', 'MultiSlice' );

/**
* Returns the number of slice dimensions.
*
* @name ndims
* @memberof MultiSlice.prototype
* @readonly
* @type {NonNegativeInteger}
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
*
* var s1 = new Slice( 0, 10, 1 );
* var s2 = new Slice( 2, 12, 2 );
*
* var ms = new MultiSlice( null, s1, s2, 2 );
* // returns <MultiSlice>
*
* var ndims = ms.ndims;
* // returns 4
*/
setReadOnlyAccessor( MultiSlice.prototype, 'ndims', function get() {
	return this._data.length;
});

/**
* Returns multi-slice data.
*
* @name data
* @memberof MultiSlice.prototype
* @readonly
* @type {Array<Slice|null|integer>}
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
*
* var s1 = new Slice( 0, 10, 1 );
* var s2 = new Slice( 2, 12, 2 );
*
* var ms = new MultiSlice( null, s1, s2, 2 );
* // returns <MultiSlice>
*
* var data = ms.data;
* // returns [...]
*
* var v = data[ 0 ];
* // returns null
*
* v = data[ 1 ];
* // returns <Slice>
*
* v = data[ 2 ];
* // returns <Slice>
*
* v = data[ 3 ];
* // returns 2
*/
setReadOnlyAccessor( MultiSlice.prototype, 'data', function get() {
	return this._data.slice();
});

/**
* Serializes a multi-slice to a string.
*
* @name toString
* @memberof MultiSlice.prototype
* @type {Function}
* @returns {string} serialized MultiSlice
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
*
* var s1 = new Slice( 0, 10, 1 );
* var s2 = new Slice( 2, 12, 2 );
*
* var ms = new MultiSlice( null, s1, s2, 2 );
* // returns <MultiSlice>
*
* var str = ms.toString();
* // returns 'MultiSlice(null,Slice(0,10,1),Slice(2,12,2),2)'
*/
setReadOnly( MultiSlice.prototype, 'toString', function toString() {
	var data;
	var out;
	var i;

	data = this._data;
	out = [];
	for ( i = 0; i < data.length; i++ ) {
		out.push( String( data[ i ] ) );
	}
	return 'MultiSlice('+out.join( ',' )+')';
});

/**
* Serializes a multi-slice as a JSON object.
*
* ## Notes
*
* -   `JSON.stringify()` implicitly calls this method when stringifying a `MultiSlice` instance.
*
* @name toString
* @memberof MultiSlice.prototype
* @type {Function}
* @returns {Object} serialized MultiSlice
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
*
* var s1 = new Slice( 0, 10, 1 );
* var s2 = new Slice( 2, 12, 2 );
*
* var ms = new MultiSlice( null, s1, s2, 2 );
* // returns <MultiSlice>
*
* var o = ms.toJSON();
* // returns { 'type': 'MultiSlice', 'data': [ null, { 'type': 'Slice', 'data': [ 0, 10, 1 ] }, { 'type': 'Slice', 'data': [ 2, 12, 2 ] }, 2 ] }
*/
setReadOnly( MultiSlice.prototype, 'toJSON', function toJSON() {
	var data;
	var out;
	var v;
	var i;

	data = this._data;
	out = {
		'type': 'MultiSlice',
		'data': []
	};
	for ( i = 0; i < data.length; i++ ) {
		v = data[ i ];
		out.data.push( ( v && typeof v.toJSON === 'function' ) ? v.toJSON() : v );
	}
	return out;
});


// EXPORTS //

module.exports = MultiSlice;
