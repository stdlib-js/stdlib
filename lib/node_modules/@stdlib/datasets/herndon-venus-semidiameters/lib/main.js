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


// VARIABLES //

var fpath = resolve( __dirname, '..', 'data', 'data.json' );
var opts = {
	'encoding': 'utf8'
};


// MAIN //

/**
* Returns fifteen observations of the vertical semidiameter of Venus, made by Lieutenant Herndon, with the meridian circle at Washington, in the year 1846.
*
* ## Notes
*
* -   This function synchronously reads data from disk for each invocation. Such behavior is intentional and so is the avoidance of `require`. We assume that invocations are infrequent, and we want to avoid the `require` cache. This means that we allow data to be garbage collected and a user is responsible for explicitly caching data.
*
* @throws {Error} unable to read data
* @returns {NumberArray} data
*
* @example
* var d = data();
* // returns [ -0.30, -0.44, ..., 0.39, 0.10 ]
*/
function data() {
	var d = readJSON( fpath, opts );
	if ( d instanceof Error ) {
		throw d;
	}
	return d;
}


// EXPORTS //

module.exports = data;
