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

var join = require( 'path' ).join;
var tape = require( 'tape' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var noop = require( '@stdlib/utils/noop' );
var readJSON = require( './../lib/async.js' );


// VARIABLES //

// Don't run tests in the browser...for now...
var opts = {
	'skip': IS_BROWSER // FIXME
};


// FIXTURES //

var goodJSON = join( __dirname, 'fixtures', 'good.json' );
var badJSON = join( __dirname, 'fixtures', 'bad.json.txt' );
var bomJSON = join( __dirname, 'fixtures', 'bom.json.txt' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof readJSON, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an options argument which is neither a string nor object', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			readJSON( goodJSON, value, noop );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			readJSON( goodJSON, value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (encoding)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			readJSON( goodJSON, 'utf8', value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (options object)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			readJSON( goodJSON, {}, value );
		};
	}
});

tape( 'if the function encounters an error when attempting to read a file, the function returns the error', opts, function test( t ) {
	readJSON( 'beepboopbapbop', onRead );

	function onRead( error ) {
		if ( error ) {
			t.ok( true, error.message );
		} else {
			t.ok( false, 'expected an error' );
		}
		t.end();
	}
});

tape( 'if the function encounters an error when attempting to read a file, the function returns the error (encoding)', opts, function test( t ) {
	readJSON( 'beepboopbapbop', 'utf8', onRead );

	function onRead( error ) {
		if ( error ) {
			t.ok( true, error.message );
		} else {
			t.ok( false, 'expected an error' );
		}
		t.end();
	}
});

tape( 'if the function encounters an error when attempting to read a file, the function returns the error (options object)', opts, function test( t ) {
	readJSON( 'beepboopbapbop', {
		'encoding': 'utf8'
	}, onRead );

	function onRead( error ) {
		if ( error ) {
			t.ok( true, error.message );
		} else {
			t.ok( false, 'expected an error' );
		}
		t.end();
	}
});

tape( 'if the function encounters an error when attempting to parse file contents as JSON, the function returns the error', opts, function test( t ) {
	readJSON( badJSON, onRead );

	function onRead( error ) {
		if ( error ) {
			t.ok( true, error.message );
		} else {
			t.ok( false, 'expected an error' );
		}
		t.end();
	}
});

tape( 'if the function encounters an error when attempting to parse file contents as JSON, the function returns the error (encoding)', opts, function test( t ) {
	readJSON( badJSON, 'utf8', onRead );

	function onRead( error ) {
		if ( error ) {
			t.ok( true, error.message );
		} else {
			t.ok( false, 'expected an error' );
		}
		t.end();
	}
});

tape( 'if the function encounters an error when attempting to parse file contents as JSON, the function returns the error (options object)', opts, function test( t ) {
	readJSON( badJSON, {
		'encoding': 'utf8'
	}, onRead );

	function onRead( error ) {
		if ( error ) {
			t.ok( true, error.message );
		} else {
			t.ok( false, 'expected an error' );
		}
		t.end();
	}
});

tape( 'the function reads a file as JSON', opts, function test( t ) {
	var expected = require( goodJSON ); // eslint-disable-line stdlib/no-dynamic-require

	readJSON( goodJSON, onRead );

	function onRead( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.deepEqual( actual, expected, 'returns a file as JSON' );
		t.end();
	}
});

tape( 'the function reads a file as JSON using provided options (encoding)', opts, function test( t ) {
	var expected = require( goodJSON ); // eslint-disable-line stdlib/no-dynamic-require

	readJSON( goodJSON, 'utf8', onRead );

	function onRead( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.deepEqual( actual, expected, 'returns a file as JSON' );
		t.end();
	}
});

tape( 'the function reads a file as JSON using provided options (options object)', opts, function test( t ) {
	var expected = require( goodJSON ); // eslint-disable-line stdlib/no-dynamic-require

	readJSON( goodJSON, {
		'encoding': 'utf8'
	}, onRead );

	function onRead( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.deepEqual( actual, expected, 'returns a file as JSON' );
		t.end();
	}
});

tape( 'the function supports reading a UTF-8 encoded file having a byte order mark (BOM) as JSON', opts, function test( t ) {
	var expected = require( goodJSON ); // eslint-disable-line stdlib/no-dynamic-require

	readJSON( bomJSON, {
		'encoding': 'utf8'
	}, onRead );

	function onRead( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.deepEqual( actual, expected, 'returns a file as JSON' );
		t.end();
	}
});

tape( 'the function supports providing a JSON reviver', opts, function test( t ) {
	var expected = {
		'beep': 'boop',
		'bop': [ 1, 2, 3 ],
		'bool': true,
		'bap': 'woot'
	};
	readJSON( goodJSON, {
		'reviver': reviver
	}, onRead );

	function onRead( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.deepEqual( actual, expected, 'returns a file as JSON' );
		t.end();
	}

	function reviver( key, value ) {
		if ( key === 'bap' ) {
			return 'woot';
		}
		return value;
	}
});
