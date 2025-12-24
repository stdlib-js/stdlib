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

// The returned constructor can be invoked without `new`...
{
	const Results = resultsFactory( 'float64' );

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const r1 = Results( new ArrayBuffer( 80 ) ); // $ExpectType ResultsStruct<Float64Array>

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const r2 = Results( new ArrayBuffer( 80 ), 8 ); // $ExpectType ResultsStruct<Float64Array>

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const r3 = Results( new ArrayBuffer( 80 ), 8, 16 ); // $ExpectType ResultsStruct<Float64Array>
}

// The results object has the expected properties (float64)...
{
	const Results = resultsFactory( 'float64' );
	const r = new Results( {} );

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	r.rejected; // $ExpectType boolean

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	r.alternative; // $ExpectType Alternative

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	r.alpha; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	r.pValue; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	r.statistic; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	r.ci; // $ExpectType Float64Array

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	r.nullValue; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	r.sd; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	r.method; // $ExpectType string
}

// The results object has the expected properties (float32)...
{
	const Results = resultsFactory( 'float32' );
	const r = new Results( {} );

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	r.rejected; // $ExpectType boolean

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	r.alternative; // $ExpectType Alternative

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	r.alpha; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	r.pValue; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	r.statistic; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	r.ci; // $ExpectType Float32Array

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	r.nullValue; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	r.sd; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	r.method; // $ExpectType string
}

// The compiler throws an error if the constructor is provided a first argument which is not an ArrayBuffer or object...
{
	const Results = resultsFactory( 'float64' );

	new Results( 'abc' ); // $ExpectError
	new Results( 123 ); // $ExpectError
	new Results( true ); // $ExpectError
	new Results( false ); // $ExpectError
	new Results( null ); // $ExpectError
	new Results( [] ); // $ExpectError
	new Results( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the constructor is provided a second argument which is not a number...
{
	const Results = resultsFactory( 'float64' );

	new Results( new ArrayBuffer( 80 ), 'abc' ); // $ExpectError
	new Results( new ArrayBuffer( 80 ), true ); // $ExpectError
	new Results( new ArrayBuffer( 80 ), false ); // $ExpectError
	new Results( new ArrayBuffer( 80 ), null ); // $ExpectError
	new Results( new ArrayBuffer( 80 ), [] ); // $ExpectError
	new Results( new ArrayBuffer( 80 ), {} ); // $ExpectError
	new Results( new ArrayBuffer( 80 ), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the constructor is provided a third argument which is not a number...
{
	const Results = resultsFactory( 'float64' );

	new Results( new ArrayBuffer( 80 ), 8, 'abc' ); // $ExpectError
	new Results( new ArrayBuffer( 80 ), 8, true ); // $ExpectError
	new Results( new ArrayBuffer( 80 ), 8, false ); // $ExpectError
	new Results( new ArrayBuffer( 80 ), 8, null ); // $ExpectError
	new Results( new ArrayBuffer( 80 ), 8, [] ); // $ExpectError
	new Results( new ArrayBuffer( 80 ), 8, {} ); // $ExpectError
	new Results( new ArrayBuffer( 80 ), 8, ( x: number ): number => x ); // $ExpectError
}
