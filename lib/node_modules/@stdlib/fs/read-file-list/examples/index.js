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

var readFileList = require( './../lib' );

/* Sync */

var files = readFileList.sync( [ __filename ], 'utf8' );
// returns <ObjectArray>

console.log( files instanceof Error );
// => false

files = readFileList.sync( [ 'beepboop' ], {
	'encoding': 'utf8'
});
// returns <Error>

console.log( files instanceof Error );
// => true

/* Async */

readFileList( [ __filename ], onFiles );
readFileList( [ 'beepboop' ], onFiles );

function onFiles( error, files ) {
	if ( error ) {
		if ( error.code === 'ENOENT' ) {
			console.error( 'A file does not exist.' );
		} else {
			throw error;
		}
	} else {
		console.dir( files );
	}
}
