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

var IS_LITTLE_ENDIAN = require( '@stdlib/assert/is-little-endian' );
var toWords = require( '@stdlib/number/float64/base/to-words' );
var factory = require( './../lib' );

var fields1 = [
	{
		'name': ( IS_LITTLE_ENDIAN ) ? 'low' : 'high',
		'description': 'word',
		'type': 'uint32',
		'enumerable': true,
		'writable': true,
		'castingMode': 'none'
	},
	{
		'name': ( IS_LITTLE_ENDIAN ) ? 'high' : 'low',
		'description': 'word',
		'type': 'uint32',
		'enumerable': true,
		'writable': true,
		'castingMode': 'none'
	}
];
var Struct1 = factory( fields1 );

var fields2 = [
	{
		'type': 'union',
		'fields': [
			{
				'name': 'double',
				'description': 'double-precision floating-point number',
				'type': 'float64',
				'enumerable': true,
				'writable': true,
				'castingMode': 'none'
			},
			{
				'name': 'words',
				'description': 'high and low words',
				'type': Struct1,
				'enumerable': true,
				'writable': true,
				'castingMode': 'none'
			}
		]
	}
];
var Struct2 = factory( fields2 );

var s = new Struct2({
	'double': 3.14
});
// returns <Struct>

var byteLength = Struct2.byteLength;
console.log( 'Byte length: %d', byteLength );

var alignment = Struct2.alignment;
console.log( 'Alignment: %d', alignment );

var names = Struct2.fields;
console.log( 'Field names: %s', names.join( ', ' ) );

var str1 = s.toString({
	'format': 'linear'
});
console.log( 'String:\n%s', str1 );

var str2 = s.toString({
	'format': 'layout'
});
console.log( 'Layout: %s', str2 );

var o = s.toJSON();
console.log( o );

var offset = Struct2.byteOffsetOf( 'double' );
console.log( 'Offset: %d', offset );

var words1 = s.words;
console.log( 'Words: [%d, %d]', words1.high, words1.low );

var words2 = toWords( 3.14 );
console.log( 'Words: [%s]', words2.join( ', ' ) );
