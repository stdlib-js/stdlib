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
var dset = require( './../lib/dset.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dset, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function deep sets a nested property value', function test( t ) {
	var expected;
	var bool;
	var obj;

	obj = {
		'a': {
			'b': {
				'c': 'd'
			}
		},
		'arr': [
			{
				'x': 1,
				'y': 2
			},
			{
				'x': 3,
				'y': 4
			}
		],
		'null': null
	};
	expected = {
		'a': {
			'b': {
				'c': 'beep'
			}
		},
		'arr': [
			{
				'x': 1,
				'y': 2
			},
			{
				'x': 3,
				'y': 4
			}
		],
		'null': null
	};

	bool = dset( obj, ['a', 'b', 'c'], false, 'beep' );
	t.deepEqual( obj, expected, 'deep sets object' );
	t.equal( bool, true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` if able to successfully set', function test( t ) {
	var bool;
	var obj;

	obj = {
		'a': {
			'b': {
				'c': 'd'
			}
		},
		'arr': [
			{
				'x': 1,
				'y': 2
			},
			{
				'x': 3,
				'y': 4
			}
		],
		'null': null
	};

	bool = dset( obj, ['a', 'b', 'c'], false, 'beep' );
	t.equal( bool, true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if unable to successfully set', function test( t ) {
	var bool;
	var obj;

	obj = {
		'a': {
			'b': {
				'c': 'd'
			}
		},
		'arr': [
			{
				'x': 1,
				'y': 2
			},
			{
				'x': 3,
				'y': 4
			}
		],
		'null': null
	};

	bool = dset( obj, ['a', 'b', 'djfajdfaj'], false, 'beep' );
	t.equal( bool, false, 'returns false' );

	bool = dset( obj, ['null', 'e'], false, 'beep' );
	t.equal( bool, false, 'returns false' );
	t.end();
});

tape( 'the function deep sets an array', function test( t ) {
	var expected;
	var bool;
	var obj;

	obj = {
		'a': {
			'b': {
				'c': 'd'
			}
		},
		'arr': [
			{
				'x': 1,
				'y': 2
			},
			{
				'x': 3,
				'y': 4
			}
		],
		'null': null
	};
	expected = {
		'a': {
			'b': {
				'c': 'd'
			}
		},
		'arr': [
			{
				'x': 1,
				'y': 200
			},
			{
				'x': 3,
				'y': 4
			}
		],
		'null': null
	};

	bool = dset( obj, ['arr', 0, 'y'], false, 200 );
	t.deepEqual( obj, expected, 'deep sets object' );
	t.equal( bool, true, 'returns true' );
	t.end();
});

tape( 'the function creates properties which do not exist', function test( t ) {
	var expected;
	var bool;
	var obj;

	obj = {
		'a': {
			'b': {
				'c': 'd'
			}
		},
		'arr': [
			{
				'x': 1,
				'y': 2
			},
			{
				'x': 3,
				'y': 4
			}
		],
		'null': null
	};
	expected = {
		'a': {
			'b': {
				'c': 'd'
			}
		},
		'arr': [
			{
				'x': 1,
				'y': 2
			},
			{
				'x': 3,
				'y': 4
			},
			{
				'y': 200
			}
		],
		'null': null
	};

	bool = dset( obj, ['arr', 2, 'y'], true, 200 );
	t.deepEqual( obj, expected, 'deep sets object' );
	t.equal( bool, true, 'returns true' );
	t.end();
});

tape( 'the function deep sets using a callback function', function test( t ) {
	var expected;
	var bool;
	var obj;

	obj = {
		'a': {
			'b': {
				'c': 'd'
			}
		},
		'arr': [
			{
				'x': 1,
				'y': 2
			},
			{
				'x': 3,
				'y': 4
			}
		],
		'null': null
	};

	expected = {
		'a': {
			'b': {
				'c': 'dub-beat'
			}
		},
		'arr': [
			{
				'x': 1,
				'y': 2
			},
			{
				'x': 3,
				'y': 4
			}
		],
		'null': null
	};

	bool = dset( obj, ['a', 'b', 'c'], false, set );
	t.deepEqual( obj, expected, 'deep sets object' );
	t.equal( bool, true, 'returns true' );
	t.end();

	function set( val ) {
		return val + 'ub-beat';
	}
});
