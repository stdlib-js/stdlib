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
var contains = require( '@stdlib/assert/contains' );
var isJSON = require( '@stdlib/assert/is-json' );
var rtrim = require( '@stdlib/string/right-trim' );
var replace = require( '@stdlib/string/replace' );
var isObject = require( '@stdlib/assert/is-object' );
var isString = require( '@stdlib/assert/is-string' );
var hasOwn = require( '@stdlib/assert/has-own-property' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var EXEC_PATH = require( '@stdlib/process/exec-path' );


// VARIABLES //

var fpath = resolve( __dirname, '..', 'bin', 'cli' );
var opts = {
	'skip': IS_BROWSER || IS_WINDOWS
};


// FIXTURES //

var PKG_VERSION = require( './../package.json' ).version;
var dir = join( __dirname, 'fixtures' );
var before = replace( readFileSync( join( dir, 'before.txt' ), 'utf8' ), '\'', '"' );
var code = replace( readFileSync( join( dir, 'code.txt' ), 'utf8' ), '\'', '"' );
var codeAsync = replace( readFileSync( join( dir, 'code.async.txt' ), 'utf8' ), '\'', '"' );
var after = replace( readFileSync( join( dir, 'after.txt' ), 'utf8' ), '\'', '"' );


// FUNCTIONS //

/**
* Tests whether a value is a timing result object.
*
* @private
* @param {*} val - input value
* @returns {boolean} boolean indicating whether a value is a timing result
*/
function isResultsObject( val ) {
	return (
		isObject( val ) &&
		hasOwn( val, 'iterations' ) &&
		hasOwn( val, 'repeats' ) &&
		hasOwn( val, 'min' ) &&
		hasOwn( val, 'elapsed' ) &&
		hasOwn( val, 'rate' ) &&
		hasOwn( val, 'times' )
	);
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

tape( 'the command-line interface prints the results of timing an asynchronous code snippet (json)', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		'-e',
		'"process.stdin.isTTY = true; process.argv[ 2 ] = \'var x = Math.pow( Math.random(), 3 ); setTimeout( next, 0 );\'; process.argv[ 3 ] = \'--format=json\'; process.argv[ 4 ] = \'--async\'; require( \''+fpath+'\' );"'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var results;
		if ( error ) {
			t.fail( error.message );
		} else {
			results = JSON.parse( stdout.toString() );
			t.strictEqual( isResultsObject( results ), true, 'prints results to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface prints the results of timing a code snippet (pretty)', opts, function test( t ) {
	var before;
	var code;
	var cmd;

	before = 'var x = 12;';
	code = 'var y = x*x;';

	cmd = [
		EXEC_PATH,
		'-e',
		'"process.stdin.isTTY = true; process.argv[ 2 ] = \''+code+'\'; process.argv[ 3 ] = \'--before='+before+'\'; process.argv[ 4 ] = \'--format=pretty\'; require( \''+fpath+'\' );"'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var results;
		if ( error ) {
			t.fail( error.message );
		} else {
			results = stdout.toString();
			t.strictEqual( isString( results ), true, 'prints pretty-printed result to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface prints the results of timing a code snippet (csv)', opts, function test( t ) {
	var before;
	var header;
	var code;
	var cmd;

	before = 'var x = 12;';
	code = 'var y = x*x;';

	cmd = [
		EXEC_PATH,
		'-e',
		'"process.stdin.isTTY = true; process.argv[ 2 ] = \''+code+'\'; process.argv[ 3 ] = \'--before='+before+'\'; process.argv[ 4 ] = \'--format=csv\'; require( \''+fpath+'\' );"'
	];

	// Column names:
	header = 'seconds,nanoseconds';

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var results;
		if ( error ) {
			t.fail( error.message );
		} else {
			results = stdout.toString();
			t.strictEqual( contains( results, header ), true, 'prints csv to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface prints the results of timing a code snippet (json)', opts, function test( t ) {
	var before;
	var code;
	var cmd;

	before = 'var x = 12;';
	code = 'var y = x*x;';

	cmd = [
		EXEC_PATH,
		'-e',
		'"process.stdin.isTTY = true; process.argv[ 2 ] = \''+code+'\'; process.argv[ 3 ] = \'--before='+before+'\'; process.argv[ 4 ] = \'--format=json\'; require( \''+fpath+'\' );"'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var results;
		if ( error ) {
			t.fail( error.message );
		} else {
			results = JSON.parse( stdout.toString() );
			t.strictEqual( isResultsObject( results ), true, 'prints results to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface prints the results of timing a code snippet (json, iterations)', opts, function test( t ) {
	var before;
	var code;
	var cmd;

	before = 'var x = 12;';
	code = 'var y = x*x;';

	cmd = [
		EXEC_PATH,
		'-e',
		'"process.stdin.isTTY = true; process.argv[ 2 ] = \''+code+'\'; process.argv[ 3 ] = \'--before='+before+'\'; process.argv[ 4 ] = \'--format=json\'; process.argv[ 5 ] = \'--iterations=1000\'; require( \''+fpath+'\' );"'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var results;
		if ( error ) {
			t.fail( error.message );
		} else {
			results = JSON.parse( stdout.toString() );
			t.strictEqual( isResultsObject( results ), true, 'prints results to `stdout`' );
			t.strictEqual( results.iterations, 1000, 'expected number of iterations' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface prints the results of timing a code snippet (json, repeats)', opts, function test( t ) {
	var before;
	var code;
	var cmd;

	before = 'var x = 12;';
	code = 'var y = x*x;';

	cmd = [
		EXEC_PATH,
		'-e',
		'"process.stdin.isTTY = true; process.argv[ 2 ] = \''+code+'\'; process.argv[ 3 ] = \'--before='+before+'\'; process.argv[ 4 ] = \'--format=json\'; process.argv[ 5 ] = \'--repeats=5\'; require( \''+fpath+'\' );"'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var results;
		if ( error ) {
			t.fail( error.message );
		} else {
			results = JSON.parse( stdout.toString() );
			t.strictEqual( isResultsObject( results ), true, 'prints results to `stdout`' );
			t.strictEqual( results.repeats, 5, 'expected number of repetitions' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface supports use as a standard stream', opts, function test( t ) {
	var cmd = [
		'echo \''+code+'\'',
		'|',
		EXEC_PATH,
		fpath,
		'--before \''+before+'\'',
		'--after \''+after+'\'',
		'--format json'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var str;
		if ( error ) {
			t.fail( error.message );
		} else {
			str = rtrim( stdout.toString() );
			t.strictEqual( isJSON( str ), true, 'prints results to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface supports use as a standard stream (asynchronous code snippet)', opts, function test( t ) {
	var cmd = [
		'echo \''+codeAsync+'\'',
		'|',
		EXEC_PATH,
		fpath,
		'--format json',
		'--async',
		'--iteration=10',
		'--repeats=2'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var str;
		if ( error ) {
			t.fail( error.message );
		} else {
			str = rtrim( stdout.toString() );
			t.strictEqual( isJSON( str ), true, 'prints results to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});
