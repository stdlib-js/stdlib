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

var resolve = require( 'path' ).resolve;
var join = require( 'path' ).join;
var exec = require( 'child_process' ).exec;
var tape = require( 'tape' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
var EXEC_PATH = require( '@stdlib/process/exec-path' );
var replace = require( '@stdlib/string/replace' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var writeFileSync = require( '@stdlib/fs/write-file' ).sync;
var existsSync = require( '@stdlib/fs/exists' ).sync;
var unlinkSync = require( '@stdlib/fs/unlink' ).sync;


// VARIABLES //

var fpath = resolve( __dirname, '..', 'bin', 'cli' );
var opts = {
	'skip': IS_BROWSER || IS_WINDOWS
};
var FILE = join( __dirname, 'fixtures', 'file.txt' );
var TMP = join( __dirname, 'fixtures', 'tmp.txt' );
var DATA = readFileSync( FILE );
var PKG_VERSION = require( './../package.json' ).version;


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
	writeFileSync( FILE, DATA );
}


// TESTS //

tape( 'command-line interface', function test( t ) {
	t.ok( true, __filename );
	t.end();
});

tape( 'when invoked with a `--help` flag, the command-line interface prints the help text to `stderr`', opts, function test( t ) {
	var expected;
	var cmd;

	expected = readFileSync( resolve( __dirname, '..', 'docs', 'usage.txt' ), {
		'encoding': 'utf8'
	});
	cmd = [
		EXEC_PATH,
		fpath,
		'--help'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( stdout.toString(), '', 'does not print to `stdout`' );
			t.strictEqual( stderr.toString(), expected+'\n', 'expected value' );
		}
		t.end();
	}
});

tape( 'when invoked with a `-h` flag, the command-line interface prints the help text to `stderr`', opts, function test( t ) {
	var expected;
	var cmd;

	expected = readFileSync( resolve( __dirname, '..', 'docs', 'usage.txt' ), {
		'encoding': 'utf8'
	});
	cmd = [
		EXEC_PATH,
		fpath,
		'-h'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( stdout.toString(), '', 'does not print to `stdout`' );
			t.strictEqual( stderr.toString(), expected+'\n', 'expected value' );
		}
		t.end();
	}
});

tape( 'when invoked with a `--version` flag, the command-line interface prints the version to `stderr`', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		fpath,
		'--version'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( stdout.toString(), '', 'does not print to `stdout`' );
			t.strictEqual( stderr.toString(), PKG_VERSION+'\n', 'expected value' );
		}
		t.end();
	}
});

tape( 'when invoked with a `-V` flag, the command-line interface prints the version to `stderr`', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		fpath,
		'-V'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( stdout.toString(), '', 'does not print to `stdout`' );
			t.strictEqual( stderr.toString(), PKG_VERSION+'\n', 'expected value' );
		}
		t.end();
	}
});

tape( 'the command-line interface renames a file', opts, function test( t ) {
	var opts;
	var cmd;

	cmd = [
		EXEC_PATH,
		fpath,
		FILE,
		TMP
	];
	opts = {};

	exec( cmd.join( ' ' ), opts, done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( stdout.toString(), '', 'does not print to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.strictEqual( existsSync( FILE ), false, 'old path removed' );
		t.strictEqual( existsSync( TMP ), true, 'new path exists' );

		restore();
		t.strictEqual( existsSync( FILE ), true, 'file restored' );
		t.strictEqual( existsSync( TMP ), false, 'tmp file removed' );

		t.end();
	}
});

tape( 'if provided insufficient input arguments, the command-line interface prints an error and sets a non-zero exit code', opts, function test( t ) {
	var opts;
	var cmd;

	cmd = [
		EXEC_PATH,
		fpath,
		FILE
	];
	opts = {};

	exec( cmd.join( ' ' ), opts, done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.pass( error.message );
			t.strictEqual( error.code, 1, 'expected exit code' );
		}
		t.strictEqual( stdout.toString(), '', 'does not print to `stdout`' );
		t.strictEqual( stderr.toString().length > 0, true, 'prints a message to `stderr`' );

		restore();
		t.strictEqual( existsSync( FILE ), true, 'file restored' );
		t.strictEqual( existsSync( TMP ), false, 'tmp file does not exist' );

		t.end();
	}
});

tape( 'if provided too many input arguments, the command-line interface prints an error and sets a non-zero exit code', opts, function test( t ) {
	var opts;
	var cmd;

	cmd = [
		EXEC_PATH,
		fpath,
		FILE,
		TMP,
		TMP
	];
	opts = {};

	exec( cmd.join( ' ' ), opts, done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.pass( error.message );
			t.strictEqual( error.code, 1, 'expected exit code' );
		}
		t.strictEqual( stdout.toString(), '', 'does not print to `stdout`' );
		t.strictEqual( stderr.toString().length > 0, true, 'prints a message to `stderr`' );

		restore();
		t.strictEqual( existsSync( FILE ), true, 'file restored' );
		t.strictEqual( existsSync( TMP ), false, 'tmp file does not exist' );

		t.end();
	}
});

tape( 'if an error is encountered, the command-line interface prints an error and sets a non-zero exit code', opts, function test( t ) {
	var script;
	var opts;
	var cmd;

	script = readFileSync( resolve( __dirname, 'fixtures', 'rename_error.js.txt' ), {
		'encoding': 'utf8'
	});

	// Replace single quotes with double quotes:
	script = replace( script, '\'', '"' );

	cmd = [
		EXEC_PATH,
		'-e',
		'\''+script+'\''
	];

	opts = {
		'cwd': __dirname
	};

	exec( cmd.join( ' ' ), opts, done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.pass( error.message );
			t.strictEqual( error.code, 1, 'expected exit code' );
		}
		t.strictEqual( stdout.toString(), '', 'does not print to `stdout`' );
		t.strictEqual( stderr.toString(), 'Error: beep\n', 'expected value' );

		restore();
		t.strictEqual( existsSync( FILE ), true, 'file restored' );
		t.strictEqual( existsSync( TMP ), false, 'tmp file does not exist' );

		t.end();
	}
});
