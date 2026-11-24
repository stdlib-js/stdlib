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

import res2str = require( './index' );


// TESTS //

// The function returns a string...
{
	const res = {
		'rejected': true,
		'alpha': 0.05,
		'pValue': 0.3364,
		'statistic': 11.7586,
		'nullValue': 0.0,
		'sd': 0.4563,
		'ci': new Float64Array( [ 9.9983, 11.4123 ] ),
		'alternative': 'two-sided',
		'method': 'One-sample Z-test'
	};
	res2str( res ); // $ExpectType string
	res2str( res, {} ); // $ExpectType string
}

// The compiler throws an error if provided first argument which is not a results object...
{
	res2str( '10' ); // $ExpectError
	res2str( 10 ); // $ExpectError
	res2str( true ); // $ExpectError
	res2str( false ); // $ExpectError
	res2str( null ); // $ExpectError
	res2str( undefined ); // $ExpectError
	res2str( [] ); // $ExpectError
	res2str( {} ); // $ExpectError
	res2str( ( x: number ): number => x ); // $ExpectError

	res2str( '10', {} ); // $ExpectError
	res2str( 10, {} ); // $ExpectError
	res2str( true, {} ); // $ExpectError
	res2str( false, {} ); // $ExpectError
	res2str( null, {} ); // $ExpectError
	res2str( undefined, {} ); // $ExpectError
	res2str( [], {} ); // $ExpectError
	res2str( {}, {} ); // $ExpectError
	res2str( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if provided a second argument which is not an object...
{
	const res = {
		'rejected': true,
		'alpha': 0.05,
		'pValue': 0.3364,
		'statistic': 11.7586,
		'nullValue': 0.0,
		'sd': 0.4563,
		'ci': new Float64Array( [ 9.9983, 11.4123 ] ),
		'alternative': 'two-sided',
		'method': 'One-sample Z-test'
	};

	res2str( res, '10' ); // $ExpectError
	res2str( res, 10 ); // $ExpectError
	res2str( res, true ); // $ExpectError
	res2str( res, false ); // $ExpectError
	res2str( res, null ); // $ExpectError
	res2str( res, [] ); // $ExpectError
	res2str( res, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if provided a `digits` option which is not a number...
{
	const res = {
		'rejected': true,
		'alpha': 0.05,
		'pValue': 0.3364,
		'statistic': 11.7586,
		'nullValue': 0.0,
		'sd': 0.4563,
		'ci': new Float64Array( [ 9.9983, 11.4123 ] ),
		'alternative': 'two-sided',
		'method': 'One-sample Z-test'
	};

	res2str( res, { 'digits': '10' } ); // $ExpectError
	res2str( res, { 'digits': true } ); // $ExpectError
	res2str( res, { 'digits': false } ); // $ExpectError
	res2str( res, { 'digits': null } ); // $ExpectError
	res2str( res, { 'digits': [] } ); // $ExpectError
	res2str( res, { 'digits': {} } ); // $ExpectError
	res2str( res, { 'digits': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if provided a `decision` option which is not a boolean...
{
	const res = {
		'rejected': true,
		'alpha': 0.05,
		'pValue': 0.3364,
		'statistic': 11.7586,
		'nullValue': 0.0,
		'sd': 0.4563,
		'ci': new Float64Array( [ 9.9983, 11.4123 ] ),
		'alternative': 'two-sided',
		'method': 'One-sample Z-test'
	};

	res2str( res, { 'decision': '10' } ); // $ExpectError
	res2str( res, { 'decision': 10 } ); // $ExpectError
	res2str( res, { 'decision': null } ); // $ExpectError
	res2str( res, { 'decision': [] } ); // $ExpectError
	res2str( res, { 'decision': {} } ); // $ExpectError
	res2str( res, { 'decision': ( x: number ): number => x } ); // $ExpectError
}
