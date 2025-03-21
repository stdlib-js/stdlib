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
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var existsSync = require( '@stdlib/fs/exists' ).sync;
var unlinkSync = require( '@stdlib/fs/unlink' ).sync;
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var rename = require( './../lib/sync.js' );


// VARIABLES //

// Don't run tests in the browser...for now...
var opts = {
	'skip': IS_BROWSER // FIXME
};
var FILE = join( __dirname, 'fixtures', 'file.txt' );
var TMP = join( __dirname, 'fixtures', 'tmp.txt' );
var DATA = readFile( FILE, 'utf8' );


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
	unlinkSync( TMP );
	writeFile( FILE, DATA );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof rename, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function renames a file', opts, function test( t ) {
	rename( FILE, TMP );

	t.strictEqual( existsSync( FILE ), false, 'removes file' );
	t.strictEqual( existsSync( TMP ), true, 'new path exists' );

	restore();
	t.strictEqual( existsSync( FILE ), true, 'file restored' );
	t.strictEqual( existsSync( TMP ), false, 'tmp file does not exist' );

	t.end();
});

tape( 'if the function encounters an error, the function returns the error', opts, function test( t ) {
	var file;
	var err;

	file = 'beepboopbapbop/dkfjldjfaklsjf/bdlfalfas/bkldflakfjas'; // non-existent directory path
	err = rename( file, TMP );

	t.strictEqual( err instanceof Error, true, err.message );
	t.strictEqual( existsSync( FILE ), true, 'file not removed' );
	t.strictEqual( existsSync( TMP ), false, 'tmp file does not exist' );

	restore();
	t.strictEqual( existsSync( FILE ), true, 'file restored' );
	t.strictEqual( existsSync( TMP ), false, 'tmp file does not exist' );

	t.end();
});
