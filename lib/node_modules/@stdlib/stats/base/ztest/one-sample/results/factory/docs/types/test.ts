/*
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

import resultsFactory = require( './index' );


// TESTS //

// The function returns a function...
{
	resultsFactory( 'float64' ); // $ExpectType ResultsConstructor<Float64Array>
	resultsFactory( 'float32' ); // $ExpectType ResultsConstructor<Float32Array>
}

// The compiler throws an error if not provided a supported data type...
{
	resultsFactory( 10 ); // $ExpectError
	resultsFactory( true ); // $ExpectError
	resultsFactory( false ); // $ExpectError
	resultsFactory( null ); // $ExpectError
	resultsFactory( undefined ); // $ExpectError
	resultsFactory( [] ); // $ExpectError
	resultsFactory( {} ); // $ExpectError
	resultsFactory( ( x: number ): number => x ); // $ExpectError
}

// The function returns a function which returns a results object...
{
	const Results = resultsFactory( 'float64' );

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const r1 = new Results( new ArrayBuffer( 80 ) ); // $ExpectType ResultsStruct<Float64Array>

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const r2 = new Results( new ArrayBuffer( 80 ), 8 ); // $ExpectType ResultsStruct<Float64Array>

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const r3 = new Results( new ArrayBuffer( 80 ), 8, 16 ); // $ExpectType ResultsStruct<Float64Array>
}

// TODO: add individual parameter tests
