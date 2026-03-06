/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var resolveParentPathBy = require( './../lib' );

var opts = {
	'dir': __dirname
};

/* Sync */

function predicateSync( path ) {
	var pkg = require( path ); // eslint-disable-line stdlib/no-dynamic-require
	if ( pkg.name !== '@stdlib/stdlib' ) {
		return false;
	}
	return true;
}

var out = resolveParentPathBy.sync( 'package.json', opts, predicateSync );
console.log( out );
// e.g., => '...'

out = resolveParentPathBy.sync( 'non_existent_basename/package.json', predicateSync );
console.log( out );
// => null

/* Async */

function predicateAsync( path, next ) {
	setTimeout( onTimeout, 0 );

	function onTimeout() {
		var pkg = require( path ); // eslint-disable-line stdlib/no-dynamic-require
		if ( pkg.name !== '@stdlib/stdlib' ) {
			return next( null, false );
		}
		next( null, true );
	}
}

function onPath( error, path ) {
	if ( error ) {
		throw error;
	}
	console.log( path );
}

resolveParentPathBy( 'package.json', opts, predicateAsync, onPath );
resolveParentPathBy( './../non_existent_path/package.json', predicateAsync, onPath );
