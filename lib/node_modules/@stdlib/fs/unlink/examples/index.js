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
var unlink = require( './../lib' ).sync;

var src = join( __dirname, 'fixtures', 'file.txt' );
var dest = join( __dirname, 'tmp.txt' );

// Create a temporary file:
writeFile( dest, readFile( src ) );

// Confirm that the temporary file exists:
console.log( exists( dest ) );
// => true

// Delete the temporary file:
unlink( dest );

// Confirm that the temporary file no longer exists:
console.log( exists( dest ) );
// => false
