'use strict';

// MODULES //

var tape = require( 'tape' );
var escapeHTML = require( './../lib/escape_html.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof escapeHTML, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a string', function test( t ) {
	var str = escapeHTML( 'beep' );
	t.equal( typeof str, 'string', 'returns a string' );
	t.end();
});

tape( 'the function returns the input string if the input string does not contain any characters to be encoded', function test( t ) {
	var str = escapeHTML( 'beep boop' );
	t.equal( str, 'beep boop', 'returns original string' );
	t.end();
});

tape( 'the function encodes HTML special characters', function test( t ) {
	var expected;
	var out;
	var str;

	str = 'Mr. & Mrs. Smith are <insert adjective>.';
	out = escapeHTML( str );
	expected = 'Mr. &amp; Mrs. Smith are &lt;insert adjective&gt;.';
	t.equal( out, expected, 'returns encoded string' );

	str = '"Hello World," Susan typed into her computer.';
	out = escapeHTML( str );
	expected = '&quot;Hello World,&quot; Susan typed into her computer.';
	t.equal( out, expected, 'returns encoded string' );

	str = 'And God said, \'Let there be light\'';
	out = escapeHTML( str );
	expected = 'And God said, &#39;Let there be light&#39;';
	t.equal( out, expected, 'returns encoded string' );

	t.end();
});
