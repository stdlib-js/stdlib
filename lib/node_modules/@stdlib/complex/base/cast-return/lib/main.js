/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

/* eslint-disable valid-typeof */

'use strict';

// MODULES //

var isFunction = require( '@stdlib/assert/is-function' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var format = require( '@stdlib/string/format' );


// VARIABLES //

var T = 'number';


// FUNCTIONS //

/**
* Wraps a function and casts a function's return value to a complex number.
*
* ## Notes
*
* -   The returned function **assumes** that the wrapped function returns either a real or complex number.
* -   The returned function **assumes** that, if a return value is non-numeric (i.e., not of type `number`), then the return value is a complex number. The returned function does **not** verify that non-numeric return values are, in fact, complex number objects. The returned function returns non-numeric return values from the wrapped function without modification.
*
* @param {Function} fcn - function to wrap
* @param {NonNegativeInteger} nargs - number of arguments
* @param {Function} ctor - complex number constructor
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be a nonnegative integer
* @throws {TypeError} third argument must be a constructor function
* @returns {Function} wrapped function
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var addf = require( '@stdlib/number/float32/base/add' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var f = wrap( addf, 2, Complex64 );
*
* // ...
*
* var z = f( 3.0, 4.0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 7.0
*
* var im = imagf( z );
* // returns 0.0
*/
function wrap( fcn, nargs, ctor ) {
	var fcns;
	if ( !isFunction( fcn ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', fcn ) );
	}
	if ( !isNonNegativeInteger( nargs ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a nonnegative integer. Value: `%s`.', nargs ) );
	}
	if ( !isFunction( ctor ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be a constructor function. Value: `%s`.', ctor ) );
	}
	fcns = [ fcn0, fcn1, fcn2, fcn3, fcn4, fcn5 ];
	return ( nargs <= 5 ) ? fcns[ nargs ] : fcnN;

	/**
	* Invokes a nullary function and returns a complex number.
	*
	* @private
	* @returns {Complex} result
	*/
	function fcn0() {
		var r = fcn();
		if ( typeof r === T ) {
			return new ctor( r, 0.0 );
		}
		return r;
	}

	/**
	* Invokes a unary function and returns a complex number.
	*
	* @private
	* @param {*} x - input value
	* @returns {Complex} result
	*/
	function fcn1( x ) {
		var r = fcn( x );
		if ( typeof r === T ) {
			return new ctor( r, 0.0 );
		}
		return r;
	}

	/**
	* Invokes a binary function and returns a complex number.
	*
	* @private
	* @param {*} x - input value
	* @param {*} y - input value
	* @returns {Complex} result
	*/
	function fcn2( x, y ) {
		var r = fcn( x, y );
		if ( typeof r === T ) {
			return new ctor( r, 0.0 );
		}
		return r;
	}

	/**
	* Invokes a ternary function and returns a complex number.
	*
	* @private
	* @param {*} x - input value
	* @param {*} y - input value
	* @param {*} z - input value
	* @returns {Complex} result
	*/
	function fcn3( x, y, z ) {
		var r = fcn( x, y, z );
		if ( typeof r === T ) {
			return new ctor( r, 0.0 );
		}
		return r;
	}

	/**
	* Invokes a quaternary function and returns a complex number.
	*
	* @private
	* @param {*} x - input value
	* @param {*} y - input value
	* @param {*} z - input value
	* @param {*} w - input value
	* @returns {Complex} result
	*/
	function fcn4( x, y, z, w ) {
		var r = fcn( x, y, z, w );
		if ( typeof r === T ) {
			return new ctor( r, 0.0 );
		}
		return r;
	}

	/**
	* Invokes a quinary function and returns a complex number.
	*
	* @private
	* @param {*} x - input value
	* @param {*} y - input value
	* @param {*} z - input value
	* @param {*} w - input value
	* @param {*} v - input value
	* @returns {Complex} result
	*/
	function fcn5( x, y, z, w, v ) {
		var r = fcn( x, y, z, w, v );
		if ( typeof r === T ) {
			return new ctor( r, 0.0 );
		}
		return r;
	}

	/**
	* Invokes a function and returns a complex number.
	*
	* @private
	* @param {...*} args - input values
	* @returns {Complex} result
	*/
	function fcnN() {
		var args;
		var r;
		var i;

		args = [];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		r = fcn.apply( null, args );
		if ( typeof r === T ) {
			return new ctor( r, 0.0 );
		}
		return r;
	}
}


// EXPORTS //

module.exports = wrap;
