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
* @name abs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/abs}
*/
setReadOnly( ns, 'abs', require( '@stdlib/math/strided/special/abs' ) );

/**
* @name absBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/abs-by}
*/
setReadOnly( ns, 'absBy', require( '@stdlib/math/strided/special/abs-by' ) );

/**
* @name abs2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/abs2}
*/
setReadOnly( ns, 'abs2', require( '@stdlib/math/strided/special/abs2' ) );

/**
* @name abs2By
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/abs2-by}
*/
setReadOnly( ns, 'abs2By', require( '@stdlib/math/strided/special/abs2-by' ) );

/**
* @name acosBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/acos-by}
*/
setReadOnly( ns, 'acosBy', require( '@stdlib/math/strided/special/acos-by' ) );

/**
* @name acoshBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/acosh-by}
*/
setReadOnly( ns, 'acoshBy', require( '@stdlib/math/strided/special/acosh-by' ) );

/**
* @name acotBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/acot-by}
*/
setReadOnly( ns, 'acotBy', require( '@stdlib/math/strided/special/acot-by' ) );

/**
* @name acothBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/acoth-by}
*/
setReadOnly( ns, 'acothBy', require( '@stdlib/math/strided/special/acoth-by' ) );

/**
* @name acovercosBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/acovercos-by}
*/
setReadOnly( ns, 'acovercosBy', require( '@stdlib/math/strided/special/acovercos-by' ) );

/**
* @name acoversinBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/acoversin-by}
*/
setReadOnly( ns, 'acoversinBy', require( '@stdlib/math/strided/special/acoversin-by' ) );

/**
* @name ahavercosBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/ahavercos-by}
*/
setReadOnly( ns, 'ahavercosBy', require( '@stdlib/math/strided/special/ahavercos-by' ) );

/**
* @name ahaversinBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/ahaversin-by}
*/
setReadOnly( ns, 'ahaversinBy', require( '@stdlib/math/strided/special/ahaversin-by' ) );

/**
* @name asinBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/asin-by}
*/
setReadOnly( ns, 'asinBy', require( '@stdlib/math/strided/special/asin-by' ) );

/**
* @name asinhBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/asinh-by}
*/
setReadOnly( ns, 'asinhBy', require( '@stdlib/math/strided/special/asinh-by' ) );

/**
* @name atanBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/atan-by}
*/
setReadOnly( ns, 'atanBy', require( '@stdlib/math/strided/special/atan-by' ) );

/**
* @name atanhBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/atanh-by}
*/
setReadOnly( ns, 'atanhBy', require( '@stdlib/math/strided/special/atanh-by' ) );

/**
* @name avercosBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/avercos-by}
*/
setReadOnly( ns, 'avercosBy', require( '@stdlib/math/strided/special/avercos-by' ) );

/**
* @name aversinBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/aversin-by}
*/
setReadOnly( ns, 'aversinBy', require( '@stdlib/math/strided/special/aversin-by' ) );

/**
* @name besselj0By
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/besselj0-by}
*/
setReadOnly( ns, 'besselj0By', require( '@stdlib/math/strided/special/besselj0-by' ) );

/**
* @name besselj1By
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/besselj1-by}
*/
setReadOnly( ns, 'besselj1By', require( '@stdlib/math/strided/special/besselj1-by' ) );

/**
* @name bessely0By
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/bessely0-by}
*/
setReadOnly( ns, 'bessely0By', require( '@stdlib/math/strided/special/bessely0-by' ) );

/**
* @name bessely1By
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/bessely1-by}
*/
setReadOnly( ns, 'bessely1By', require( '@stdlib/math/strided/special/bessely1-by' ) );

/**
* @name binetBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/binet-by}
*/
setReadOnly( ns, 'binetBy', require( '@stdlib/math/strided/special/binet-by' ) );

/**
* @name cbrt
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/cbrt}
*/
setReadOnly( ns, 'cbrt', require( '@stdlib/math/strided/special/cbrt' ) );

/**
* @name ceil
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/ceil}
*/
setReadOnly( ns, 'ceil', require( '@stdlib/math/strided/special/ceil' ) );

/**
* @name dabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/dabs}
*/
setReadOnly( ns, 'dabs', require( '@stdlib/math/strided/special/dabs' ) );

/**
* @name dabs2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/dabs2}
*/
setReadOnly( ns, 'dabs2', require( '@stdlib/math/strided/special/dabs2' ) );

/**
* @name dcbrt
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/dcbrt}
*/
setReadOnly( ns, 'dcbrt', require( '@stdlib/math/strided/special/dcbrt' ) );

/**
* @name dceil
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/dceil}
*/
setReadOnly( ns, 'dceil', require( '@stdlib/math/strided/special/dceil' ) );

/**
* @name ddeg2rad
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/ddeg2rad}
*/
setReadOnly( ns, 'ddeg2rad', require( '@stdlib/math/strided/special/ddeg2rad' ) );

/**
* @name deg2rad
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/deg2rad}
*/
setReadOnly( ns, 'deg2rad', require( '@stdlib/math/strided/special/deg2rad' ) );

/**
* @name dfloor
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/dfloor}
*/
setReadOnly( ns, 'dfloor', require( '@stdlib/math/strided/special/dfloor' ) );

/**
* @name dinv
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/dinv}
*/
setReadOnly( ns, 'dinv', require( '@stdlib/math/strided/special/dinv' ) );

/**
* @name dmskabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/dmskabs}
*/
setReadOnly( ns, 'dmskabs', require( '@stdlib/math/strided/special/dmskabs' ) );

/**
* @name dmskabs2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/dmskabs2}
*/
setReadOnly( ns, 'dmskabs2', require( '@stdlib/math/strided/special/dmskabs2' ) );

/**
* @name dmskcbrt
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/dmskcbrt}
*/
setReadOnly( ns, 'dmskcbrt', require( '@stdlib/math/strided/special/dmskcbrt' ) );

/**
* @name dmskceil
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/dmskceil}
*/
setReadOnly( ns, 'dmskceil', require( '@stdlib/math/strided/special/dmskceil' ) );

/**
* @name dmskdeg2rad
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/dmskdeg2rad}
*/
setReadOnly( ns, 'dmskdeg2rad', require( '@stdlib/math/strided/special/dmskdeg2rad' ) );

/**
* @name dmskfloor
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/dmskfloor}
*/
setReadOnly( ns, 'dmskfloor', require( '@stdlib/math/strided/special/dmskfloor' ) );

/**
* @name dmskinv
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/dmskinv}
*/
setReadOnly( ns, 'dmskinv', require( '@stdlib/math/strided/special/dmskinv' ) );

/**
* @name dmskramp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/dmskramp}
*/
setReadOnly( ns, 'dmskramp', require( '@stdlib/math/strided/special/dmskramp' ) );

/**
* @name dmskrsqrt
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/dmskrsqrt}
*/
setReadOnly( ns, 'dmskrsqrt', require( '@stdlib/math/strided/special/dmskrsqrt' ) );

/**
* @name dmsksqrt
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/dmsksqrt}
*/
setReadOnly( ns, 'dmsksqrt', require( '@stdlib/math/strided/special/dmsksqrt' ) );

/**
* @name dmsktrunc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/dmsktrunc}
*/
setReadOnly( ns, 'dmsktrunc', require( '@stdlib/math/strided/special/dmsktrunc' ) );

/**
* @name dramp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/dramp}
*/
setReadOnly( ns, 'dramp', require( '@stdlib/math/strided/special/dramp' ) );

/**
* @name drsqrt
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/drsqrt}
*/
setReadOnly( ns, 'drsqrt', require( '@stdlib/math/strided/special/drsqrt' ) );

/**
* @name dsqrt
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/dsqrt}
*/
setReadOnly( ns, 'dsqrt', require( '@stdlib/math/strided/special/dsqrt' ) );

/**
* @name dtrunc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/dtrunc}
*/
setReadOnly( ns, 'dtrunc', require( '@stdlib/math/strided/special/dtrunc' ) );

/**
* @name floor
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/floor}
*/
setReadOnly( ns, 'floor', require( '@stdlib/math/strided/special/floor' ) );

/**
* @name inv
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/inv}
*/
setReadOnly( ns, 'inv', require( '@stdlib/math/strided/special/inv' ) );

/**
* @name ramp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/ramp}
*/
setReadOnly( ns, 'ramp', require( '@stdlib/math/strided/special/ramp' ) );

/**
* @name rsqrt
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/rsqrt}
*/
setReadOnly( ns, 'rsqrt', require( '@stdlib/math/strided/special/rsqrt' ) );

/**
* @name sabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/sabs}
*/
setReadOnly( ns, 'sabs', require( '@stdlib/math/strided/special/sabs' ) );

/**
* @name sabs2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/sabs2}
*/
setReadOnly( ns, 'sabs2', require( '@stdlib/math/strided/special/sabs2' ) );

/**
* @name scbrt
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/scbrt}
*/
setReadOnly( ns, 'scbrt', require( '@stdlib/math/strided/special/scbrt' ) );

/**
* @name sceil
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/sceil}
*/
setReadOnly( ns, 'sceil', require( '@stdlib/math/strided/special/sceil' ) );

/**
* @name sdeg2rad
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/sdeg2rad}
*/
setReadOnly( ns, 'sdeg2rad', require( '@stdlib/math/strided/special/sdeg2rad' ) );

/**
* @name sfloor
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/sfloor}
*/
setReadOnly( ns, 'sfloor', require( '@stdlib/math/strided/special/sfloor' ) );

/**
* @name sinv
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/sinv}
*/
setReadOnly( ns, 'sinv', require( '@stdlib/math/strided/special/sinv' ) );

/**
* @name smskabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/smskabs}
*/
setReadOnly( ns, 'smskabs', require( '@stdlib/math/strided/special/smskabs' ) );

/**
* @name smskabs2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/smskabs2}
*/
setReadOnly( ns, 'smskabs2', require( '@stdlib/math/strided/special/smskabs2' ) );

/**
* @name smskcbrt
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/smskcbrt}
*/
setReadOnly( ns, 'smskcbrt', require( '@stdlib/math/strided/special/smskcbrt' ) );

/**
* @name smskceil
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/smskceil}
*/
setReadOnly( ns, 'smskceil', require( '@stdlib/math/strided/special/smskceil' ) );

/**
* @name smskdeg2rad
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/smskdeg2rad}
*/
setReadOnly( ns, 'smskdeg2rad', require( '@stdlib/math/strided/special/smskdeg2rad' ) );

/**
* @name smskfloor
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/smskfloor}
*/
setReadOnly( ns, 'smskfloor', require( '@stdlib/math/strided/special/smskfloor' ) );

/**
* @name smskinv
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/smskinv}
*/
setReadOnly( ns, 'smskinv', require( '@stdlib/math/strided/special/smskinv' ) );

/**
* @name smskramp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/smskramp}
*/
setReadOnly( ns, 'smskramp', require( '@stdlib/math/strided/special/smskramp' ) );

/**
* @name smskrsqrt
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/smskrsqrt}
*/
setReadOnly( ns, 'smskrsqrt', require( '@stdlib/math/strided/special/smskrsqrt' ) );

/**
* @name smsksqrt
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/smsksqrt}
*/
setReadOnly( ns, 'smsksqrt', require( '@stdlib/math/strided/special/smsksqrt' ) );

/**
* @name smsktrunc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/smsktrunc}
*/
setReadOnly( ns, 'smsktrunc', require( '@stdlib/math/strided/special/smsktrunc' ) );

/**
* @name sqrt
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/sqrt}
*/
setReadOnly( ns, 'sqrt', require( '@stdlib/math/strided/special/sqrt' ) );

/**
* @name sramp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/sramp}
*/
setReadOnly( ns, 'sramp', require( '@stdlib/math/strided/special/sramp' ) );

/**
* @name srsqrt
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/srsqrt}
*/
setReadOnly( ns, 'srsqrt', require( '@stdlib/math/strided/special/srsqrt' ) );

/**
* @name ssqrt
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/ssqrt}
*/
setReadOnly( ns, 'ssqrt', require( '@stdlib/math/strided/special/ssqrt' ) );

/**
* @name strunc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/strunc}
*/
setReadOnly( ns, 'strunc', require( '@stdlib/math/strided/special/strunc' ) );

/**
* @name trunc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/strided/special/trunc}
*/
setReadOnly( ns, 'trunc', require( '@stdlib/math/strided/special/trunc' ) );


// EXPORTS //

module.exports = ns;
