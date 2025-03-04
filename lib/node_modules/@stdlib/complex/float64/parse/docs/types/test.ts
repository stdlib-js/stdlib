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

import parseComplex128 = require( './index' );


// TESTS //

// The function returns a complex number...
{
	parseComplex128( '5 + 3.5i' ); // $ExpectType Complex128
	parseComplex128( '3' ); // $ExpectType Complex128
	parseComplex128( '-8i' ); // $ExpectType Complex128
	parseComplex128( '1e3 + 1e-3i' ); // $ExpectType Complex128
	parseComplex128( 'NaN + NaNi' ); // $ExpectType Complex128
	parseComplex128( 'Infinity - Infinityi' ); // $ExpectType Complex128
}

// The compiler throws an error if the function is provided a first argument that is not a string...
{
	parseComplex128( true ); // $ExpectError
	parseComplex128( false ); // $ExpectError
	parseComplex128( null ); // $ExpectError
	parseComplex128( undefined ); // $ExpectError
	parseComplex128( 5 ); // $ExpectError
	parseComplex128( [] ); // $ExpectError
	parseComplex128( {} ); // $ExpectError
	parseComplex128( ( x: number ): number => x ); // $ExpectError
}
