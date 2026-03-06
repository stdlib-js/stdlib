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

var join = require( 'path' ).join;
var tape = require( 'tape' );
var readFile = require( '@stdlib/fs/read-file' ).sync;
var writeFileSync = require( '@stdlib/fs/write-file' ).sync;
var existsSync = require( '@stdlib/fs/exists' ).sync;
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var unlink = require( './../lib/main.js' );


// VARIABLES //

// Don't run tests in the browser...for now...
var opts = {
	'skip': IS_BROWSER // FIXME
};
var fpath = join( __dirname, 'fixtures', 'file.txt' );
var DATA = readFile( fpath, 'utf8' );


// FUNCTIONS //

/**
* Restores a fixture file.
*
* ## Notes
*
* -   Every function which has the **potential** to affect the fixture file should invoke this function immediately before calling `t.end()`.
*
* @private
*/
function restore() {
	writeFileSync( fpath, DATA );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof unlink, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function removes a directory entry', opts, function test( t ) {
	unlink( fpath, done );

	function done( error ) {
		if ( error ) {
			t.fail( error.message );
		}
		t.strictEqual( existsSync( fpath ), false, 'removes file' );

		restore();
		t.strictEqual( existsSync( fpath ), true, 'file restored' );

		t.end();
	}
});

tape( 'if the function encounters an error, the function returns the error', opts, function test( t ) {
	var file = 'beepboopbapbop/dkfjldjfaklsjf/bdlfalfas/bkldflakfjas'; // non-existent directory path
	unlink( file, done );

	function done( error ) {
		t.strictEqual( error instanceof Error, true, error.message );
		t.strictEqual( existsSync( fpath ), true, 'file not removed' );

		restore();
		t.strictEqual( existsSync( fpath ), true, 'file restored' );

		t.end();
	}
});
