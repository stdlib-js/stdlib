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

'use strict';

// MODULES //

var isFunction = require( '@stdlib/assert/is-function' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var reNativeFunction = require( '@stdlib/regexp/native-function' ).REGEXP;
var function2string = require( '@stdlib/function/to-string' );
var Fcn = require( '@stdlib/function/ctor' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

/**
* Captures everything that is not a right parenthesis immediately after the first left parenthesis.
*
* Regular expression: `/^\s*function[^(]*\(([^)]*)/i`
*
* -   `/^\s*`
*     -   Match zero or more spaces at beginning
*
* -   `function`
*     -   Match the word `function`
*
* -   `[^(]*`
*     -   Match anything except a left parenthesis `(` zero or more times
*
* -   `\(`
*     -   Match a left parenthesis `(`
*
* -   `()`
*     -   Capture
*
* -   `[^)]*`
*     -   Match anything except a right parenthesis `)` zero or more times
*
* -   `)`
*     -   Match a right parenthesis `)`
*
* -   `/i`
*     -   Ignore case
*
* @private
* @constant
* @type {RegExp}
* @default /^\s*function[^(]*\(([^)]*)/i
*/
var RE_PARAMETERS = /^\s*function[^(]*\(([^)]*)/i;


// MAIN //

/**
* Decorates a provided function such that the function's return value is provided as an argument to another function.
*
* @param {Function} fcn - function to decorate
* @param {NonNegativeInteger} arity - number of parameters
* @param {Function} after - function to invoke with the result of the decorated function
* @param {*} [thisArg] - evaluation context for `after`
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be a nonnegative integer
* @throws {TypeError} third argument must be a function
* @returns {Function} decorator
*
* @example
* var abs = require( '@stdlib/math/base/special/abs' );
*
* function negate( v ) {
*     return -v;
* }
*
* var f = decorateAfter( abs, abs.length, negate );
* // returns <Function>
*
* var v = f( -5 );
* // returns -5
*
* v = f( 5 );
* // returns -5
*
* @example
* var abs = require( '@stdlib/math/base/special/abs' );
*
* function log( v ) {
*     console.log( v );
* }
*
* var f = decorateAfter( abs, abs.length, log );
* // returns <Function>
*
* var v = f( -5 );
* // returns 5
*
* v = f( 5 );
* // returns 5
*
* @example
* var abs = require( '@stdlib/math/base/special/abs' );
*
* function counter() {
*     this.count += 1;
* }
*
* var ctx = {
*     'count': 0
* };
*
* var f = decorateAfter( abs, abs.length, counter, ctx );
* // returns <Function>
*
* var v = f( -5 );
* // returns 5
*
* v = f( 5 );
* // returns 5
*
* var count = ctx.count;
* // returns 2
*/
function decorateAfter( fcn, arity, after, thisArg ) {
	var params;
	var str;
	var len;
	var f;
	var i;
	if ( !isFunction( fcn ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', fcn ) );
	}
	if ( !isNonNegativeInteger( arity ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a nonnegative integer. Value: `%s`.', arity ) );
	}
	if ( !isFunction( after ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be a function. Value: `%s`.', after ) );
	}
	str = function2string( fcn );

	// Code generation. Start with the function definition for creating the decorator:
	f = 'return function make(__$$fcn$$__,__$$after$$__,__$$thisArg$$__){';

	// Include the "use strict" directive:
	f += '"use strict";';

	// Generate a list of function parameters:
	if ( reNativeFunction.test( str ) ) {
		params = [];
		for ( i = 0; i < arity; i++ ) {
			params.push( 'x'+i );
		}
	} else {
		params = str.match( RE_PARAMETERS )[ 1 ];
		if ( params ) {
			params = params.split( ',' );
		} else {
			params = [];
		}
		len = params.length;
		if ( len < arity ) {
			for ( i = len; i < arity; i++ ) {
				params.push( '__$$x'+i+'$$__' );
			}
		} else if ( len > arity ) {
			params.length = arity;
		}
	}
	params = params.join( ',' );

	// Create the decorator definition:
	f += 'return function decorator(' + params + '){';

	// Initialize an array for storing provided arguments:
	f += 'var __$$args$$__=[];';

	// Gather provided arguments:
	f += 'for (var __$$i$$__=0;__$$i$$__<arguments.length;__$$i$$__++){__$$args$$__.push(arguments[__$$i$$__]);}';

	// Invoke the decorated function:
	f += 'var __$$r1$$__ = __$$fcn$$__.apply(null,__$$args$$__);';

	// Provide the result to the `after` function:
	f += 'var __$$r2$$__ = __$$after$$__.call(__$$thisArg$$__,__$$r1$$__);';

	// Return the result:
	f += 'return (__$$r2$$__ === void 0) ? __$$r1$$__ : __$$r2$$__;';

	// Close the decorator function:
	f += '}';

	// Close the outer function:
	f += '}';

	// Add a source directive for debugging:
	f += '//# sourceURL=decorateAfter.factory.js';

	// Create the function the global scope:
	return (new Fcn( f ))()( fcn, after, thisArg );
}


// EXPORTS //

module.exports = decorateAfter;
