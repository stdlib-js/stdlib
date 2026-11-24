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

var Float64Array = require( '@stdlib/array/float64' );
var factory = require( './../lib' );

var fields = [
	{
		'name': 'rejected',
		'description': 'boolean indicating whether the null hypothesis was rejected',
		'type': 'bool',
		'enumerable': true,
		'writable': false,
		'castingMode': 'none'
	},
	{
		'name': 'alpha',
		'description': 'significance level',
		'type': 'float64',
		'enumerable': true,
		'writable': false,
		'castingMode': 'mostly-safe'
	},
	{
		'name': 'pValue',
		'description': 'p-value',
		'type': 'float64',
		'enumerable': true,
		'writable': false,
		'castingMode': 'mostly-safe'
	},
	{
		'name': 'statistic',
		'description': 'test statistic',
		'type': 'float64',
		'writable': false,
		'castingMode': 'mostly-safe'
	},
	{
		'name': 'ci',
		'description': 'confidence interval',
		'type': 'float64',
		'length': 2,
		'enumerable': true,
		'writable': false,
		'castingMode': 'mostly-safe'
	},
	{
		'name': 'df',
		'description': 'degrees of freedom',
		'type': 'int32',
		'enumerable': true,
		'writable': false,
		'castingMode': 'mostly-safe'
	},
	{
		'name': 'nullValue',
		'description': 'null value',
		'type': 'float64',
		'enumerable': true,
		'writable': false,
		'castingMode': 'mostly-safe'
	},
	{
		'name': 'mean',
		'description': 'computed mean',
		'type': 'float64',
		'enumerable': true,
		'writable': false,
		'castingMode': 'mostly-safe'
	},
	{
		'name': 'sd',
		'description': 'standard error of the mean',
		'type': 'float64',
		'enumerable': true,
		'writable': false,
		'castingMode': 'mostly-safe'
	}
];

var Struct = factory( fields );

var s = new Struct({
	'rejected': true,
	'alpha': 0.05,
	'pValue': 0.01,
	'statistic': 3.14,
	'ci': new Float64Array( [ -5.0, 5.0 ] ),
	'df': 10,
	'nullValue': 1.0,
	'mean': 1.01,
	'sd': 0.025
});
// returns <Struct>

var byteLength = Struct.byteLength;
console.log( 'Byte length: %d', byteLength );

var alignment = Struct.alignment;
console.log( 'Alignment: %d', alignment );

var names = Struct.fields;
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

var offset = Struct.byteOffsetOf( 'alpha' );
console.log( 'Offset: %d', offset );

var desc = Struct.descriptionOf( 'alpha' );
console.log( 'Description: %s', desc );
