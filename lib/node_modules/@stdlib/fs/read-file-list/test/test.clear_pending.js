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
var proxyquire = require( 'proxyquire' );
var noop = require( '@stdlib/utils/noop' );
var indexOf = require( '@stdlib/utils/index-of' );
var clearPending = require( './../lib/clear_pending.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof clearPending, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function cancels each timeout present in a provided hash', function test( t ) {
	var clearPending;
	var timeouts;
	var pending;
	var count;

	clearPending = proxyquire( './../lib/clear_pending.js', {
		'./clear_timeout.js': mock
	});

	timeouts = [
		setTimeout( noop, 1000 ),
		setTimeout( noop, 1000 ),
		setTimeout( noop, 1000 )
	];

	pending = {
		'0': timeouts[ 0 ],
		'1': timeouts[ 1 ],
		'2': timeouts[ 2 ]
	};

	count = 0;
	clearPending( pending );

	t.equal( count, 3, 'invokes function expected number of times' );
	t.deepEqual( pending, {}, 'should cancel timeouts' );
	t.end();

	function mock( id ) {
		var idx = indexOf( timeouts, id );
		if ( idx === -1 ) {
			t.fail( 'should provide a known id' );
		} else {
			t.pass( 'should provide a known id' );
		}
		clearTimeout( id );
		delete pending[ idx ];
		count += 1;
	}
});
