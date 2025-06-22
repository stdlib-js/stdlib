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

var factory = require( './../lib' );

// Define a schema for a composite data type for storing a student's test scores:
var schema = [
	{
		'name': 'test_number',
		'type': 'int16'
	},
	{
		'name': 'pass',
		'type': 'bool'
	},
	{
		'name': 'correct',
		'type': 'int32'
	},
	{
		'name': 'incorrect',
		'type': 'int32'
	},
	{
		'name': 'percentage',
		'type': 'float32'
	}
];

// Create an array constructor for creating composite data type arrays:
var TestScoreArray = factory( schema );
console.log( 'Layout: %s', TestScoreArray.struct.layout );

// Create a new array for storing test scores:
var student1 = new TestScoreArray( 10 );
console.log( 'Byte length: %d', student1.byteLength );

// TODO: update example once we have added array methods, etc
