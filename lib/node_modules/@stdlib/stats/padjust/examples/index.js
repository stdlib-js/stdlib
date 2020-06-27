/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

'use strict';

var padjust = require( './../lib' );

var pvalues = [ 0.008, 0.03, 0.123, 0.6, 0.2 ];

console.log( padjust( pvalues, 'bh' ) );
// => [ 0.04, 0.075, ~0.205, 0.6, 0.25 ]

console.log( padjust( pvalues, 'bonferroni' ) );
// => [ 0.04, 0.15, 0.615, 1.0, 1.0 ]

console.log( padjust( pvalues, 'by' ) );
// => [ ~0.457, ~0.856, 1.0, 1.0, 1.0 ]

console.log( padjust( pvalues, 'holm' ) );
// => [ 0.2, 0.6, 1.0, 1.0, 1.0 ]

console.log( padjust( pvalues, 'hommel' ) );
// => [ 0.16, 0.6, 1.0, 1.0, 1.0 ]
