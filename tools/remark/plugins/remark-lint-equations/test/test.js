'use strict';

// MODULES //

var join = require( 'path' ).join;
var tape = require( 'tape' );
var remark = require( 'remark' );
var readSync = require( 'to-vfile' ).readSync; // eslint-disable-line no-sync
var isArray = require( '@stdlib/assert/is-array' );
var lint = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof lint, 'function', 'main export is a function' );
	t.end();
});

tape( 'the plugin successfully lints valid Markdown not containing any equations', function test( t ) {
	var fpath = join( __dirname, 'fixtures', 'valid_no_equations.md.txt' );
	var file = readSync( fpath, 'utf8' );

	remark().use( lint ).process( file, done );

	function done( error, file ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( isArray( file.messages ), true, 'is an array' );
			t.strictEqual( file.messages.length, 0, 'is empty array' );
		}
		t.end();
	}
});

tape( 'the plugin successfully lints valid Markdown not containing any equations (string)', function test( t ) {
	remark().use( lint ).process( '# Beep\n\n## Boop\n', done );

	function done( error, file ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( isArray( file.messages ), true, 'is an array' );
			t.strictEqual( file.messages.length, 0, 'is empty array' );
		}
		t.end();
	}
});

tape( 'the plugin successfully lints valid Markdown equations', function test( t ) {
	var fpath = join( __dirname, 'fixtures', 'valid.md.txt' );
	var file = readSync( fpath, 'utf8' );

	remark().use( lint ).process( file, done );

	function done( error, file ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( isArray( file.messages ), true, 'is an array' );
			t.strictEqual( file.messages.length, 0, 'is empty array' );
		}
		t.end();
	}
});

tape( 'the plugin successfully lints valid Markdown equations (multiple)', function test( t ) {
	var fpath = join( __dirname, 'fixtures', 'valid_multiple.md.txt' );
	var file = readSync( fpath, 'utf8' );

	remark().use( lint ).process( file, done );

	function done( error, file ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( isArray( file.messages ), true, 'is an array' );
			t.strictEqual( file.messages.length, 0, 'is empty array' );
		}
		t.end();
	}
});

tape( 'the plugin successfully lints valid Markdown equations (with equation image)', function test( t ) {
	var fpath = join( __dirname, 'fixtures', 'valid_with_img.md.txt' );
	var file = readSync( fpath, 'utf8' );

	remark().use( lint ).process( file, done );

	function done( error, file ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( isArray( file.messages ), true, 'is an array' );
			t.strictEqual( file.messages.length, 0, 'is empty array' );
		}
		t.end();
	}
});

tape( 'the plugin returns a lint error if an equation element is missing a `label` attribute', function test( t ) {
	var fpath = join( __dirname, 'fixtures', 'missing_label.md.txt' );
	var file = readSync( fpath, 'utf8' );

	remark().use( lint ).process( file, done );

	function done( error, file ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( isArray( file.messages ), true, 'is an array' );
			t.strictEqual( file.messages.length, 1, 'contains lint error' );
			t.pass( file.messages[ 0 ] );
		}
		t.end();
	}
});

tape( 'the plugin returns a lint error if an equation element is missing an `alt` attribute', function test( t ) {
	var fpath = join( __dirname, 'fixtures', 'missing_alternate_text.md.txt' );
	var file = readSync( fpath, 'utf8' );

	remark().use( lint ).process( file, done );

	function done( error, file ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( isArray( file.messages ), true, 'is an array' );
			t.strictEqual( file.messages.length, 1, 'contains lint error' );
			t.pass( file.messages[ 0 ] );
		}
		t.end();
	}
});

tape( 'the plugin returns a lint error if an equation element is missing a `raw` attribute', function test( t ) {
	var fpath = join( __dirname, 'fixtures', 'missing_tex_string.md.txt' );
	var file = readSync( fpath, 'utf8' );

	remark().use( lint ).process( file, done );

	function done( error, file ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( isArray( file.messages ), true, 'is an array' );
			t.strictEqual( file.messages.length, 1, 'contains lint error' );
			t.pass( file.messages[ 0 ] );
		}
		t.end();
	}
});

tape( 'the plugin returns a lint error if an equation element is missing a ending comment', function test( t ) {
	var fpath = join( __dirname, 'fixtures', 'missing_end_comment.md.txt' );
	var file = readSync( fpath, 'utf8' );

	remark().use( lint ).process( file, done );

	function done( error, file ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( isArray( file.messages ), true, 'is an array' );
			t.strictEqual( file.messages.length, 1, 'contains lint error' );
			t.pass( file.messages[ 0 ] );
		}
		t.end();
	}
});

tape( 'the plugin returns a lint error if an equation element is missing a `label`', function test( t ) {
	var fpath = join( __dirname, 'fixtures', 'empty_label.md.txt' );
	var file = readSync( fpath, 'utf8' );

	remark().use( lint ).process( file, done );

	function done( error, file ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( isArray( file.messages ), true, 'is an array' );
			t.strictEqual( file.messages.length, 1, 'contains lint error' );
			t.pass( file.messages[ 0 ] );
		}
		t.end();
	}
});

tape( 'the plugin returns a lint error if an equation element is missing alternate text', function test( t ) {
	var fpath = join( __dirname, 'fixtures', 'empty_alternate_text.md.txt' );
	var file = readSync( fpath, 'utf8' );

	remark().use( lint ).process( file, done );

	function done( error, file ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( isArray( file.messages ), true, 'is an array' );
			t.strictEqual( file.messages.length, 1, 'contains lint error' );
			t.pass( file.messages[ 0 ] );
		}
		t.end();
	}
});

tape( 'the plugin returns a lint error if an equation element is missing a TeX string', function test( t ) {
	var fpath = join( __dirname, 'fixtures', 'empty_tex_string.md.txt' );
	var file = readSync( fpath, 'utf8' );

	remark().use( lint ).process( file, done );

	function done( error, file ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( isArray( file.messages ), true, 'is an array' );
			t.strictEqual( file.messages.length, 1, 'contains lint error' );
			t.pass( file.messages[ 0 ] );
		}
		t.end();
	}
});

tape( 'the plugin returns a lint error if an equation element contains invalid TeX', function test( t ) {
	var fpath = join( __dirname, 'fixtures', 'invalid_equation.md.txt' );
	var file = readSync( fpath, 'utf8' );

	remark().use( lint ).process( file, done );

	function done( error, file ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( isArray( file.messages ), true, 'is an array' );
			t.strictEqual( file.messages.length, 1, 'contains lint error' );
			t.pass( file.messages[ 0 ] );
		}
		t.end();
	}
});
