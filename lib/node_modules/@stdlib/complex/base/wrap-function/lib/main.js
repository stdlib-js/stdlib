/**
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

/* eslint-disable valid-typeof */

'use strict';

// MODULES //

var isFunction = require( '@stdlib/assert/is-function' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;


// VARIABLES //

var T = 'number';


// FUNCTIONS //

/**
* Wraps a function accepting complex number arguments to support providing both real and complex numbers.
*
* ## Notes
*
* -   The returned function **assumes** that the wrapped function accepts **only** complex number input arguments (i.e., every argument must be a complex number).
* -   The returned function **assumes** that, if an input argument is non-numeric (i.e., not of type `number`), then the input argument is a complex number. The returned function does **not** verify that non-numeric input arguments are, in fact, complex number objects. The returned function passes non-numeric input arguments to the wrapped function without modification.
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
* var Complex64 = require( '@stdlib/complex/float32' );
* var caddf = require( '@stdlib/math/base/ops/caddf' );
* var realf = require( '@stdlib/complex/realf' );
* var imagf = require( '@stdlib/complex/imagf' );
*
* var f = wrap( caddf, 2, Complex64 );
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
		throw new TypeError( 'invalid argument. First argument must be a function. Value: `' + fcn + '`.' );
	}
	if ( !isNonNegativeInteger( nargs ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a nonnegative integer. Value: `' + nargs + '`.' );
	}
	if ( !isFunction( ctor ) ) {
		throw new TypeError( 'invalid argument. Third argument must be a constructor function. Value: `' + ctor + '`.' );
	}
	fcns = [ fcn0, fcn1, fcn2, fcn3, fcn4, fcn5 ];
	return ( nargs <= 5 ) ? fcns[ nargs ] : fcnN;

	/**
	* Invokes a nullary function.
	*
	* @private
	* @returns {*} result
	*/
	function fcn0() {
		return fcn();
	}

	/**
	* Invokes a unary function accepting complex numbers.
	*
	* @private
	* @param {(number|Complex)} x - input value
	* @returns {*} result
	*/
	function fcn1( x ) {
		if ( typeof x === T ) {
			x = new ctor( x, 0.0 );
		}
		return fcn( x );
	}

	/**
	* Invokes a binary function accepting complex numbers.
	*
	* @private
	* @param {(number|Complex)} x - input value
	* @param {(number|Complex)} y - input value
	* @returns {*} result
	*/
	function fcn2( x, y ) {
		if ( typeof x === T ) {
			x = new ctor( x, 0.0 );
		}
		if ( typeof y === T ) {
			y = new ctor( y, 0.0 );
		}
		return fcn( x, y );
	}

	/**
	* Invokes a ternary function accepting complex numbers.
	*
	* @private
	* @param {(number|Complex)} x - input value
	* @param {(number|Complex)} y - input value
	* @param {(number|Complex)} z - input value
	* @returns {*} result
	*/
	function fcn3( x, y, z ) {
		if ( typeof x === T ) {
			x = new ctor( x, 0.0 );
		}
		if ( typeof y === T ) {
			y = new ctor( y, 0.0 );
		}
		if ( typeof z === T ) {
			z = new ctor( z, 0.0 );
		}
		return fcn( x, y, z );
	}

	/**
	* Invokes a quaternary function accepting complex numbers.
	*
	* @private
	* @param {(number|Complex)} x - input value
	* @param {(number|Complex)} y - input value
	* @param {(number|Complex)} z - input value
	* @param {(number|Complex)} w - input value
	* @returns {*} result
	*/
	function fcn4( x, y, z, w ) {
		if ( typeof x === T ) {
			x = new ctor( x, 0.0 );
		}
		if ( typeof y === T ) {
			y = new ctor( y, 0.0 );
		}
		if ( typeof z === T ) {
			z = new ctor( z, 0.0 );
		}
		if ( typeof w === T ) {
			w = new ctor( w, 0.0 );
		}
		return fcn( x, y, z, w );
	}

	/**
	* Invokes a quinary function accepting complex numbers.
	*
	* @private
	* @param {(number|Complex)} x - input value
	* @param {(number|Complex)} y - input value
	* @param {(number|Complex)} z - input value
	* @param {(number|Complex)} w - input value
	* @param {(number|Complex)} v - input value
	* @returns {*} result
	*/
	function fcn5( x, y, z, w, v ) {
		if ( typeof x === T ) {
			x = new ctor( x, 0.0 );
		}
		if ( typeof y === T ) {
			y = new ctor( y, 0.0 );
		}
		if ( typeof z === T ) {
			z = new ctor( z, 0.0 );
		}
		if ( typeof w === T ) {
			w = new ctor( w, 0.0 );
		}
		if ( typeof v === T ) {
			v = new ctor( v, 0.0 );
		}
		return fcn( x, y, z, w, v );
	}

	/**
	* Invokes a function accepting an arbitrary number of complex number input arguments.
	*
	* @private
	* @param {...(number|Complex)} args - input values
	* @returns {*} result
	*/
	function fcnN() {
		var args;
		var v;
		var i;

		args = [];
		for ( i = 0; i < arguments.length; i++ ) {
			v = arguments[ i ];
			if ( typeof v === T ) {
				v = new ctor( v, 0.0 );
			}
			args.push( v );
		}
		return fcn.apply( null, args );
	}
}


// EXPORTS //

module.exports = wrap;
