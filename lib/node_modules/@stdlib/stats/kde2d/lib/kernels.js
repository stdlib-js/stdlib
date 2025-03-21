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

var gaussian = require( './gaussian.js' );
var epanechnikov = require( './epanechnikov.js' );
var cosine = require( './cosine.js' );
var quartic = require( './quartic.js' );
var triangular = require( './triangular.js' );
var tricube = require( './tricube.js' );
var triweight = require( './triweight.js' );
var uniform = require( './uniform.js' );


// MAIN //

var kernels = {};

// TODO: Make a stdlib/stats/base/kernels package
kernels[ 'gaussian' ] = gaussian;
kernels[ 'epanechnikov' ] = epanechnikov;
kernels[ 'cosine' ] = cosine;
kernels[ 'quartic' ] = quartic;
kernels[ 'triangular' ] = triangular;
kernels[ 'tricube' ] = tricube;
kernels[ 'triweight' ] = triweight;
kernels[ 'uniform' ] = uniform;


// EXPORTS //

module.exports = kernels;
