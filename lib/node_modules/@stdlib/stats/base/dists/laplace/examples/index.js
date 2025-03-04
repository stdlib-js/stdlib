/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var laplace = require( './../lib' );

var dist = new laplace.Laplace( 4.0, 2.0 );

console.log( dist.mu );
// => 4.0

console.log( dist.b );
// => 2.0

dist.mu = 6.0;
dist.b = 3.0;

console.log( dist.mu );
// => 6.0

console.log( dist.b );
// => 3.0

console.log( dist.kurtosis );
// => 3.0

console.log( dist.median );
// => 6.0

console.log( dist.variance );
// => 18.0

var mu = 4.0;
var b = 2.0;

console.log( laplace.pdf( 2.0, mu, b ) );
// => ~0.092

console.log( laplace.cdf( 2.0, mu, b ) );
// => ~0.184

console.log( laplace.quantile( 0.5, mu, b ) );
// => 4.0

mu = 6.0;
b = 3.0;

console.log( laplace.entropy( mu, b ) );
// => ~ 2.7918

console.log( laplace.mean( mu, b ) );
// => 6.0

console.log( laplace.median( mu, b ) );
// => 6.0

console.log( laplace.mode( mu, b ) );
// => 6.0

console.log( laplace.variance( mu, b ) );
// => 18.0

console.log( laplace.skewness( mu, b ) );
// => 0.0

var myquantile = laplace.quantile.factory( 10.0, 2.0 );

console.log( myquantile( 0.2 ) );
// => ~8.167

console.log( myquantile( 0.8 ) );
// => ~11.833

var mylogpdf = laplace.logpdf.factory( 10.0, 2.0 );

console.log( mylogpdf( 10.0) );
// => ~-1.386

console.log( mylogpdf( 5.0 ) );
// => ~-3.886
