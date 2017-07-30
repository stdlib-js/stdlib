'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var exec = require( 'child_process' ).exec;
var tape = require( 'tape' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;


// VARIABLES //

var fpath = resolve( __dirname, '..', 'bin', 'cli' );
var opts = {
	'skip': IS_BROWSER || IS_WINDOWS
};


// FIXTURES //

var PKG_VERSION = require('./../package.json' ).version;


// TESTS //

tape( 'command-line interface', function test( t ) {
	t.ok( true, __filename );
	t.end();
});

tape( 'when invoked with a `--help` flag, the command-line interface prints the help text to `stderr`', opts, function test( t ) {
	var expected;
	var cmd;

	expected = readFileSync( resolve( __dirname, '..', 'bin', 'usage.txt' ), {
		'encoding': 'utf8'
	});
	cmd = [
		process.execPath,
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

	expected = readFileSync( resolve( __dirname, '..', 'bin', 'usage.txt' ), {
		'encoding': 'utf8'
	});
	cmd = [
		process.execPath,
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
		process.execPath,
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
		process.execPath,
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

tape( 'the function converts a TeX or LaTeX string to an SVG (no options)', opts, function test( t ) {
	var cmd = [
		process.execPath,
		fpath,
		'\'\\operatorname{erf}(x) = \\frac{2}{\\sqrt\\pi}\\int_0^x e^{-t^2}\\,\\mathrm dt.\''
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var svg;
		if ( error ) {
			t.fail( error.message );
		} else {
			svg = stdout.toString();
			t.equal( typeof svg, 'string', 'returns a string' );
			t.equal( svg.substring( 0, 4 ), '<svg', 'svg tag' );
			t.equal( svg.substring( svg.length-7, svg.length-1 ), '</svg>', 'closing svg tag' );
			t.equal( svg.substring( svg.length-1 ), '\n', 'new line' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the function converts a TeX or LaTeX string to an SVG (no options)', opts, function test( t ) {
	var cmd = [
		process.execPath,
		fpath,
		'\'\\operatorname{erf}(x) = \\frac{2}{\\sqrt\\pi}\\int_0^x e^{-t^2}\\,\\mathrm dt.\'',
		'--inline',
		'--no-linebreaks'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var svg;
		if ( error ) {
			t.fail( error.message );
		} else {
			svg = stdout.toString();
			t.equal( typeof svg, 'string', 'returns a string' );
			t.equal( svg.substring( 0, 4 ), '<svg', 'svg tag' );
			t.equal( svg.substring( svg.length-7, svg.length-1 ), '</svg>', 'closing svg tag' );
			t.equal( svg.substring( svg.length-1 ), '\n', 'new line' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

