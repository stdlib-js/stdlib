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

// This file is generated using `scripts/build.js`.

'use strict';

// MODULES //

var prng0 = require( '@stdlib/random/base/arcsine' );
var prng1 = require( '@stdlib/random/base/bernoulli' );
var prng2 = require( '@stdlib/random/base/beta' );
var prng3 = require( '@stdlib/random/base/betaprime' );
var prng4 = require( '@stdlib/random/base/binomial' );
var prng5 = require( '@stdlib/random/base/box-muller' );
var prng6 = require( '@stdlib/random/base/cauchy' );
var prng7 = require( '@stdlib/random/base/chi' );
var prng8 = require( '@stdlib/random/base/chisquare' );
var prng9 = require( '@stdlib/random/base/cosine' );
var prng10 = require( '@stdlib/random/base/discrete-uniform' );
var prng11 = require( '@stdlib/random/base/erlang' );
var prng12 = require( '@stdlib/random/base/exponential' );
var prng13 = require( '@stdlib/random/base/f' );
var prng14 = require( '@stdlib/random/base/frechet' );
var prng15 = require( '@stdlib/random/base/gamma' );
var prng16 = require( '@stdlib/random/base/geometric' );
var prng17 = require( '@stdlib/random/base/gumbel' );
var prng18 = require( '@stdlib/random/base/hypergeometric' );
var prng19 = require( '@stdlib/random/base/improved-ziggurat' );
var prng20 = require( '@stdlib/random/base/invgamma' );
var prng21 = require( '@stdlib/random/base/kumaraswamy' );
var prng22 = require( '@stdlib/random/base/laplace' );
var prng23 = require( '@stdlib/random/base/levy' );
var prng24 = require( '@stdlib/random/base/logistic' );
var prng25 = require( '@stdlib/random/base/lognormal' );
var prng26 = require( '@stdlib/random/base/minstd' );
var prng27 = require( '@stdlib/random/base/minstd-shuffle' );
var prng28 = require( '@stdlib/random/base/mt19937' );
var prng29 = require( '@stdlib/random/base/negative-binomial' );
var prng30 = require( '@stdlib/random/base/normal' );
var prng31 = require( '@stdlib/random/base/pareto-type1' );
var prng32 = require( '@stdlib/random/base/poisson' );
var prng33 = require( '@stdlib/random/base/randi' );
var prng34 = require( '@stdlib/random/base/randn' );
var prng35 = require( '@stdlib/random/base/randu' );
var prng36 = require( '@stdlib/random/base/rayleigh' );
var prng37 = require( '@stdlib/random/base/t' );
var prng38 = require( '@stdlib/random/base/triangular' );
var prng39 = require( '@stdlib/random/base/uniform' );
var prng40 = require( '@stdlib/random/base/weibull' );


// MAIN //

var prngs = {};
prngs[ 'arcsine' ] = prng0.factory;
prngs[ 'bernoulli' ] = prng1.factory;
prngs[ 'beta' ] = prng2.factory;
prngs[ 'betaprime' ] = prng3.factory;
prngs[ 'binomial' ] = prng4.factory;
prngs[ 'box-muller' ] = prng5.factory;
prngs[ 'cauchy' ] = prng6.factory;
prngs[ 'chi' ] = prng7.factory;
prngs[ 'chisquare' ] = prng8.factory;
prngs[ 'cosine' ] = prng9.factory;
prngs[ 'discrete-uniform' ] = prng10.factory;
prngs[ 'erlang' ] = prng11.factory;
prngs[ 'exponential' ] = prng12.factory;
prngs[ 'f' ] = prng13.factory;
prngs[ 'frechet' ] = prng14.factory;
prngs[ 'gamma' ] = prng15.factory;
prngs[ 'geometric' ] = prng16.factory;
prngs[ 'gumbel' ] = prng17.factory;
prngs[ 'hypergeometric' ] = prng18.factory;
prngs[ 'improved-ziggurat' ] = prng19.factory;
prngs[ 'invgamma' ] = prng20.factory;
prngs[ 'kumaraswamy' ] = prng21.factory;
prngs[ 'laplace' ] = prng22.factory;
prngs[ 'levy' ] = prng23.factory;
prngs[ 'logistic' ] = prng24.factory;
prngs[ 'lognormal' ] = prng25.factory;
prngs[ 'minstd' ] = prng26.factory;
prngs[ 'minstd-shuffle' ] = prng27.factory;
prngs[ 'mt19937' ] = prng28.factory;
prngs[ 'negative-binomial' ] = prng29.factory;
prngs[ 'normal' ] = prng30.factory;
prngs[ 'pareto-type1' ] = prng31.factory;
prngs[ 'poisson' ] = prng32.factory;
prngs[ 'randi' ] = prng33.factory;
prngs[ 'randn' ] = prng34.factory;
prngs[ 'randu' ] = prng35.factory;
prngs[ 'rayleigh' ] = prng36.factory;
prngs[ 't' ] = prng37.factory;
prngs[ 'triangular' ] = prng38.factory;
prngs[ 'uniform' ] = prng39.factory;
prngs[ 'weibull' ] = prng40.factory;


// EXPORTS //

module.exports = prngs;
