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
var reUncPath = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reUncPath, 'function', 'main export is a function' );
	t.end();
});

tape( 'the returned regular expression captures a UNC path host name', function test( t ) {
	var expected;
	var values;
	var val;
	var RE;
	var i;

	RE = reUncPath();

	values = [
		'\\\\server\\share\\foo\\bar\\baz:a:b',
		'\\\\server\\share\\foo\\bar\\baz::b',
		'\\\\server\\share\\foo\\bar\\baz',
		'\\\\server\\share\\foo\\bar',
		'\\\\server\\share\\foo',
		'\\\\server\\share'
	];

	expected = 'server';

	for ( i = 0; i < values.length; i++ ) {
		val = RE.exec( values[ i ] )[ 1 ];
		t.equal( val, expected, values[ i ] );
	}
	t.end();
});

tape( 'the returned regular expression captures a UNC path share name', function test( t ) {
	var expected;
	var values;
	var val;
	var RE;
	var i;

	RE = reUncPath();

	values = [
		'\\\\server\\share\\foo\\bar\\baz:a:b',
		'\\\\server\\share\\foo\\bar\\baz::b',
		'\\\\server\\share\\foo\\bar\\baz',
		'\\\\server\\share\\foo\\bar',
		'\\\\server\\share\\foo',
		'\\\\server\\share'
	];

	expected = 'share';

	for ( i = 0; i < values.length; i++ ) {
		val = RE.exec( values[ i ] )[ 2 ];
		t.equal( val, expected, values[ i ] );
	}
	t.end();
});

tape( 'the returned regular expression captures a UNC path object name', function test( t ) {
	var expected;
	var values;
	var val;
	var RE;
	var i;

	RE = reUncPath();

	values = [
		'\\\\server\\share\\foo\\bar\\baz:a:b',
		'\\\\server\\share\\foo\\bar\\baz:a',
		'\\\\server\\share\\foo\\bar\\baz::b',
		'\\\\server\\share\\foo\\bar\\baz',
		'\\\\server\\share\\foo\\bar',
		'\\\\server\\share\\foo',
		'\\\\server\\share'
	];

	expected = [
		'\\foo\\bar\\baz:a:b',
		'\\foo\\bar\\baz:a',
		'\\foo\\bar\\baz::b',
		'\\foo\\bar\\baz',
		'\\foo\\bar',
		'\\foo',
		''
	];

	for ( i = 0; i < values.length; i++ ) {
		val = RE.exec( values[ i ] )[ 3 ];
		t.equal( val, expected[ i ], values[ i ] );
	}
	t.end();
});

tape( 'the returned regular expression captures a UNC path path name', function test( t ) {
	var expected;
	var values;
	var val;
	var RE;
	var i;

	RE = reUncPath();

	values = [
		'\\\\server\\share\\foo\\bar\\baz:a:b',
		'\\\\server\\share\\foo\\bar\\baz:a',
		'\\\\server\\share\\foo\\bar\\baz::b',
		'\\\\server\\share\\foo\\bar\\baz',
		'\\\\server\\share\\foo\\bar',
		'\\\\server\\share\\foo',
		'\\\\server\\share'
	];

	expected = [
		'\\foo\\bar',
		'\\foo\\bar',
		'\\foo\\bar',
		'\\foo\\bar',
		'\\foo',
		'',
		void 0
	];

	for ( i = 0; i < values.length; i++ ) {
		val = RE.exec( values[ i ] )[ 4 ];
		t.equal( val, expected[ i ], values[ i ] );
	}
	t.end();
});

tape( 'the returned regular expression captures a UNC path file name', function test( t ) {
	var expected;
	var values;
	var val;
	var RE;
	var i;

	RE = reUncPath();

	values = [
		'\\\\server\\share\\foo\\bar\\baz:a:b',
		'\\\\server\\share\\foo\\bar\\baz:a',
		'\\\\server\\share\\foo\\bar\\baz::b',
		'\\\\server\\share\\foo\\bar\\baz',
		'\\\\server\\share\\foo\\bar',
		'\\\\server\\share\\foo',
		'\\\\server\\share'
	];

	expected = [
		'baz:a:b',
		'baz:a',
		'baz::b',
		'baz',
		'bar',
		'foo',
		void 0
	];

	for ( i = 0; i < values.length; i++ ) {
		val = RE.exec( values[ i ] )[ 5 ];
		t.equal( val, expected[ i ], values[ i ] );
	}
	t.end();
});

tape( 'the returned regular expression captures a UNC path stream name', function test( t ) {
	var expected;
	var values;
	var val;
	var RE;
	var i;

	RE = reUncPath();

	values = [
		'\\\\server\\share\\foo\\bar\\baz:a:b',
		'\\\\server\\share\\foo\\bar\\baz:a',
		'\\\\server\\share\\foo\\bar\\baz::b',
		'\\\\server\\share\\foo\\bar\\baz',
		'\\\\server\\share\\foo\\bar',
		'\\\\server\\share\\foo',
		'\\\\server\\share'
	];

	expected = [
		'a',
		'a',
		'',
		void 0,
		void 0,
		void 0,
		void 0
	];

	for ( i = 0; i < values.length; i++ ) {
		val = RE.exec( values[ i ] )[ 6 ];
		t.equal( val, expected[ i ], values[ i ] );
	}
	t.end();
});

tape( 'the returned regular expression captures a UNC path stream type', function test( t ) {
	var expected;
	var values;
	var val;
	var RE;
	var i;

	RE = reUncPath();

	values = [
		'\\\\server\\share\\foo\\bar\\baz:a:b',
		'\\\\server\\share\\foo\\bar\\baz:a',
		'\\\\server\\share\\foo\\bar\\baz::b',
		'\\\\server\\share\\foo\\bar\\baz',
		'\\\\server\\share\\foo\\bar',
		'\\\\server\\share\\foo',
		'\\\\server\\share'
	];

	expected = [
		'b',
		void 0,
		'b',
		void 0,
		void 0,
		void 0,
		void 0
	];

	for ( i = 0; i < values.length; i++ ) {
		val = RE.exec( values[ i ] )[ 7 ];
		t.equal( val, expected[ i ], values[ i ] );
	}
	t.end();
});

tape( 'if unable to match a UNC path, the returned regular expression, when executed, returns `null`', function test( t ) {
	var values;
	var out;
	var RE;
	var i;

	RE = reUncPath();

	values = [
		'\\\\server\\\\share',
		'\\\\\\\\server\\share',
		'\\',
		'',
		'\\\\server\\share\\',
		'beep boop \\\\server\\share',
		'\\\\server\\share\\foo\\bar\\baz:',
		'\\\\server\\share\\foo\\bar\\baz:a:',
		'\\\\server\\share\\foo\\bar\\baz::',
		'\\\\server\\share\\foo\\bar\\baz:a:b:c',
		'\\\\server\\share\\foo\\bar\\',
		'//server/share',
		'/foo/bar',
		'foo/bar',
		'./foo/bar',
		'/foo/../bar'
	];

	for ( i = 0; i < values.length; i++ ) {
		out = RE.exec( values[ i ] );
		t.equal( out, null, 'returns null when provided '+values[ i ] );
	}
	t.end();
});

tape( 'the returned regular expression positively verifies a UNC path', function test( t ) {
	var values;
	var bool;
	var RE;
	var i;

	RE = reUncPath();

	values = [
		'\\\\server\\share\\foo\\bar\\baz:a:b',
		'\\\\server\\share\\foo\\bar\\baz::b',
		'\\\\server\\share\\foo\\bar\\baz',
		'\\\\server\\share\\foo\\bar',
		'\\\\server\\share\\foo',
		'\\\\server\\share'
	];

	for ( i = 0; i < values.length; i++ ) {
		bool = RE.test( values[ i ] );
		t.equal( bool, true, 'returns true when provided '+values[ i ] );
	}
	t.end();
});

tape( 'the returned regular expression negatively verifies a non-UNC path', function test( t ) {
	var values;
	var bool;
	var RE;
	var i;

	RE = reUncPath();

	values = [
		'\\\\server\\\\share',
		'\\\\\\\\server\\share',
		'\\',
		'',
		'\\\\server\\share\\',
		'beep boop \\\\server\\share',
		'\\\\server\\share\\foo\\bar\\baz:',
		'\\\\server\\share\\foo\\bar\\baz:a:',
		'\\\\server\\share\\foo\\bar\\baz::',
		'\\\\server\\share\\foo\\bar\\baz:a:b:c',
		'\\\\server\\share\\foo\\bar\\',
		'//server/share',
		'/foo/bar',
		'foo/bar',
		'./foo/bar',
		'/foo/../bar'
	];

	for ( i = 0; i < values.length; i++ ) {
		bool = RE.test( values[ i ] );
		t.equal( bool, false, 'returns false when provided '+values[ i ] );
	}
	t.end();
});
