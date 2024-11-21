/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import parseComplex64 = require( './index' );


// TESTS //

// The function returns a complex number...
{
	parseComplex64( '5 + 3.5i' ); // $ExpectType Complex64
	parseComplex64( '3' ); // $ExpectType Complex64
	parseComplex64( '-8i' ); // $ExpectType Complex64
	parseComplex64( '1e3 + 1e-3i' ); // $ExpectType Complex64
	parseComplex64( 'NaN + NaNi' ); // $ExpectType Complex64
	parseComplex64( 'Infinity - Infinityi' ); // $ExpectType Complex64
}

// The compiler throws an error if the function is provided a first argument that is not a string...
{
	parseComplex64( true ); // $ExpectError
	parseComplex64( false ); // $ExpectError
	parseComplex64( null ); // $ExpectError
	parseComplex64( undefined ); // $ExpectError
	parseComplex64( 5 ); // $ExpectError
	parseComplex64( [] ); // $ExpectError
	parseComplex64( {} ); // $ExpectError
	parseComplex64( ( x: number ): number => x ); // $ExpectError
}
