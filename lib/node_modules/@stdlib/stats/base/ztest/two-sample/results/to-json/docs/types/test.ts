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

import res2json = require( './index' );


// TESTS //

// The function returns an object...
{
	var res = {
		'rejected': true,
		'alpha': 0.05,
		'pValue': 0.0132,
		'statistic': 2.4773,
		'nullValue': 0.0,
		'xmean': 3.7561,
		'ymean': 3.0129,
		'ci': new Float64Array( [ 0.1552, 1.3311 ] ),
		'alternative': 'two-sided',
		'method': 'Two-sample Z-test'
	};
	res2json( res ); // $ExpectType Results
}

// The compiler throws an error if not provided a results object...
{
	res2json( 10 ); // $ExpectError
	res2json( true ); // $ExpectError
	res2json( false ); // $ExpectError
	res2json( null ); // $ExpectError
	res2json( undefined ); // $ExpectError
	res2json( [] ); // $ExpectError
	res2json( {} ); // $ExpectError
	res2json( ( x: number ): number => x ); // $ExpectError
}
