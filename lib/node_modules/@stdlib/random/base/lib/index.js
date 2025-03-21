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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace random
*/
var random = {};

/**
* @name arcsine
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/arcsine}
*/
setReadOnly( random, 'arcsine', require( '@stdlib/random/base/arcsine' ) );

/**
* @name bernoulli
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/bernoulli}
*/
setReadOnly( random, 'bernoulli', require( '@stdlib/random/base/bernoulli' ) );

/**
* @name beta
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/beta}
*/
setReadOnly( random, 'beta', require( '@stdlib/random/base/beta' ) );

/**
* @name betaprime
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/betaprime}
*/
setReadOnly( random, 'betaprime', require( '@stdlib/random/base/betaprime' ) );

/**
* @name binomial
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/binomial}
*/
setReadOnly( random, 'binomial', require( '@stdlib/random/base/binomial' ) );

/**
* @name boxMuller
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/box-muller}
*/
setReadOnly( random, 'boxMuller', require( '@stdlib/random/base/box-muller' ) );

/**
* @name cauchy
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/cauchy}
*/
setReadOnly( random, 'cauchy', require( '@stdlib/random/base/cauchy' ) );

/**
* @name chi
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/chi}
*/
setReadOnly( random, 'chi', require( '@stdlib/random/base/chi' ) );

/**
* @name chisquare
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/chisquare}
*/
setReadOnly( random, 'chisquare', require( '@stdlib/random/base/chisquare' ) );

/**
* @name cosine
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/cosine}
*/
setReadOnly( random, 'cosine', require( '@stdlib/random/base/cosine' ) );

/**
* @name discreteUniform
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/discrete-uniform}
*/
setReadOnly( random, 'discreteUniform', require( '@stdlib/random/base/discrete-uniform' ) );

/**
* @name erlang
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/erlang}
*/
setReadOnly( random, 'erlang', require( '@stdlib/random/base/erlang' ) );

/**
* @name exponential
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/exponential}
*/
setReadOnly( random, 'exponential', require( '@stdlib/random/base/exponential' ) );

/**
* @name f
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/f}
*/
setReadOnly( random, 'f', require( '@stdlib/random/base/f' ) );

/**
* @name frechet
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/frechet}
*/
setReadOnly( random, 'frechet', require( '@stdlib/random/base/frechet' ) );

/**
* @name gamma
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/gamma}
*/
setReadOnly( random, 'gamma', require( '@stdlib/random/base/gamma' ) );

/**
* @name geometric
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/geometric}
*/
setReadOnly( random, 'geometric', require( '@stdlib/random/base/geometric' ) );

/**
* @name gumbel
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/gumbel}
*/
setReadOnly( random, 'gumbel', require( '@stdlib/random/base/gumbel' ) );

/**
* @name hypergeometric
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/hypergeometric}
*/

setReadOnly( random, 'hypergeometric', require( '@stdlib/random/base/hypergeometric' ) );

/**
* @name improvedZiggurat
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/improved-ziggurat}
*/
setReadOnly( random, 'improvedZiggurat', require( '@stdlib/random/base/improved-ziggurat' ) );

/**
* @name invgamma
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/invgamma}
*/
setReadOnly( random, 'invgamma', require( '@stdlib/random/base/invgamma' ) );

/**
* @name kumaraswamy
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/kumaraswamy}
*/
setReadOnly( random, 'kumaraswamy', require( '@stdlib/random/base/kumaraswamy' ) );

/**
* @name laplace
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/laplace}
*/
setReadOnly( random, 'laplace', require( '@stdlib/random/base/laplace' ) );

/**
* @name levy
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/levy}
*/
setReadOnly( random, 'levy', require( '@stdlib/random/base/levy' ) );

/**
* @name logistic
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/logistic}
*/
setReadOnly( random, 'logistic', require( '@stdlib/random/base/logistic' ) );

/**
* @name lognormal
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/lognormal}
*/
setReadOnly( random, 'lognormal', require( '@stdlib/random/base/lognormal' ) );

/**
* @name minstd
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/minstd}
*/
setReadOnly( random, 'minstd', require( '@stdlib/random/base/minstd' ) );

/**
* @name minstdShuffle
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/minstd-shuffle}
*/
setReadOnly( random, 'minstdShuffle', require( '@stdlib/random/base/minstd-shuffle' ) );

/**
* @name mt19937
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/mt19937}
*/
setReadOnly( random, 'mt19937', require( '@stdlib/random/base/mt19937' ) );

/**
* @name negativeBinomial
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/negative-binomial}
*/
setReadOnly( random, 'negativeBinomial', require( '@stdlib/random/base/negative-binomial' ) );

/**
* @name normal
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/normal}
*/
setReadOnly( random, 'normal', require( '@stdlib/random/base/normal' ) );

/**
* @name pareto1
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/pareto-type1}
*/
setReadOnly( random, 'pareto1', require( '@stdlib/random/base/pareto-type1' ) );

/**
* @name poisson
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/poisson}
*/
setReadOnly( random, 'poisson', require( '@stdlib/random/base/poisson' ) );

/**
* @name randi
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/randi}
*/
setReadOnly( random, 'randi', require( '@stdlib/random/base/randi' ) );

/**
* @name randn
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/randn}
*/
setReadOnly( random, 'randn', require( '@stdlib/random/base/randn' ) );

/**
* @name randu
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/randu}
*/
setReadOnly( random, 'randu', require( '@stdlib/random/base/randu' ) );

/**
* @name rayleigh
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/rayleigh}
*/
setReadOnly( random, 'rayleigh', require( '@stdlib/random/base/rayleigh' ) );

/**
* @name reviveBasePRNG
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/reviver}
*/
setReadOnly( random, 'reviveBasePRNG', require( '@stdlib/random/base/reviver' ) );

/**
* @name t
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/t}
*/
setReadOnly( random, 't', require( '@stdlib/random/base/t' ) );

/**
* @name triangular
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/triangular}
*/
setReadOnly( random, 'triangular', require( '@stdlib/random/base/triangular' ) );

/**
* @name uniform
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/uniform}
*/
setReadOnly( random, 'uniform', require( '@stdlib/random/base/uniform' ) );

/**
* @name weibull
* @memberof random
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/base/weibull}
*/
setReadOnly( random, 'weibull', require( '@stdlib/random/base/weibull' ) );


// EXPORTS //

module.exports = random;
