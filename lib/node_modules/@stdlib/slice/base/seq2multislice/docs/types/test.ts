/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import seq2multislice = require( './index' );


// TESTS //

// The function returns a MultiSlice object or an error object...
{
	seq2multislice( '0:1', [ 10 ], false ); // $ExpectType SliceResult
	seq2multislice( '0:1:1', [ 10 ], false ); // $ExpectType SliceResult

	seq2multislice( '0:1', [ 10 ], true ); // $ExpectType SliceResult
	seq2multislice( '0:1:1', [ 10 ], true ); // $ExpectType SliceResult
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	seq2multislice( 1, [ 10 ], false ); // $ExpectError
	seq2multislice( true, [ 10 ], false ); // $ExpectError
	seq2multislice( false, [ 10 ], false ); // $ExpectError
	seq2multislice( null, [ 10 ], false ); // $ExpectError
	seq2multislice( undefined, [ 10 ], false ); // $ExpectError
	seq2multislice( [], [ 10 ], false ); // $ExpectError
	seq2multislice( {}, [ 10 ], false ); // $ExpectError
	seq2multislice( ( x: number ): number => x, [ 10 ], false ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of numbers...
{
	seq2multislice( '0:10', '1', false ); // $ExpectError
	seq2multislice( '0:10', 1, false ); // $ExpectError
	seq2multislice( '0:10', true, false ); // $ExpectError
	seq2multislice( '0:10', false, false ); // $ExpectError
	seq2multislice( '0:10', null, false ); // $ExpectError
	seq2multislice( '0:10', undefined, false ); // $ExpectError
	seq2multislice( '0:10', [ '1' ], false ); // $ExpectError
	seq2multislice( '0:10', {}, false ); // $ExpectError
	seq2multislice( '0:10', ( x: number ): number => x, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a boolean...
{
	seq2multislice( '0:10', [ 10 ], '1' ); // $ExpectError
	seq2multislice( '0:10', [ 10 ], 1 ); // $ExpectError
	seq2multislice( '0:10', [ 10 ], null ); // $ExpectError
	seq2multislice( '0:10', [ 10 ], undefined ); // $ExpectError
	seq2multislice( '0:10', [ 10 ], [] ); // $ExpectError
	seq2multislice( '0:10', [ 10 ], {} ); // $ExpectError
	seq2multislice( '0:10', [ 10 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	seq2multislice(); // $ExpectError
	seq2multislice( '0:10' ); // $ExpectError
	seq2multislice( '0:10', [ 10 ] ); // $ExpectError
	seq2multislice( '0:10', [ 10 ], false, {} ); // $ExpectError
}
