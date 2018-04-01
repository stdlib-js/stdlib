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

// MAIN //

var kernels = {};

// Make a stdlib/stats/base/kernels package
kernels[ 'gaussian' ] = require( './gaussian.js' );
kernels[ 'epanechnikov' ] = require( './epanechnikov.js' );
kernels[ 'cosine' ] = require( './cosine.js' );
kernels[ 'quartic' ] = require( './quartic.js' );
kernels[ 'triangular' ] = require( './triangular.js' );
kernels[ 'tricube' ] = require( './tricube.js' );
kernels[ 'triweight' ] = require( './triweight.js' );
kernels[ 'uniform' ] = require( './uniform.js' );


// EXPORTS //

module.exports = kernels;
