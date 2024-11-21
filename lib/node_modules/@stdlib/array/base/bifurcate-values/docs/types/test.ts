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

import bifurcateValues = require( './index' );


// TESTS //

// The function returns group results...
{
	const x = [ 1, 2, 3 ];
	const f = [ 0, 1, 0 ];

	bifurcateValues( x, f ); // $ExpectType [number[], number[]]
}

// The compiler throws an error if the function is provided a first argument which is not an array...
{
	const f = [ 0, 1, 0 ];

	bifurcateValues( 5, f ); // $ExpectError
	bifurcateValues( true, f ); // $ExpectError
	bifurcateValues( false, f ); // $ExpectError
	bifurcateValues( null, f ); // $ExpectError
	bifurcateValues( void 0, f ); // $ExpectError
	bifurcateValues( {}, f ); // $ExpectError
	bifurcateValues( ( x: number ): number => x, f ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array...
{
	const x = [ 1, 2, 3 ];

	bifurcateValues( x, 5 ); // $ExpectError
	bifurcateValues( x, true ); // $ExpectError
	bifurcateValues( x, false ); // $ExpectError
	bifurcateValues( x, null ); // $ExpectError
	bifurcateValues( x, void 0 ); // $ExpectError
	bifurcateValues( x, {} ); // $ExpectError
	bifurcateValues( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3 ];
	const f = [ 0, 1, 0 ];

	bifurcateValues(); // $ExpectError
	bifurcateValues( x ); // $ExpectError
	bifurcateValues( x, f, {} ); // $ExpectError
}
