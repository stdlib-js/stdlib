'use strict';

// MODULES //

var tape = require( 'tape' );
var isArray = require( '@stdlib/assert/is-array' );
var tokenizer = require( './../lib/tokenizer.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof tokenizer, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function removes punctuation, turns to lowercase and tokenizes a string ', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'Hello World!';
	expected = [ 'hello', 'world' ];
	actual = tokenizer( str );
	t.deepEqual( actual, expected, 'returns an array of tokens' );

	str = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.';
	expected = [
		'lorem',
		'ipsum',
		'dolor',
		'sit',
		'amet',
		'consetetur',
		'sadipscing',
		'elitr',
		'sed',
		'diam',
		'nonumy',
		'eirmod'
	];
	actual = tokenizer( str );
	t.deepEqual( actual, expected, 'returns an array of tokens' );

	str = 'Hello Mrs. Maple, could you call me back?';
	expected = [ 'hello', 'mrs', 'maple', 'could', 'you', 'call', 'me', 'back' ];
	actual = tokenizer( str );
	t.deepEqual( actual, expected, 'returns an array of tokens' );

	t.end();
});

tape( 'the function returns an emptry array if provided an empty string', function test( t ) {
	var out = tokenizer( '' );
	t.equal( isArray( out ), true, 'returns an array' );
	t.equal( out.length, 0, 'array length is zero' );
	t.end();
});
