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
var isPlainObjectArray = require( '@stdlib/assert/is-plain-object-array' );
var namespace = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof namespace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the standard library namespace', function test( t ) {
	var ns1;
	var ns2;

	ns1 = namespace();
	t.strictEqual( isPlainObjectArray( ns1 ), true, 'returns an object array' );

	ns2 = namespace();
	t.strictEqual( isPlainObjectArray( ns2 ), true, 'returns an object array' );

	t.notEqual( ns1, ns2, 'returns new reference' );
	t.notEqual( ns1[ 0 ], ns2[ 0 ], 'contains different references' );
	t.notEqual( ns1[ 0 ].related, ns2[ 0 ].related, 'contains different references' );

	t.end();
});
