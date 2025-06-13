/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var resolveParentPaths = require( './../lib' );

var opts = {
	'dir': __dirname
};

/* Sync */

var out = resolveParentPaths.sync( [ 'package.json', 'README.md' ], opts );
console.log( out );
// => [...]

out = resolveParentPaths.sync( [ 'non_existent_basename', 'package.json' ], opts );
console.log( out );
// => []

opts.mode = 'first';
out = resolveParentPaths.sync( [ 'non_existent_basename', 'package.json' ], opts );
console.log( out );
// => [...]

/* Async */

resolveParentPaths( [ 'package.json', 'README.md' ], opts, onPaths );
resolveParentPaths( [ './../non_existent_path' ], onPaths );

function onPaths( error, paths ) {
	if ( error ) {
		throw error;
	}
	console.log( paths );
}
