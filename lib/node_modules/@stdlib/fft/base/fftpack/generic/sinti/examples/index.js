/**
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

'use strict';

var Float64Array = require( '@stdlib/array/float64' );
var zeroTo = require( '@stdlib/array/zero-to' );
var logEach = require( '@stdlib/console/log-each' );
var floor = require( '@stdlib/math/base/special/floor' );
var sinti = require( './../lib' );

var N = 7;
var workspace = new Float64Array( floor( 2.5*N ) + 34 );

sinti( N, workspace, 1, 0 );
console.log( 'Sequence length: %d', N );

console.log( 'Sine table:' );
var idx = zeroTo( floor( N/2 ), 'generic' );
logEach( '  workspace[ %d ] = %0.4f', idx, workspace.slice( 0, floor( N/2 ) ) );

console.log( 'Twiddle factors:' );
idx = zeroTo( N+1, 'generic' );
logEach( '  workspace[ %d ] = %0.4f', idx, workspace.slice( floor( 3*N/2 ) + 1, floor( 5*N/2 ) + 2 ) );

console.log( 'Factorization:' );
var nf = workspace[ floor( 5*N/2 ) + 3 ];

console.log( '  number of factors: %d', nf );
idx = zeroTo( nf, 'generic' );
logEach( '  factor[ %d ]: %d', idx, workspace.slice( floor( 5*N/2 ) + 4, floor( 5*N/2 ) + 4 + nf ) );
