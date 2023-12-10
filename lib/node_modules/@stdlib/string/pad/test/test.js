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

var tape = require( 'tape' );
var pad = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof pad, 'function', 'main export is a function' );
	t.end();
});

tape( 'if the first argument is not a string primitive, the function will throw an error', function test( t ) {
	var values;
	var i;

	values = [
		5,
		true,
		NaN,
		null,
		void 0,
		[],
		{},
		function noop() {}
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

tape( 'if the second argument is not a nonnegative integer, the function will throw an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		-5,
		true,
		NaN,
		null,
		void 0,
		[],
		{},
		function noop() {}
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

tape( 'if the third argument is not an object, the function will throw an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		NaN,
		null,
		void 0,
		[],
		function noop() {}
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

tape( 'if provided an invalid option, the function will throw', function test( t ) {
	t.throws( foo, Error, 'throws Error' );
	t.end();
	function foo() {
		pad( 'beep', 10, {
			'lpad': null
		});
	}
});

tape( 'if the output string will exceed the maximum allowed string length, the function will throw an error', function test( t ) {
	t.throws( foo, RangeError, 'throws RangeError' );
	t.end();
	function foo() {
		pad( 'beep', 1e300 );
	}
});

tape( 'if no pad strings have a positive length, the function throws an error', function test( t ) {
	t.throws( foo, RangeError, 'throws RangeError' );
	t.end();
	function foo() {
		pad( 'beep', 10, {
			'lpad': '',
			'rpad': ''
		});
	}
});

tape( 'by default, the function right pads a string with spaces', function test( t ) {
	var str = pad( 'a', 5 );
	t.equal( str, 'a    ', 'right padded with spaces' );
	t.end();
});

tape( 'the function supports right padding a string with a custom pad string', function test( t ) {
	var str = pad( 'beep', 10, {
		'rpad': 'p'
	});
	t.equal( str, 'beeppppppp', 'right padded to desired length' );
	t.end();
});

tape( 'the function right pads a string and trims any excess padding', function test( t ) {
	var str = pad( 'a', 5, {
		'rpad': 'beepboop'
	});
	t.equal( str, 'abeep', 'right padded and trimmed' );
	t.end();
});

tape( 'the function supports left padding a string with a custom pad string', function test( t ) {
	var str = pad( 'beep', 10, {
		'lpad': 'b'
	});
	t.equal( str, 'bbbbbbbeep', 'left padded to desired length' );
	t.end();
});

tape( 'the function left pads a string and trims any excess padding', function test( t ) {
	var str = pad( 'a', 5, {
		'lpad': 'beepboop'
	});
	t.equal( str, 'boopa', 'left padded and trimmed' );
	t.end();
});

tape( 'the function supports centering a string', function test( t ) {
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

tape( 'by default, the function centers an input string left in the event of a tie', function test( t ) {
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

tape( 'the function supports centering an input string to the right in the event of a tie', function test( t ) {
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

tape( 'if the specified string length is less than or equal to the input string length, the function returns a trimmed input string', function test( t ) {
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
