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

var resolve = require( 'path' ).resolve;
var basename = require( 'path' ).basename;
var tape = require( 'tape' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var contains = require( '@stdlib/assert/contains' );
var noop = require( '@stdlib/utils/noop' );
var cwd = require( '@stdlib/process/cwd' );
var resolveParentPaths = require( './../lib/main.js' );


// VARIABLES //

// Don't run tests in the browser...for now...
var opts = {
	'skip': IS_BROWSER // FIXME
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof resolveParentPaths, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a `paths` argument which is not an array of strings', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		void 0,
		true,
		{},
		function noop() {},
		'beep',
		[ 1, 2 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			resolveParentPaths( value, noop );
		};
	}
});

tape( 'the function throws an error if provided a `paths` argument which is not an array of strings (options)', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		void 0,
		true,
		{},
		function noop() {},
		'beep',
		[ 1, 2 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			resolveParentPaths( value, {}, noop );
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
		null,
		void 0,
		true,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			resolveParentPaths( [ 'beep' ], value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			resolveParentPaths( [ 'beep' ], {}, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			resolveParentPaths( [ 'beep' ], value, noop );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		void 0,
		true,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			resolveParentPaths( [ 'beep' ], {
				'dir': value
			}, noop );
		};
	}
});

tape( 'the function resolves paths from a set of paths by walking parent directories', opts, function test( t ) {
	var expected;
	var base;
	var dir;

	dir = cwd();
	base = basename( dir );

	expected = dir;
	resolveParentPaths( [ base ], onPaths );

	function onPaths( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( actual.length, 1, 'returns expected value' );
		t.strictEqual( actual[ 0 ], expected, 'returns expected value' );
		t.end();
	}
});

tape( 'the function resolves a path from a set of paths by walking parent directories (dir option)', opts, function test( t ) {
	var expected;
	var opts;

	opts = {
		'dir': __dirname
	};
	expected = resolve( __dirname, '..', 'package.json' );

	resolveParentPaths( [ 'package.json' ], opts, onPaths );

	function onPaths( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( actual.length, 1, 'returns expected value' );
		t.strictEqual( actual[ 0 ], expected, 'returns expected value' );
		t.end();
	}
});

tape( 'the function resolves the first path match from a set of paths by walking parent directories (mode=first)', opts, function test( t ) {
	var opts;
	var dir;
	var FLG;

	FLG = 0;
	opts = {
		'dir': __dirname,
		'mode': 'first'
	};
	dir = resolve( __dirname, '..', 'package.json' );

	resolveParentPaths( [ 'package.json' ], opts, onPaths );
	resolveParentPaths( [ 'beep-boop!!!helloWorld!?!', 'package.json' ], opts, onPaths );
	resolveParentPaths( [ 'package.json', 'README.md' ], opts, onPaths );

	function onPaths( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( actual.length, 1, 'returns expected value' );
		t.strictEqual( actual[ 0 ], dir, 'returns expected value' );

		FLG += 1;
		if ( FLG === 3 ) {
			t.end();
		}
	}
});

tape( 'the function resolves one or more paths from a set of paths at a directory level by walking parent directories (mode=some)', opts, function test( t ) {
	var opts;
	var FLG;
	var v1;
	var v2;

	FLG = 0;
	opts = {
		'dir': __dirname,
		'mode': 'some'
	};
	v1 = resolve( __dirname, '..', 'package.json' );
	v2 = resolve( __dirname, '..', 'README.md' );

	resolveParentPaths( [ 'package.json' ], opts, onPaths1 );
	resolveParentPaths( [ 'beep-boop!!!helloWorld!?!', 'package.json' ], opts, onPaths1 );
	resolveParentPaths( [ 'package.json', 'README.md' ], opts, onPaths2 );

	function onPaths1( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( actual.length, 1, 'returns expected value' );
		t.strictEqual( actual[ 0 ], v1, 'returns expected value' );

		FLG += 1;
		if ( FLG === 3 ) {
			t.end();
		}
	}

	function onPaths2( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( actual.length, 2, 'returns expected value' );
		t.strictEqual( contains( actual, v1 ), true, 'returns expected value' );
		t.strictEqual( contains( actual, v2 ), true, 'returns expected value' );

		FLG += 1;
		if ( FLG === 3 ) {
			t.end();
		}
	}
});

tape( 'the function resolves all paths from a set of paths at a directory level by walking parent directories (mode=all)', opts, function test( t ) {
	var opts;
	var FLG;
	var v1;
	var v2;

	FLG = 0;
	opts = {
		'dir': __dirname,
		'mode': 'all'
	};
	v1 = resolve( __dirname, '..', 'package.json' );
	v2 = resolve( __dirname, '..', 'README.md' );

	resolveParentPaths( [ 'beep-boop!!!helloWorld!?!', 'package.json' ], opts, onPathsNegative );
	resolveParentPaths( [ 'package.json', 'README.md' ], opts, onPathsPositive );

	function onPathsNegative( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( actual.length, 0, 'returns expected value' );

		FLG += 1;
		if ( FLG === 2 ) {
			t.end();
		}
	}

	function onPathsPositive( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( actual.length, 2, 'returns expected value' );
		t.strictEqual( actual[ 0 ], v1, 'returns expected value' );
		t.strictEqual( actual[ 1 ], v2, 'returns expected value' );

		FLG += 1;
		if ( FLG === 2 ) {
			t.end();
		}
	}
});

tape( 'the function resolves each path from a set of paths by walking parent directories (mode=each)', opts, function test( t ) {
	var opts;
	var FLG;
	var v1;
	var v2;

	FLG = 0;
	opts = {
		'dir': __dirname,
		'mode': 'each'
	};
	v1 = resolve( __dirname, '..', 'package.json' );
	v2 = resolve( __dirname, '..', '..', 'resolve-parent-paths' );

	resolveParentPaths( [ 'beep-boop!!!helloWorld!?!', 'package.json' ], opts, onPathsNegative );
	resolveParentPaths( [ 'package.json', 'resolve-parent-paths' ], opts, onPathsPositive );

	function onPathsNegative( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( actual.length, 2, 'returns expected value' );
		t.strictEqual( actual[ 0 ], null, 'returns expected value' );
		t.strictEqual( actual[ 1 ], v1, 'returns expected value' );

		FLG += 1;
		if ( FLG === 2 ) {
			t.end();
		}
	}

	function onPathsPositive( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( actual.length, 2, 'returns expected value' );
		t.strictEqual( actual[ 0 ], v1, 'returns expected value' );
		t.strictEqual( actual[ 1 ], v2, 'returns expected value' );

		FLG += 1;
		if ( FLG === 2 ) {
			t.end();
		}
	}
});

tape( 'the function returns an empty array if unable to resolve a parent path (mode=first)', opts, function test( t ) {
	var opts;
	var FLG;

	FLG = 0;
	opts = {
		'mode': 'first'
	};
	resolveParentPaths( [], opts, onPaths1 );
	resolveParentPaths( [ 'beep-boop!!!hello world!?!' ], opts, onPaths2 );

	t.end();

	function onPaths1( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( actual.length, 0, 'returns empty array' );
		FLG += 1;
		if ( FLG === 2 ) {
			t.end();
		}
	}

	function onPaths2( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( actual.length, 0, 'returns empty array' );
		FLG += 1;
		if ( FLG === 2 ) {
			t.end();
		}
	}
});

tape( 'the function returns an empty array if unable to resolve a parent path (mode=some)', opts, function test( t ) {
	var opts;
	var FLG;

	FLG = 0;
	opts = {
		'mode': 'some'
	};
	resolveParentPaths( [], opts, onPaths1 );
	resolveParentPaths( [ 'beep-boop!!!hello world!?!' ], opts, onPaths2 );
	t.end();

	function onPaths1( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( actual.length, 0, 'returns empty array' );
		FLG += 1;
		if ( FLG === 2 ) {
			t.end();
		}
	}

	function onPaths2( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( actual.length, 0, 'returns empty array' );
		FLG += 1;
		if ( FLG === 2 ) {
			t.end();
		}
	}
});

tape( 'the function returns an empty array if unable to resolve a parent path (mode=all)', opts, function test( t ) {
	var opts;
	var FLG;

	FLG = 0;
	opts = {
		'mode': 'all'
	};
	resolveParentPaths( [], opts, onPaths1 );
	resolveParentPaths( [ 'beep-boop!!!hello world!?!' ], opts, onPaths2 );
	t.end();

	function onPaths1( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( actual.length, 0, 'returns empty array' );
		FLG += 1;
		if ( FLG === 2 ) {
			t.end();
		}
	}

	function onPaths2( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( actual.length, 0, 'returns empty array' );
		FLG += 1;
		if ( FLG === 2 ) {
			t.end();
		}
	}
});

tape( 'the function returns an array of `null` values if unable to resolve a parent path (mode=each)', opts, function test( t ) {
	var opts;
	var FLG;

	FLG = 0;
	opts = {
		'mode': 'each'
	};
	resolveParentPaths( [], opts, onPaths1 );
	resolveParentPaths( [ 'beep-boop!!!hello world!?!' ], opts, onPaths2 );
	t.end();

	function onPaths1( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( actual.length, 0, 'returns expected array' );
		FLG += 1;
		if ( FLG === 2 ) {
			t.end();
		}
	}

	function onPaths2( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( actual.length, 1, 'returns expected array' );
		t.strictEqual( actual[ 0 ], null, 'returns expected value' );
		FLG += 1;
		if ( FLG === 2 ) {
			t.end();
		}
	}
});
