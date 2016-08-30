'use strict';

// MODULES //

var test = require( 'tape' );
var pad = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof pad === 'function', 'main export is a function' );
	t.end();
});

test( 'if the first argument is not a string primitive, the function will throw an error', function test( t ) {
	var values;
	var i;

	values = [
		5,
		true,
		NaN,
		null,
		undefined,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			pad( value, 10 );
		};
	}
});

test( 'if the second argument is not a nonnegative integer, the function will throw an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		Math.PI,
		-5,
		true,
		NaN,
		null,
		undefined,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			pad( 'beep', value );
		};
	}
});

test( 'if the third argument is not an object, the function will throw an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		NaN,
		null,
		undefined,
		[],
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			pad( 'beep', 10, value );
		};
	}
});

test( 'if provided an invalid option, the function will throw', function test( t ) {
	t.throws( foo, Error, 'throws Error' );
	t.end();
	function foo() {
		pad( 'beep', 10, {
			'lpad': null
		});
	}
});

test( 'if the output string will exceed the maximum allowed string length, the function will throw an error', function test( t ) {
	t.throws( foo, RangeError, 'throws RangeError' );
	t.end();
	function foo() {
		pad( 'beep', 1e300 );
	}
});

test( 'if no pad strings have a positive length, the function throws an error', function test( t ) {
	t.throws( foo, RangeError, 'throws RangeError' );
	t.end();
	function foo() {
		pad( 'beep', 10, {
			'lpad': '',
			'rpad': ''
		});
	}
});

test( 'by default, the function right pads a string with spaces', function test( t ) {
	var str = pad( 'a', 5 );
	t.equal( str, 'a    ', 'right padded with spaces' );
	t.end();
});

test( 'the function supports right padding a string with a custom pad string', function test( t ) {
	var str = pad( 'beep', 10, {
		'rpad': 'p'
	});
	t.equal( str, 'beeppppppp', 'right padded to desired length' );
	t.end();
});

test( 'the function right pads a string and trims any excess padding', function test( t ) {
	var str = pad( 'a', 5, {
		'rpad': 'beepboop'
	});
	t.equal( str, 'abeep', 'right padded and trimmed' );
	t.end();
});

test( 'the function supports left padding a string with a custom pad string', function test( t ) {
	var str = pad( 'beep', 10, {
		'lpad': 'b'
	});
	t.equal( str, 'bbbbbbbeep', 'left padded to desired length' );
	t.end();
});

test( 'the function left pads a string and trims any excess padding', function test( t ) {
	var str = pad( 'a', 5, {
		'lpad': 'beepboop'
	});
	t.equal( str, 'boopa', 'left padded and trimmed' );
	t.end();
});

test( 'the function supports centering a string', function test( t ) {
	var str;

	str = pad( 'beep', 10, {
		'lpad': 'b',
		'rpad': 'p'
	});
	t.equal( str, 'bbbbeepppp', 'returns centered string (simple)' );

	str = pad( 'beep', 10, {
		'lpad': 'b!',
		'rpad': 'p?*'
	});
	t.equal( str, 'b!bbeepp?*', 'returns centered string (harder)' );

	t.end();
});

test( 'by default, the function centers an input string left in the event of a tie', function test( t ) {
	var str;

	str = pad( 'beep', 11, {
		'lpad': 'b',
		'rpad': 'p'
	});
	t.equal( str, 'bbbbeeppppp', 'returns left centered string (simple)' );

	str = pad( 'beep', 11, {
		'lpad': 'b!',
		'rpad': 'p?*'
	});
	t.equal( str, 'b!bbeepp?*p', 'returns left centered string (harder)' );

	t.end();
});

test( 'the function supports centering an input string to the right in the event of a tie', function test( t ) {
	var str;

	str = pad( 'beep', 11, {
		'lpad': 'b',
		'rpad': 'p',
		'centerRight': true
	});
	t.equal( str, 'bbbbbeepppp', 'returns right centered string (simple)' );

	str = pad( 'beep', 11, {
		'lpad': 'b!',
		'rpad': 'p?*',
		'centerRight': true
	});
	t.equal( str, 'b!b!beepp?*', 'returns right centered string (harder)' );

	t.end();
});

test( 'if the specified string length is less than or equal to the input string length, the function returns a trimmed input string', function test( t ) {
	var str;

	// Right padded:
	str = pad( 'beep', 2, {
		'rpad': 'boop'
	});
	t.equal( str, 'be', 'returns trimmed input string (right padded; <)' );

	str = pad( 'beep', 4, {
		'rpad': 'boop'
	});
	t.equal( str, 'beep', 'returns input string (right padded; =)' );

	// Left padded:
	str = pad( 'beep', 2, {
		'lpad': 'boop'
	});
	t.equal( str, 'ep', 'returns trimmed input string (left padded; <)' );

	str = pad( 'beep', 4, {
		'lpad': 'boop'
	});
	t.equal( str, 'beep', 'returns input string (left padded; =)' );

	// Centered:
	str = pad( 'beep', 2, {
		'rpad': 'p',
		'lpad': 'boop'
	});
	t.equal( str, 'ee', 'returns trimmed input string (center; <)' );

	str = pad( 'beep', 4, {
		'lpad': 'boop',
		'rpad': 'p'
	});
	t.equal( str, 'beep', 'returns input string (center; =)' );

	// Centered left/right:
	str = pad( 'abcdef', 3, {
		'lpad': '@',
		'rpad': '!'
	});
	t.equal( str, 'cde', 'returns input string (center right; <)' );

	str = pad( 'abcdef', 3, {
		'lpad': '@',
		'rpad': '!',
		'centerRight': true
	});
	t.equal( str, 'bcd', 'returns input string (center left; <)' );

	t.end();
});
