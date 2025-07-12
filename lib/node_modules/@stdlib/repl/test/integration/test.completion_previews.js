/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var DebugStream = require( '@stdlib/streams/node/debug' );
var trim = require( '@stdlib/string/trim' );
var repl = require( './fixtures/repl.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof repl, 'function', 'main export is a function' );
	t.end();
});

tape( 'a REPL instance supports displaying a completion preview of user-defined variables', function test( t ) {
	var istream;
	var opts;
	var r;

	istream = new DebugStream({
		'name': 'repl-input-stream'
	});
	opts = {
		'input': istream,
		'settings': {
			'autoPage': false,
			'syntaxHighlighting': false,
			'eagerEvaluation': false,
			'autoDisableBracketedPasteOnExit': false
		}
	};
	r = repl( opts, onClose );

	// Declare a variable with an unique name in order to prevent namespace collisions:
	istream.write( 'var abcdefgh = 1;\n' );

	// Write the beginning of the variable's name in order to trigger a completion preview:
	istream.write( 'abcdef' );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		if ( error ) {
			t.fail( error.message );
			return;
		}
		// Check for an ANSI-escaped color-coded 'gh' completion:
		t.strictEqual( data[ data.length-2 ], '\u001b[90mgh\u001b[0m', 'returns expected value' );

		// Check that the cursor is positioned BEFORE the completion preview:
		t.strictEqual( data[ data.length-1 ], '\u001b[2D', 'returns expected value' );

		t.end();
	}
});

tape( 'a REPL instance supports displaying a completion preview for common prefixes', function test( t ) {
	var istream;
	var opts;
	var r;

	istream = new DebugStream({
		'name': 'repl-input-stream'
	});
	opts = {
		'input': istream,
		'settings': {
			'autoPage': false,
			'syntaxHighlighting': false,
			'eagerEvaluation': false,
			'autoDisableBracketedPasteOnExit': false
		}
	};
	r = repl( opts, onClose );

	// Declare variables with unique names having a common prefix:
	istream.write( 'var test_var_name_beep_1 = 1;' );
	istream.write( 'var test_var_name_boop_1 = 1;\n' );

	// Write the beginning of the common prefix in order to trigger a completion preview:
	istream.write( 'test_var_' );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		if ( error ) {
			t.fail( error.message );
			return;
		}
		// Check for an ANSI-escaped color-coded 'name_b' completion:
		t.strictEqual( data[ data.length-2 ], '\u001b[90mname_b\u001b[0m', 'returns expected value' );

		// Check that the cursor is positioned BEFORE the completion preview:
		t.strictEqual( data[ data.length-1 ], '\u001b[6D', 'returns expected value' );

		t.end();
	}
});

tape( 'a REPL instance supports displaying a completion preview for recognized identifiers at the end of a line', function test( t ) {
	var istream;
	var opts;
	var r;

	istream = new DebugStream({
		'name': 'repl-input-stream'
	});
	opts = {
		'input': istream,
		'settings': {
			'autoPage': false,
			'syntaxHighlighting': false,
			'eagerEvaluation': false,
			'autoDisableBracketedPasteOnExit': false
		}
	};
	r = repl( opts, onClose );

	// Declare a variable with an unique name in order to prevent namespace collisions:
	istream.write( 'var abcdefgh = 1;\n' );

	// Write a compound expression:
	istream.write( 'abcdefgh; var x = 2 + 2; abcde' );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		if ( error ) {
			t.fail( error.message );
			return;
		}
		// Check for an ANSI-escaped color-coded 'fgh' completion:
		t.strictEqual( data[ data.length-2 ], '\u001b[90mfgh\u001b[0m', 'returns expected value' );

		// Check that the cursor is positioned BEFORE the completion preview:
		t.strictEqual( data[ data.length-1 ], '\u001b[3D', 'returns expected value' );

		t.end();
	}
});

tape( 'a REPL instance supports displaying a completion preview when a cursor is not at the end of the line', function test( t ) {
	var istream;
	var opts;
	var r;

	istream = new DebugStream({
		'name': 'repl-input-stream'
	});
	opts = {
		'input': istream,
		'settings': {
			'autoPage': false,
			'syntaxHighlighting': false,
			'eagerEvaluation': false,
			'autoDisableBracketedPasteOnExit': false
		}
	};
	r = repl( opts, onClose );

	// Declare a variable with an unique name in order to prevent namespace collisions:
	istream.write( 'var abcdefgh = 1;\n' );

	// Write the beginning of the variable's name in order to trigger a completion preview:
	istream.write( 'abcdef' );

	// Move cursor to backward by four column positions:
	istream.write( '\u001b[4D' );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		if ( error ) {
			t.fail( error.message );
			return;
		}
		// Check for an ANSI-escaped color-coded 'gh' completion before moving the cursor:
		t.strictEqual( data[ data.length-4 ], '\u001b[90mgh\u001b[0m', 'returns expected value' );

		// Check that the cursor is positioned BEFORE the completion preview:
		t.strictEqual( data[ data.length-3 ], '\u001b[2D', 'returns expected value' );

		// Check for an ANSI-escaped color-coded 'gh' completion after moving the cursor:
		t.strictEqual( data[ data.length-2 ], '\u001b[90mgh\u001b[0m', 'returns expected value' );

		// Check that the cursor is positioned BEFORE the completion preview:
		t.strictEqual( data[ data.length-1 ], '\u001b[2D', 'returns expected value' );

		t.end();
	}
});

tape( 'a REPL instance supports auto-completing a completion candidate by moving the cursor forward', function test( t ) {
	var istream;
	var opts;
	var r;

	istream = new DebugStream({
		'name': 'repl-input-stream'
	});
	opts = {
		'input': istream,
		'settings': {
			'autoPage': false,
			'syntaxHighlighting': false,
			'eagerEvaluation': false,
			'autoDisableBracketedPasteOnExit': false
		}
	};
	r = repl( opts, onClose );

	// Declare a variable with an unique name in order to prevent namespace collisions:
	istream.write( 'var abcdefgh = 1;\n' );

	// Write the beginning of the variable's name in order to trigger a completion preview:
	istream.write( 'abcdef' );

	// Move the cursor forward by one column position:
	istream.write( '\u001b[1C' );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		if ( error ) {
			t.fail( error.message );
			return;
		}
		// Check for an ANSI-escaped color-coded 'gh' completion:
		t.strictEqual( data[ data.length-3 ], '\u001b[90mgh\u001b[0m', 'returns expected value' );

		// Check that the cursor is positioned BEFORE the completion preview:
		t.strictEqual( data[ data.length-2 ], '\u001b[2D', 'returns expected value' );

		// Check that the completion preview was auto-completed:
		t.strictEqual( data[ data.length-1 ], 'gh', 'returns expected value' );

		t.end();
	}
});

tape( 'a REPL instance supports auto-completing a completion preview and execution by pressing ENTER', function test( t ) {
	var istream;
	var opts;
	var r;

	istream = new DebugStream({
		'name': 'repl-input-stream'
	});
	opts = {
		'input': istream,
		'inputPrompt': '> ',
		'outputPrompt': '',
		'settings': {
			'autoPage': false,
			'syntaxHighlighting': false,
			'eagerEvaluation': false,
			'autoDisableBracketedPasteOnExit': false
		}
	};
	r = repl( opts, onClose );

	// Declare a variable with an unique name in order to prevent namespace collisions:
	istream.write( 'var abcdefgh = 1;' );

	// Write the beginning of the variable's name in order to trigger a completion preview:
	istream.write( 'abcdef' );

	// Simulate pressing ENTER:
	istream.write( '\n' );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		if ( error ) {
			t.fail( error.message );
			return;
		}
		// Check for an ANSI-escaped color-coded 'gh' completion:
		t.strictEqual( data[ data.length-5 ], '\u001b[90mgh\u001b[0m', 'returns expected value' );

		// Check that the cursor is positioned BEFORE the completion preview:
		t.strictEqual( data[ data.length-4 ], '\u001b[2D', 'returns expected value' );

		// Check that the completion preview was auto-completed prior to execution:
		t.strictEqual( data[ data.length-3 ], 'gh', 'returns expected value' );

		// Check that the expression was executed:
		t.strictEqual( trim( data[ data.length-1 ] ), '1', 'returns expected value' );

		t.end();
	}
});

tape( 'a REPL instance does not display a completion preview when no completion candidate exists', function test( t ) {
	var istream;
	var opts;
	var r;

	istream = new DebugStream({
		'name': 'repl-input-stream'
	});
	opts = {
		'input': istream,
		'settings': {
			'autoPage': false,
			'syntaxHighlighting': false,
			'eagerEvaluation': false,
			'autoDisableBracketedPasteOnExit': false
		}
	};
	r = repl( opts, onClose );

	// Declare a variable with an unique name in order to prevent namespace collisions:
	istream.write( 'var abcdefgh = 1;\n' );

	// Write the beginning of the variable's name in order to trigger a completion preview:
	istream.write( 'abcdef' );

	// Write a character which invalidates the completion candidate:
	istream.write( 'o' );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		if ( error ) {
			t.fail( error.message );
			return;
		}
		// Check for an ANSI-escaped color-coded 'gh' completion:
		t.strictEqual( data[ data.length-5 ], '\u001b[90mgh\u001b[0m', 'returns expected value' );

		// Check that the cursor is positioned BEFORE the completion preview:
		t.strictEqual( data[ data.length-4 ], '\u001b[2D', 'returns expected value' );

		// Check for the character which invalidated a completion candidate:
		t.strictEqual( data[ data.length-3 ], 'o', 'returns expected value' );

		// Check that the completion preview is replaced with whitespace:
		t.strictEqual( data[ data.length-2 ], '  ', 'returns expected value' );

		// Check that the cursor is returned to the position preceding the whitespace:
		t.strictEqual( data[ data.length-1 ], '\u001b[2D', 'returns expected value' );

		t.end();
	}
});

tape( 'a REPL instance does not display a completion preview once a user enters whitespace', function test( t ) {
	var istream;
	var opts;
	var r;

	istream = new DebugStream({
		'name': 'repl-input-stream'
	});
	opts = {
		'input': istream,
		'inputPrompt': '> ',
		'outputPrompt': '',
		'settings': {
			'autoPage': false,
			'syntaxHighlighting': false,
			'eagerEvaluation': false,
			'autoDisableBracketedPasteOnExit': false
		}
	};
	r = repl( opts, onClose );

	// Declare a variable with an unique name in order to prevent namespace collisions:
	istream.write( 'var abcdefgh = 1;\n' );

	// Write the beginning of the variable's name in order to trigger a completion preview:
	istream.write( 'abcdef' );

	// Write whitespace to invalidate the completion candidate:
	istream.write( ' ' );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		if ( error ) {
			t.fail( error.message );
			return;
		}
		// Check for an ANSI-escaped color-coded 'gh' completion:
		t.strictEqual( data[ data.length-5 ], '\u001b[90mgh\u001b[0m', 'returns expected value' );

		// Check that the cursor is positioned BEFORE the completion preview:
		t.strictEqual( data[ data.length-4 ], '\u001b[2D', 'returns expected value' );

		// Check for the whitespace which invalidated a completion candidate:
		t.strictEqual( data[ data.length-3 ], ' ', 'returns expected value' );

		// Check that the completion preview is replaced with whitespace:
		t.strictEqual( data[ data.length-2 ], '  ', 'returns expected value' );

		// Check that the cursor is returned to the position preceding the whitespace:
		t.strictEqual( data[ data.length-1 ], '\u001b[2D', 'returns expected value' );

		t.end();
	}
});
