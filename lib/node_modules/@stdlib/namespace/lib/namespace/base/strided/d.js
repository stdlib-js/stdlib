/* eslint-disable max-lines */

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

// MAIN //

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'base.strided.dabs',
	'path': '@stdlib/math/strided/special/dabs',
	'value': require( '@stdlib/math/strided/special/dabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/abs',
		'@stdlib/math/strided/special/dabs2',
		'@stdlib/math/strided/special/sabs'
	]
});

ns.push({
	'alias': 'base.strided.dabs2',
	'path': '@stdlib/math/strided/special/dabs2',
	'value': require( '@stdlib/math/strided/special/dabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/abs2',
		'@stdlib/math/strided/special/dabs',
		'@stdlib/math/strided/special/sabs2'
	]
});

ns.push({
	'alias': 'base.strided.dapx',
	'path': '@stdlib/blas/ext/base/dapx',
	'value': require( '@stdlib/blas/ext/base/dapx' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dwapx',
		'@stdlib/blas/ext/base/gapx',
		'@stdlib/blas/ext/base/sapx'
	]
});

ns.push({
	'alias': 'base.strided.dapxsum',
	'path': '@stdlib/blas/ext/base/dapxsum',
	'value': require( '@stdlib/blas/ext/base/dapxsum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumpw',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/gapxsum',
		'@stdlib/blas/ext/base/sapxsum'
	]
});

ns.push({
	'alias': 'base.strided.dapxsumkbn',
	'path': '@stdlib/blas/ext/base/dapxsumkbn',
	'value': require( '@stdlib/blas/ext/base/dapxsumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsum',
		'@stdlib/blas/ext/base/dsumkbn',
		'@stdlib/blas/ext/base/gapxsumkbn',
		'@stdlib/blas/ext/base/sapxsumkbn'
	]
});

ns.push({
	'alias': 'base.strided.dapxsumkbn2',
	'path': '@stdlib/blas/ext/base/dapxsumkbn2',
	'value': require( '@stdlib/blas/ext/base/dapxsumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsum',
		'@stdlib/blas/ext/base/dsumkbn2',
		'@stdlib/blas/ext/base/gapxsumkbn2',
		'@stdlib/blas/ext/base/sapxsumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.dapxsumors',
	'path': '@stdlib/blas/ext/base/dapxsumors',
	'value': require( '@stdlib/blas/ext/base/dapxsumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsum',
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/gapxsumors',
		'@stdlib/blas/ext/base/sapxsumors'
	]
});

ns.push({
	'alias': 'base.strided.dapxsumpw',
	'path': '@stdlib/blas/ext/base/dapxsumpw',
	'value': require( '@stdlib/blas/ext/base/dapxsumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsum',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gapxsumpw',
		'@stdlib/blas/ext/base/sapxsumpw'
	]
});

ns.push({
	'alias': 'base.strided.dasum',
	'path': '@stdlib/blas/base/dasum',
	'value': require( '@stdlib/blas/base/dasum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/daxpy',
		'@stdlib/blas/base/gasum',
		'@stdlib/blas/base/sasum',
		'@stdlib/blas/dasum',
		'@stdlib/blas/ext/base/dsum'
	]
});

ns.push({
	'alias': 'base.strided.dasumpw',
	'path': '@stdlib/blas/ext/base/dasumpw',
	'value': require( '@stdlib/blas/ext/base/dasumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dasum',
		'@stdlib/blas/ext/base/dnanasumpw',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gasumpw',
		'@stdlib/blas/ext/base/sasumpw',
		'@stdlib/blas/ext/dasumpw'
	]
});

ns.push({
	'alias': 'base.strided.daxpy',
	'path': '@stdlib/blas/base/daxpy',
	'value': require( '@stdlib/blas/base/daxpy' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dasum',
		'@stdlib/blas/base/gaxpy',
		'@stdlib/blas/base/saxpy',
		'@stdlib/blas/daxpy'
	]
});

ns.push({
	'alias': 'base.strided.dcbrt',
	'path': '@stdlib/math/strided/special/dcbrt',
	'value': require( '@stdlib/math/strided/special/dcbrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/cbrt',
		'@stdlib/math/strided/special/dsqrt',
		'@stdlib/math/strided/special/scbrt'
	]
});

ns.push({
	'alias': 'base.strided.dceil',
	'path': '@stdlib/math/strided/special/dceil',
	'value': require( '@stdlib/math/strided/special/dceil' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/ceil',
		'@stdlib/math/strided/special/dceil2',
		'@stdlib/math/strided/special/dceil10',
		'@stdlib/math/strided/special/dceilb',
		'@stdlib/math/strided/special/dceiln',
		'@stdlib/math/strided/special/dfloor',
		'@stdlib/math/strided/special/dround',
		'@stdlib/math/strided/special/dtrunc',
		'@stdlib/math/strided/special/sceil'
	]
});

ns.push({
	'alias': 'base.strided.dcopy',
	'path': '@stdlib/blas/base/dcopy',
	'value': require( '@stdlib/blas/base/dcopy' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dswap',
		'@stdlib/blas/base/gcopy',
		'@stdlib/blas/base/scopy',
		'@stdlib/blas/dcopy'
	]
});

ns.push({
	'alias': 'base.strided.dcumax',
	'path': '@stdlib/stats/strided/dcumax',
	'value': require( '@stdlib/stats/strided/dcumax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumax',
		'@stdlib/stats/base/dcumin',
		'@stdlib/stats/base/dcurange',
		'@stdlib/stats/base/dnancumax',
		'@stdlib/stats/base/scumax'
	]
});

ns.push({
	'alias': 'base.strided.dcumaxabs',
	'path': '@stdlib/stats/base/dcumaxabs',
	'value': require( '@stdlib/stats/base/dcumaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumaxabs',
		'@stdlib/stats/strided/dcumax',
		'@stdlib/stats/base/dcuminabs',
		'@stdlib/stats/base/dnancumaxabs',
		'@stdlib/stats/base/scumaxabs'
	]
});

ns.push({
	'alias': 'base.strided.dcumin',
	'path': '@stdlib/stats/base/dcumin',
	'value': require( '@stdlib/stats/base/dcumin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumin',
		'@stdlib/stats/strided/dcumax',
		'@stdlib/stats/base/dcurange',
		'@stdlib/stats/base/dnancumin',
		'@stdlib/stats/base/scumin'
	]
});

ns.push({
	'alias': 'base.strided.dcuminabs',
	'path': '@stdlib/stats/base/dcuminabs',
	'value': require( '@stdlib/stats/base/dcuminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cuminabs',
		'@stdlib/stats/base/dcumaxabs',
		'@stdlib/stats/base/dcumin',
		'@stdlib/stats/base/dnancuminabs',
		'@stdlib/stats/base/scuminabs'
	]
});

ns.push({
	'alias': 'base.strided.dcusum',
	'path': '@stdlib/blas/ext/base/dcusum',
	'value': require( '@stdlib/blas/ext/base/dcusum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusumpw',
		'@stdlib/blas/ext/base/dnancusum',
		'@stdlib/blas/ext/base/gcusum',
		'@stdlib/blas/ext/base/scusum'
	]
});

ns.push({
	'alias': 'base.strided.dcusumkbn',
	'path': '@stdlib/blas/ext/base/dcusumkbn',
	'value': require( '@stdlib/blas/ext/base/dcusumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusum',
		'@stdlib/blas/ext/base/dnancusumkbn',
		'@stdlib/blas/ext/base/gcusumkbn',
		'@stdlib/blas/ext/base/scusumkbn'
	]
});

ns.push({
	'alias': 'base.strided.dcusumkbn2',
	'path': '@stdlib/blas/ext/base/dcusumkbn2',
	'value': require( '@stdlib/blas/ext/base/dcusumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusum',
		'@stdlib/blas/ext/base/dnancusumkbn2',
		'@stdlib/blas/ext/base/gcusumkbn2',
		'@stdlib/blas/ext/base/scusumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.dcusumors',
	'path': '@stdlib/blas/ext/base/dcusumors',
	'value': require( '@stdlib/blas/ext/base/dcusumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusum',
		'@stdlib/blas/ext/base/dnancusumors',
		'@stdlib/blas/ext/base/gcusumors',
		'@stdlib/blas/ext/base/scusumors'
	]
});

ns.push({
	'alias': 'base.strided.dcusumpw',
	'path': '@stdlib/blas/ext/base/dcusumpw',
	'value': require( '@stdlib/blas/ext/base/dcusumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusum',
		'@stdlib/blas/ext/base/dnancusumpw',
		'@stdlib/blas/ext/base/gcusumpw',
		'@stdlib/blas/ext/base/scusumpw'
	]
});

ns.push({
	'alias': 'base.strided.ddeg2rad',
	'path': '@stdlib/math/strided/special/ddeg2rad',
	'value': require( '@stdlib/math/strided/special/ddeg2rad' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/deg2rad',
		'@stdlib/math/strided/special/drad2deg',
		'@stdlib/math/strided/special/sdeg2rad'
	]
});

ns.push({
	'alias': 'base.strided.ddot',
	'path': '@stdlib/blas/base/ddot',
	'value': require( '@stdlib/blas/base/ddot' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dsdot',
		'@stdlib/blas/base/gdot',
		'@stdlib/blas/base/sdot',
		'@stdlib/blas/base/sdsdot',
		'@stdlib/blas/ddot'
	]
});

ns.push({
	'alias': 'base.strided.dfill',
	'path': '@stdlib/blas/ext/base/dfill',
	'value': require( '@stdlib/blas/ext/base/dfill' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/gfill',
		'@stdlib/blas/ext/base/sfill',
		'@stdlib/blas/ext/dfill'
	]
});

ns.push({
	'alias': 'base.strided.dfloor',
	'path': '@stdlib/math/strided/special/dfloor',
	'value': require( '@stdlib/math/strided/special/dfloor' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dceil',
		'@stdlib/math/strided/special/dfloor2',
		'@stdlib/math/strided/special/dfloor10',
		'@stdlib/math/strided/special/dfloorb',
		'@stdlib/math/strided/special/dfloorn',
		'@stdlib/math/strided/special/dround',
		'@stdlib/math/strided/special/dtrunc',
		'@stdlib/math/strided/special/floor',
		'@stdlib/math/strided/special/sfloor'
	]
});

ns.push({
	'alias': 'base.strided.dinv',
	'path': '@stdlib/math/strided/special/dinv',
	'value': require( '@stdlib/math/strided/special/dinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/inv',
		'@stdlib/math/strided/special/sinv'
	]
});

ns.push({
	'alias': 'base.strided.dmap',
	'path': '@stdlib/strided/base/dmap',
	'value': require( '@stdlib/strided/base/dmap' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/smap',
		'@stdlib/strided/base/unary'
	]
});

ns.push({
	'alias': 'base.strided.dmap2',
	'path': '@stdlib/strided/base/dmap2',
	'value': require( '@stdlib/strided/base/dmap2' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/smap2',
		'@stdlib/strided/base/binary'
	]
});

ns.push({
	'alias': 'base.strided.dmax',
	'path': '@stdlib/stats/strided/dmax',
	'value': require( '@stdlib/stats/strided/dmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmin',
		'@stdlib/stats/base/dnanmax',
		'@stdlib/stats/base/max',
		'@stdlib/stats/base/smax'
	]
});

ns.push({
	'alias': 'base.strided.dmaxabs',
	'path': '@stdlib/stats/base/dmaxabs',
	'value': require( '@stdlib/stats/base/dmaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmax',
		'@stdlib/stats/base/dminabs',
		'@stdlib/stats/base/dnanmaxabs',
		'@stdlib/stats/base/maxabs',
		'@stdlib/stats/base/smaxabs'
	]
});

ns.push({
	'alias': 'base.strided.dmaxabssorted',
	'path': '@stdlib/stats/base/dmaxabssorted',
	'value': require( '@stdlib/stats/base/dmaxabssorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmaxabs',
		'@stdlib/stats/base/dmaxsorted',
		'@stdlib/stats/base/dminabssorted',
		'@stdlib/stats/base/dnanmaxabssorted',
		'@stdlib/stats/base/maxabssorted',
		'@stdlib/stats/base/smaxabssorted'
	]
});

ns.push({
	'alias': 'base.strided.dmaxsorted',
	'path': '@stdlib/stats/base/dmaxsorted',
	'value': require( '@stdlib/stats/base/dmaxsorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmax',
		'@stdlib/stats/base/dminsorted',
		'@stdlib/stats/base/dnanmaxsorted',
		'@stdlib/stats/base/maxsorted',
		'@stdlib/stats/base/smaxsorted'
	]
});

ns.push({
	'alias': 'base.strided.dmean',
	'path': '@stdlib/stats/base/dmean',
	'value': require( '@stdlib/stats/base/dmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmean',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/smean'
	]
});

ns.push({
	'alias': 'base.strided.dmeankbn',
	'path': '@stdlib/stats/base/dmeankbn',
	'value': require( '@stdlib/stats/base/dmeankbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dnanmeankbn',
		'@stdlib/stats/base/meankbn',
		'@stdlib/stats/base/smeankbn'
	]
});

ns.push({
	'alias': 'base.strided.dmeankbn2',
	'path': '@stdlib/stats/base/dmeankbn2',
	'value': require( '@stdlib/stats/base/dmeankbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dnanmeankbn2',
		'@stdlib/stats/base/meankbn2',
		'@stdlib/stats/base/smeankbn2'
	]
});

ns.push({
	'alias': 'base.strided.dmeanli',
	'path': '@stdlib/stats/base/dmeanli',
	'value': require( '@stdlib/stats/base/dmeanli' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dmeanlipw',
		'@stdlib/stats/base/dnanmeanli',
		'@stdlib/stats/base/meanli',
		'@stdlib/stats/base/smeanli'
	]
});

ns.push({
	'alias': 'base.strided.dmeanlipw',
	'path': '@stdlib/stats/base/dmeanlipw',
	'value': require( '@stdlib/stats/base/dmeanlipw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dmeanli',
		'@stdlib/stats/base/dmeanpw',
		'@stdlib/stats/base/dnanmeanlipw',
		'@stdlib/stats/base/meanlipw',
		'@stdlib/stats/base/smeanlipw'
	]
});

ns.push({
	'alias': 'base.strided.dmeanors',
	'path': '@stdlib/stats/base/dmeanors',
	'value': require( '@stdlib/stats/base/dmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dnanmeanors',
		'@stdlib/stats/base/meanors',
		'@stdlib/stats/base/smeanors'
	]
});

ns.push({
	'alias': 'base.strided.dmeanpn',
	'path': '@stdlib/stats/base/dmeanpn',
	'value': require( '@stdlib/stats/base/dmeanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dnanmeanpn',
		'@stdlib/stats/base/meanpn',
		'@stdlib/stats/base/smeanpn'
	]
});

ns.push({
	'alias': 'base.strided.dmeanpw',
	'path': '@stdlib/stats/base/dmeanpw',
	'value': require( '@stdlib/stats/base/dmeanpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dnanmeanpw',
		'@stdlib/stats/base/meanpw',
		'@stdlib/stats/base/smeanpw'
	]
});

ns.push({
	'alias': 'base.strided.dmeanstdev',
	'path': '@stdlib/stats/base/dmeanstdev',
	'value': require( '@stdlib/stats/base/dmeanstdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dmeanvar',
		'@stdlib/stats/base/dnanmeanstdev',
		'@stdlib/stats/base/dstdev',
		'@stdlib/stats/base/meanstdev',
		'@stdlib/stats/base/smeanstdev'
	]
});

ns.push({
	'alias': 'base.strided.dmeanstdevpn',
	'path': '@stdlib/stats/base/dmeanstdevpn',
	'value': require( '@stdlib/stats/base/dmeanstdevpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanpn',
		'@stdlib/stats/base/dmeanstdev',
		'@stdlib/stats/base/dmeanvarpn',
		'@stdlib/stats/base/dnanmeanstdevpn',
		'@stdlib/stats/base/dstdevpn',
		'@stdlib/stats/base/meanstdevpn',
		'@stdlib/stats/base/smeanstdevpn'
	]
});

ns.push({
	'alias': 'base.strided.dmeanvar',
	'path': '@stdlib/stats/base/dmeanvar',
	'value': require( '@stdlib/stats/base/dmeanvar' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dnanmeanvar',
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/meanvar',
		'@stdlib/stats/base/smeanvar'
	]
});

ns.push({
	'alias': 'base.strided.dmeanvarpn',
	'path': '@stdlib/stats/base/dmeanvarpn',
	'value': require( '@stdlib/stats/base/dmeanvarpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanpn',
		'@stdlib/stats/base/dmeanstdevpn',
		'@stdlib/stats/base/dmeanvar',
		'@stdlib/stats/base/dnanmeanvarpn',
		'@stdlib/stats/base/dvariancepn',
		'@stdlib/stats/base/meanvarpn',
		'@stdlib/stats/base/smeanvarpn'
	]
});

ns.push({
	'alias': 'base.strided.dmeanwd',
	'path': '@stdlib/stats/base/dmeanwd',
	'value': require( '@stdlib/stats/base/dmeanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dnanmeanwd',
		'@stdlib/stats/base/meanwd',
		'@stdlib/stats/base/smeanwd'
	]
});

ns.push({
	'alias': 'base.strided.dmediansorted',
	'path': '@stdlib/stats/base/dmediansorted',
	'value': require( '@stdlib/stats/base/dmediansorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dmedian',
		'@stdlib/stats/base/dnanmediansorted',
		'@stdlib/stats/base/mediansorted',
		'@stdlib/stats/base/smediansorted'
	]
});

ns.push({
	'alias': 'base.strided.dmidrange',
	'path': '@stdlib/stats/base/dmidrange',
	'value': require( '@stdlib/stats/base/dmidrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmax',
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dmin',
		'@stdlib/stats/base/dnanmidrange',
		'@stdlib/stats/base/drange',
		'@stdlib/stats/base/midrange',
		'@stdlib/stats/base/smidrange'
	]
});

ns.push({
	'alias': 'base.strided.dmin',
	'path': '@stdlib/stats/base/dmin',
	'value': require( '@stdlib/stats/base/dmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmax',
		'@stdlib/stats/base/dnanmin',
		'@stdlib/stats/base/min',
		'@stdlib/stats/base/smin'
	]
});

ns.push({
	'alias': 'base.strided.dminabs',
	'path': '@stdlib/stats/base/dminabs',
	'value': require( '@stdlib/stats/base/dminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmin',
		'@stdlib/stats/base/dmaxabs',
		'@stdlib/stats/base/dnanminabs',
		'@stdlib/stats/base/minabs',
		'@stdlib/stats/base/sminabs'
	]
});

ns.push({
	'alias': 'base.strided.dminsorted',
	'path': '@stdlib/stats/base/dminsorted',
	'value': require( '@stdlib/stats/base/dminsorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmin',
		'@stdlib/stats/base/dmaxsorted',
		'@stdlib/stats/base/dnanminsorted',
		'@stdlib/stats/base/minsorted',
		'@stdlib/stats/base/sminsorted'
	]
});

ns.push({
	'alias': 'base.strided.dmskabs',
	'path': '@stdlib/math/strided/special/dmskabs',
	'value': require( '@stdlib/math/strided/special/dmskabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dabs',
		'@stdlib/math/strided/special/dmskabs2',
		'@stdlib/math/strided/special/mskabs',
		'@stdlib/math/strided/special/smskabs'
	]
});

ns.push({
	'alias': 'base.strided.dmskabs2',
	'path': '@stdlib/math/strided/special/dmskabs2',
	'value': require( '@stdlib/math/strided/special/dmskabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dabs2',
		'@stdlib/math/strided/special/dmskabs',
		'@stdlib/math/strided/special/mskabs2',
		'@stdlib/math/strided/special/smskabs2'
	]
});

ns.push({
	'alias': 'base.strided.dmskcbrt',
	'path': '@stdlib/math/strided/special/dmskcbrt',
	'value': require( '@stdlib/math/strided/special/dmskcbrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dcbrt',
		'@stdlib/math/strided/special/dmsksqrt',
		'@stdlib/math/strided/special/mskcbrt',
		'@stdlib/math/strided/special/smskcbrt'
	]
});

ns.push({
	'alias': 'base.strided.dmskceil',
	'path': '@stdlib/math/strided/special/dmskceil',
	'value': require( '@stdlib/math/strided/special/dmskceil' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dceil',
		'@stdlib/math/strided/special/dmskceil2',
		'@stdlib/math/strided/special/dmskceil10',
		'@stdlib/math/strided/special/dmskceilb',
		'@stdlib/math/strided/special/dmskceiln',
		'@stdlib/math/strided/special/dmskfloor',
		'@stdlib/math/strided/special/dmskround',
		'@stdlib/math/strided/special/dmsktrunc',
		'@stdlib/math/strided/special/mskceil',
		'@stdlib/math/strided/special/smskceil'
	]
});

ns.push({
	'alias': 'base.strided.dmskdeg2rad',
	'path': '@stdlib/math/strided/special/dmskdeg2rad',
	'value': require( '@stdlib/math/strided/special/dmskdeg2rad' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/ddeg2rad',
		'@stdlib/math/strided/special/dmskdeg2rad',
		'@stdlib/math/strided/special/mskrad2deg',
		'@stdlib/math/strided/special/smskdeg2rad'
	]
});

ns.push({
	'alias': 'base.strided.dmskfloor',
	'path': '@stdlib/math/strided/special/dmskfloor',
	'value': require( '@stdlib/math/strided/special/dmskfloor' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dfloor',
		'@stdlib/math/strided/special/dmskceil',
		'@stdlib/math/strided/special/dmskfloor2',
		'@stdlib/math/strided/special/dmskfloor10',
		'@stdlib/math/strided/special/dmskfloorb',
		'@stdlib/math/strided/special/dmskfloorn',
		'@stdlib/math/strided/special/dmskround',
		'@stdlib/math/strided/special/dmsktrunc',
		'@stdlib/math/strided/special/mskfloor',
		'@stdlib/math/strided/special/smskfloor'
	]
});

ns.push({
	'alias': 'base.strided.dmskinv',
	'path': '@stdlib/math/strided/special/dmskinv',
	'value': require( '@stdlib/math/strided/special/dmskinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dinv',
		'@stdlib/math/strided/special/mskinv',
		'@stdlib/math/strided/special/smskinv'
	]
});

ns.push({
	'alias': 'base.strided.dmskmap',
	'path': '@stdlib/strided/base/dmskmap',
	'value': require( '@stdlib/strided/base/dmskmap' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dmap',
		'@stdlib/strided/base/dmskmap2',
		'@stdlib/strided/base/mskunary',
		'@stdlib/strided/base/smskmap'
	]
});

ns.push({
	'alias': 'base.strided.dmskmap2',
	'path': '@stdlib/strided/base/dmskmap2',
	'value': require( '@stdlib/strided/base/dmskmap2' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dmap2',
		'@stdlib/strided/base/dmskmap',
		'@stdlib/strided/base/mskbinary',
		'@stdlib/strided/base/smskmap2'
	]
});

ns.push({
	'alias': 'base.strided.dmskmax',
	'path': '@stdlib/stats/base/dmskmax',
	'value': require( '@stdlib/stats/base/dmskmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmax',
		'@stdlib/stats/base/dmskmin',
		'@stdlib/stats/base/dnanmax',
		'@stdlib/stats/base/dnanmskmax',
		'@stdlib/stats/base/mskmax',
		'@stdlib/stats/base/smskmax'
	]
});

ns.push({
	'alias': 'base.strided.dmskmin',
	'path': '@stdlib/stats/base/dmskmin',
	'value': require( '@stdlib/stats/base/dmskmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmin',
		'@stdlib/stats/base/dmskmax',
		'@stdlib/stats/base/dnanmin',
		'@stdlib/stats/base/dnanmskmin',
		'@stdlib/stats/base/mskmin',
		'@stdlib/stats/base/smskmin'
	]
});

ns.push({
	'alias': 'base.strided.dmskramp',
	'path': '@stdlib/math/strided/special/dmskramp',
	'value': require( '@stdlib/math/strided/special/dmskramp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskheaviside',
		'@stdlib/math/strided/special/dramp',
		'@stdlib/math/strided/special/mskramp',
		'@stdlib/math/strided/special/smskramp'
	]
});

ns.push({
	'alias': 'base.strided.dmskrange',
	'path': '@stdlib/stats/base/dmskrange',
	'value': require( '@stdlib/stats/base/dmskrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmskmax',
		'@stdlib/stats/base/dmskmin',
		'@stdlib/stats/base/dnanrange',
		'@stdlib/stats/base/drange',
		'@stdlib/stats/base/mskrange',
		'@stdlib/stats/base/smskrange'
	]
});

ns.push({
	'alias': 'base.strided.dmskrsqrt',
	'path': '@stdlib/math/strided/special/dmskrsqrt',
	'value': require( '@stdlib/math/strided/special/dmskrsqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmsksqrt',
		'@stdlib/math/strided/special/dsqrt',
		'@stdlib/math/strided/special/mskrsqrt',
		'@stdlib/math/strided/special/smskrsqrt'
	]
});

ns.push({
	'alias': 'base.strided.dmsksqrt',
	'path': '@stdlib/math/strided/special/dmsksqrt',
	'value': require( '@stdlib/math/strided/special/dmsksqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskcbrt',
		'@stdlib/math/strided/special/dmskrsqrt',
		'@stdlib/math/strided/special/dsqrt',
		'@stdlib/math/strided/special/msksqrt',
		'@stdlib/math/strided/special/smsksqrt'
	]
});

ns.push({
	'alias': 'base.strided.dmsktrunc',
	'path': '@stdlib/math/strided/special/dmsktrunc',
	'value': require( '@stdlib/math/strided/special/dmsktrunc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskceil',
		'@stdlib/math/strided/special/dmskfloor',
		'@stdlib/math/strided/special/dmsktrunc2',
		'@stdlib/math/strided/special/dmsktrunc10',
		'@stdlib/math/strided/special/dmsktruncb',
		'@stdlib/math/strided/special/dmsktruncn',
		'@stdlib/math/strided/special/dmskround',
		'@stdlib/math/strided/special/dtrunc',
		'@stdlib/math/strided/special/msktrunc',
		'@stdlib/math/strided/special/smsktrunc'
	]
});

ns.push({
	'alias': 'base.strided.dnanasum',
	'path': '@stdlib/blas/ext/base/dnanasum',
	'value': require( '@stdlib/blas/ext/base/dnanasum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dasum',
		'@stdlib/blas/ext/base/dasumpw',
		'@stdlib/blas/ext/base/dnanasumpw',
		'@stdlib/blas/ext/base/snanasum',
		'@stdlib/blas/ext/dnanasum'
	]
});

ns.push({
	'alias': 'base.strided.dnanasumors',
	'path': '@stdlib/blas/ext/base/dnanasumors',
	'value': require( '@stdlib/blas/ext/base/dnanasumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dasumors',
		'@stdlib/blas/ext/base/dnanasum',
		'@stdlib/blas/ext/base/snanasumors',
		'@stdlib/blas/ext/dnanasumors'
	]
});

ns.push({
	'alias': 'base.strided.dnanmax',
	'path': '@stdlib/stats/base/dnanmax',
	'value': require( '@stdlib/stats/base/dnanmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmax',
		'@stdlib/stats/base/dnanmin',
		'@stdlib/stats/base/nanmax',
		'@stdlib/stats/base/snanmax'
	]
});

ns.push({
	'alias': 'base.strided.dnanmaxabs',
	'path': '@stdlib/stats/base/dnanmaxabs',
	'value': require( '@stdlib/stats/base/dnanmaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmaxabs',
		'@stdlib/stats/base/dnanmax',
		'@stdlib/stats/base/dnanminabs',
		'@stdlib/stats/base/nanmaxabs',
		'@stdlib/stats/base/snanmaxabs'
	]
});

ns.push({
	'alias': 'base.strided.dnanmean',
	'path': '@stdlib/stats/base/dnanmean',
	'value': require( '@stdlib/stats/base/dnanmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/nanmean',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.dnanmeanors',
	'path': '@stdlib/stats/base/dnanmeanors',
	'value': require( '@stdlib/stats/base/dnanmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanors',
		'@stdlib/stats/base/dnanmean',
		'@stdlib/stats/base/nanmeanors',
		'@stdlib/stats/base/snanmeanors'
	]
});

ns.push({
	'alias': 'base.strided.dnanmeanpn',
	'path': '@stdlib/stats/base/dnanmeanpn',
	'value': require( '@stdlib/stats/base/dnanmeanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanpn',
		'@stdlib/stats/base/dnanmean',
		'@stdlib/stats/base/nanmeanpn',
		'@stdlib/stats/base/snanmeanpn'
	]
});

ns.push({
	'alias': 'base.strided.dnanmeanpw',
	'path': '@stdlib/stats/base/dnanmeanpw',
	'value': require( '@stdlib/stats/base/dnanmeanpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanpw',
		'@stdlib/stats/base/dnanmean',
		'@stdlib/stats/base/nanmeanpw',
		'@stdlib/stats/base/snanmeanpw'
	]
});

ns.push({
	'alias': 'base.strided.dnanmeanwd',
	'path': '@stdlib/stats/base/dnanmeanwd',
	'value': require( '@stdlib/stats/base/dnanmeanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanwd',
		'@stdlib/stats/base/dnanmean',
		'@stdlib/stats/base/nanmeanwd',
		'@stdlib/stats/base/snanmeanwd'
	]
});

ns.push({
	'alias': 'base.strided.dnanmin',
	'path': '@stdlib/stats/base/dnanmin',
	'value': require( '@stdlib/stats/base/dnanmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmin',
		'@stdlib/stats/base/dnanmax',
		'@stdlib/stats/base/nanmin',
		'@stdlib/stats/base/snanmin'
	]
});

ns.push({
	'alias': 'base.strided.dnanminabs',
	'path': '@stdlib/stats/base/dnanminabs',
	'value': require( '@stdlib/stats/base/dnanminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dminabs',
		'@stdlib/stats/base/dnanmaxabs',
		'@stdlib/stats/base/dnanmin',
		'@stdlib/stats/base/nanminabs',
		'@stdlib/stats/base/snanminabs'
	]
});

ns.push({
	'alias': 'base.strided.dnanmskmax',
	'path': '@stdlib/stats/base/dnanmskmax',
	'value': require( '@stdlib/stats/base/dnanmskmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmskmax',
		'@stdlib/stats/base/dnanmax',
		'@stdlib/stats/base/dnanmskmin',
		'@stdlib/stats/base/nanmskmax',
		'@stdlib/stats/base/snanmskmax'
	]
});

ns.push({
	'alias': 'base.strided.dnanmskmin',
	'path': '@stdlib/stats/base/dnanmskmin',
	'value': require( '@stdlib/stats/base/dnanmskmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmskmin',
		'@stdlib/stats/base/dnanmin',
		'@stdlib/stats/base/dnanmskmax',
		'@stdlib/stats/base/nanmskmin',
		'@stdlib/stats/base/snanmskmin'
	]
});

ns.push({
	'alias': 'base.strided.dnanmskrange',
	'path': '@stdlib/stats/base/dnanmskrange',
	'value': require( '@stdlib/stats/base/dnanmskrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmskrange',
		'@stdlib/stats/base/dnanrange',
		'@stdlib/stats/base/dnanmskmax',
		'@stdlib/stats/base/dnanmskmin',
		'@stdlib/stats/base/nanmskrange',
		'@stdlib/stats/base/snanmskrange'
	]
});

ns.push({
	'alias': 'base.strided.dnannsum',
	'path': '@stdlib/blas/ext/base/dnannsum',
	'value': require( '@stdlib/blas/ext/base/dnannsum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/gnannsum',
		'@stdlib/blas/ext/base/snannsum'
	]
});

ns.push({
	'alias': 'base.strided.dnannsumkbn',
	'path': '@stdlib/blas/ext/base/dnannsumkbn',
	'value': require( '@stdlib/blas/ext/base/dnannsumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnannsum',
		'@stdlib/blas/ext/base/dnannsumkbn2',
		'@stdlib/blas/ext/base/dnannsumors',
		'@stdlib/blas/ext/base/dnannsumpw',
		'@stdlib/blas/ext/base/dsumkbn',
		'@stdlib/blas/ext/base/gnannsumkbn',
		'@stdlib/blas/ext/base/snannsumkbn'
	]
});

ns.push({
	'alias': 'base.strided.dnannsumkbn2',
	'path': '@stdlib/blas/ext/base/dnannsumkbn2',
	'value': require( '@stdlib/blas/ext/base/dnannsumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnannsum',
		'@stdlib/blas/ext/base/dnannsumkbn',
		'@stdlib/blas/ext/base/dnannsumors',
		'@stdlib/blas/ext/base/dnannsumpw',
		'@stdlib/blas/ext/base/dsumkbn2',
		'@stdlib/blas/ext/base/gnannsumkbn2',
		'@stdlib/blas/ext/base/snannsumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.dnannsumors',
	'path': '@stdlib/blas/ext/base/dnannsumors',
	'value': require( '@stdlib/blas/ext/base/dnannsumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnannsum',
		'@stdlib/blas/ext/base/dnannsumkbn',
		'@stdlib/blas/ext/base/dnannsumkbn2',
		'@stdlib/blas/ext/base/dnannsumpw',
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/gnannsumors',
		'@stdlib/blas/ext/base/snannsumors'
	]
});

ns.push({
	'alias': 'base.strided.dnannsumpw',
	'path': '@stdlib/blas/ext/base/dnannsumpw',
	'value': require( '@stdlib/blas/ext/base/dnannsumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnannsum',
		'@stdlib/blas/ext/base/dnannsumkbn',
		'@stdlib/blas/ext/base/dnannsumkbn2',
		'@stdlib/blas/ext/base/dnannsumors',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gnannsumpw',
		'@stdlib/blas/ext/base/snannsumpw'
	]
});

ns.push({
	'alias': 'base.strided.dnanrange',
	'path': '@stdlib/stats/base/dnanrange',
	'value': require( '@stdlib/stats/base/dnanrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmax',
		'@stdlib/stats/base/dnanmin',
		'@stdlib/stats/base/drange',
		'@stdlib/stats/base/nanrange',
		'@stdlib/stats/base/snanrange'
	]
});

ns.push({
	'alias': 'base.strided.dnanstdev',
	'path': '@stdlib/stats/base/dnanstdev',
	'value': require( '@stdlib/stats/base/dnanstdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariance',
		'@stdlib/stats/base/dstdev',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/snanstdev'
	]
});

ns.push({
	'alias': 'base.strided.dnanstdevch',
	'path': '@stdlib/stats/base/dnanstdevch',
	'value': require( '@stdlib/stats/base/dnanstdevch' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdev',
		'@stdlib/stats/base/dnanvariancech',
		'@stdlib/stats/base/dstdevch',
		'@stdlib/stats/base/nanstdevch',
		'@stdlib/stats/base/snanstdevch'
	]
});

ns.push({
	'alias': 'base.strided.dnanstdevpn',
	'path': '@stdlib/stats/base/dnanstdevpn',
	'value': require( '@stdlib/stats/base/dnanstdevpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdev',
		'@stdlib/stats/base/dnanvariancepn',
		'@stdlib/stats/base/dstdevpn',
		'@stdlib/stats/base/nanstdevpn',
		'@stdlib/stats/base/snanstdevpn'
	]
});

ns.push({
	'alias': 'base.strided.dnanstdevtk',
	'path': '@stdlib/stats/base/dnanstdevtk',
	'value': require( '@stdlib/stats/base/dnanstdevtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdev',
		'@stdlib/stats/base/dnanvariancetk',
		'@stdlib/stats/base/dstdevtk',
		'@stdlib/stats/base/nanstdevtk',
		'@stdlib/stats/base/snanstdevtk'
	]
});

ns.push({
	'alias': 'base.strided.dnanstdevwd',
	'path': '@stdlib/stats/base/dnanstdevwd',
	'value': require( '@stdlib/stats/base/dnanstdevwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdev',
		'@stdlib/stats/base/dnanvariancewd',
		'@stdlib/stats/base/dstdevwd',
		'@stdlib/stats/base/nanstdevwd',
		'@stdlib/stats/base/snanstdevwd'
	]
});

ns.push({
	'alias': 'base.strided.dnanstdevyc',
	'path': '@stdlib/stats/base/dnanstdevyc',
	'value': require( '@stdlib/stats/base/dnanstdevyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdev',
		'@stdlib/stats/base/dnanvarianceyc',
		'@stdlib/stats/base/dstdevyc',
		'@stdlib/stats/base/nanstdevyc',
		'@stdlib/stats/base/snanstdevyc'
	]
});

ns.push({
	'alias': 'base.strided.dnansum',
	'path': '@stdlib/blas/ext/base/dnansum',
	'value': require( '@stdlib/blas/ext/base/dnansum' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmean',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/snansum',
		'@stdlib/blas/ext/base/gnansum'
	]
});

ns.push({
	'alias': 'base.strided.dnansumkbn',
	'path': '@stdlib/blas/ext/base/dnansumkbn',
	'value': require( '@stdlib/blas/ext/base/dnansumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/dnansumors',
		'@stdlib/blas/ext/base/dnansumpw',
		'@stdlib/blas/ext/base/dsumkbn',
		'@stdlib/blas/ext/base/gnansumkbn',
		'@stdlib/blas/ext/base/snansumkbn'
	]
});

ns.push({
	'alias': 'base.strided.dnansumkbn2',
	'path': '@stdlib/blas/ext/base/dnansumkbn2',
	'value': require( '@stdlib/blas/ext/base/dnansumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/dnansumors',
		'@stdlib/blas/ext/base/dnansumpw',
		'@stdlib/blas/ext/base/dsumkbn2',
		'@stdlib/blas/ext/base/gnansumkbn2',
		'@stdlib/blas/ext/base/snansumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.dnansumors',
	'path': '@stdlib/blas/ext/base/dnansumors',
	'value': require( '@stdlib/blas/ext/base/dnansumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/dnansumkbn2',
		'@stdlib/blas/ext/base/dnansumpw',
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/gnansumors',
		'@stdlib/blas/ext/base/snansumors'
	]
});

ns.push({
	'alias': 'base.strided.dnansumpw',
	'path': '@stdlib/blas/ext/base/dnansumpw',
	'value': require( '@stdlib/blas/ext/base/dnansumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/dnansumkbn2',
		'@stdlib/blas/ext/base/dnansumors',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gnansumpw',
		'@stdlib/blas/ext/base/snansumpw'
	]
});

ns.push({
	'alias': 'base.strided.dnanvariance',
	'path': '@stdlib/stats/base/dnanvariance',
	'value': require( '@stdlib/stats/base/dnanvariance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdev',
		'@stdlib/stats/base/dnanvarm',
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/snanvariance'
	]
});

ns.push({
	'alias': 'base.strided.dnanvariancech',
	'path': '@stdlib/stats/base/dnanvariancech',
	'value': require( '@stdlib/stats/base/dnanvariancech' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancech',
		'@stdlib/stats/base/dnanvariance',
		'@stdlib/stats/base/nanvariancech',
		'@stdlib/stats/base/snanvariancech'
	]
});

ns.push({
	'alias': 'base.strided.dnanvariancepn',
	'path': '@stdlib/stats/base/dnanvariancepn',
	'value': require( '@stdlib/stats/base/dnanvariancepn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancepn',
		'@stdlib/stats/base/dnanvariance',
		'@stdlib/stats/base/nanvariancepn',
		'@stdlib/stats/base/snanvariancepn'
	]
});

ns.push({
	'alias': 'base.strided.dnanvariancetk',
	'path': '@stdlib/stats/base/dnanvariancetk',
	'value': require( '@stdlib/stats/base/dnanvariancetk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancetk',
		'@stdlib/stats/base/dnanvariance',
		'@stdlib/stats/base/nanvariancetk',
		'@stdlib/stats/base/snanvariancetk'
	]
});

ns.push({
	'alias': 'base.strided.dnanvariancewd',
	'path': '@stdlib/stats/base/dnanvariancewd',
	'value': require( '@stdlib/stats/base/dnanvariancewd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancewd',
		'@stdlib/stats/base/dnanvariance',
		'@stdlib/stats/base/nanvariancewd',
		'@stdlib/stats/base/snanvariancewd'
	]
});

ns.push({
	'alias': 'base.strided.dnanvarianceyc',
	'path': '@stdlib/stats/base/dnanvarianceyc',
	'value': require( '@stdlib/stats/base/dnanvarianceyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvarianceyc',
		'@stdlib/stats/base/dnanvariance',
		'@stdlib/stats/base/nanvarianceyc',
		'@stdlib/stats/base/snanvarianceyc'
	]
});

ns.push({
	'alias': 'base.strided.dnrm2',
	'path': '@stdlib/blas/base/dnrm2',
	'value': require( '@stdlib/blas/base/dnrm2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/gnrm2',
		'@stdlib/blas/base/snrm2',
		'@stdlib/blas/dnrm2'
	]
});

ns.push({
	'alias': 'base.strided.dramp',
	'path': '@stdlib/math/strided/special/dramp',
	'value': require( '@stdlib/math/strided/special/dramp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dheaviside',
		'@stdlib/math/strided/special/ramp',
		'@stdlib/math/strided/special/sramp'
	]
});

ns.push({
	'alias': 'base.strided.drange',
	'path': '@stdlib/stats/base/drange',
	'value': require( '@stdlib/stats/base/drange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmax',
		'@stdlib/stats/base/dmin',
		'@stdlib/stats/base/dnanrange',
		'@stdlib/stats/base/range',
		'@stdlib/stats/base/srange'
	]
});

ns.push({
	'alias': 'base.strided.drev',
	'path': '@stdlib/blas/ext/base/drev',
	'value': require( '@stdlib/blas/ext/base/drev' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/grev',
		'@stdlib/blas/ext/base/srev',
		'@stdlib/blas/ext/drev'
	]
});

ns.push({
	'alias': 'base.strided.drsqrt',
	'path': '@stdlib/math/strided/special/drsqrt',
	'value': require( '@stdlib/math/strided/special/drsqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dsqrt',
		'@stdlib/math/strided/special/rsqrt',
		'@stdlib/math/strided/special/srsqrt'
	]
});

ns.push({
	'alias': 'base.strided.dsapxsum',
	'path': '@stdlib/blas/ext/base/dsapxsum',
	'value': require( '@stdlib/blas/ext/base/dsapxsum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsum',
		'@stdlib/blas/ext/base/dssum',
		'@stdlib/blas/ext/base/sapxsum'
	]
});

ns.push({
	'alias': 'base.strided.dsapxsumpw',
	'path': '@stdlib/blas/ext/base/dsapxsumpw',
	'value': require( '@stdlib/blas/ext/base/dsapxsumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumpw',
		'@stdlib/blas/ext/base/dsapxsum',
		'@stdlib/blas/ext/base/dssumpw',
		'@stdlib/blas/ext/base/sapxsumpw'
	]
});

ns.push({
	'alias': 'base.strided.dscal',
	'path': '@stdlib/blas/base/dscal',
	'value': require( '@stdlib/blas/base/dscal' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/daxpy',
		'@stdlib/blas/base/gscal',
		'@stdlib/blas/base/sscal',
		'@stdlib/blas/base/saxpy',
		'@stdlib/blas/dscal'
	]
});

ns.push({
	'alias': 'base.strided.dsdot',
	'path': '@stdlib/blas/base/dsdot',
	'value': require( '@stdlib/blas/base/dsdot' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/ddot',
		'@stdlib/blas/base/sdot',
		'@stdlib/blas/base/sdsdot',
		'@stdlib/blas/dsdot'
	]
});

ns.push({
	'alias': 'base.strided.dsem',
	'path': '@stdlib/stats/base/dsem',
	'value': require( '@stdlib/stats/base/dsem' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnansem',
		'@stdlib/stats/base/dstdev',
		'@stdlib/stats/base/sem',
		'@stdlib/stats/base/ssem'
	]
});

ns.push({
	'alias': 'base.strided.dsemch',
	'path': '@stdlib/stats/base/dsemch',
	'value': require( '@stdlib/stats/base/dsemch' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnansemch',
		'@stdlib/stats/base/dsem',
		'@stdlib/stats/base/dstdevch',
		'@stdlib/stats/base/semch',
		'@stdlib/stats/base/ssemch'
	]
});

ns.push({
	'alias': 'base.strided.dsempn',
	'path': '@stdlib/stats/base/dsempn',
	'value': require( '@stdlib/stats/base/dsempn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnansempn',
		'@stdlib/stats/base/dsem',
		'@stdlib/stats/base/dstdevpn',
		'@stdlib/stats/base/sempn',
		'@stdlib/stats/base/ssempn'
	]
});

ns.push({
	'alias': 'base.strided.dsemtk',
	'path': '@stdlib/stats/base/dsemtk',
	'value': require( '@stdlib/stats/base/dsemtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnansemtk',
		'@stdlib/stats/base/dsem',
		'@stdlib/stats/base/dstdevtk',
		'@stdlib/stats/base/semtk',
		'@stdlib/stats/base/ssemtk'
	]
});

ns.push({
	'alias': 'base.strided.dsemwd',
	'path': '@stdlib/stats/base/dsemwd',
	'value': require( '@stdlib/stats/base/dsemwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnansemwd',
		'@stdlib/stats/base/dsem',
		'@stdlib/stats/base/dstdevwd',
		'@stdlib/stats/base/semwd',
		'@stdlib/stats/base/ssemwd'
	]
});

ns.push({
	'alias': 'base.strided.dsemyc',
	'path': '@stdlib/stats/base/dsemyc',
	'value': require( '@stdlib/stats/base/dsemyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnansemyc',
		'@stdlib/stats/base/dsem',
		'@stdlib/stats/base/dstdevyc',
		'@stdlib/stats/base/semyc',
		'@stdlib/stats/base/ssemyc'
	]
});

ns.push({
	'alias': 'base.strided.dsmean',
	'path': '@stdlib/stats/base/dsmean',
	'value': require( '@stdlib/stats/base/dsmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dsnanmean',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/sdsmean',
		'@stdlib/stats/base/smean'
	]
});

ns.push({
	'alias': 'base.strided.dsmeanors',
	'path': '@stdlib/stats/base/dsmeanors',
	'value': require( '@stdlib/stats/base/dsmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanors',
		'@stdlib/stats/base/dsmean',
		'@stdlib/stats/base/dsnanmeanors',
		'@stdlib/stats/base/meanors',
		'@stdlib/stats/base/smeanors'
	]
});

ns.push({
	'alias': 'base.strided.dsmeanpn',
	'path': '@stdlib/stats/base/dsmeanpn',
	'value': require( '@stdlib/stats/base/dsmeanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanpn',
		'@stdlib/stats/base/dsmean',
		'@stdlib/stats/base/dsnanmeanpn',
		'@stdlib/stats/base/meanpn',
		'@stdlib/stats/base/smeanpn'
	]
});

ns.push({
	'alias': 'base.strided.dsmeanpw',
	'path': '@stdlib/stats/base/dsmeanpw',
	'value': require( '@stdlib/stats/base/dsmeanpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanpw',
		'@stdlib/stats/base/dsmean',
		'@stdlib/stats/base/dsnanmeanpw',
		'@stdlib/stats/base/meanpw',
		'@stdlib/stats/base/smeanpw'
	]
});

ns.push({
	'alias': 'base.strided.dsmeanwd',
	'path': '@stdlib/stats/base/dsmeanwd',
	'value': require( '@stdlib/stats/base/dsmeanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanwd',
		'@stdlib/stats/base/dsmean',
		'@stdlib/stats/base/dsnanmeanwd',
		'@stdlib/stats/base/meanwd',
		'@stdlib/stats/base/smeanwd'
	]
});

ns.push({
	'alias': 'base.strided.dsnanmean',
	'path': '@stdlib/stats/base/dsnanmean',
	'value': require( '@stdlib/stats/base/dsnanmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmean',
		'@stdlib/stats/base/dsmean',
		'@stdlib/stats/base/nanmean',
		'@stdlib/stats/base/sdsnanmean',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.dsnanmeanors',
	'path': '@stdlib/stats/base/dsnanmeanors',
	'value': require( '@stdlib/stats/base/dsnanmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmeanors',
		'@stdlib/stats/base/dsmeanors',
		'@stdlib/stats/base/dsnanmean',
		'@stdlib/stats/base/nanmeanors',
		'@stdlib/stats/base/sdsnanmean',
		'@stdlib/stats/base/snanmeanors'
	]
});

ns.push({
	'alias': 'base.strided.dsnanmeanpn',
	'path': '@stdlib/stats/base/dsnanmeanpn',
	'value': require( '@stdlib/stats/base/dsnanmeanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmeanpn',
		'@stdlib/stats/base/dsmeanpn',
		'@stdlib/stats/base/dsnanmean',
		'@stdlib/stats/base/nanmeanpn',
		'@stdlib/stats/base/sdsnanmean',
		'@stdlib/stats/base/snanmeanpn'
	]
});

ns.push({
	'alias': 'base.strided.dsnanmeanwd',
	'path': '@stdlib/stats/base/dsnanmeanwd',
	'value': require( '@stdlib/stats/base/dsnanmeanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmeanwd',
		'@stdlib/stats/base/dsmeanwd',
		'@stdlib/stats/base/dsnanmean',
		'@stdlib/stats/base/nanmeanwd',
		'@stdlib/stats/base/sdsnanmean',
		'@stdlib/stats/base/snanmeanwd'
	]
});

ns.push({
	'alias': 'base.strided.dsnannsumors',
	'path': '@stdlib/blas/ext/base/dsnannsumors',
	'value': require( '@stdlib/blas/ext/base/dsnannsumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnannsumors',
		'@stdlib/blas/ext/base/dsnannsum',
		'@stdlib/blas/ext/base/dsnansumors',
		'@stdlib/blas/ext/base/dssumors',
		'@stdlib/blas/ext/base/sdsnannsumors',
		'@stdlib/blas/ext/base/snannsumors'
	]
});

ns.push({
	'alias': 'base.strided.dsnansum',
	'path': '@stdlib/blas/ext/base/dsnansum',
	'value': require( '@stdlib/blas/ext/base/dsnansum' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dsnanmean',
		'@stdlib/blas/ext/base/dssum',
		'@stdlib/blas/ext/base/sdsnansum',
		'@stdlib/blas/ext/base/snansum'
	]
});

ns.push({
	'alias': 'base.strided.dsnansumors',
	'path': '@stdlib/blas/ext/base/dsnansumors',
	'value': require( '@stdlib/blas/ext/base/dsnansumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dsnanmeanors',
		'@stdlib/blas/ext/base/dssum',
		'@stdlib/blas/ext/base/dssumors',
		'@stdlib/blas/ext/base/snansumors'
	]
});

ns.push({
	'alias': 'base.strided.dsnansumpw',
	'path': '@stdlib/blas/ext/base/dsnansumpw',
	'value': require( '@stdlib/blas/ext/base/dsnansumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dsnanmeanpw',
		'@stdlib/blas/ext/base/dnansumpw',
		'@stdlib/blas/ext/base/dssum',
		'@stdlib/blas/ext/base/dssumpw',
		'@stdlib/blas/ext/base/snansumpw'
	]
});

ns.push({
	'alias': 'base.strided.dsort2hp',
	'path': '@stdlib/blas/ext/base/dsort2hp',
	'value': require( '@stdlib/blas/ext/base/dsort2hp' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsorthp',
		'@stdlib/blas/ext/base/gsort2hp',
		'@stdlib/blas/ext/base/ssort2hp'
	]
});

ns.push({
	'alias': 'base.strided.dsort2ins',
	'path': '@stdlib/blas/ext/base/dsort2ins',
	'value': require( '@stdlib/blas/ext/base/dsort2ins' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsortins',
		'@stdlib/blas/ext/base/gsort2ins',
		'@stdlib/blas/ext/base/ssort2ins'
	]
});

ns.push({
	'alias': 'base.strided.dsort2sh',
	'path': '@stdlib/blas/ext/base/dsort2sh',
	'value': require( '@stdlib/blas/ext/base/dsort2sh' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsortsh',
		'@stdlib/blas/ext/base/gsort2sh',
		'@stdlib/blas/ext/base/ssort2sh'
	]
});

ns.push({
	'alias': 'base.strided.dsorthp',
	'path': '@stdlib/blas/ext/base/dsorthp',
	'value': require( '@stdlib/blas/ext/base/dsorthp' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2hp',
		'@stdlib/blas/ext/base/gsorthp',
		'@stdlib/blas/ext/base/ssorthp'
	]
});

ns.push({
	'alias': 'base.strided.dsortins',
	'path': '@stdlib/blas/ext/base/dsortins',
	'value': require( '@stdlib/blas/ext/base/dsortins' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2ins',
		'@stdlib/blas/ext/base/gsortins',
		'@stdlib/blas/ext/base/ssortins'
	]
});

ns.push({
	'alias': 'base.strided.dsortsh',
	'path': '@stdlib/blas/ext/base/dsortsh',
	'value': require( '@stdlib/blas/ext/base/dsortsh' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2sh',
		'@stdlib/blas/ext/base/gsortsh',
		'@stdlib/blas/ext/base/ssortsh'
	]
});

ns.push({
	'alias': 'base.strided.dsqrt',
	'path': '@stdlib/math/strided/special/dsqrt',
	'value': require( '@stdlib/math/strided/special/dsqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dcbrt',
		'@stdlib/math/strided/special/drsqrt',
		'@stdlib/math/strided/special/sqrt',
		'@stdlib/math/strided/special/ssqrt'
	]
});

ns.push({
	'alias': 'base.strided.dssum',
	'path': '@stdlib/blas/ext/base/dssum',
	'value': require( '@stdlib/blas/ext/base/dssum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsnansum',
		'@stdlib/blas/ext/base/sdssum',
		'@stdlib/blas/ext/base/ssum',
		'@stdlib/stats/base/dsmean'
	]
});

ns.push({
	'alias': 'base.strided.dssumors',
	'path': '@stdlib/blas/ext/base/dssumors',
	'value': require( '@stdlib/blas/ext/base/dssumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsnansumors',
		'@stdlib/blas/ext/base/dssum',
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/ssumors'
	]
});

ns.push({
	'alias': 'base.strided.dssumpw',
	'path': '@stdlib/blas/ext/base/dssumpw',
	'value': require( '@stdlib/blas/ext/base/dssumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsnansumpw',
		'@stdlib/blas/ext/base/dssum',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/ssumpw'
	]
});

ns.push({
	'alias': 'base.strided.dstdev',
	'path': '@stdlib/stats/base/dstdev',
	'value': require( '@stdlib/stats/base/dstdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdev',
		'@stdlib/stats/base/dstdevm',
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/sstdev',
		'@stdlib/stats/base/stdev'
	]
});

ns.push({
	'alias': 'base.strided.dstdevch',
	'path': '@stdlib/stats/base/dstdevch',
	'value': require( '@stdlib/stats/base/dstdevch' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevch',
		'@stdlib/stats/base/dstdev',
		'@stdlib/stats/base/dvariancech',
		'@stdlib/stats/base/sstdevch',
		'@stdlib/stats/base/stdevch'
	]
});

ns.push({
	'alias': 'base.strided.dstdevpn',
	'path': '@stdlib/stats/base/dstdevpn',
	'value': require( '@stdlib/stats/base/dstdevpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevpn',
		'@stdlib/stats/base/dstdev',
		'@stdlib/stats/base/dstdevmpn',
		'@stdlib/stats/base/dvariancepn',
		'@stdlib/stats/base/sstdevpn',
		'@stdlib/stats/base/stdevpn'
	]
});

ns.push({
	'alias': 'base.strided.dstdevtk',
	'path': '@stdlib/stats/base/dstdevtk',
	'value': require( '@stdlib/stats/base/dstdevtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevtk',
		'@stdlib/stats/base/dstdev',
		'@stdlib/stats/base/dvariancetk',
		'@stdlib/stats/base/sstdevtk',
		'@stdlib/stats/base/stdevtk'
	]
});

ns.push({
	'alias': 'base.strided.dstdevwd',
	'path': '@stdlib/stats/base/dstdevwd',
	'value': require( '@stdlib/stats/base/dstdevwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevwd',
		'@stdlib/stats/base/dstdev',
		'@stdlib/stats/base/dvariancewd',
		'@stdlib/stats/base/sstdevwd',
		'@stdlib/stats/base/stdevwd'
	]
});

ns.push({
	'alias': 'base.strided.dstdevyc',
	'path': '@stdlib/stats/base/dstdevyc',
	'value': require( '@stdlib/stats/base/dstdevyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevyc',
		'@stdlib/stats/base/dstdev',
		'@stdlib/stats/base/dvarianceyc',
		'@stdlib/stats/base/sstdevyc',
		'@stdlib/stats/base/stdevyc'
	]
});

ns.push({
	'alias': 'base.strided.dsum',
	'path': '@stdlib/blas/ext/base/dsum',
	'value': require( '@stdlib/blas/ext/base/dsum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dasum',
		'@stdlib/stats/base/dmean',
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/ssum',
		'@stdlib/blas/ext/base/gsum'
	]
});

ns.push({
	'alias': 'base.strided.dsumkbn',
	'path': '@stdlib/blas/ext/base/dsumkbn',
	'value': require( '@stdlib/blas/ext/base/dsumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumkbn',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/dsumkbn2',
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gsumkbn',
		'@stdlib/blas/ext/base/ssumkbn'
	]
});

ns.push({
	'alias': 'base.strided.dsumkbn2',
	'path': '@stdlib/blas/ext/base/dsumkbn2',
	'value': require( '@stdlib/blas/ext/base/dsumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumkbn2',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/dsumkbn',
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gsumkbn2',
		'@stdlib/blas/ext/base/ssumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.dsumors',
	'path': '@stdlib/blas/ext/base/dsumors',
	'value': require( '@stdlib/blas/ext/base/dsumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumors',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/dsumkbn2',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gsumors',
		'@stdlib/blas/ext/base/ssumors'
	]
});

ns.push({
	'alias': 'base.strided.dsumpw',
	'path': '@stdlib/blas/ext/base/dsumpw',
	'value': require( '@stdlib/blas/ext/base/dsumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumpw',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/dsumkbn2',
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/gsumpw',
		'@stdlib/blas/ext/base/ssumpw'
	]
});

ns.push({
	'alias': 'base.strided.dsvariance',
	'path': '@stdlib/stats/base/dsvariance',
	'value': require( '@stdlib/stats/base/dsvariance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/dsnanvariance',
		'@stdlib/stats/base/variance',
		'@stdlib/stats/base/sdsvariance',
		'@stdlib/stats/base/svariance'
	]
});

ns.push({
	'alias': 'base.strided.dsvariancepn',
	'path': '@stdlib/stats/base/dsvariancepn',
	'value': require( '@stdlib/stats/base/dsvariancepn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancepn',
		'@stdlib/stats/base/dsnanvariancepn',
		'@stdlib/stats/base/dsvariance',
		'@stdlib/stats/base/variancepn',
		'@stdlib/stats/base/sdsvariance',
		'@stdlib/stats/base/svariancepn'
	]
});

ns.push({
	'alias': 'base.strided.dswap',
	'path': '@stdlib/blas/base/dswap',
	'value': require( '@stdlib/blas/base/dswap' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dcopy',
		'@stdlib/blas/base/gswap',
		'@stdlib/blas/base/sswap',
		'@stdlib/blas/dswap'
	]
});

ns.push({
	'alias': 'base.strided.dtrunc',
	'path': '@stdlib/math/strided/special/dtrunc',
	'value': require( '@stdlib/math/strided/special/dtrunc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dceil',
		'@stdlib/math/strided/special/dfloor',
		'@stdlib/math/strided/special/dtrunc2',
		'@stdlib/math/strided/special/dtrunc10',
		'@stdlib/math/strided/special/dtruncb',
		'@stdlib/math/strided/special/dtruncn',
		'@stdlib/math/strided/special/dround',
		'@stdlib/math/strided/special/trunc',
		'@stdlib/math/strided/special/strunc'
	]
});

ns.push({
	'alias': 'base.strided.dtypeEnum2Str',
	'path': '@stdlib/strided/base/dtype-enum2str',
	'value': require( '@stdlib/strided/base/dtype-enum2str' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dtype-str2enum'
	]
});

ns.push({
	'alias': 'base.strided.dtypeResolveEnum',
	'path': '@stdlib/strided/base/dtype-resolve-enum',
	'value': require( '@stdlib/strided/base/dtype-resolve-enum' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dtype-resolve-str'
	]
});

ns.push({
	'alias': 'base.strided.dtypeResolveStr',
	'path': '@stdlib/strided/base/dtype-resolve-str',
	'value': require( '@stdlib/strided/base/dtype-resolve-str' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dtype-resolve-enum'
	]
});

ns.push({
	'alias': 'base.strided.dtypeStr2Enum',
	'path': '@stdlib/strided/base/dtype-str2enum',
	'value': require( '@stdlib/strided/base/dtype-str2enum' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dtype-enum2str'
	]
});

ns.push({
	'alias': 'base.strided.dvariance',
	'path': '@stdlib/stats/base/dvariance',
	'value': require( '@stdlib/stats/base/dvariance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariance',
		'@stdlib/stats/base/dstdev',
		'@stdlib/stats/base/dvarm',
		'@stdlib/stats/base/svariance',
		'@stdlib/stats/base/variance'
	]
});

ns.push({
	'alias': 'base.strided.dvariancech',
	'path': '@stdlib/stats/base/dvariancech',
	'value': require( '@stdlib/stats/base/dvariancech' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancech',
		'@stdlib/stats/base/dstdevch',
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/svariancech',
		'@stdlib/stats/base/variancech'
	]
});

ns.push({
	'alias': 'base.strided.dvariancepn',
	'path': '@stdlib/stats/base/dvariancepn',
	'value': require( '@stdlib/stats/base/dvariancepn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancepn',
		'@stdlib/stats/base/dstdevpn',
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/svariancepn',
		'@stdlib/stats/base/variancepn'
	]
});

ns.push({
	'alias': 'base.strided.dvariancetk',
	'path': '@stdlib/stats/base/dvariancetk',
	'value': require( '@stdlib/stats/base/dvariancetk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancetk',
		'@stdlib/stats/base/dstdevtk',
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/svariancetk',
		'@stdlib/stats/base/variancetk'
	]
});

ns.push({
	'alias': 'base.strided.dvariancewd',
	'path': '@stdlib/stats/base/dvariancewd',
	'value': require( '@stdlib/stats/base/dvariancewd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancewd',
		'@stdlib/stats/base/dstdevwd',
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/svariancewd',
		'@stdlib/stats/base/variancewd'
	]
});

ns.push({
	'alias': 'base.strided.dvarianceyc',
	'path': '@stdlib/stats/base/dvarianceyc',
	'value': require( '@stdlib/stats/base/dvarianceyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvarianceyc',
		'@stdlib/stats/base/dstdevyc',
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/svarianceyc',
		'@stdlib/stats/base/varianceyc'
	]
});

ns.push({
	'alias': 'base.strided.dvarm',
	'path': '@stdlib/stats/base/dvarm',
	'value': require( '@stdlib/stats/base/dvarm' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvarm',
		'@stdlib/stats/base/dstdevm',
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/svarm',
		'@stdlib/stats/base/varm'
	]
});

ns.push({
	'alias': 'base.strided.dvarmpn',
	'path': '@stdlib/stats/base/dvarmpn',
	'value': require( '@stdlib/stats/base/dvarmpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvarmpn',
		'@stdlib/stats/base/dstdevmpn',
		'@stdlib/stats/base/dvarm',
		'@stdlib/stats/base/svarmpn',
		'@stdlib/stats/base/varmpn'
	]
});

ns.push({
	'alias': 'base.strided.dvarmtk',
	'path': '@stdlib/stats/base/dvarmtk',
	'value': require( '@stdlib/stats/base/dvarmtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvarmtk',
		'@stdlib/stats/base/dstdevmtk',
		'@stdlib/stats/base/dvarm',
		'@stdlib/stats/base/svarmtk',
		'@stdlib/stats/base/varmtk'
	]
});


// EXPORTS //

module.exports = ns;
