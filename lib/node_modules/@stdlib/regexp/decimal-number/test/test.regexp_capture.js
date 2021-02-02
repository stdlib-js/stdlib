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
var RE_DECIMAL_NUMBER = require( './../lib/regexp_capture.js' );


// TESTS //

tape( 'main export is a regular expression', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( RE_DECIMAL_NUMBER instanceof RegExp, true, 'main export is a regular expression' );
	t.end();
});

tape( 'the regular expression matches decimal numbers', function test( t ) {
	var values;
	var i;

	values = [
		'1.234',
		'beep 1.234',
		'1.234 boop',
		'foo 1.234.',
		'foo 1.234.567.890',
		'1.234!',
		'0.234',
		'.234',
		'1.0',
		'-1.0',
		'+1.0',
		'.0',
		'0.0',
		'1.234:',
		'1.234%'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( RE_DECIMAL_NUMBER.test( values[i] ), true, 'returns true when provided '+values[i] );
	}
	t.end();
});

tape( 'the regular expression captures decimal numbers', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'1.234',
		'beep 1.234',
		'1.234 boop',
		'foo 1.234.',
		'foo 1.234.567.890',
		'1.234!',
		'0.234',
		'.234',
		'1.0',
		'-1.0',
		'+1.0',
		'.0',
		'0.0',
		'1.234:',
		'1.234%'
	];

	expected = [
		[ '1.234', '1.234' ],
		[ '1.234', '1.234' ],
		[ '1.234', '1.234' ],
		[ '1.234', '1.234' ],
		[ '1.234', '1.234' ],
		[ '1.234', '1.234' ],
		[ '0.234', '0.234' ],
		[ '.234', '.234' ],
		[ '1.0', '1.0' ],
		[ '-1.0', '-1.0' ],
		[ '+1.0', '+1.0' ],
		[ '.0', '.0' ],
		[ '0.0', '0.0' ],
		[ '1.234', '1.234' ],
		[ '1.234', '1.234' ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.deepEqual( RE_DECIMAL_NUMBER.exec( values[i] ).slice(), expected[ i ], 'captures a decimal number when provided '+values[i] );
	}
	t.end();
});

tape( 'the regular expression does not match strings which are not decimal numbers', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		'beep',
		'boop',
		'%',
		'',
		'$',
		'$$$$',
		'%%%%',
		'()',
		'[]',
		'{}',
		'/////',
		'a/b',
		'p%',
		'\\d+',
		'0',
		'1',
		'2',
		'2:3',
		'beep 0',
		'0 beep'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( RE_DECIMAL_NUMBER.test( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});

tape( 'the regular expression does not capture anything when executed on strings without decimal numbers', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		'beep',
		'boop',
		'%',
		'',
		'$',
		'$$$$',
		'%%%%',
		'()',
		'[]',
		'{}',
		'/////',
		'a/b',
		'p%',
		'\\d+',
		'0',
		'1',
		'2',
		'2:3',
		'beep 0',
		'0 beep'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( RE_DECIMAL_NUMBER.exec( values[i] ), null, 'returns null when provided '+values[i] );
	}
	t.end();
});
