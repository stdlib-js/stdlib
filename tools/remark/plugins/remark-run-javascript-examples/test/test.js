'use strict';

// MODULES //

var join = require( 'path' ).join;
var tape = require( 'tape' );
var remark = require( 'remark' );
var readSync = require( 'to-vfile' ).readSync; // eslint-disable-line no-sync
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var run = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof run, 'function', 'main export is a function' );
	t.end();
});

tape( 'the plugin handles empty files', opts, function test( t ) {
	var fpath = join( __dirname, 'fixtures', 'empty.md.txt' );
	var file = readSync( fpath, 'utf8' );

	remark().use( run ).process( file, done );

	function done( error ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'does not error' );
		}
		t.end();
	}
});

tape( 'the plugin handles empty strings', opts, function test( t ) {
	remark().use( run ).process( '', done );

	function done( error ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'does not error' );
		}
		t.end();
	}
});

tape( 'the plugin handles Markdown files without an examples section', opts, function test( t ) {
	var fpath = join( __dirname, 'fixtures', 'no_examples.md.txt' );
	var file = readSync( fpath, 'utf8' );

	remark().use( run ).process( file, done );

	function done( error ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'does not error' );
		}
		t.end();
	}
});

tape( 'the plugin handles Markdown strings without an examples section', opts, function test( t ) {
	remark().use( run ).process( '# Beep\n\n## Boop\n', done );

	function done( error ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'does not error' );
		}
		t.end();
	}
});

tape( 'the plugin runs JavaScript examples (synchronous)', opts, function test( t ) {
	var fpath = join( __dirname, 'fixtures', 'sync.md.txt' );
	var file = readSync( fpath, 'utf8' );

	remark().use( run ).process( file, done );

	function done( error ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'runs examples' );
		}
		t.end();
	}
});

tape( 'the plugin runs JavaScript examples (synchronous; string)', opts, function test( t ) {
	var str = '<section class="examples">\n\n## Examples\n\n```javascript\nx = 3.14;\n```\n\n</section>\n\n<!-- /.examples -->';
	remark().use( run ).process( str, done );

	function done( error ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'runs examples' );
		}
		t.end();
	}
});

tape( 'the plugin runs JavaScript examples (asynchronous)', opts, function test( t ) {
	var fpath = join( __dirname, 'fixtures', 'async.md.txt' );
	var file = readSync( fpath, 'utf8' );

	remark().use( run ).process( file, done );

	function done( error ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'runs examples' );
		}
		t.end();
	}
});

tape( 'the plugin runs JavaScript examples (asynchronous; string)', opts, function test( t ) {
	var str = '<section class="examples">\n\n## Examples\n\n```javascript\nsetTimeout( onTimeout, 0 );\n\nfunction onTimeout() {\n\tvar x = 3.14;\n}\n```\n\n</section>\n\n<!-- /.examples -->';
	remark().use( run ).process( str, done );

	function done( error ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'runs examples' );
		}
		t.end();
	}
});

tape( 'the plugin supports JavaScript examples which print to `stdout` (synchronous)', opts, function test( t ) {
	var fpath = join( __dirname, 'fixtures', 'sync_stdout.md.txt' );
	var file = readSync( fpath, 'utf8' );

	remark().use( run ).process( file, done );

	function done( error ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'runs examples' );
		}
		t.end();
	}
});

tape( 'the plugin supports JavaScript examples which print to `stdout` (asynchronous)', opts, function test( t ) {
	var fpath = join( __dirname, 'fixtures', 'async_stdout.md.txt' );
	var file = readSync( fpath, 'utf8' );

	remark().use( run ).process( file, done );

	function done( error ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'runs examples' );
		}
		t.end();
	}
});

tape( 'the plugin supports JavaScript examples which print to `stderr` (synchronous)', opts, function test( t ) {
	var fpath = join( __dirname, 'fixtures', 'sync_stderr.md.txt' );
	var file = readSync( fpath, 'utf8' );

	remark().use( run ).process( file, done );

	function done( error ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'runs examples' );
		}
		t.end();
	}
});

tape( 'the plugin supports JavaScript examples which print to `stderr` (asynchronous)', opts, function test( t ) {
	var fpath = join( __dirname, 'fixtures', 'async_stderr.md.txt' );
	var file = readSync( fpath, 'utf8' );

	remark().use( run ).process( file, done );

	function done( error ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'runs examples' );
		}
		t.end();
	}
});

tape( 'if an error is encountered during example execution, the plugin returns an error (synchronous)', opts, function test( t ) {
	var fpath = join( __dirname, 'fixtures', 'sync_error.md.txt' );
	var file = readSync( fpath, 'utf8' );

	remark().use( run ).process( file, done );

	function done( error ) {
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'should return an error' );
		}
		t.end();
	}
});

tape( 'if an error is encountered during example execution, the plugin returns an error (synchronous; string)', opts, function test( t ) {
	var str = '<section class="examples">\n\n## Examples\n\n```javascript\nthrow new Error( "beep" );\n```\n\n</section>\n\n<!-- /.examples -->';
	remark().use( run ).process( str, done );

	function done( error ) {
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'should return an error' );
		}
		t.end();
	}
});

tape( 'if an error is encountered during example execution, the plugin returns an error (asynchronous)', opts, function test( t ) {
	var fpath = join( __dirname, 'fixtures', 'async_error.md.txt' );
	var file = readSync( fpath, 'utf8' );

	remark().use( run ).process( file, done );

	function done( error ) {
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'should return an error' );
		}
		t.end();
	}
});

tape( 'if an error is encountered during example execution, the plugin returns an error (asynchronous; string)', opts, function test( t ) {
	var str = '<section class="examples">\n\n## Examples\n\n```javascript\nsetTimeout( onTimeout, 0 );\n\nfunction onTimeout() {\n\tthrow new Error( "beep" );\n}\n```\n\n</section>\n\n<!-- /.examples -->';
	remark().use( run ).process( str, done );

	function done( error ) {
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'should return an error' );
		}
		t.end();
	}
});
