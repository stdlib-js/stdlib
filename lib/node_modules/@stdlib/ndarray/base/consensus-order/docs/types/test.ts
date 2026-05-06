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

import consensusLayout = require( './index' );


// TESTS //

// The function returns a storage layout...
{
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 4, 2 ];
	consensusLayout( [ sx, sy, sz ] ); // $ExpectType Layout
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object of numbers...
{
	consensusLayout( true ); // $ExpectError
	consensusLayout( false ); // $ExpectError
	consensusLayout( '5' ); // $ExpectError
	consensusLayout( 123 ); // $ExpectError
	consensusLayout( {} ); // $ExpectError
	consensusLayout( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 4, 2 ];
	consensusLayout(); // $ExpectError
	consensusLayout( [ sx, sy, sz ], [] ); // $ExpectError
}
