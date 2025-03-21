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
var contains = require( '@stdlib/assert/contains' );
var replace = require( '@stdlib/string/replace' );
var RE_EOL = require( '@stdlib/regexp/eol' ).REGEXP;
var repl = require( './fixtures/repl.js' );


// VARIABLES //

var RE_ANSI = /[\u001B\u009B][[\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\d/#&.:=?%@~_]+)*|[a-zA-Z\d]+(?:;[-a-zA-Z\d/#&.:=?%@~_]*)*)?\u0007)|(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-nq-uy=><~]))/g; // eslint-disable-line no-control-regex


// FUNCTIONS //

/**
* Returns default settings.
*
* @private
* @returns {Object} default settings
*/
function defaultSettings() {
	return {
		'autoDeletePairs': false,
		'autoClosePairs': false,
		'autoDisableBracketedPasteOnExit': false,
		'completionPreviews': false,
		'syntaxHighlighting': false,
		'eagerEvaluation': false,
		'autoPage': false
	};
}

/**
* Removes ANSI escape codes from a string.
*
* @private
* @param {string} str - input string
* @returns {string} string with ANSI escape codes removed
*/
function stripANSI( str ) {
	return replace( str, RE_ANSI, '' );
}

/**
* Extract completions from a TAB completions output string.
*
* @private
* @param {string} str - completions output
* @returns {Array} array of completions
*/
function extractCompletions( str ) {
	var cleanOutput;
	var out = [];
	var i;

	cleanOutput = replace( str, RE_EOL, '' ).split( /\s+/ );
	for ( i = 0; i < cleanOutput.length; i++ ) {
		if ( cleanOutput[i] !== '' ) {
			out.push( cleanOutput[ i ] );
		}
	}
	return out;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof repl, 'function', 'main export is a function' );
	t.end();
});

tape( 'a REPL instance supports displaying TAB completions of user-defined variables', function test( t ) {
	var istream;
	var opts;
	var r;

	istream = new DebugStream({
		'name': 'repl-input-stream'
	});
	opts = {
		'input': istream,
		'settings': defaultSettings(),
		'tty': {
			'rows': 100,
			'columns': 80
		}
	};
	r = repl( opts, onClose );

	// Declare variables with unique names in order to prevent namespace collisions:
	istream.write( 'var zzxyz = 1;' );
	istream.write( 'var zzabc = 2;' );
	istream.write( 'var zzpqr = 3;' );

	// Write the common beginning of the variable names in order to generate TAB completions:
	istream.write( 'zz' );

	// Write TAB to display completions:
	istream.write( '\t' );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		var actual;

		if ( error ) {
			t.fail( error.message );
			return;
		}

		actual = extractCompletions( stripANSI( data[ data.length - 3 ] ) );

		// Check for three completions in the output:
		t.strictEqual( actual.length, 3, 'returns expected value' );

		// Check for the declared variables (sorted lexicographically) in the completions:
		t.strictEqual( actual[ 0 ], 'zzabc', 'returns expected value' );
		t.strictEqual( actual[ 1 ], 'zzpqr', 'returns expected value' );
		t.strictEqual( actual[ 2 ], 'zzxyz', 'returns expected value' );

		// Check if the cursor is returned back to the prompt:
		t.strictEqual( data[ data.length - 2 ], '\x1B[2A', 'returns expected value' );

		t.end();
	}
});

tape( 'a REPL instance supports hiding the completions panel upon pressing TAB again', function test( t ) {
	var istream;
	var opts;
	var r;

	istream = new DebugStream({
		'name': 'repl-input-stream'
	});
	opts = {
		'input': istream,
		'settings': defaultSettings(),
		'tty': {
			'rows': 100,
			'columns': 80
		}
	};
	r = repl( opts, onClose );

	// Declare variables with unique names in order to prevent namespace collisions:
	istream.write( 'var zzzxy = 1;' );
	istream.write( 'var zzzab = 2;' );

	// Write the common substring of the variable names in order to generate completions:
	istream.write( 'zzz' );

	// Write TAB to display completions:
	istream.write( '\t' );

	// Write TAB again to hide completions:
	istream.write( '\t' );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		if ( error ) {
			t.fail( error.message );
			return;
		}
		// Check if the completions were cleared:
		t.strictEqual( data[ data.length - 2 ], '\x1B[0J', 'returns expected value' );

		// NOTE: `data[ data.length-1 ]` adds the remaining string to the right of the cursor because of the abnormal behaviour of `clearScreenDown`...

		t.end();
	}
});

tape( 'a REPL instance supports updating the completions upon typing', function test( t ) {
	var istream;
	var opts;
	var r;

	istream = new DebugStream({
		'name': 'repl-input-stream'
	});
	opts = {
		'input': istream,
		'settings': defaultSettings(),
		'tty': {
			'rows': 100,
			'columns': 80
		}
	};
	r = repl( opts, onClose );

	// Declare variables with unique names in order to prevent namespace collisions:
	istream.write( 'var zzzxy = 1;' );
	istream.write( 'var zzzab = 2;' );
	istream.write( 'var zzzxyz = 4;' );

	// Write the common substring of the variable names in order to generate completions:
	istream.write( 'zzz' );

	// Write TAB to display completions:
	istream.write( '\t' );

	// Update completions to narrow down names:
	istream.write( 'x' );
	istream.write( 'y' );
	istream.write( 'z' );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		var actual;

		if ( error ) {
			t.fail( error.message );
			return;
		}

		// Check for the completions after hitting TAB:
		actual = extractCompletions( stripANSI( data[ data.length - 21 ] ) );
		t.strictEqual( actual.length, 3, 'returns expected value' );
		t.strictEqual( actual[ 0 ], 'zzzab', 'returns expected value' );
		t.strictEqual( actual[ 1 ], 'zzzxy', 'returns expected value' );
		t.strictEqual( actual[ 2 ], 'zzzxyz', 'returns expected value' );

		// Check for updated completions after hitting `x`:
		actual = extractCompletions( stripANSI( data[ data.length - 15 ] ) );
		t.strictEqual( actual.length, 2, 'returns expected value' );
		t.strictEqual( actual[ 0 ], 'zzzxy', 'returns expected value' );
		t.strictEqual( actual[ 1 ], 'zzzxyz', 'returns expected value' );

		// Check for updated completions after hitting `y`:
		actual = extractCompletions( stripANSI( data[ data.length - 9 ] ) );
		t.strictEqual( actual.length, 2, 'returns expected value' );
		t.strictEqual( actual[ 0 ], 'zzzxy', 'returns expected value' );
		t.strictEqual( actual[ 1 ], 'zzzxyz', 'returns expected value' );

		// Check for updated completions after hitting `z`:
		actual = extractCompletions( stripANSI( data[ data.length - 3 ] ) );
		t.strictEqual( actual.length, 1, 'returns expected value' );
		t.strictEqual( actual[ 0 ], 'zzzxyz', 'returns expected value' );

		t.end();
	}
});

tape( 'a REPL instance supports navigating the TAB completions using arrow keys', function test( t ) {
	var istream;
	var opts;
	var r;

	istream = new DebugStream({
		'name': 'repl-input-stream'
	});
	opts = {
		'input': istream,
		'settings': defaultSettings(),
		'tty': {
			'rows': 100,
			'columns': 80
		}
	};
	r = repl( opts, onClose );

	// Declare variables with unique names in order to prevent namespace collisions:
	istream.write( 'var zzzab = 1;' );
	istream.write( 'var zzzxy = 2;' );

	// Write the common substring of the variable names in order to generate completions:
	istream.write( 'zzz' );

	// Write TAB to display completions:
	istream.write( '\t' );

	// Navigate down using down arrow:
	istream.write( '\u001B[B' );

	// Navigate right to the next completion using right arrow:
	istream.write( '\u001B[C' );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		var actual;

		if ( error ) {
			t.fail( error.message );
			return;
		}

		// Check for completions before navigation:
		actual = extractCompletions( stripANSI( data[ data.length - 13 ] ) );
		t.strictEqual( actual.length, 2, 'returns expected value' );
		t.strictEqual( actual[ 0 ], 'zzzab', 'returns expected value' );
		t.strictEqual( actual[ 1 ], 'zzzxy', 'returns expected value' );
		t.strictEqual( data[ data.length - 12 ], '\x1B[2A', 'returns expected value' ); // bring cursor back

		// Check for completions after `down` arrow:
		actual = extractCompletions( data[ data.length - 10 ] );

		// First completion should be highlighted:
		t.strictEqual( actual[ 0 ], '\x1B[7mzzzab\x1B[27m', 'returns expected value' );
		t.strictEqual( data[ data.length - 9 ], '\x1B[2A', 'returns expected value' ); // bring cursor back

		// Current line is cleared and the first completion is inserted:
		t.strictEqual( data[ data.length - 7 ], '\x1B[0K', 'returns expected value' );
		t.strictEqual( data[ data.length - 6 ], 'var zzzab = 1;var zzzxy = 2;zzzab', 'returns expected value' );

		// Check for completions after `right` arrow key:
		actual = extractCompletions( data[ data.length - 5 ] );

		// Second completion should be highlighted:
		t.strictEqual( actual[ 1 ], '\x1B[7mzzzxy\x1B[27m', 'returns expected value' );
		t.strictEqual( data[ data.length - 4 ], '\x1B[2A', 'returns expected value' ); // bring cursor back

		// Current line is cleared and the second completion is inserted:
		t.strictEqual( data[ data.length - 2 ], '\x1B[0K', 'returns expected value' );
		t.strictEqual( data[ data.length - 1 ], 'var zzzab = 1;var zzzxy = 2;zzzxy', 'returns expected value' );

		t.end();
	}
});

tape( 'a REPL instance supports bringing back the original line upon navigating back up from the TAB completions', function test( t ) {
	var istream;
	var opts;
	var r;

	istream = new DebugStream({
		'name': 'repl-input-stream'
	});
	opts = {
		'input': istream,
		'settings': defaultSettings(),
		'tty': {
			'rows': 100,
			'columns': 80
		}
	};
	r = repl( opts, onClose );

	// Declare variables with unique names in order to prevent namespace collisions:
	istream.write( 'var zzabc = 1;' );
	istream.write( 'var zzpqr = 2;' );

	// Write the common beginning of the variable names in order to generate TAB completions:
	istream.write( 'zz' );

	// Write TAB to display completions:
	istream.write( '\t' );

	// Navigate down using down arrow:
	istream.write('\u001B[B');

	// Navigate up towards the line to bring back the original line:
	istream.write('\u001B[A');

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		if ( error ) {
			t.fail( error.message );
			return;
		}

		// Current line is cleared and the original line is inserted:
		t.strictEqual( data[ data.length-2 ], '\x1B[0K', 'returns expected value' );
		t.strictEqual( data[ data.length-1 ], 'var zzabc = 1;var zzpqr = 2;zz', 'returns expected value' );

		t.end();
	}
});

tape( 'a REPL instance supports displaying highlighted object property TAB completions', function test( t ) {
	var istream;
	var opts;
	var r;

	istream = new DebugStream({
		'name': 'repl-input-stream'
	});
	opts = {
		'input': istream,
		'settings': defaultSettings(),
		'tty': {
			'rows': 100,
			'columns': 80
		}
	};
	r = repl( opts, onClose );

	// Declare an object with properties having a common prefix:
	istream.write( 'var a = { "zzzxy": 4, "zzzab": 6 };\n' );

	// Write the common beginning of the property names in order to generate TAB completions:
	istream.write( 'a.zzz' );

	// Write TAB to display completions:
	istream.write( '\t' );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		var actual;

		if ( error ) {
			t.fail( error.message );
			return;
		}

		// Check for settings name completions in the output:
		actual = extractCompletions( data[ data.length - 3 ] );
		t.strictEqual( actual.length, 2, 'returns expected value' );
		t.ok( contains( actual, '\x1B[1mzzz\x1B[0mab' ), 'returns expected value' );
		t.ok( contains( actual, '\x1B[1mzzz\x1B[0mxy' ), 'returns expected value' );

		// Check if the cursor is returned back to the prompt:
		t.strictEqual( data[ data.length - 2 ], '\x1B[2A', 'returns expected value' );

		t.end();
	}
});

tape( 'a REPL instance supports auto-completing common prefixes when hitting TAB', function test( t ) {
	var istream;
	var opts;
	var r;

	istream = new DebugStream({
		'name': 'repl-input-stream'
	});
	opts = {
		'input': istream,
		'settings': defaultSettings(),
		'tty': {
			'rows': 100,
			'columns': 80
		}
	};
	r = repl( opts, onClose );

	// Declare variables with `zzzz` as an exact prefix:
	istream.write( 'var zzzz = 1;' );
	istream.write( 'var zzzzabc = 2;' );
	istream.write( 'var zzzzpqr = 3;' );

	// Partially write the common beginning of the variable names in order to generate a TAB auto-completion:
	istream.write( 'zz' );

	// Write TAB to trigger auto-completion:
	istream.write( '\t' );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		if ( error ) {
			t.fail( error.message );
			return;
		}

		// Check if the completion prefix was cleared:
		t.strictEqual( data[ data.length-2 ], '\b\b', 'returns expected value' );

		// Check if the final completion was auto-inserted:
		t.strictEqual( data[ data.length-1 ], 'zzzz', 'returns expected value' );

		t.end();
	}
});

tape( 'a REPL instance supports auto-completing common object property prefixes when hitting TAB', function test( t ) {
	var istream;
	var opts;
	var r;

	istream = new DebugStream({
		'name': 'repl-input-stream'
	});
	opts = {
		'input': istream,
		'settings': defaultSettings(),
		'tty': {
			'rows': 100,
			'columns': 80
		}
	};
	r = repl( opts, onClose );

	// Declare an object with a unique property:
	istream.write( 'var a = { "zzzabc": 6 };\n' );

	// Write the common beginning of the property names in order to generate TAB completions:
	istream.write( 'a.zzz' );

	// Write TAB to trigger auto completion:
	istream.write( '\t' );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		if ( error ) {
			t.fail( error.message );
			return;
		}

		// Check if the completion prefix (`zzz`) was cleared:
		t.strictEqual( data[ data.length-2 ], '\b\b\b', 'returns expected value' );

		// Check if the final completion was auto-inserted:
		t.strictEqual( data[ data.length-1 ], 'zzzabc', 'returns expected value' );

		t.end();
	}
});
