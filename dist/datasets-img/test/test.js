/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var isBuffer = require( '@stdlib/assert/is-buffer' );
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( './../' );


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof ns, 'object', 'main export is an object' );
	t.end();
});

tape( 'the object contains methods for returning images as buffer objects', function test( t ) {
	var expected;
	var keys;
	var k;
	var i;

	expected = [
		'IMG_ACANTHUS_MOLLIS',
		'IMG_AIRPLANE_FROM_ABOVE',
		'IMG_ALLIUM_OREOPHILUM',
		'IMG_BLACK_CANYON',
		'IMG_DUST_BOWL_HOME',
		'IMG_FRENCH_ALPINE_LANDSCAPE',
		'IMG_LOCOMOTION_HOUSE_CAT',
		'IMG_LOCOMOTION_NUDE_MALE',
		'IMG_MARCH_PASTORAL',
		'IMG_NAGASAKI_BOATS'
	];
	keys = objectKeys( ns ).sort();
	t.deepEqual( keys, expected, 'returns expected value' );

	for ( i = 0; i < expected.length; i++ ) {
		k = expected[ i ];
		t.equal( isBuffer( ns[ k ]() ), true, 'returns a buffer object for key: ' + k );
	}
	t.end();
});
