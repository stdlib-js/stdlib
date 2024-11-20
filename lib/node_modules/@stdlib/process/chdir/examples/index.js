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

var cwd = require( '@stdlib/process/cwd' );
var chdir = require( './../lib' );

// Print the current working directory:
var dir = cwd();
console.log( dir );

// Change the current working directory to the directory of this file:
var err = chdir( __dirname );
if ( err ) {
	console.error( err.message );
}

// Print the current working directory:
console.log( cwd() );

// Change the current working directory back to the original directory:
err = chdir( dir );
if ( err ) {
	console.error( err.message );
}

// Print the current working directory:
console.log( cwd() );
