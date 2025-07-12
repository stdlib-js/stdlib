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

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var readJSON = require( '@stdlib/fs/read-json' ).sync;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var format = require( '@stdlib/string/format' );
var validate = require( './validate.js' );


// VARIABLES //

var keys = [ 'army', 'cities', 'labels', 'rivers', 'temperature' ];
var minardData = {
	'army': resolve( __dirname, '..', 'data', 'army.json' ),
	'cities': resolve( __dirname, '..', 'data', 'cities.json' ),
	'labels': resolve( __dirname, '..', 'data', 'labels.json' ),
	'rivers': resolve( __dirname, '..', 'data', 'rivers.geo.json' ),
	'temperature': resolve( __dirname, '..', 'data', 'temperature.json' )
};
var fopts = {
	'encoding': 'utf8'
};


// MAIN //

/**
* Returns datasets for Charles Joseph Minard's cartographic depiction of Napoleon's Russian campaign of 1812.
*
* ## Notes
*
* -   This function synchronously reads data from disk for each invocation. Such behavior is intentional and so is the avoidance of `require`. We assume that invocations are infrequent, and we want to avoid the `require` cache. This means that we allow data to be garbage collected and a user is responsible for explicitly caching data.
*
* @param {Options} [options] - options object
* @param {string} [options.data] - dataset name
* @throws {Error} unable to read data
* @throws {TypeError} must provide an object
* @throws {TypeError} must provide valid options
* @throws {RangeError} must provide a recognized dataset name
* @returns {(Object|ObjectArray)} dataset(s)
*
* @example
* var data = minard();
* // returns <Object>
*
* @example
* var data = minard({
*     'data': 'army'
* });
* // returns <ObjectArray>
*/
function minard( options ) {
	var opts;
	var err;
	var key;
	var out;
	var val;
	var i;

	if ( arguments.length > 0 ) {
		opts = {};
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
		if ( opts.data ) {
			if ( !hasOwnProp( minardData, opts.data ) ) {
				throw new RangeError( format( 'invalid option. `%s` option must be one of the following: "%s". Option: `%s`.', 'data', keys.join( '", "' ), opts.data ) );
			}
			out = readJSON( minardData[ opts.data ], fopts );
			if ( out instanceof Error ) {
				throw out;
			}
			return out;
		}
	}
	out = {};
	for ( i = 0; i < keys.length; i++ ) {
		key = keys[ i ];
		val = readJSON( minardData[ key ] );
		if ( val instanceof Error ) {
			throw val;
		}
		out[ key ] = val;
	}
	return out;
}


// EXPORTS //

module.exports = minard;
