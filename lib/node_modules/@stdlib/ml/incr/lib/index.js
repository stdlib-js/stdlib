/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* @namespace ns
*/
var ns = {};

/**
* @name incrBinaryClassification
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ml/incr/binary-classification}
*/
setReadOnly( ns, 'incrBinaryClassification', require( '@stdlib/ml/incr/binary-classification' ) );

/**
* @name incrkmeans
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ml/incr/kmeans}
*/
setReadOnly( ns, 'incrkmeans', require( '@stdlib/ml/incr/kmeans' ) );

/**
* @name incrSGDRegression
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ml/incr/sgd-regression}
*/
setReadOnly( ns, 'incrSGDRegression', require( '@stdlib/ml/incr/sgd-regression' ) );


// EXPORTS //

module.exports = ns;
