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
var exec = require( 'child_process' ).exec;
var tape = require( 'tape' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
var EXEC_PATH = require( '@stdlib/process/exec-path' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var beta = require( '@stdlib/random/base/beta' ).factory;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var existsSync = require( '@stdlib/fs/exists' ).sync;
var unlinkSync = require( '@stdlib/fs/unlink' ).sync;
var Uint32Array = require( '@stdlib/array/uint32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var gcopy = require( '@stdlib/blas/base/gcopy' );
var replace = require( '@stdlib/string/replace' );


// VARIABLES //

var fpath = resolve( __dirname, '..', 'bin', 'cli' );
var opts = {
	'skip': IS_BROWSER || IS_WINDOWS
};


// FIXTURES //

var PKG_VERSION = require( './../package.json' ).version;


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

tape( 'if provided insufficient arguments, the command-line interface prints an error and sets a non-zero exit code (none)', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		fpath
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.pass( error.message );
			t.strictEqual( error.code, 1, 'expected exit code' );
		} else {
			t.fail( 'should error' );
		}
		t.strictEqual( stdout.toString(), '', 'does not print to `stdout`' );
		t.strictEqual( stderr.toString().length > 0, true, 'prints to `stderr`' );
		t.end();
	}
});

tape( 'if provided insufficient arguments, the command-line interface prints an error and sets a non-zero exit code (one)', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		fpath,
		'2.0'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.pass( error.message );
			t.strictEqual( error.code, 1, 'expected exit code' );
		} else {
			t.fail( 'should error' );
		}
		t.strictEqual( stdout.toString(), '', 'does not print to `stdout`' );
		t.strictEqual( stderr.toString().length > 0, true, 'prints to `stderr`' );
		t.end();
	}
});

tape( 'the command-line interface supports specifying the number of generated pseudorandom numbers', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		fpath,
		'2.0',
		'5.0',
		'--iter 10'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var results;
		var v;
		var i;
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );

			results = stdout.toString();
			results = results.split( '\n' );

			// 10 numbers + trailing newline:
			t.strictEqual( results.length, 11, 'has expected length' );
			for ( i = 0; i < results.length-1; i++ ) {
				v = parseFloat( results[ i ] );
				t.strictEqual( typeof v, 'number', 'has expected type' );
				t.strictEqual( isnan( v ), false, 'is not NaN' );
			}
		}
		t.end();
	}
});

tape( 'the command-line interface supports specifying the pseudorandom number generator seed', opts, function test( t ) {
	var rand;
	var cmd;

	cmd = [
		EXEC_PATH,
		fpath,
		'2.0',
		'5.0',
		'--iter 10',
		'--seed 12345'
	];

	// Note: we assume that the underlying generator is the following PRNG...
	rand = beta( 2.0, 5.0, {
		'seed': 12345
	});

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var results;
		var v;
		var i;
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );

			results = stdout.toString();
			results = results.split( '\n' );

			// 10 numbers + trailing newline:
			t.strictEqual( results.length, 11, 'has expected length' );
			for ( i = 0; i < results.length-1; i++ ) {
				v = parseFloat( results[ i ] );
				t.strictEqual( v, rand(), 'prints expected value' );
			}
		}
		t.end();
	}
});

tape( 'the command-line interface supports specifying a custom delimiter', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		fpath,
		'2.0',
		'5.0',
		'--iter 10',
		'--sep aba'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var results;
		var v;
		var i;
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );

			results = stdout.toString();
			results = results.split( '\n' );

			// Only trailing newline:
			t.strictEqual( results.length, 2, 'has expected length' );

			results = results[ 0 ].split( 'aba' );
			t.strictEqual( results.length, 10, 'has expected length' );
			for ( i = 0; i < results.length-1; i++ ) {
				v = parseFloat( results[ i ] );
				t.strictEqual( typeof v, 'number', 'has expected type' );
				t.strictEqual( isnan( v ), false, 'is not NaN' );
			}
		}
		t.end();
	}
});

tape( 'the command-line interface supports specifying a pseudorandom number generator state', opts, function test( t ) {
	var state;
	var spath;
	var rand;
	var cmd;
	var len;

	spath = resolve( __dirname, 'fixtures', 'state.txt' );
	state = readFileSync( spath );

	cmd = [
		EXEC_PATH,
		fpath,
		'2.0',
		'5.0',
		'--iter 10',
		'--state "'+spath+'"'
	];

	// Explicitly copy the `Buffer`, as, in older Node.js versions, `Buffer` is not a typed array:
	len = state.length;
	state = gcopy( len, state, 1, new Uint8Array( len ), 1 );
	state = new Uint32Array( state.buffer, state.byteOffset, len/Uint32Array.BYTES_PER_ELEMENT ); // eslint-disable-line max-len

	// Note: we assume that the underlying generator is the following PRNG...
	rand = beta( 2.0, 5.0, {
		'state': state
	});

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var results;
		var v;
		var i;
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );

			results = stdout.toString();
			results = results.split( '\n' );

			// 10 numbers + trailing newline:
			t.strictEqual( results.length, 11, 'has expected length' );
			for ( i = 0; i < results.length-1; i++ ) {
				v = parseFloat( results[ i ] );
				t.strictEqual( v, rand(), 'prints expected value' );
			}
		}
		t.end();
	}
});

tape( 'the command-line interface supports specifying an output file path for saving the pseudorandom number generator state upon exit', opts, function test( t ) {
	var state;
	var spath;
	var rand;
	var cmd;
	var arr;
	var i;

	// Define an output path for a temporary file:
	spath = resolve( __dirname, 'fixtures', 'tmp_state_snapshot.txt' );

	// Ensure that the temporary file does not already exist:
	if ( existsSync( spath ) ) {
		t.fail( 'temporary file should not exist: '+spath );
		return t.end();
	}

	cmd = [
		EXEC_PATH,
		fpath,
		'2.0',
		'5.0',
		'--seed 12345',
		'--iter 10',
		'--snapshot "'+spath+'"'
	];

	// Note: we assume that the underlying generator is the following PRNG...
	rand = beta( 2.0, 5.0, {
		'seed': 12345
	});

	// Advance the PRNG state:
	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( rand() );
	}

	// Get the current PRNG state:
	state = rand.state;

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var snapshot;
		var results;
		var len;
		var err;
		var v;
		var i;
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );

			results = stdout.toString();
			results = results.split( '\n' );

			// 10 numbers + trailing newline:
			t.strictEqual( results.length, 11, 'has expected length' );
			for ( i = 0; i < results.length-1; i++ ) {
				v = parseFloat( results[ i ] );
				t.strictEqual( v, arr[ i ], 'prints expected value' );
			}

			// Check that the PRNG state was written to a file:
			t.strictEqual( existsSync( spath ), true, 'temporary snapshot file exists' );

			// Verify the file contents (note: we need to explicitly copy the `Buffer`, as, in older Node.js versions, `Buffer` is not a typed array):
			snapshot = readFileSync( spath );
			len = snapshot.length;
			snapshot = gcopy( len, snapshot, 1, new Uint8Array( len ), 1 );
			snapshot = new Uint32Array( snapshot.buffer, snapshot.byteOffset, len/Uint32Array.BYTES_PER_ELEMENT ); // eslint-disable-line max-len

			t.deepEqual( snapshot, state, 'file contains expected contents' );

			// Remove the temporary file:
			err = unlinkSync( spath );
			if ( err ) {
				t.fail( err.message );
			}
			t.strictEqual( existsSync( spath ), false, 'temporary snapshot file does not exist' );
		}
		t.end();
	}
});

tape( 'if provided an invalid pseudorandom number generator state, the command-line interface prints an error and sets a non-zero exit code', opts, function test( t ) {
	var spath;
	var cmd;

	spath = resolve( __dirname, 'fixtures', 'bad_state.txt' );

	cmd = [
		EXEC_PATH,
		fpath,
		'2.0',
		'5.0',
		'--iter 10',
		'--state "'+spath+'"'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.pass( error.message );
			t.strictEqual( error.code, 1, 'expected exit code' );
		} else {
			t.fail( 'should error' );
		}
		t.strictEqual( stdout.toString(), '', 'does not print to `stdout`' );
		t.strictEqual( stderr.toString().length > 0, true, 'prints to `stderr`' );
		t.end();
	}
});

tape( 'if an error is encountered when writing pseudorandom number generator state to file, the command-line interface prints an error and sets a non-zero exit code', opts, function test( t ) {
	var script;
	var opts;
	var cmd;

	script = readFileSync( resolve( __dirname, 'fixtures', 'write_error.js.txt' ), {
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
		// Pseudorandom numbers have already been written to `stdout` by the time the error is encountered...
		t.strictEqual( stdout.toString().length > 0, true, 'prints to `stdout`' );
		t.strictEqual( stderr.toString(), 'Error: beep\n', 'expected value' );
		t.end();
	}
});
