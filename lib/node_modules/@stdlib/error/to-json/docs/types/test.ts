/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import error2json = require( './index' );


// TESTS //

// The function returns an object...
{
	error2json( new Error( 'beep' ) ); // $ExpectType any
	error2json( new TypeError( 'beep' ) ); // $ExpectType any
	error2json( new SyntaxError( 'beep' ) ); // $ExpectType any
	error2json( new URIError( 'beep' ) ); // $ExpectType any
	error2json( new ReferenceError( 'beep' ) ); // $ExpectType any
	error2json( new RangeError( 'beep' ) ); // $ExpectType any
	error2json( new EvalError( 'beep' ) ); // $ExpectType any
}

// The compiler throws an error if the function is provided a value other than an error object...
{
	error2json( 'abc' ); // $ExpectError
	error2json( true ); // $ExpectError
	error2json( false ); // $ExpectError
	error2json( null ); // $ExpectError
	error2json( undefined ); // $ExpectError
	error2json( 5 ); // $ExpectError
	error2json( [] ); // $ExpectError
	error2json( {} ); // $ExpectError
	error2json( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	error2json(); // $ExpectError
}
