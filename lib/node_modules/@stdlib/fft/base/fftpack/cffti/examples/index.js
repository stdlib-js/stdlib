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
var cffti = require( './../lib' );

var N = 8;
var workspace = new Float64Array( ( 4*N ) + 34 );

cffti( N, workspace, 1, 0 );
console.log( 'Sequence length: %d', N );

console.log( 'Twiddle factors:' );
var idx = zeroTo( 2*N, 'generic' );
logEach( '  workspace[ %d ] = %d', idx, workspace.slice( 2*N, 4*N ) );

console.log( 'Factorization:' );
var nf = workspace[ (4*N)+1 ];

console.log( '  number of factors: %d', nf );
idx = zeroTo( nf, 'generic' );
logEach( '  factor[ %d ]: %d', idx, workspace.slice( (4*N)+2, (4*N)+2+nf ) );
