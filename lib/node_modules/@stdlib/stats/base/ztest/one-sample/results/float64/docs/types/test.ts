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

import Results = require( './index' );


// TESTS //

// The constructor returns a results object...
{
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const r0 = new Results( {} ); // $ExpectType ResultsStruct

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const r1 = new Results( new ArrayBuffer( 80 ) ); // $ExpectType ResultsStruct

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const r2 = new Results( new ArrayBuffer( 80 ), 8 ); // $ExpectType ResultsStruct

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const r3 = new Results( new ArrayBuffer( 80 ), 8, 16 ); // $ExpectType ResultsStruct
}

// The constructor can be invoked without `new`...
{
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const r0 = Results( {} ); // $ExpectType ResultsStruct

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const r1 = Results( new ArrayBuffer( 80 ) ); // $ExpectType ResultsStruct

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const r2 = Results( new ArrayBuffer( 80 ), 8 ); // $ExpectType ResultsStruct

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const r3 = Results( new ArrayBuffer( 80 ), 8, 16 ); // $ExpectType ResultsStruct
}

// The results object has the expected properties...
{
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

// The compiler throws an error if the constructor is provided a first argument which is not an ArrayBuffer or object...
{
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
	new Results( new ArrayBuffer( 80 ), 8, 'abc' ); // $ExpectError
	new Results( new ArrayBuffer( 80 ), 8, true ); // $ExpectError
	new Results( new ArrayBuffer( 80 ), 8, false ); // $ExpectError
	new Results( new ArrayBuffer( 80 ), 8, null ); // $ExpectError
	new Results( new ArrayBuffer( 80 ), 8, [] ); // $ExpectError
	new Results( new ArrayBuffer( 80 ), 8, {} ); // $ExpectError
	new Results( new ArrayBuffer( 80 ), 8, ( x: number ): number => x ); // $ExpectError
}

// The results object has a `toString` method...
{
	const r = new Results( {} );

	r.toString(); // $ExpectType string
	r.toString( {} ); // $ExpectType string
	r.toString( { 'digits': 4 } ); // $ExpectType string
	r.toString( { 'decision': true } ); // $ExpectType string
	r.toString( { 'digits': 4, 'decision': true } ); // $ExpectType string
}

// The results object has a `toJSON` method...
{
	const r = new Results( {} );

	r.toJSON(); // $ExpectType object
}

// The results object has a `toDataView` method...
{
	const r = new Results( {} );

	r.toDataView(); // $ExpectType DataView
}
