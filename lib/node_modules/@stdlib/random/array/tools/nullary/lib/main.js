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
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var isCollection = require( '@stdlib/assert/is-collection' );
var contains = require( '@stdlib/array/base/assert/contains' );
var filledBy = require( '@stdlib/array/base/filled-by' );
var nullary = require( '@stdlib/strided/base/nullary' );
var ctors = require( '@stdlib/array/ctors' );
var format = require( '@stdlib/string/format' );
var validate = require( './validate.js' );


// MAIN //

/**
* Constructor for creating arrays filled with pseudorandom values drawn from a nullary PRNG.
*
* @constructor
* @param {Function} prng - nullary pseudorandom value generator
* @param {StringArray} dtypes - list of supported output data types
* @param {string} dtype - default output data type
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be an array of strings
* @throws {TypeError} third argument must be a supported data type
* @returns {Random} instance
*
* @example
* var exponential = require( '@stdlib/random/base/exponential' );
*
* var dtypes = [ 'float64', 'float32', 'generic' ];
* var defaultDType = 'float64';
*
* var rand = new Random( exponential.factory( 2.0 ), dtypes, defaultDType );
*
* var v = rand.generate( 10 );
* // returns <Float64Array>
*/
function Random( prng, dtypes, dtype ) {
	if ( !( this instanceof Random ) ) {
		return new Random( prng, dtypes, dtype );
	}
	if ( !isFunction( prng ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', prng ) );
	}
	// TODO: tighten this up by actually validating that `dtypes` contains only recognized/supported dtype strings
	if ( !isStringArray( dtypes ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an array of strings. Value: `%s`.', dtypes ) );
	}
	// Require that the default output array data type be a member of the list of supported output array data types...
	if ( !contains( dtypes, dtype ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be a supported data type. Value: `%s`.', dtype ) );
	}
	this._prng = prng;
	this._dtypes = dtypes;
	this._dtype = dtype;
	return this;
}

/**
* Returns an array filled with pseudorandom values drawn from a nullary PRNG.
*
* @name generate
* @memberof Random.prototype
* @type {Function}
* @param {NonNegativeInteger} len - number of elements
* @param {Options} [options] - function options
* @param {string} [options.dtype] - array data type
* @throws {TypeError} first argument must be a nonnegative integer
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Collection} output array
*
* @example
* var exponential = require( '@stdlib/random/base/exponential' );
*
* var dtypes = [ 'float64', 'float32', 'generic' ];
* var defaultDType = 'float64';
*
* var rand = new Random( exponential.factory( 2.0 ), dtypes, defaultDType );
*
* var v = rand.generate( 10 );
* // returns <Float64Array>
*/
setReadOnly( Random.prototype, 'generate', function generate( len, options ) {
	var ctor;
	var opts;
	var out;
	var err;
	var dt;
	if ( !isNonNegativeInteger( len ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a nonnegative integer. Value: `%s`.', len ) );
	}
	opts = {};
	if ( arguments.length > 1 ) {
		err = validate( opts, this._dtypes, options );
		if ( err ) {
			throw err;
		}
	}
	dt = opts.dtype || this._dtype;
	if ( dt === 'generic' ) {
		return filledBy( len, this._prng );
	}
	ctor = ctors( dt );
	out = new ctor( len );
	nullary( [ out ], [ len ], [ 1 ], this._prng );
	return out;
});

/**
* Fills an array with pseudorandom values drawn from a nullary PRNG.
*
* @name assign
* @memberof Random.prototype
* @type {Function}
* @param {Collection} out - output array
* @throws {TypeError} first argument must be a collection
* @returns {Collection} output array
*
* @example
* var exponential = require( '@stdlib/random/base/exponential' );
* var zeros = require( '@stdlib/array/zeros' );
*
* var dtypes = [ 'float64', 'float32', 'generic' ];
* var defaultDType = 'float64';
*
* var rand = new Random( exponential.factory( 2.0 ), dtypes, defaultDType );
*
* var out = zeros( 10, 'float64' );
* // returns <Float64Array>
*
* var v = rand.assign( out );
* // returns <Float64Array>
*
* var bool = ( v === out );
* // returns true
*/
setReadOnly( Random.prototype, 'assign', function assign( out ) {
	if ( !isCollection( out ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array-like object. Value: `%s`.', out ) );
	}
	nullary( [ out ], [ out.length ], [ 1 ], this._prng );
	return out;
});


// EXPORTS //

module.exports = Random;
