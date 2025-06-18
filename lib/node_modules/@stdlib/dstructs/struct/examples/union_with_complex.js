/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var Complex128 = require( '@stdlib/complex/float64/ctor' );
var factory = require( './../lib' );

var fields = [
	{
		'type': 'union',
		'fields': [
			{
				'name': 'z',
				'description': 'double-precision complex floating-point number',
				'type': 'complex128',
				'enumerable': true,
				'writable': true,
				'castingMode': 'none'
			},
			{
				'name': 'components',
				'description': 'real and imaginary components',
				'type': 'float64',
				'length': 2,
				'enumerable': true,
				'writable': true,
				'castingMode': 'none'
			}
		]
	}
];

var Struct = factory( fields );

var s = new Struct({
	'z': new Complex128( 3.0, 5.0 )
});
// returns <Struct>

var byteLength = Struct.byteLength;
console.log( 'Byte length: %d', byteLength );

var alignment = Struct.alignment;
console.log( 'Alignment: %d', alignment );

var names = Struct.fields;
console.log( 'Field names: %s', names.join( ', ' ) );

var str = s.toString({
	'format': 'linear'
});
console.log( 'String:\n%s', str );

var o = s.toJSON();
console.log( o );

s.components[ 0 ] = -3.14;
o = s.toJSON();
console.log( o );
