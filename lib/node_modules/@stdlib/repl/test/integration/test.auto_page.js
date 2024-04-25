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
var slice = require( '@stdlib/array/slice' );
var repeat = require( '@stdlib/string/repeat' );
var replace = require( '@stdlib/string/replace' );
var min = require( '@stdlib/math/base/special/min' );
var repl = require( './fixtures/repl.js' );


// VARIABLES //

var RESERVED_PAGING_ROWS = 4;
var FIXTURE = [
	'This is line 1 of the long text.',
	'This is line 2 of the long text.',
	'This is line 3 of the long text.',
	'This is line 4 of the long text.',
	'This is line 5 of the long text.',
	'This is line 6 of the long text.',
	'This is line 7 of the long text.',
	'This is line 8 of the long text.',
	'This is line 9 of the long text.',
	'This is line 10 of the long text.'
].join( '\\n' );


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
		'completionPreviews': false,
		'autoPage': true
	};
}

/**
* Generates expected paged output based on the given page height and text.
*
* @private
* @param {string} text - text to be paged
* @param {number} pageHeight - height of the page (excluding reserved UI rows)
* @param {number} pageWidth - width of the page
* @param {number} index - scroll index of the page
* @returns {string} expected paged output
*/
function generateExpectedPage( text, pageHeight, pageWidth, index ) {
	var lines;
	var page;
	var out;

	// Generate the page text:
	lines = text.split( '\\n' );
	index = min( index, lines.length - pageHeight );
	page = slice( lines, index, pageHeight + index ).join( '\n' );

	// Construct the expected output:
	out = '\n';
	if ( index > 0 ) {
		out += repeat( '_', pageWidth ) + '\n';
	}
	out += page;
	out += '\n';
	if ( index < lines.length - pageHeight ) {
		out += repeat( '_', pageWidth );
	}
	out += '\n';
	out += '\x1B[1mUse UP/DOWN arrow keys to scroll. Press q to exit...\x1B[22m';

	return out;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof repl, 'function', 'main export is a function' );
	t.end();
});

tape( 'a REPL instance supports auto-paging long outputs', function test( t ) {
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
			'rows': 10, // height cannot accomodate the fixture
			'columns': 80
		}
	};
	r = repl( opts, onClose );

	// Declare a userDoc from fixture:
	istream.write( 'userDoc( "foo", "' + FIXTURE + '" );' );

	// Call the help method to write the fixture:
	istream.write( 'help( "foo" )\n' );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		var expected;
		var actual;

		if ( error ) {
			t.fail( error.message );
			return;
		}
		// Check for the hidden cursor:
		t.strictEqual( data[ data.length - 5 ], '\u001b[?25l', 'returns expected value' );

		// Check for expected page content:
		expected = generateExpectedPage( FIXTURE, opts.tty.rows - RESERVED_PAGING_ROWS, opts.tty.columns, 0 ); // eslint-disable-line max-len
		actual = slice( data, data.length - 4, data.length - 1 ).join( '' );
		t.strictEqual( actual, expected, 'returns expected value' );

		// Check if the cursor is returned back to the prompt:
		t.strictEqual( data[ data.length - 1 ], '\u001b[10A', 'returns expected value' );

		t.end();
	}
});

tape( 'a REPL instance avoids auto-paging short outputs', function test( t ) {
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
			'rows': 15, // height can accomodate the fixture
			'columns': 80
		}
	};
	r = repl( opts, onClose );

	// Declare a userDoc from fixture:
	istream.write( 'userDoc( "foo", "' + FIXTURE + '" );' );

	// Call the help method to write the fixture:
	istream.write( 'help( "foo" )\n' );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		var expected;

		if ( error ) {
			t.fail( error.message );
			return;
		}
		// Check if the output is printed without paging:
		expected = replace( FIXTURE, '\\n', '\n' ) + '\n';
		t.strictEqual( data[ data.length - 1 ], expected, 'returns expected value' );

		t.end();
	}
});

tape( 'a REPL instance supports paging using the `pager` command', function test( t ) {
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
			'rows': 10, // height cannot accomodate the fixture
			'columns': 80
		}
	};
	r = repl( opts, onClose );

	// Disable auto-paging:
	r.settings( 'autoPage', false );

	// Call the pager command to write the fixture:
	istream.write( 'pager( "' + FIXTURE + '" )\n' );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		var expected;
		var actual;

		if ( error ) {
			t.fail( error.message );
			return;
		}
		// Check for the hidden cursor:
		t.strictEqual( data[ data.length - 5 ], '\u001b[?25l', 'returns expected value' );

		// Check for expected page content:
		expected = generateExpectedPage( FIXTURE, opts.tty.rows - RESERVED_PAGING_ROWS, opts.tty.columns, 0 ); // eslint-disable-line max-len
		actual = slice( data, data.length - 4, data.length - 1 ).join( '' );
		t.strictEqual( actual, expected, 'returns expected value' );

		// Check if the cursor is returned back to the prompt:
		t.strictEqual( data[ data.length - 1 ], '\u001b[10A', 'returns expected value' );

		t.end();
	}
});

tape( 'a REPL instance supports scrolling using the `down` arrow key when paging', function test( t ) {
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
			'rows': 10, // height cannot accomodate the fixture
			'columns': 80
		}
	};
	r = repl( opts, onClose );

	// Call the pager command to write the fixture:
	istream.write( 'pager( "' + FIXTURE + '" )\n' );

	// Scroll down by simulating pressing the DOWN arrow key:
	istream.write( '\u001b[1B' );
	istream.write( '\u001b[1B' );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		var expected;
		var actual;

		if ( error ) {
			t.fail( error.message );
			return;
		}
		// Check if the previous page output was cleared:
		t.strictEqual( data[ data.length - 3 ], '\u001b[0J', 'returns expected value' );

		// Check for expected page content:
		expected = generateExpectedPage( FIXTURE, opts.tty.rows - RESERVED_PAGING_ROWS, opts.tty.columns, 2 ); // eslint-disable-line max-len
		actual = slice( data, data.length - 2, data.length - 1 ).join( '' );
		t.strictEqual( actual, expected, 'returns expected value' );

		// Check if the cursor is returned back to the prompt:
		t.strictEqual( data[ data.length - 1 ], '\u001b[10A', 'returns expected value' );

		t.end();
	}
});

tape( 'a REPL instance supports scrolling using the `up` arrow key when paging', function test( t ) {
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
			'rows': 10, // height cannot accomodate the fixture
			'columns': 80
		}
	};
	r = repl( opts, onClose );

	// Call the pager command to write the fixture:
	istream.write( 'pager( "' + FIXTURE + '" )\n' );

	// As we start at the top of the paged content, simulate pressing the DOWN arrow key to scroll down the page:
	istream.write( '\u001b[1B' );
	istream.write( '\u001b[1B' );
	istream.write( '\u001b[1B' );

	// Scroll up, but not to the top, by simulating the pressing of the UP arrow key:
	istream.write( '\u001b[1A' );
	istream.write( '\u001b[1A' );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		var expected;
		var actual;

		if ( error ) {
			t.fail( error.message );
			return;
		}
		// Check if the previous page output was cleared:
		t.strictEqual( data[ data.length - 3 ], '\u001b[0J', 'returns expected value' );

		// Check for expected page content:
		expected = generateExpectedPage( FIXTURE, opts.tty.rows - RESERVED_PAGING_ROWS, opts.tty.columns, 1 ); // eslint-disable-line max-len
		actual = slice( data, data.length - 2, data.length - 1 ).join( '' );
		t.strictEqual( actual, expected, 'returns expected value' );

		// Check if the cursor is returned back to the prompt:
		t.strictEqual( data[ data.length - 1 ], '\u001b[10A', 'returns expected value' );

		t.end();
	}
});

tape( 'a REPL instance supports scrolling until the end of the page', function test( t ) {
	var istream;
	var opts;
	var r;
	var i;

	istream = new DebugStream({
		'name': 'repl-input-stream'
	});
	opts = {
		'input': istream,
		'settings': defaultSettings(),
		'tty': {
			'rows': 10, // height cannot accomodate the fixture
			'columns': 80
		}
	};
	r = repl( opts, onClose );

	// Call the pager command to write the fixture:
	istream.write( 'pager( "' + FIXTURE + '" )\n' );

	// Scroll down until reaching the end of the page...
	for ( i = 0; i < FIXTURE.length+10; i++ ) {
		istream.write( '\u001b[1B' );
	}

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		var expected;
		var actual;

		if ( error ) {
			t.fail( error.message );
			return;
		}
		// Check if the previous page output was cleared:
		t.strictEqual( data[ data.length - 3 ], '\u001b[0J', 'returns expected value' );

		// Check for expected page content:
		expected = generateExpectedPage( FIXTURE, opts.tty.rows - RESERVED_PAGING_ROWS, opts.tty.columns, 9 ); // eslint-disable-line max-len
		actual = slice( data, data.length - 2, data.length - 1 ).join( '' );
		t.strictEqual( actual, expected, 'returns expected value' );

		// Check if the cursor is returned back to the prompt:
		t.strictEqual( data[ data.length - 1 ], '\u001b[10A', 'returns expected value' );

		t.end();
	}
});

tape( 'a REPL instance supports exiting the pager by pressing `q`', function test( t ) {
	var istream;
	var opts;
	var r;

	istream = new DebugStream({
		'name': 'repl-input-stream'
	});
	opts = {
		'input': istream,
		'settings': defaultSettings(),
		'inputPrompt': '> ',
		'tty': {
			'rows': 10, // height cannot accomodate the fixture
			'columns': 80
		}
	};
	r = repl( opts, onClose );

	// Call the pager command to write the fixture:
	istream.write( 'pager( "' + FIXTURE + '" )\n' );

	// Simulate pressing `q` to exit the pager:
	istream.write( 'q' );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		var expected;
		var actual;

		if ( error ) {
			t.fail( error.message );
			return;
		}
		// Check if the page output was cleared:
		t.strictEqual( data[ data.length - 8 ], '\u001b[0J', 'returns expected value' );

		// Check for expected page content:
		expected = '\n' + replace( FIXTURE, '\\n', '\n' ) + '\n';
		actual = slice( data, data.length - 7, data.length - 5 ).join( '' );
		t.strictEqual( actual, expected, 'returns expected value' );

		// Check if the prompt was re-displayed:
		t.strictEqual( data[ data.length - 3 ], '> ', 'returns expected value' );
		t.strictEqual( data[ data.length - 2 ], '\x1B[3G', 'returns expected value' ); // cursor is to the right of the prompt

		// Check if the cursor is visible:
		t.strictEqual( data[ data.length - 1 ], '\x1B[?25h', 'returns expected value' );

		t.end();
	}
});

tape( 'a REPL instance supports exiting the pager after a SIGINT event', function test( t ) {
	var istream;
	var opts;
	var r;

	istream = new DebugStream({
		'name': 'repl-input-stream'
	});
	opts = {
		'input': istream,
		'settings': defaultSettings(),
		'inputPrompt': '> ',
		'tty': {
			'rows': 10, // height cannot accomodate the fixture
			'columns': 80
		}
	};
	r = repl( opts, onClose );

	// Call the pager command to write the fixture:
	istream.write( 'pager( "' + FIXTURE + '" )\n' );

	// Trigger a SIGINT event to exit the pager:
	istream.write( '\u0003' );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		var expected;
		var actual;

		if ( error ) {
			t.fail( error.message );
			return;
		}
		// Check if the page output was cleared:
		t.strictEqual( data[ data.length - 8 ], '\u001b[0J', 'returns expected value' );

		// Check for expected page content:
		expected = '\n' + replace( FIXTURE, '\\n', '\n' ) + '\n';
		actual = slice( data, data.length - 7, data.length - 5 ).join( '' );
		t.strictEqual( actual, expected, 'returns expected value' );

		// Check if that the prompt was re-displayed:
		t.strictEqual( data[ data.length - 3 ], '> ', 'returns expected value' );
		t.strictEqual( data[ data.length - 2 ], '\x1B[3G', 'returns expected value' ); // cursor is to the right of the prompt

		// Check if the cursor is visible:
		t.strictEqual( data[ data.length - 1 ], '\x1B[?25h', 'returns expected value' );

		t.end();
	}
});
