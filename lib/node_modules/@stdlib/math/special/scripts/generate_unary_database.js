#!/usr/bin/env node

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

'use strict';

// MODULES //

var join = require( 'path' ).join;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var tryRequire = require( '@stdlib/utils/try-require' );
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var objectKeys = require( '@stdlib/utils/keys' );
var functionDatabase = require( './../data/unary_function_database.json' );


// VARIABLES //

var OUTPUT_PATH = join( __dirname, '..', 'data', 'unary.json' );


// FUNCTIONS //

/**
* Extracts scaffold metadata from a package's package.json file.
*
* @private
* @param {string} pkgPath - package path
* @returns {Object} scaffold object
*
* @example
* var scaffold = extractScaffold( '@stdlib/math/base/special/sqrt' );
* // returns {...}
*/
function extractScaffold( pkgPath ) {
	var pkg;
	var o;
	pkg = tryRequire( join( pkgPath, 'package.json' ) );
	if ( pkg instanceof Error ) {
		return {};
	}
	o = pkg[ '__stdlib__' ];
	if ( o && o.scaffold ) {
		return o.scaffold;
	}
	return {};
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var kernels;
	var pkgPath;
	var names;
	var db;
	var dt;
	var i;
	var j;

	// Initialize an object for storing scaffold meta data:
	db = {};

	// Resolve a list of function names:
	names = objectKeys( functionDatabase );

	// For each function, resolve the scaffold meta data for all associated scalar kernels...
	for ( i = 0; i < names.length; i++ ) {
		// Resolve a table mapping dtypes to scalar kernels:
		kernels = functionDatabase[ names[ i ] ].scalar_kernels;

		// Resolve a list of dtypes:
		dt = objectKeys( kernels );

		// For each scalar kernel associated with a dtype, resolve the scaffold meta data...
		for ( j = 0; j < dt.length; j++ ) {
			// Resolve the name of the scalar kernel package associated with the current dtype:
			pkgPath = kernels[ dt[ j ] ];

			// Only attempt to resolve scaffold meta data if we haven't already processed this package...
			if ( !hasOwnProp( db, pkgPath ) ) {
				db[ pkgPath ] = extractScaffold( pkgPath );
			}
		}
	}
	// Write the database to a file:
	writeFile( OUTPUT_PATH, JSON.stringify( db, null, 2 )+'\n' );
}

main();
