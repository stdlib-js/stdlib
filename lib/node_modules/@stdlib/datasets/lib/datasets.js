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

var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var data = require( './data.js' );


// MAIN //

/**
* Returns datasets.
*
* @param {string} name - dataset name
* @param {Options} [options] - dataset options
* @throws {RangeError} unsupported/unrecognized dataset name
* @returns {*} dataset
*/
function datasets( name ) {
	var args;
	var i;

	args = new Array( arguments.length-1 );
	for ( i = 0; i < args.length; i++ ) {
		args[ i ] = arguments[ i+1 ];
	}
	if ( hasOwnProp( data, name ) ) {
		return data[ name ].apply( null, args );
	}
	throw new RangeError( 'invalid value. Unsupported/unrecognized dataset name. Value: `'+name+'`.' );
}


// EXPORTS //

module.exports = datasets;
