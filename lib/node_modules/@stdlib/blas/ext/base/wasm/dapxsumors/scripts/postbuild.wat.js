#!/usr/bin/env node

/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var licenseHeader = require( '@stdlib/_tools/licenses/header' );
var insertHeader = require( '@stdlib/_tools/licenses/insert-header-file-list' ).sync;
var currentYear = require( '@stdlib/time/current-year' );


// VARIABLES //

var wpath = resolve( __dirname, '..', 'src', 'main.wat' );


// MAIN //

/**
* Main execution sequence.
*
* @private
* @throws {Error} unexpected error
*/
function main() {
	var headers;
	var files;
	var err;

	files = [
		wpath
	];
	headers = {
		'wat': licenseHeader( 'Apache-2.0', 'wat', {
			'year': currentYear(),
			'copyright': 'The Stdlib Authors'
		})
	};
	err = insertHeader( files, headers );
	if ( err ) {
		throw err;
	}
}

main();
