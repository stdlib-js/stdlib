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

var join = require( 'path' ).join;
var readFile = require( '@stdlib/fs/read-file' ).sync;
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var exists = require( '@stdlib/fs/exists' ).sync;
var unlink = require( '@stdlib/fs/unlink' ).sync;
var rename = require( './../lib' ).sync;

var src = join( __dirname, 'fixtures', 'file.txt' );
var tmp = join( __dirname, 'tmp.txt' );
var dest = join( __dirname, 'foo.txt' );

// Create a temporary file:
writeFile( tmp, readFile( src ) );

// Confirm that the temporary file exists:
console.log( exists( tmp ) );
// => true

// Rename the temporary file:
rename( tmp, dest );

// Confirm that the renamed temporary file exists:
console.log( exists( dest ) );
// => true

// Remove the temporary file:
unlink( dest );

// Confirm that the temporary file no longer exists:
console.log( exists( dest ) );
// => false
