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

// MODULES //

var tape = require( 'tape' );
var cwd = require( '@stdlib/process/cwd' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var chdir = require( './../lib' );


// VARIABLES //

var DIR = cwd();
var opts = {
	'skip': IS_BROWSER
};


// FUNCTIONS //

/**
* Restores the current working directory.
*
* @private
*/
function restore() {
	chdir( DIR );
}


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof chdir, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function changes the working directory', opts, function test( t ) {
	var err = chdir( __dirname );

	t.equal( err, null, 'returns expected value' );
	t.equal( cwd(), __dirname, 'sets working directory' );

	// Restore current working directory:
	restore();

	t.end();
});

tape( 'if the function encounters an error when attempting to change the working directory, the function returns the error', opts, function test( t ) {
	var err = chdir( 'kjflajflsda/bkadlfjadlfksabldjkfklajsf/dkfaljsf' ); // non-existent directory

	t.equal( err instanceof Error, true, 'returns an error' );
	t.equal( cwd(), DIR, 'does not change working directory' );

	// Restore current working directory:
	restore();

	t.end();
});
