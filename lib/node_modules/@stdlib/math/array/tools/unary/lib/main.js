/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var isFunction = require( '@stdlib/assert/is-function' );
var isCollection = require( '@stdlib/assert/is-collection' );
var isDataType = require( '@stdlib/array/base/assert/is-data-type' );
var isOutputDataTypePolicy = require( '@stdlib/ndarray/base/assert/is-output-data-type-policy' );
var contains = require( '@stdlib/array/base/assert/contains' );
var unary = require( '@stdlib/strided/base/unary' );
var odtype = require( '@stdlib/ndarray/base/unary-output-dtype' );
var empty = require( '@stdlib/array/empty' );
var dtype = require( '@stdlib/array/dtype' );
var everyBy = require( '@stdlib/array/base/every-by' );
var format = require( '@stdlib/string/format' );
var validate = require( './validate.js' );


// VARIABLES //

var GENERIC_DTYPE = 'generic';


// MAIN //

/**
* Constructor for applying a unary function to each element in an input array.
*
* @constructor
* @param {Function} fcn - unary function to apply
* @param {StringArray} idtypes - list of supported input data types
* @param {StringArray} odtypes - list of supported output data types
* @param {string} policy - output data type policy
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be an array of supported data types
* @throws {TypeError} third argument must be an array of supported data types
* @throws {TypeError} fourth argument must be a supported output data type policy
* @returns {Unary} instance
*
* @example
* var base = require( '@stdlib/math/base/special/abs' );
* var dtypes = require( '@stdlib/array/dtypes' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = idt;
* var policy = 'same';
*
* var abs = new Unary( base, idt, odt, policy );
*
* var x = [ -1.0, -2.0, -3.0 ];
*
* var y = abs.apply( x );
* // returns [ 1.0, 2.0, 3.0 ]
*/
function Unary( fcn, idtypes, odtypes, policy ) {
	if ( !( this instanceof Unary ) ) {
		return new Unary( fcn, idtypes, odtypes, policy );
	}
	if ( !isFunction( fcn ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', fcn ) );
	}
	if (
		!isCollection( idtypes ) ||
		idtypes.length < 1 ||
		!everyBy( idtypes, isDataType )
	) {
		throw new TypeError( format( 'invalid argument. Second argument must be an array of data types. Value: `%s`.', idtypes ) );
	}
	if (
		!isCollection( odtypes ) ||
		odtypes.length < 1 ||
		!everyBy( odtypes, isDataType )
	) {
		throw new TypeError( format( 'invalid argument. Third argument must be an array of data types. Value: `%s`.', odtypes ) );
	}
	if ( !isOutputDataTypePolicy( policy ) ) {
		throw new TypeError( format( 'invalid argument. Fourth argument must be a supported output data type policy. Value: `%s`.', policy ) );
	}
	this._fcn = fcn;
	this._idtypes = idtypes;
	this._odtypes = odtypes;
	this._policy = policy;
	return this;
}

/**
* Applies a unary function to each element in a provided input array.
*
* @name apply
* @memberof Unary.prototype
* @type {Function}
* @param {Collection} x - input array
* @param {Options} [options] - function options
* @param {string} [options.dtype] - output array data type
* @throws {TypeError} first argument must be a collection
* @throws {TypeError} first argument must have a supported data type
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Collection} output array
*
* @example
* var base = require( '@stdlib/math/base/special/abs' );
* var dtypes = require( '@stdlib/array/dtypes' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = idt;
* var policy = 'same';
*
* var abs = new Unary( base, idt, odt, policy );
*
* var x = [ -1.0, -2.0, -3.0 ];
*
* var y = abs.apply( x );
* // returns [ 1.0, 2.0, 3.0 ]
*/
setReadOnly( Unary.prototype, 'apply', function apply( x, options ) {
	var opts;
	var err;
	var out;
	var dt;
	if ( !isCollection( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array-like object. Value: `%s`.', x ) );
	}
	dt = dtype( x ) || GENERIC_DTYPE;
	if ( !contains( this._idtypes, dt ) ) {
		throw new TypeError( format( 'invalid argument. First argument must have one of the following data types: "%s". Data type: `%s`.', this._idtypes.join( '", "' ), dt ) );
	}
	opts = {};
	if ( arguments.length > 1 ) {
		err = validate( opts, this._odtypes, options );
		if ( err ) {
			throw err;
		}
	}
	dt = opts.dtype || odtype( dt, this._policy );
	out = empty( x.length, dt );
	unary( [ x, out ], [ x.length ], [ 1, 1 ], this._fcn );
	return out;
});

/**
* Applies a unary function to each element in a provided input array and assigns results to a provided output array.
*
* @name assign
* @memberof Unary.prototype
* @type {Function}
* @param {Collection} x - input array
* @param {Collection} out - output array
* @throws {TypeError} first argument must be a collection
* @throws {TypeError} first argument must have a supported data type
* @throws {TypeError} second argument must be a collection
* @returns {Collection} output array
*
* @example
* var base = require( '@stdlib/math/base/special/abs' );
* var dtypes = require( '@stdlib/array/dtypes' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = idt;
* var policy = 'same';
*
* var abs = new Unary( base, idt, odt, policy );
*
* var x = [ -1.0, -2.0, -3.0 ];
* var y = [ 0.0, 0.0, 0.0 ];
*
* var out = abs.assign( x, y );
* // returns [ 1.0, 2.0, 3.0 ]
*
* var bool = ( out === y );
* // returns true
*/
setReadOnly( Unary.prototype, 'assign', function assign( x, out ) {
	var dt;
	if ( !isCollection( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array-like object. Value: `%s`.', x ) );
	}
	if ( !isCollection( out ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an array-like object. Value: `%s`.', out ) );
	}
	// Validate the input array data type in order to maintain similar behavior to `apply` above...
	dt = dtype( x ) || GENERIC_DTYPE;
	if ( !contains( this._idtypes, dt ) ) {
		throw new TypeError( format( 'invalid argument. First argument must have one of the following data types: "%s". Data type: `%s`.', this._idtypes.join( '", "' ), dt ) );
	}
	// Note: we intentionally don't validate the output array dtype because (1) maintains parity with `@stdlib/random/array/tools/unary` and (2) allowing any dtype provides an escape hatch for a user wanting to have an output array having a specific dtype that `apply` does not support

	unary( [ x, out ], [ x.length ], [ 1, 1 ], this._fcn );
	return out;
});


// EXPORTS //

module.exports = Unary;
