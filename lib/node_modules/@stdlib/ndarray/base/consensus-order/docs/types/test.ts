/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import consensusOrder = require( './index' );


// TESTS //

// The function returns a storage layout...
{
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 4, 2 ];
	consensusOrder( [ sx, sy, sz ] ); // $ExpectType Layout
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object of numbers...
{
	consensusOrder( true ); // $ExpectError
	consensusOrder( false ); // $ExpectError
	consensusOrder( '5' ); // $ExpectError
	consensusOrder( 123 ); // $ExpectError
	consensusOrder( {} ); // $ExpectError
	consensusOrder( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 4, 2 ];
	consensusOrder(); // $ExpectError
	consensusOrder( [ sx, sy, sz ], [] ); // $ExpectError
}
