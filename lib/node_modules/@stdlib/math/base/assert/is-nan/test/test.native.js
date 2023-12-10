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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var tryRequire = require( '@stdlib/utils/try-require' );
var Number = require( '@stdlib/number/ctor' );


// VARIABLES //

var isnan = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( isnan instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isnan, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided `NaN`', opts, function test( t ) {
	t.equal( isnan( NaN ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if not provided `NaN`', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5.0,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		new Number( NaN ) // eslint-disable-line no-new-wrappers
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isnan( values[i] ), false, 'returns false when provided ' + values[ i ] );
	}
	t.end();
});
