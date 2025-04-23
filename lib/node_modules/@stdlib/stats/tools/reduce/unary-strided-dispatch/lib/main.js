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
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isObject = require( '@stdlib/assert/is-object' );
var isFunction = require( '@stdlib/assert/is-function' );
var isCollection = require( '@stdlib/assert/is-collection' );
var isDataType = require( '@stdlib/array/base/assert/is-data-type' );
var isOutputDataTypePolicy = require( '@stdlib/ndarray/base/assert/is-output-data-type-policy' );
var contains = require( '@stdlib/array/base/assert/contains' );
var unaryReduceStrided1d = require( '@stdlib/ndarray/base/unary-reduce-strided1d' );
var unaryOutputDataType = require( '@stdlib/ndarray/base/unary-output-dtype' );
var spreadDimensions = require( '@stdlib/ndarray/base/spread-dimensions' );
var getShape = require( '@stdlib/ndarray/shape' ); // note: non-base accessor is intentional due to input ndarrays originating in userland
var ndims = require( '@stdlib/ndarray/ndims' );
var getDType = require( '@stdlib/ndarray/base/dtype' );
var getOrder = require( '@stdlib/ndarray/base/order' );
var empty = require( '@stdlib/ndarray/empty' );
var indicesComplement = require( '@stdlib/array/base/indices-complement' );
var takeIndexed = require( '@stdlib/array/base/take-indexed' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var join = require( '@stdlib/array/base/join' );
var everyBy = require( '@stdlib/array/base/every-by' );
var objectAssign = require( '@stdlib/object/assign' );
var format = require( '@stdlib/string/format' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );


// MAIN //

/**
* Constructor for performing a reduction on an input ndarray.
*
* @constructor
* @param {Object} table - dispatch table containing strided array reduction functions
* @param {ArrayLikeObject<StringArray>} idtypes - list containing lists of supported input data types for each ndarray argument
* @param {StringArray} odtypes - list of supported output data types
* @param {string} policy - output data type policy
* @throws {TypeError} first argument must be an object
* @throws {TypeError} second argument must be an array containing arrays of supported data types
* @throws {TypeError} third argument must be an array of supported data types
* @throws {TypeError} fourth argument must be a supported output data type policy
* @returns {UnaryStridedDispatch} instance
*
* @example
* var base = require( '@stdlib/stats/base/ndarray/max' );
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = idt;
* var policy = 'same';
*
* var table = {
*     'default': base
* };
* var max = new UnaryStridedDispatch( table, [ idt ], odt, policy );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var y = max.apply( x );
* // returns <ndarray>
*
* var v = y.get();
* // returns 2.0
*/
function UnaryStridedDispatch( table, idtypes, odtypes, policy ) {
	var dt;
	var i;
	if ( !( this instanceof UnaryStridedDispatch ) ) {
		return new UnaryStridedDispatch( table, idtypes, odtypes, policy );
	}
	if ( !isObject( table ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an object. Value: `%s`.', table ) );
	}
	if ( !isFunction( table.default ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an object having a "default" property and an associated method.' ) );
	}
	if ( !isCollection( idtypes ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an array-like object. Value: `%s`.', idtypes ) );
	}
	for ( i = 0; i < idtypes.length; i++ ) {
		dt = idtypes[ i ];
		if (
			!isCollection( dt ) ||
			dt.length < 1 ||
			!everyBy( dt, isDataType )
		) {
			throw new TypeError( format( 'invalid argument. Second argument must contain arrays of data types. Value: `%s`.', idtypes ) );
		}
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
	this._table = table;
	this._idtypes = idtypes;
	this._odtypes = odtypes;
	this._policy = policy;
	return this;
}

/**
* Performs a reduction on a provided input ndarray.
*
* @name apply
* @memberof UnaryStridedDispatch.prototype
* @type {Function}
* @param {ndarrayLike} x - input ndarray
* @param {...ndarrayLike} [args] - additional ndarray arguments
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform a reduction
* @param {boolean} [options.keepdims=false] - boolean indicating whether the reduced dimensions should be included in the returned ndarray as singleton dimensions
* @param {string} [options.dtype] - output ndarray data type
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} options argument must be an object
* @throws {RangeError} dimension indices must not exceed input ndarray bounds
* @throws {RangeError} number of dimension indices must not exceed the number of input ndarray dimensions
* @throws {Error} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var base = require( '@stdlib/stats/base/ndarray/max' );
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = idt;
* var policy = 'same';
*
* var table = {
*     'default': base
* };
* var max = new UnaryStridedDispatch( table, [ idt ], odt, policy );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var y = max.apply( x );
* // returns <ndarray>
*
* var v = y.get();
* // returns 2.0
*/
setReadOnly( UnaryStridedDispatch.prototype, 'apply', function apply( x ) {
	var options;
	var nargs;
	var args;
	var opts;
	var err;
	var idx;
	var shx;
	var shy;
	var arr;
	var dt;
	var f;
	var N;
	var y;
	var i;

	nargs = arguments.length;
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray-like object. Value: `%s`.', x ) );
	}
	dt = getDType( x );
	if ( !contains( this._idtypes[ 0 ], dt ) ) {
		throw new TypeError( format( 'invalid argument. First argument must have one of the following data types: "%s". Data type: `%s`.', join( this._idtypes[ 0 ], '", "' ), dt ) );
	}
	args = [ x ];
	for ( i = 1; i < nargs; i++ ) {
		arr = arguments[ i ];
		if ( !isndarrayLike( arr ) ) {
			break;
		}
		dt = getDType( arr );
		if ( !contains( this._idtypes[ i ], dt ) ) {
			throw new TypeError( format( 'invalid argument. Argument %d must have one of the following data types: "%s". Data type: `%s`.', i, join( this._idtypes[ i ], '", "' ), dt ) );
		}
		args.push( arr );
	}
	// If we didn't make it up until the last argument, this means that we found a non-options argument which was not an ndarray...
	if ( i < nargs-1 ) {
		throw new TypeError( format( 'invalid argument. Argument %d must be an ndarray-like object. Value: `%s`.', i, arguments[ i ] ) );
	}
	shx = getShape( x );
	N = shx.length;

	opts = objectAssign( {}, defaults );
	if ( nargs > i ) {
		options = arguments[ nargs-1 ];
		err = validate( opts, N, this._odtypes, options );
		if ( err ) {
			throw err;
		}
	}
	// When a list of dimensions is not provided, reduce the entire input array across all dimensions...
	if ( opts.dims === null ) {
		opts.dims = zeroTo( N );
	}
	// Resolve the list of non-reduced dimensions:
	idx = indicesComplement( N, opts.dims );

	// Resolve the output array shape:
	shy = takeIndexed( shx, idx );

	// Initialize an output array whose shape matches that of the non-reduced dimensions and which has the same memory layout as the input array:
	y = empty( shy, {
		'dtype': opts.dtype || unaryOutputDataType( dt, this._policy ),
		'order': getOrder( x )
	});

	// Resolve the lower-level reduction function based on the data type of the input ndarray:
	f = this._table[ dt ] || this._table.default;

	// Perform the reduction:
	args.push( y );
	unaryReduceStrided1d( f, args, opts.dims );

	// Check whether we need to reinsert singleton dimensions which can be useful for broadcasting the returned output array to the shape of the original input array...
	if ( opts.keepdims ) {
		y = spreadDimensions( N, y, idx );
	}
	return y;
});

/**
* Performs a reduction on a provided input ndarray and assigns results to a provided output ndarray.
*
* @name assign
* @memberof UnaryStridedDispatch.prototype
* @type {Function}
* @param {ndarrayLike} x - input ndarray
* @param {...ndarrayLike} [args] - additional ndarray arguments
* @param {ndarrayLike} out - output ndarray
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform a reduction
* @throws {TypeError} first argument must be an ndarray
* @throws {TypeError} first argument must have a supported data type
* @throws {TypeError} output argument must be an ndarray
* @throws {TypeError} options argument must be an object
* @throws {RangeError} dimension indices must not exceed input ndarray bounds
* @throws {RangeError} number of dimension indices must not exceed the number of input ndarray dimensions
* @throws {Error} must provide valid options
* @returns {ndarrayLike} output ndarray
*
* @example
* var base = require( '@stdlib/stats/base/ndarray/max' );
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = idt;
* var policy = 'same';
*
* var table = {
*     'default': base
* };
* var max = new UnaryStridedDispatch( table, [ idt ], odt, policy );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var ybuf = [ 0.0 ];
* var y = new ndarray( 'generic', ybuf, [], [ 0 ], 0, 'row-major' );
*
* var out = max.assign( x, y );
* // returns <ndarray>
*
* var v = out.get();
* // returns 2.0
*
* var bool = ( out === y );
* // returns true
*/
setReadOnly( UnaryStridedDispatch.prototype, 'assign', function assign( x ) {
	var options;
	var nargs;
	var opts;
	var args;
	var arr;
	var err;
	var tmp;
	var flg;
	var dt;
	var N;
	var f;
	var i;

	nargs = arguments.length;
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray-like object. Value: `%s`.', x ) );
	}
	// Validate the input ndarray data type in order to maintain similar behavior to `apply` above...
	dt = getDType( x );
	if ( !contains( this._idtypes[ 0 ], dt ) ) {
		throw new TypeError( format( 'invalid argument. First argument must have one of the following data types: "%s". Data type: `%s`.', join( this._idtypes[ 0 ], '", "' ), dt ) );
	}
	args = [ x ];

	// Resolve additional ndarray arguments...
	for ( i = 1; i < nargs; i++ ) {
		arr = arguments[ i ];
		if ( !isndarrayLike( arr ) ) {
			break;
		}
		args.push( arr );
	}
	// Ensure that we were provided an output ndarray...
	if ( i < 2 ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an ndarray-like object. Value: `%s`.', arguments[ 1 ] ) );
	}
	// If we processed all but the last argument, assume that the last argument is an options argument...
	else if ( i === nargs-1 ) {
		options = arguments[ i ];
		flg = true;
	}
	// Otherwise, if we have more than one argument remaining, then at least one argument is not an ndarray but should be...
	else if ( i < nargs-1 ) {
		throw new TypeError( format( 'invalid argument. Argument %d must be an ndarray-like object. Value: `%s`.', i, arguments[ i ] ) );
	}
	// Verify that additional ndarray arguments have expected dtypes (note: we intentionally don't validate the output ndarray dtype in order to provide an escape hatch for a user wanting to have an output ndarray having a specific dtype that `apply` does not support)...
	for ( i = 1; i < args.length-1; i++ ) {
		dt = getDType( args[ i ] );
		if ( !contains( this._idtypes[ i ], dt ) ) {
			throw new TypeError( format( 'invalid argument. Argument %d must have one of the following data types: "%s". Data type: `%s`.', i, join( this._idtypes[ i ], '", "' ), dt ) );
		}
	}
	// Validate any provided options...
	N = ndims( x );
	opts = objectAssign( {}, defaults );
	if ( flg ) {
		err = validate( opts, N, this._odtypes, options );
		if ( err ) {
			throw err;
		}
	}
	// When a list of dimensions is not provided, reduce the entire input array across all dimensions...
	if ( opts.dims === null ) {
		opts.dims = zeroTo( N );
	}
	// Resolve the lower-level reduction function based on the data type of the input ndarray:
	f = this._table[ dt ] || this._table.default;

	// Ensure that the output ndarray is the second ndarray argument when passing along to the lower-level reduction function below:
	tmp = args[ 1 ];
	args[ 1 ] = args[ args.length-1 ];
	args[ args.length-1 ] = tmp;

	// Perform the reduction:
	unaryReduceStrided1d( f, args, opts.dims ); // note: we assume that this lower-level function handles further validation of the output ndarray (e.g., expected shape, etc)

	return args[ 1 ];
});


// EXPORTS //

module.exports = UnaryStridedDispatch;
