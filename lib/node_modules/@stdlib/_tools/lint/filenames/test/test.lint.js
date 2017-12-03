'use strict';

// MODULES //

var tape = require( 'tape' );
var isArray = require( '@stdlib/assert/is-array' );
var lint = require( './../lib/lint.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof lint, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function requires `Makefile` to be spelled exactly', function test( t ) {
	var values;
	var names;

	values = [
		'makefile',
		'MAKEFILE',
		'Makefile.mk'
	];
	names = lint( values );

	t.equal( names.length, values.length, 'returns error messages' );
	t.end();
});

tape( 'the function requires `LICENSE` to be spelled exactly', function test( t ) {
	var values;
	var names;

	values = [
		'license',
		'License',
		'LICENSE.txt'
	];
	names = lint( values );

	t.equal( names.length, values.length, 'returns error messages' );
	t.end();
});

tape( 'the function requires `DESCRIPTION` to be spelled exactly', function test( t ) {
	var values;
	var names;

	values = [
		'description',
		'Description',
		'DESCRIPTION.txt'
	];
	names = lint( values );

	t.equal( names.length, values.length, 'returns error messages' );
	t.end();
});

tape( 'the function requires `REQUIRE` to be spelled exactly', function test( t ) {
	var values;
	var names;

	values = [
		'require',
		'Require',
		'REQUIRE.txt'
	];
	names = lint( values );

	t.equal( names.length, values.length, 'returns error messages' );
	t.end();
});

tape( 'the function enforces allowed extensions', function test( t ) {
	var values;
	var names;

	values = [
		'beep.boop',
		'data.datttttt',
		'file.JSON'
	];
	names = lint( values );

	t.equal( names.length, values.length, 'returns error messages' );
	t.end();
});

tape( 'the function requires files other than special cases and Markdown to be lowercase', function test( t ) {
	var values;
	var names;

	values = [
		'Beep.js',
		'BOOP.cpp',
		'HeLlO.py'
	];
	names = lint( values );

	t.equal( names.length, values.length, 'returns error messages' );
	t.end();
});

tape( 'the function enforces allowed characters', function test( t ) {
	var values;
	var names;

	values = [
		'beep@boop.js',
		'hello$$world!.txt',
		'bip bap bop.md'
	];
	names = lint( values );

	t.equal( names.length, values.length, 'returns error messages' );
	t.end();
});

tape( 'the function returns an empty array if all filenames are valid', function test( t ) {
	var values;
	var names;

	values = [
		'beep.js',
		'boop.svg',
		'bip_bap.jpg',
		'data1.csv',
		'data.data.txt'
	];
	names = lint( values );

	t.equal( isArray( names ), true, 'returns an array' );
	t.equal( names.length, 0, 'returns an empty array' );
	t.end();
});
