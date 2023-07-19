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

var resolveParentPath = require( './../lib' );

var opts = {
	'dir': __dirname
};

/* Sync */

var out = resolveParentPath.sync( 'package.json', opts );
console.log( out );
// => '...'

out = resolveParentPath.sync( 'non_existent_basename' );
console.log( out );
// => null

/* Async */

resolveParentPath( 'package.json', opts, onPath );
resolveParentPath( './../non_existent_path', onPath );

function onPath( error, path ) {
	if ( error ) {
		throw error;
	}
	console.log( path );
}
