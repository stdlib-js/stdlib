/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var fs = require( 'fs' );
var path = require( 'path' );
var flattenObject = require( '@stdlib/utils/flatten-object' );
var objectKeys = require( '@stdlib/utils/keys' );
var exists = require( '@stdlib/fs/exists' ).sync;
var version = require( './../../../../package.json' ).version;
var tree = require( '../public/assets/v'+version+'/package_tree.json' );


// MAIN //

var docsPath = path.resolve( __dirname, '..', 'public', 'assets', 'v'+version );

// Create object with information on each package about whether it has benchmarks and tests:
var paths = flattenObject( tree, {
	'delimiter': '/'
});

var keys = objectKeys( paths );

for ( var i = 0; i < keys.length; i++ ) {
	console.log( path.join( docsPath, '@stdlib', keys[ i ], 'test.html' ) );
	console.log( exists( path.join( docsPath, '@stdlib', keys[ i ], 'test.html' ) ) )
	paths[ keys[ i ] ] = {
		'benchmark': exists( path.join( docsPath, '@stdlib', keys[ i ], 'benchmark.html' ) ),
		'test': exists( path.join( docsPath, '@stdlib', keys[ i ], 'test.html' ) )
	}
}
fs.writeFileSync( path.join( docsPath, 'package_resources.json' ), JSON.stringify( paths ) );
