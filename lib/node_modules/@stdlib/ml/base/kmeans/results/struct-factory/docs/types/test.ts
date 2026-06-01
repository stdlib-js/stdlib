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

import structFactory = require( './index' );


// TESTS //

// The function returns a function...
{
	structFactory( 'float64' ); // $ExpectType StructConstructor
	structFactory( 'float32' ); // $ExpectType StructConstructor
}

// The compiler throws an error if not provided a supported data type...
{
	structFactory( 10 ); // $ExpectError
	structFactory( true ); // $ExpectError
	structFactory( false ); // $ExpectError
	structFactory( null ); // $ExpectError
	structFactory( undefined ); // $ExpectError
	structFactory( [] ); // $ExpectError
	structFactory( {} ); // $ExpectError
	structFactory( ( x: number ): number => x ); // $ExpectError
}

// The function returns a function which returns a struct object...
{
	const Struct = structFactory( 'float64' );

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const s1 = new Struct( new ArrayBuffer( 80 ) ); // $ExpectType Struct

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const s2 = new Struct( new ArrayBuffer( 80 ), 8 ); // $ExpectType Struct

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const s3 = new Struct( new ArrayBuffer( 80 ), 8, 16 ); // $ExpectType Struct
}


// The returned constructor can be invoked without `new`...
{
	const Struct = structFactory( 'float64' );

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const s1 = Struct( new ArrayBuffer( 80 ) ); // $ExpectType Struct

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const s2 = Struct( new ArrayBuffer( 80 ), 8 ); // $ExpectType Struct

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const s3 = Struct( new ArrayBuffer( 80 ), 8, 16 ); // $ExpectType Struct
}

// The results object has the expected properties (float64)...
{
	const Struct = structFactory( 'float64' );
	const s = new Struct( {} );

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	s.replicates; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	s.replicate; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	s.metric; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	s.iterations; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	s.algorithm; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	s.inertia; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	s.k; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	s.samples; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	s.features; // $ExpectType number
}

// The results object has the expected properties (float32)...
{
	const Struct = structFactory( 'float32' );
	const s = new Struct( {} );

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	s.replicates; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	s.replicate; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	s.metric; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	s.iterations; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	s.algorithm; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	s.inertia; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	s.k; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	s.samples; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	s.features; // $ExpectType number
}

// The compiler throws an error if the constructor is provided a first argument which is not an ArrayBuffer or object...
{
	const Struct = structFactory( 'float64' );

	new Struct( 'abc' ); // $ExpectError
	new Struct( 123 ); // $ExpectError
	new Struct( true ); // $ExpectError
	new Struct( false ); // $ExpectError
	new Struct( null ); // $ExpectError
	new Struct( [] ); // $ExpectError
	new Struct( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the constructor is provided a second argument which is not a number...
{
	const Struct = structFactory( 'float64' );

	new Struct( new ArrayBuffer( 80 ), 'abc' ); // $ExpectError
	new Struct( new ArrayBuffer( 80 ), true ); // $ExpectError
	new Struct( new ArrayBuffer( 80 ), false ); // $ExpectError
	new Struct( new ArrayBuffer( 80 ), null ); // $ExpectError
	new Struct( new ArrayBuffer( 80 ), [] ); // $ExpectError
	new Struct( new ArrayBuffer( 80 ), {} ); // $ExpectError
	new Struct( new ArrayBuffer( 80 ), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the constructor is provided a third argument which is not a number...
{
	const Struct = structFactory( 'float64' );

	new Struct( new ArrayBuffer( 80 ), 8, 'abc' ); // $ExpectError
	new Struct( new ArrayBuffer( 80 ), 8, true ); // $ExpectError
	new Struct( new ArrayBuffer( 80 ), 8, false ); // $ExpectError
	new Struct( new ArrayBuffer( 80 ), 8, null ); // $ExpectError
	new Struct( new ArrayBuffer( 80 ), 8, [] ); // $ExpectError
	new Struct( new ArrayBuffer( 80 ), 8, {} ); // $ExpectError
	new Struct( new ArrayBuffer( 80 ), 8, ( x: number ): number => x ); // $ExpectError
}

// The results object has a `toString` method...
{
	const Struct = structFactory( 'float64' );
	const s = new Struct( {} );

	s.toString(); // $ExpectType string
	s.toString( {} ); // $ExpectType string
	s.toString( { 'digits': 4 } ); // $ExpectType string
	s.toString( { 'decision': true } ); // $ExpectType string
	s.toString( { 'digits': 4, 'decision': true } ); // $ExpectType string
}
