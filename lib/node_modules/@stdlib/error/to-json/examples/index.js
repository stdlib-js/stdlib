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

var toJSON = require( './../lib' );

var err = new Error( 'beep' );
console.log( toJSON( err ) );
/* =>
	{
		'type': 'Error',
		'name': 'Error',
		'message': 'beep',
		'stack': '...'
	}
*/

err = new TypeError( 'invalid type' );
console.log( toJSON( err ) );
/* =>
	{
		'type': 'TypeError',
		'name': 'TypeError',
		'message': 'invalid type',
		'stack': '...'
	}
*/

err = new SyntaxError( 'bad syntax' );
console.log( toJSON( err ) );
/* =>
	{
		'type': 'SyntaxError',
		'name': 'SyntaxError',
		'message': 'bad syntax',
		'stack': '...'
	}
*/

err = new ReferenceError( 'unknown variable' );
console.log( toJSON( err ) );
/* =>
	{
		'type': 'ReferenceError',
		'name': 'ReferenceError',
		'message': 'unknown variable',
		'stack': '...'
	}
*/

err = new URIError( 'bad URI' );
console.log( toJSON( err ) );
/* =>
	{
		'type': 'URIError',
		'name': 'URIError',
		'message': 'bad URI',
		'stack': '...'
	}
*/

err = new RangeError( 'value out-of-range' );
console.log( toJSON( err ) );
/* =>
	{
		'type': 'RangeError',
		'name': 'RangeError',
		'message': 'value out-of-range',
		'stack': '...'
	}
*/

err = new EvalError( 'eval error' );
console.log( toJSON( err ) );
/* =>
	{
		'type': 'EvalError',
		'name': 'EvalError',
		'message': 'eval error',
		'stack': '...'
	}
*/
