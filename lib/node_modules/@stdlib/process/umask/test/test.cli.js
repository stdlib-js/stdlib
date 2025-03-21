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

var proc = require( 'process' );
var resolve = require( 'path' ).resolve;
var exec = require( 'child_process' ).exec;
var tape = require( 'tape' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
var EXEC_PATH = require( '@stdlib/process/exec-path' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var lpad = require( '@stdlib/string/left-pad' );
var trimRight = require( '@stdlib/string/right-trim' );


// VARIABLES //

var fpath = resolve( __dirname, '..', 'bin', 'cli' );
var opts = {
	'skip': IS_BROWSER || IS_WINDOWS
};
var RE_MASK = /^u{0,1}=r{0,1}w{0,1}x{0,1},g{0,1}=r{0,1}w{0,1}x{0,1},o{0,1}=r{0,1}w{0,1}x{0,1}$/;
var RE_MASK_CMD_S = /^umask -S u{0,1}=r{0,1}w{0,1}x{0,1},g{0,1}=r{0,1}w{0,1}x{0,1},o{0,1}=r{0,1}w{0,1}x{0,1}$/;


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

tape( 'the command-line interface prints the process mask', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		fpath
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var mask;
		var str;
		if ( error ) {
			t.fail( error.message );
		} else {
			str = stdout.toString();
			mask = lpad( proc.umask().toString( 8 ), 4, '0' );
			t.strictEqual( str, mask+'\n', 'prints mask to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface prints the process mask command (-p)', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		fpath,
		'-p'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var mask;
		var str;
		if ( error ) {
			t.fail( error.message );
		} else {
			str = stdout.toString();
			mask = lpad( proc.umask().toString( 8 ), 4, '0' );
			t.strictEqual( str, 'umask '+mask+'\n', 'prints mask cmd to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface prints the process mask command (--print)', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		fpath,
		'--print'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var mask;
		var str;
		if ( error ) {
			t.fail( error.message );
		} else {
			str = stdout.toString();
			mask = lpad( proc.umask().toString( 8 ), 4, '0' );
			t.strictEqual( str, 'umask '+mask+'\n', 'prints mask cmd to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface prints the process mask in symbolic notation (-S)', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		fpath,
		'-S'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var str;
		if ( error ) {
			t.fail( error.message );
		} else {
			str = trimRight( stdout.toString() );
			t.strictEqual( RE_MASK.test( str ), true, 'prints mask to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface prints the process mask in symbolic notation (--symbolic)', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		fpath,
		'--symbolic'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var str;
		if ( error ) {
			t.fail( error.message );
		} else {
			str = trimRight( stdout.toString() );
			t.strictEqual( RE_MASK.test( str ), true, 'prints mask to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface prints the process mask command in symbolic notation (-Sp)', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		fpath,
		'-Sp'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var str;
		if ( error ) {
			t.fail( error.message );
		} else {
			str = trimRight( stdout.toString() );
			t.strictEqual( RE_MASK_CMD_S.test( str ), true, 'prints mask cmd to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface prints the process mask command in symbolic notation (-S -p)', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		fpath,
		'-S',
		'-p'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var str;
		if ( error ) {
			t.fail( error.message );
		} else {
			str = trimRight( stdout.toString() );
			t.strictEqual( RE_MASK_CMD_S.test( str ), true, 'prints mask cmd to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface prints the process mask command in symbolic notation (-S --print)', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		fpath,
		'-S',
		'--print'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var str;
		if ( error ) {
			t.fail( error.message );
		} else {
			str = trimRight( stdout.toString() );
			t.strictEqual( RE_MASK_CMD_S.test( str ), true, 'prints mask cmd to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface prints the process mask command in symbolic notation (--symbolic -p)', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		fpath,
		'--symbolic',
		'-p'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var str;
		if ( error ) {
			t.fail( error.message );
		} else {
			str = trimRight( stdout.toString() );
			t.strictEqual( RE_MASK_CMD_S.test( str ), true, 'prints mask cmd to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface prints the process mask command in symbolic notation (--symbolic --print)', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		fpath,
		'--symbolic',
		'--print'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var str;
		if ( error ) {
			t.fail( error.message );
		} else {
			str = trimRight( stdout.toString() );
			t.strictEqual( RE_MASK_CMD_S.test( str ), true, 'prints mask cmd to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});
