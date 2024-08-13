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

import Complex64 = require( './index' );


// TESTS //

// The function returns a 64-bit complex number with the expected properties...
{
	const x = new Complex64( 5.0, 3.0 ); // $ExpectType Complex64

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	x.im; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	x.re; // $ExpectType number

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	x.BYTES_PER_ELEMENT; // $ExpectType 4

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	x.byteLength; // $ExpectType 8
}

// 64-bit complex number comes with a `toString` method to serialize a complex number as a string...
{
	const x = new Complex64( 5.0, 3.0 ); // $ExpectType Complex64

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	x.toString(); // $ExpectType string
}

// 64-bit complex number comes with a `toJSON` method to serialize a complex number as a JSON object....
{
	const x = new Complex64( 5.0, 3.0 ); // $ExpectType Complex64

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	x.toJSON(); // $ExpectType any
}

// The compiler throws an error if the constructor is invoked without the `new` keyword...
{
	Complex64( 5.0, 3.0 ); // $ExpectError
}

// The compiler throws an error if the constructor is provided an unsupported number of arguments...
{
	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	new Complex64( 5.0 ); // $ExpectError

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	new Complex64( 5.0, 3.0, 1.0 ); // $ExpectError
}
