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
	'alias': 'base.strided.sabs',
	'path': '@stdlib/math/strided/special/sabs',
	'value': require( '@stdlib/math/strided/special/sabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/abs',
		'@stdlib/math/strided/special/dabs',
		'@stdlib/math/strided/special/sabs2'
	]
});

ns.push({
	'alias': 'base.strided.sabs2',
	'path': '@stdlib/math/strided/special/sabs2',
	'value': require( '@stdlib/math/strided/special/sabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/abs2',
		'@stdlib/math/strided/special/dabs2',
		'@stdlib/math/strided/special/sabs'
	]
});

ns.push({
	'alias': 'base.strided.sapx',
	'path': '@stdlib/blas/ext/base/sapx',
	'value': require( '@stdlib/blas/ext/base/sapx' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapx',
		'@stdlib/blas/ext/base/gapx',
		'@stdlib/blas/ext/base/swapx'
	]
});

ns.push({
	'alias': 'base.strided.sapxsum',
	'path': '@stdlib/blas/ext/base/sapxsum',
	'value': require( '@stdlib/blas/ext/base/sapxsum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsum',
		'@stdlib/blas/ext/base/gapxsum',
		'@stdlib/blas/ext/base/sapxsumpw',
		'@stdlib/blas/ext/base/ssum'
	]
});

ns.push({
	'alias': 'base.strided.sapxsumkbn',
	'path': '@stdlib/blas/ext/base/sapxsumkbn',
	'value': require( '@stdlib/blas/ext/base/sapxsumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumkbn',
		'@stdlib/blas/ext/base/gapxsumkbn',
		'@stdlib/blas/ext/base/sapxsum',
		'@stdlib/blas/ext/base/ssumkbn'
	]
});

ns.push({
	'alias': 'base.strided.sapxsumkbn2',
	'path': '@stdlib/blas/ext/base/sapxsumkbn2',
	'value': require( '@stdlib/blas/ext/base/sapxsumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumkbn2',
		'@stdlib/blas/ext/base/gapxsumkbn2',
		'@stdlib/blas/ext/base/sapxsum',
		'@stdlib/blas/ext/base/ssumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.sapxsumors',
	'path': '@stdlib/blas/ext/base/sapxsumors',
	'value': require( '@stdlib/blas/ext/base/sapxsumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumors',
		'@stdlib/blas/ext/base/gapxsumors',
		'@stdlib/blas/ext/base/sapxsum',
		'@stdlib/blas/ext/base/ssumors'
	]
});

ns.push({
	'alias': 'base.strided.sapxsumpw',
	'path': '@stdlib/blas/ext/base/sapxsumpw',
	'value': require( '@stdlib/blas/ext/base/sapxsumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumpw',
		'@stdlib/blas/ext/base/gapxsumpw',
		'@stdlib/blas/ext/base/sapxsum',
		'@stdlib/blas/ext/base/ssumpw'
	]
});

ns.push({
	'alias': 'base.strided.sasum',
	'path': '@stdlib/blas/base/sasum',
	'value': require( '@stdlib/blas/base/sasum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dasum',
		'@stdlib/blas/base/gasum',
		'@stdlib/blas/sasum'
	]
});

ns.push({
	'alias': 'base.strided.sasumpw',
	'path': '@stdlib/blas/ext/base/sasumpw',
	'value': require( '@stdlib/blas/ext/base/sasumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/sasum',
		'@stdlib/blas/ext/base/dasumpw',
		'@stdlib/blas/ext/base/gasumpw',
		'@stdlib/blas/ext/base/snanasumpw',
		'@stdlib/blas/ext/base/ssumpw',
		'@stdlib/blas/ext/sasumpw'
	]
});

ns.push({
	'alias': 'base.strided.saxpy',
	'path': '@stdlib/blas/base/saxpy',
	'value': require( '@stdlib/blas/base/saxpy' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/daxpy',
		'@stdlib/blas/base/gaxpy',
		'@stdlib/blas/saxpy'
	]
});

ns.push({
	'alias': 'base.strided.scbrt',
	'path': '@stdlib/math/strided/special/scbrt',
	'value': require( '@stdlib/math/strided/special/scbrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dcbrt',
		'@stdlib/math/strided/special/cbrt',
		'@stdlib/math/strided/special/ssqrt'
	]
});

ns.push({
	'alias': 'base.strided.sceil',
	'path': '@stdlib/math/strided/special/sceil',
	'value': require( '@stdlib/math/strided/special/sceil' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/ceil',
		'@stdlib/math/strided/special/dceil',
		'@stdlib/math/strided/special/sceil2',
		'@stdlib/math/strided/special/sceil10',
		'@stdlib/math/strided/special/sceilb',
		'@stdlib/math/strided/special/sceiln',
		'@stdlib/math/strided/special/sfloor',
		'@stdlib/math/strided/special/sround',
		'@stdlib/math/strided/special/strunc'
	]
});

ns.push({
	'alias': 'base.strided.scopy',
	'path': '@stdlib/blas/base/scopy',
	'value': require( '@stdlib/blas/base/scopy' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dcopy',
		'@stdlib/blas/base/gcopy',
		'@stdlib/blas/base/sswap',
		'@stdlib/blas/scopy'
	]
});

ns.push({
	'alias': 'base.strided.scumax',
	'path': '@stdlib/stats/base/scumax',
	'value': require( '@stdlib/stats/base/scumax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumax',
		'@stdlib/stats/strided/dcumax',
		'@stdlib/stats/base/scumin',
		'@stdlib/stats/base/scurange',
		'@stdlib/stats/base/snancumax'
	]
});

ns.push({
	'alias': 'base.strided.scumaxabs',
	'path': '@stdlib/stats/base/scumaxabs',
	'value': require( '@stdlib/stats/base/scumaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumaxabs',
		'@stdlib/stats/strided/dcumaxabs',
		'@stdlib/stats/base/scumax',
		'@stdlib/stats/base/scuminabs',
		'@stdlib/stats/base/snancumaxabs'
	]
});

ns.push({
	'alias': 'base.strided.scumin',
	'path': '@stdlib/stats/base/scumin',
	'value': require( '@stdlib/stats/base/scumin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumin',
		'@stdlib/stats/base/dcumin',
		'@stdlib/stats/base/scumax',
		'@stdlib/stats/base/scurange',
		'@stdlib/stats/base/snancumin'
	]
});

ns.push({
	'alias': 'base.strided.scuminabs',
	'path': '@stdlib/stats/base/scuminabs',
	'value': require( '@stdlib/stats/base/scuminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cuminabs',
		'@stdlib/stats/strided/dcuminabs',
		'@stdlib/stats/base/scumaxabs',
		'@stdlib/stats/base/scumin',
		'@stdlib/stats/base/snancuminabs'
	]
});

ns.push({
	'alias': 'base.strided.scusum',
	'path': '@stdlib/blas/ext/base/scusum',
	'value': require( '@stdlib/blas/ext/base/scusum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusum',
		'@stdlib/blas/ext/base/gcusum',
		'@stdlib/blas/ext/base/scusumpw',
		'@stdlib/blas/ext/base/snancusum'
	]
});

ns.push({
	'alias': 'base.strided.scusumkbn',
	'path': '@stdlib/blas/ext/base/scusumkbn',
	'value': require( '@stdlib/blas/ext/base/scusumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusumkbn',
		'@stdlib/blas/ext/base/gcusumkbn',
		'@stdlib/blas/ext/base/scusum',
		'@stdlib/blas/ext/base/scusumkbn2',
		'@stdlib/blas/ext/base/snancusumkbn'
	]
});

ns.push({
	'alias': 'base.strided.scusumkbn2',
	'path': '@stdlib/blas/ext/base/scusumkbn2',
	'value': require( '@stdlib/blas/ext/base/scusumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusumkbn2',
		'@stdlib/blas/ext/base/gcusumkbn2',
		'@stdlib/blas/ext/base/scusum',
		'@stdlib/blas/ext/base/scusumkbn',
		'@stdlib/blas/ext/base/snancusumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.scusumors',
	'path': '@stdlib/blas/ext/base/scusumors',
	'value': require( '@stdlib/blas/ext/base/scusumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusumors',
		'@stdlib/blas/ext/base/gcusumors',
		'@stdlib/blas/ext/base/scusum',
		'@stdlib/blas/ext/base/snancusumors'
	]
});

ns.push({
	'alias': 'base.strided.scusumpw',
	'path': '@stdlib/blas/ext/base/scusumpw',
	'value': require( '@stdlib/blas/ext/base/scusumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusumpw',
		'@stdlib/blas/ext/base/gcusumpw',
		'@stdlib/blas/ext/base/scusum',
		'@stdlib/blas/ext/base/snancusumpw'
	]
});

ns.push({
	'alias': 'base.strided.sdeg2rad',
	'path': '@stdlib/math/strided/special/sdeg2rad',
	'value': require( '@stdlib/math/strided/special/sdeg2rad' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/ddeg2rad',
		'@stdlib/math/strided/special/deg2rad',
		'@stdlib/math/strided/special/srad2deg'
	]
});

ns.push({
	'alias': 'base.strided.sdot',
	'path': '@stdlib/blas/base/sdot',
	'value': require( '@stdlib/blas/base/sdot' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/ddot',
		'@stdlib/blas/base/dsdot',
		'@stdlib/blas/base/sdsdot',
		'@stdlib/blas/sdot'
	]
});

ns.push({
	'alias': 'base.strided.sdsapxsum',
	'path': '@stdlib/blas/ext/base/sdsapxsum',
	'value': require( '@stdlib/blas/ext/base/sdsapxsum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsapxsum',
		'@stdlib/blas/ext/base/sapxsum',
		'@stdlib/blas/ext/base/sdssum'
	]
});

ns.push({
	'alias': 'base.strided.sdsapxsumpw',
	'path': '@stdlib/blas/ext/base/sdsapxsumpw',
	'value': require( '@stdlib/blas/ext/base/sdsapxsumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsapxsumpw',
		'@stdlib/blas/ext/base/sapxsumpw',
		'@stdlib/blas/ext/base/sdsapxsum',
		'@stdlib/blas/ext/base/sdssumpw'
	]
});

ns.push({
	'alias': 'base.strided.sdsdot',
	'path': '@stdlib/blas/base/sdsdot',
	'value': require( '@stdlib/blas/base/sdsdot' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/ddot',
		'@stdlib/blas/base/dsdot',
		'@stdlib/blas/base/sdot',
		'@stdlib/blas/sdsdot'
	]
});

ns.push({
	'alias': 'base.strided.sdsmean',
	'path': '@stdlib/stats/base/sdsmean',
	'value': require( '@stdlib/stats/base/sdsmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dsmean',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/sdsnanmean',
		'@stdlib/stats/base/smean'
	]
});

ns.push({
	'alias': 'base.strided.sdsmeanors',
	'path': '@stdlib/stats/base/sdsmeanors',
	'value': require( '@stdlib/stats/base/sdsmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/sdsmean',
		'@stdlib/stats/base/sdsnanmeanors'
	]
});

ns.push({
	'alias': 'base.strided.sdsnanmean',
	'path': '@stdlib/stats/base/sdsnanmean',
	'value': require( '@stdlib/stats/base/sdsnanmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmean',
		'@stdlib/stats/base/dsnanmean',
		'@stdlib/stats/base/nanmean',
		'@stdlib/stats/base/sdsmean',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.sdsnanmeanors',
	'path': '@stdlib/stats/base/sdsnanmeanors',
	'value': require( '@stdlib/stats/base/sdsnanmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/sdsmeanors',
		'@stdlib/stats/base/sdsnanmean'
	]
});

ns.push({
	'alias': 'base.strided.sdsnansum',
	'path': '@stdlib/blas/ext/base/sdsnansum',
	'value': require( '@stdlib/blas/ext/base/sdsnansum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsnansum',
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/gnansum',
		'@stdlib/blas/ext/base/sdssum',
		'@stdlib/blas/ext/base/snansum'
	]
});

ns.push({
	'alias': 'base.strided.sdsnansumpw',
	'path': '@stdlib/blas/ext/base/sdsnansumpw',
	'value': require( '@stdlib/blas/ext/base/sdsnansumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsnansumpw',
		'@stdlib/blas/ext/base/dnansumpw',
		'@stdlib/blas/ext/base/gnansumpw',
		'@stdlib/blas/ext/base/sdsnansum',
		'@stdlib/blas/ext/base/sdssumpw',
		'@stdlib/blas/ext/base/snansumpw'
	]
});

ns.push({
	'alias': 'base.strided.sdssum',
	'path': '@stdlib/blas/ext/base/sdssum',
	'value': require( '@stdlib/blas/ext/base/sdssum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dssum',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/sdsnansum',
		'@stdlib/blas/ext/base/ssum',
		'@stdlib/blas/ext/base/gsum'
	]
});

ns.push({
	'alias': 'base.strided.sdssumpw',
	'path': '@stdlib/blas/ext/base/sdssumpw',
	'value': require( '@stdlib/blas/ext/base/sdssumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dssumpw',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/sdsnansumpw',
		'@stdlib/blas/ext/base/sdssum',
		'@stdlib/blas/ext/base/ssumpw',
		'@stdlib/blas/ext/base/gsumpw'
	]
});

ns.push({
	'alias': 'base.strided.sfill',
	'path': '@stdlib/blas/ext/base/sfill',
	'value': require( '@stdlib/blas/ext/base/sfill' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dfill',
		'@stdlib/blas/ext/base/gfill',
		'@stdlib/blas/ext/sfill'
	]
});

ns.push({
	'alias': 'base.strided.sfloor',
	'path': '@stdlib/math/strided/special/sfloor',
	'value': require( '@stdlib/math/strided/special/sfloor' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dfloor',
		'@stdlib/math/strided/special/floor',
		'@stdlib/math/strided/special/sceil',
		'@stdlib/math/strided/special/sfloor2',
		'@stdlib/math/strided/special/sfloor10',
		'@stdlib/math/strided/special/sfloorb',
		'@stdlib/math/strided/special/sfloorn',
		'@stdlib/math/strided/special/sround',
		'@stdlib/math/strided/special/strunc'
	]
});

ns.push({
	'alias': 'base.strided.sinv',
	'path': '@stdlib/math/strided/special/sinv',
	'value': require( '@stdlib/math/strided/special/sinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dinv',
		'@stdlib/math/strided/special/inv'
	]
});

ns.push({
	'alias': 'base.strided.smap',
	'path': '@stdlib/strided/base/smap',
	'value': require( '@stdlib/strided/base/smap' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dmap',
		'@stdlib/strided/base/unary'
	]
});

ns.push({
	'alias': 'base.strided.smap2',
	'path': '@stdlib/strided/base/smap2',
	'value': require( '@stdlib/strided/base/smap2' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dmap2',
		'@stdlib/strided/base/binary'
	]
});

ns.push({
	'alias': 'base.strided.smax',
	'path': '@stdlib/stats/base/smax',
	'value': require( '@stdlib/stats/base/smax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmax',
		'@stdlib/stats/base/max',
		'@stdlib/stats/base/smin',
		'@stdlib/stats/base/snanmax'
	]
});

ns.push({
	'alias': 'base.strided.smaxabs',
	'path': '@stdlib/stats/base/smaxabs',
	'value': require( '@stdlib/stats/base/smaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmaxabs',
		'@stdlib/stats/base/maxabs',
		'@stdlib/stats/base/smax',
		'@stdlib/stats/base/sminabs',
		'@stdlib/stats/base/snanmaxabs'
	]
});

ns.push({
	'alias': 'base.strided.smaxabssorted',
	'path': '@stdlib/stats/base/smaxabssorted',
	'value': require( '@stdlib/stats/base/smaxabssorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmaxabssorted',
		'@stdlib/stats/base/maxabssorted',
		'@stdlib/stats/base/smaxabs',
		'@stdlib/stats/base/smaxsorted',
		'@stdlib/stats/base/sminabssorted',
		'@stdlib/stats/base/snanmaxabssorted'
	]
});

ns.push({
	'alias': 'base.strided.smaxsorted',
	'path': '@stdlib/stats/base/smaxsorted',
	'value': require( '@stdlib/stats/base/smaxsorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmaxsorted',
		'@stdlib/stats/base/maxsorted',
		'@stdlib/stats/base/smax',
		'@stdlib/stats/base/sminsorted',
		'@stdlib/stats/base/snanmaxsorted'
	]
});

ns.push({
	'alias': 'base.strided.smean',
	'path': '@stdlib/stats/base/smean',
	'value': require( '@stdlib/stats/base/smean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dsmean',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/sdsmean',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.smeankbn',
	'path': '@stdlib/stats/base/smeankbn',
	'value': require( '@stdlib/stats/base/smeankbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeankbn',
		'@stdlib/stats/base/meankbn',
		'@stdlib/stats/base/smean',
		'@stdlib/stats/base/snanmeankbn'
	]
});

ns.push({
	'alias': 'base.strided.smeankbn2',
	'path': '@stdlib/stats/base/smeankbn2',
	'value': require( '@stdlib/stats/base/smeankbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeankbn2',
		'@stdlib/stats/base/meankbn2',
		'@stdlib/stats/base/smean',
		'@stdlib/stats/base/snanmeankbn2'
	]
});

ns.push({
	'alias': 'base.strided.smeanli',
	'path': '@stdlib/stats/base/smeanli',
	'value': require( '@stdlib/stats/base/smeanli' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanli',
		'@stdlib/stats/base/meanli',
		'@stdlib/stats/base/smean',
		'@stdlib/stats/base/smeanlipw',
		'@stdlib/stats/base/snanmeanli'
	]
});

ns.push({
	'alias': 'base.strided.smeanlipw',
	'path': '@stdlib/stats/base/smeanlipw',
	'value': require( '@stdlib/stats/base/smeanlipw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanlipw',
		'@stdlib/stats/base/meanlipw',
		'@stdlib/stats/base/smean',
		'@stdlib/stats/base/smeanli',
		'@stdlib/stats/base/snanmeanlipw'
	]
});

ns.push({
	'alias': 'base.strided.smeanors',
	'path': '@stdlib/stats/base/smeanors',
	'value': require( '@stdlib/stats/base/smeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanors',
		'@stdlib/stats/base/meanors',
		'@stdlib/stats/base/smean',
		'@stdlib/stats/base/snanmeanors'
	]
});

ns.push({
	'alias': 'base.strided.smeanpn',
	'path': '@stdlib/stats/base/smeanpn',
	'value': require( '@stdlib/stats/base/smeanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanpn',
		'@stdlib/stats/base/meanpn',
		'@stdlib/stats/base/smean',
		'@stdlib/stats/base/snanmeanpn'
	]
});

ns.push({
	'alias': 'base.strided.smeanpw',
	'path': '@stdlib/stats/base/smeanpw',
	'value': require( '@stdlib/stats/base/smeanpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanpw',
		'@stdlib/stats/base/meanpw',
		'@stdlib/stats/base/smean',
		'@stdlib/stats/base/snanmeanpw'
	]
});

ns.push({
	'alias': 'base.strided.smeanwd',
	'path': '@stdlib/stats/base/smeanwd',
	'value': require( '@stdlib/stats/base/smeanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanwd',
		'@stdlib/stats/base/meanwd',
		'@stdlib/stats/base/smean',
		'@stdlib/stats/base/snanmeanwd'
	]
});

ns.push({
	'alias': 'base.strided.smediansorted',
	'path': '@stdlib/stats/base/smediansorted',
	'value': require( '@stdlib/stats/base/smediansorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmediansorted',
		'@stdlib/stats/base/mediansorted',
		'@stdlib/stats/base/smean',
		'@stdlib/stats/base/smedian',
		'@stdlib/stats/base/snanmediansorted'
	]
});

ns.push({
	'alias': 'base.strided.smidrange',
	'path': '@stdlib/stats/base/smidrange',
	'value': require( '@stdlib/stats/base/smidrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmidrange',
		'@stdlib/stats/base/midrange',
		'@stdlib/stats/base/smax',
		'@stdlib/stats/base/smean',
		'@stdlib/stats/base/smin',
		'@stdlib/stats/base/snanmidrange',
		'@stdlib/stats/base/srange'
	]
});

ns.push({
	'alias': 'base.strided.smin',
	'path': '@stdlib/stats/base/smin',
	'value': require( '@stdlib/stats/base/smin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmin',
		'@stdlib/stats/base/min',
		'@stdlib/stats/base/smax',
		'@stdlib/stats/base/snanmin'
	]
});

ns.push({
	'alias': 'base.strided.sminabs',
	'path': '@stdlib/stats/base/sminabs',
	'value': require( '@stdlib/stats/base/sminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dminabs',
		'@stdlib/stats/base/minabs',
		'@stdlib/stats/base/smaxabs',
		'@stdlib/stats/base/smin',
		'@stdlib/stats/base/snanminabs'
	]
});

ns.push({
	'alias': 'base.strided.sminsorted',
	'path': '@stdlib/stats/base/sminsorted',
	'value': require( '@stdlib/stats/base/sminsorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dminsorted',
		'@stdlib/stats/base/minsorted',
		'@stdlib/stats/base/smaxsorted',
		'@stdlib/stats/base/smin',
		'@stdlib/stats/base/snanminsorted'
	]
});

ns.push({
	'alias': 'base.strided.smskabs',
	'path': '@stdlib/math/strided/special/smskabs',
	'value': require( '@stdlib/math/strided/special/smskabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskabs',
		'@stdlib/math/strided/special/mskabs',
		'@stdlib/math/strided/special/sabs',
		'@stdlib/math/strided/special/smskabs2'
	]
});

ns.push({
	'alias': 'base.strided.smskabs2',
	'path': '@stdlib/math/strided/special/smskabs2',
	'value': require( '@stdlib/math/strided/special/smskabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskabs2',
		'@stdlib/math/strided/special/mskabs2',
		'@stdlib/math/strided/special/sabs2',
		'@stdlib/math/strided/special/smskabs'
	]
});

ns.push({
	'alias': 'base.strided.smskcbrt',
	'path': '@stdlib/math/strided/special/smskcbrt',
	'value': require( '@stdlib/math/strided/special/smskcbrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskcbrt',
		'@stdlib/math/strided/special/mskcbrt',
		'@stdlib/math/strided/special/scbrt',
		'@stdlib/math/strided/special/ssqrt'
	]
});

ns.push({
	'alias': 'base.strided.smskceil',
	'path': '@stdlib/math/strided/special/smskceil',
	'value': require( '@stdlib/math/strided/special/smskceil' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/mskceil',
		'@stdlib/math/strided/special/dmskceil',
		'@stdlib/math/strided/special/sceil',
		'@stdlib/math/strided/special/smskceil2',
		'@stdlib/math/strided/special/smskceil10',
		'@stdlib/math/strided/special/smskceilb',
		'@stdlib/math/strided/special/smskceiln',
		'@stdlib/math/strided/special/smskfloor',
		'@stdlib/math/strided/special/smskround',
		'@stdlib/math/strided/special/smsktrunc'
	]
});

ns.push({
	'alias': 'base.strided.smskdeg2rad',
	'path': '@stdlib/math/strided/special/smskdeg2rad',
	'value': require( '@stdlib/math/strided/special/smskdeg2rad' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskdeg2rad',
		'@stdlib/math/strided/special/mskdeg2rad',
		'@stdlib/math/strided/special/sdeg2rad',
		'@stdlib/math/strided/special/smskrad2deg'
	]
});

ns.push({
	'alias': 'base.strided.smskfloor',
	'path': '@stdlib/math/strided/special/smskfloor',
	'value': require( '@stdlib/math/strided/special/smskfloor' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskfloor',
		'@stdlib/math/strided/special/mskfloor',
		'@stdlib/math/strided/special/sfloor',
		'@stdlib/math/strided/special/smskceil',
		'@stdlib/math/strided/special/smskfloor2',
		'@stdlib/math/strided/special/smskfloor10',
		'@stdlib/math/strided/special/smskfloorb',
		'@stdlib/math/strided/special/smskfloorn',
		'@stdlib/math/strided/special/smskround',
		'@stdlib/math/strided/special/smsktrunc'
	]
});

ns.push({
	'alias': 'base.strided.smskinv',
	'path': '@stdlib/math/strided/special/smskinv',
	'value': require( '@stdlib/math/strided/special/smskinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dinv',
		'@stdlib/math/strided/special/dmskinv',
		'@stdlib/math/strided/special/mskinv'
	]
});

ns.push({
	'alias': 'base.strided.smskmap',
	'path': '@stdlib/strided/base/smskmap',
	'value': require( '@stdlib/strided/base/smskmap' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dmskmap',
		'@stdlib/strided/base/mskunary',
		'@stdlib/strided/base/smap',
		'@stdlib/strided/base/smskmap2'
	]
});

ns.push({
	'alias': 'base.strided.smskmap2',
	'path': '@stdlib/strided/base/smskmap2',
	'value': require( '@stdlib/strided/base/smskmap2' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dmskmap2',
		'@stdlib/strided/base/mskbinary',
		'@stdlib/strided/base/smap2',
		'@stdlib/strided/base/smskmap'
	]
});

ns.push({
	'alias': 'base.strided.smskmax',
	'path': '@stdlib/stats/base/smskmax',
	'value': require( '@stdlib/stats/base/smskmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmskmax',
		'@stdlib/stats/base/mskmax',
		'@stdlib/stats/base/smax',
		'@stdlib/stats/base/smskmin',
		'@stdlib/stats/base/snanmax',
		'@stdlib/stats/base/snanmskmax'
	]
});

ns.push({
	'alias': 'base.strided.smskmin',
	'path': '@stdlib/stats/base/smskmin',
	'value': require( '@stdlib/stats/base/smskmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmskmin',
		'@stdlib/stats/base/mskmin',
		'@stdlib/stats/base/smin',
		'@stdlib/stats/base/smskmax',
		'@stdlib/stats/base/snanmin',
		'@stdlib/stats/base/snanmskmin'
	]
});

ns.push({
	'alias': 'base.strided.smskramp',
	'path': '@stdlib/math/strided/special/smskramp',
	'value': require( '@stdlib/math/strided/special/smskramp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskramp',
		'@stdlib/math/strided/special/mskramp',
		'@stdlib/math/strided/special/smskheaviside',
		'@stdlib/math/strided/special/sramp'
	]
});

ns.push({
	'alias': 'base.strided.smskrange',
	'path': '@stdlib/stats/base/smskrange',
	'value': require( '@stdlib/stats/base/smskrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmskrange',
		'@stdlib/stats/base/mskrange',
		'@stdlib/stats/base/smskmax',
		'@stdlib/stats/base/smskmin',
		'@stdlib/stats/base/snanrange',
		'@stdlib/stats/base/srange'
	]
});

ns.push({
	'alias': 'base.strided.smskrsqrt',
	'path': '@stdlib/math/strided/special/smskrsqrt',
	'value': require( '@stdlib/math/strided/special/smskrsqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskrsqrt',
		'@stdlib/math/strided/special/mskrsqrt',
		'@stdlib/math/strided/special/smsksqrt',
		'@stdlib/math/strided/special/srsqrt'
	]
});

ns.push({
	'alias': 'base.strided.smsksqrt',
	'path': '@stdlib/math/strided/special/smsksqrt',
	'value': require( '@stdlib/math/strided/special/smsksqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmsksqrt',
		'@stdlib/math/strided/special/msksqrt',
		'@stdlib/math/strided/special/smskcbrt',
		'@stdlib/math/strided/special/smskrsqrt',
		'@stdlib/math/strided/special/srsqrt'
	]
});

ns.push({
	'alias': 'base.strided.smsktrunc',
	'path': '@stdlib/math/strided/special/smsktrunc',
	'value': require( '@stdlib/math/strided/special/smsktrunc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmsktrunc',
		'@stdlib/math/strided/special/msktrunc',
		'@stdlib/math/strided/special/smskceil',
		'@stdlib/math/strided/special/smskfloor',
		'@stdlib/math/strided/special/smsktrunc2',
		'@stdlib/math/strided/special/smsktrunc10',
		'@stdlib/math/strided/special/smsktruncb',
		'@stdlib/math/strided/special/smsktruncn',
		'@stdlib/math/strided/special/smskround',
		'@stdlib/math/strided/special/strunc'
	]
});

ns.push({
	'alias': 'base.strided.snanmax',
	'path': '@stdlib/stats/base/snanmax',
	'value': require( '@stdlib/stats/base/snanmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmax',
		'@stdlib/stats/base/nanmax',
		'@stdlib/stats/base/smax',
		'@stdlib/stats/base/snanmin'
	]
});

ns.push({
	'alias': 'base.strided.snanmaxabs',
	'path': '@stdlib/stats/base/snanmaxabs',
	'value': require( '@stdlib/stats/base/snanmaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmaxabs',
		'@stdlib/stats/base/nanmaxabs',
		'@stdlib/stats/base/smaxabs',
		'@stdlib/stats/base/snanmax',
		'@stdlib/stats/base/snanminabs'
	]
});

ns.push({
	'alias': 'base.strided.snanmean',
	'path': '@stdlib/stats/base/snanmean',
	'value': require( '@stdlib/stats/base/snanmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmean',
		'@stdlib/stats/base/smean',
		'@stdlib/stats/base/nanmean'
	]
});

ns.push({
	'alias': 'base.strided.snanmeanors',
	'path': '@stdlib/stats/base/snanmeanors',
	'value': require( '@stdlib/stats/base/snanmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmeanors',
		'@stdlib/stats/base/nanmeanors',
		'@stdlib/stats/base/smeanors',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.snanmeanpn',
	'path': '@stdlib/stats/base/snanmeanpn',
	'value': require( '@stdlib/stats/base/snanmeanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmeanpn',
		'@stdlib/stats/base/nanmeanpn',
		'@stdlib/stats/base/smeanpn',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.snanmeanwd',
	'path': '@stdlib/stats/base/snanmeanwd',
	'value': require( '@stdlib/stats/base/snanmeanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmeanwd',
		'@stdlib/stats/base/nanmeanwd',
		'@stdlib/stats/base/smeanwd',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.snanmin',
	'path': '@stdlib/stats/base/snanmin',
	'value': require( '@stdlib/stats/base/snanmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmin',
		'@stdlib/stats/base/nanmin',
		'@stdlib/stats/base/smin',
		'@stdlib/stats/base/snanmax'
	]
});

ns.push({
	'alias': 'base.strided.snanminabs',
	'path': '@stdlib/stats/base/snanminabs',
	'value': require( '@stdlib/stats/base/snanminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanminabs',
		'@stdlib/stats/base/nanminabs',
		'@stdlib/stats/base/sminabs',
		'@stdlib/stats/base/snanmaxabs',
		'@stdlib/stats/base/snanmin'
	]
});

ns.push({
	'alias': 'base.strided.snanmskmax',
	'path': '@stdlib/stats/base/snanmskmax',
	'value': require( '@stdlib/stats/base/snanmskmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmskmax',
		'@stdlib/stats/base/nanmskmax',
		'@stdlib/stats/base/smskmax',
		'@stdlib/stats/base/snanmax',
		'@stdlib/stats/base/snanmskmin'
	]
});

ns.push({
	'alias': 'base.strided.snanmskmin',
	'path': '@stdlib/stats/base/snanmskmin',
	'value': require( '@stdlib/stats/base/snanmskmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmskmin',
		'@stdlib/stats/base/nanmskmin',
		'@stdlib/stats/base/smskmin',
		'@stdlib/stats/base/snanmin',
		'@stdlib/stats/base/snanmskmax'
	]
});

ns.push({
	'alias': 'base.strided.snanmskrange',
	'path': '@stdlib/stats/base/snanmskrange',
	'value': require( '@stdlib/stats/base/snanmskrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmskrange',
		'@stdlib/stats/base/nanmskrange',
		'@stdlib/stats/base/smskrange',
		'@stdlib/stats/base/snanrange',
		'@stdlib/stats/base/snanmskmax',
		'@stdlib/stats/base/snanmskmin'
	]
});

ns.push({
	'alias': 'base.strided.snanrange',
	'path': '@stdlib/stats/base/snanrange',
	'value': require( '@stdlib/stats/base/snanrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanrange',
		'@stdlib/stats/base/nanrange',
		'@stdlib/stats/base/snanmax',
		'@stdlib/stats/base/snanmin',
		'@stdlib/stats/base/srange'
	]
});

ns.push({
	'alias': 'base.strided.snanstdev',
	'path': '@stdlib/stats/base/snanstdev',
	'value': require( '@stdlib/stats/base/snanstdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdev',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/smskstdev',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/base/sstdev'
	]
});

ns.push({
	'alias': 'base.strided.snanstdevch',
	'path': '@stdlib/stats/base/snanstdevch',
	'value': require( '@stdlib/stats/base/snanstdevch' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevch',
		'@stdlib/stats/base/nanstdevch',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/snanvariancech',
		'@stdlib/stats/base/sstdevch'
	]
});

ns.push({
	'alias': 'base.strided.snanstdevpn',
	'path': '@stdlib/stats/base/snanstdevpn',
	'value': require( '@stdlib/stats/base/snanstdevpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevpn',
		'@stdlib/stats/base/nanstdevpn',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/snanvariancepn',
		'@stdlib/stats/base/sstdevpn'
	]
});

ns.push({
	'alias': 'base.strided.snanstdevtk',
	'path': '@stdlib/stats/base/snanstdevtk',
	'value': require( '@stdlib/stats/base/snanstdevtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevtk',
		'@stdlib/stats/base/nanstdevtk',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/snanvariancetk',
		'@stdlib/stats/base/sstdevtk'
	]
});

ns.push({
	'alias': 'base.strided.snanstdevwd',
	'path': '@stdlib/stats/base/snanstdevwd',
	'value': require( '@stdlib/stats/base/snanstdevwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevwd',
		'@stdlib/stats/base/nanstdevwd',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/snanvariancewd',
		'@stdlib/stats/base/sstdevwd'
	]
});

ns.push({
	'alias': 'base.strided.snanstdevyc',
	'path': '@stdlib/stats/base/snanstdevyc',
	'value': require( '@stdlib/stats/base/snanstdevyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevyc',
		'@stdlib/stats/base/nanstdevyc',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/snanvarianceyc',
		'@stdlib/stats/base/sstdevyc'
	]
});

ns.push({
	'alias': 'base.strided.snansum',
	'path': '@stdlib/blas/ext/base/snansum',
	'value': require( '@stdlib/blas/ext/base/snansum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/gnansum',
		'@stdlib/stats/base/snanmean',
		'@stdlib/blas/ext/base/ssum'
	]
});

ns.push({
	'alias': 'base.strided.snansumkbn',
	'path': '@stdlib/blas/ext/base/snansumkbn',
	'value': require( '@stdlib/blas/ext/base/snansumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumkbn',
		'@stdlib/blas/ext/base/gnansumkbn',
		'@stdlib/blas/ext/base/snansum',
		'@stdlib/blas/ext/base/snansumkbn2',
		'@stdlib/blas/ext/base/snansumors',
		'@stdlib/blas/ext/base/snansumpw',
		'@stdlib/blas/ext/base/ssumkbn'
	]
});

ns.push({
	'alias': 'base.strided.snansumkbn2',
	'path': '@stdlib/blas/ext/base/snansumkbn2',
	'value': require( '@stdlib/blas/ext/base/snansumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumkbn2',
		'@stdlib/blas/ext/base/gnansumkbn2',
		'@stdlib/blas/ext/base/snansum',
		'@stdlib/blas/ext/base/snansumkbn',
		'@stdlib/blas/ext/base/snansumors',
		'@stdlib/blas/ext/base/snansumpw',
		'@stdlib/blas/ext/base/ssumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.snansumors',
	'path': '@stdlib/blas/ext/base/snansumors',
	'value': require( '@stdlib/blas/ext/base/snansumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumors',
		'@stdlib/blas/ext/base/gnansumors',
		'@stdlib/blas/ext/base/snansum',
		'@stdlib/blas/ext/base/snansumkbn2',
		'@stdlib/blas/ext/base/snansumpw',
		'@stdlib/blas/ext/base/ssumors'
	]
});

ns.push({
	'alias': 'base.strided.snansumpw',
	'path': '@stdlib/blas/ext/base/snansumpw',
	'value': require( '@stdlib/blas/ext/base/snansumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumpw',
		'@stdlib/blas/ext/base/gnansumpw',
		'@stdlib/blas/ext/base/snansum',
		'@stdlib/blas/ext/base/snansumkbn2',
		'@stdlib/blas/ext/base/snansumors',
		'@stdlib/blas/ext/base/ssumpw'
	]
});

ns.push({
	'alias': 'base.strided.snanvariance',
	'path': '@stdlib/stats/base/snanvariance',
	'value': require( '@stdlib/stats/base/snanvariance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariance',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/smskvariance',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/svariance'
	]
});

ns.push({
	'alias': 'base.strided.snanvariancech',
	'path': '@stdlib/stats/base/snanvariancech',
	'value': require( '@stdlib/stats/base/snanvariancech' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancech',
		'@stdlib/stats/base/nanvariancech',
		'@stdlib/stats/base/snanstdevch',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/base/svariancech'
	]
});

ns.push({
	'alias': 'base.strided.snanvariancepn',
	'path': '@stdlib/stats/base/snanvariancepn',
	'value': require( '@stdlib/stats/base/snanvariancepn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancepn',
		'@stdlib/stats/base/nanvariancepn',
		'@stdlib/stats/base/snanstdevpn',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/base/svariancepn'
	]
});

ns.push({
	'alias': 'base.strided.snanvariancetk',
	'path': '@stdlib/stats/base/snanvariancetk',
	'value': require( '@stdlib/stats/base/snanvariancetk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancetk',
		'@stdlib/stats/base/nanvariancetk',
		'@stdlib/stats/base/snanstdevtk',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/base/svariancetk'
	]
});

ns.push({
	'alias': 'base.strided.snanvariancewd',
	'path': '@stdlib/stats/base/snanvariancewd',
	'value': require( '@stdlib/stats/base/snanvariancewd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancewd',
		'@stdlib/stats/base/nanvariancewd',
		'@stdlib/stats/base/snanstdevwd',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/base/svariancewd'
	]
});

ns.push({
	'alias': 'base.strided.snanvarianceyc',
	'path': '@stdlib/stats/base/snanvarianceyc',
	'value': require( '@stdlib/stats/base/snanvarianceyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvarianceyc',
		'@stdlib/stats/base/nanvarianceyc',
		'@stdlib/stats/base/snanstdevyc',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/base/svarianceyc'
	]
});

ns.push({
	'alias': 'base.strided.snrm2',
	'path': '@stdlib/blas/base/snrm2',
	'value': require( '@stdlib/blas/base/snrm2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dnrm2',
		'@stdlib/blas/base/gnrm2',
		'@stdlib/blas/snrm2'
	]
});

ns.push({
	'alias': 'base.strided.sramp',
	'path': '@stdlib/math/strided/special/sramp',
	'value': require( '@stdlib/math/strided/special/sramp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dramp',
		'@stdlib/math/strided/special/ramp',
		'@stdlib/math/strided/special/sheaviside'
	]
});

ns.push({
	'alias': 'base.strided.srange',
	'path': '@stdlib/stats/base/srange',
	'value': require( '@stdlib/stats/base/srange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/drange',
		'@stdlib/stats/base/smax',
		'@stdlib/stats/base/smin',
		'@stdlib/stats/base/snanrange',
		'@stdlib/stats/base/range'
	]
});

ns.push({
	'alias': 'base.strided.srev',
	'path': '@stdlib/blas/ext/base/srev',
	'value': require( '@stdlib/blas/ext/base/srev' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/drev',
		'@stdlib/blas/ext/base/grev',
		'@stdlib/blas/ext/srev'
	]
});

ns.push({
	'alias': 'base.strided.srsqrt',
	'path': '@stdlib/math/strided/special/srsqrt',
	'value': require( '@stdlib/math/strided/special/srsqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/drsqrt',
		'@stdlib/math/strided/special/rsqrt',
		'@stdlib/math/strided/special/ssqrt'
	]
});

ns.push({
	'alias': 'base.strided.sscal',
	'path': '@stdlib/blas/base/sscal',
	'value': require( '@stdlib/blas/base/sscal' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/daxpy',
		'@stdlib/blas/base/dscal',
		'@stdlib/blas/base/gscal',
		'@stdlib/blas/base/saxpy',
		'@stdlib/blas/sscal'
	]
});

ns.push({
	'alias': 'base.strided.ssort2hp',
	'path': '@stdlib/blas/ext/base/ssort2hp',
	'value': require( '@stdlib/blas/ext/base/ssort2hp' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2hp',
		'@stdlib/blas/ext/base/gsort2hp',
		'@stdlib/blas/ext/base/ssorthp'
	]
});

ns.push({
	'alias': 'base.strided.ssort2ins',
	'path': '@stdlib/blas/ext/base/ssort2ins',
	'value': require( '@stdlib/blas/ext/base/ssort2ins' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2ins',
		'@stdlib/blas/ext/base/gsort2ins',
		'@stdlib/blas/ext/base/ssortins'
	]
});

ns.push({
	'alias': 'base.strided.ssort2sh',
	'path': '@stdlib/blas/ext/base/ssort2sh',
	'value': require( '@stdlib/blas/ext/base/ssort2sh' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2sh',
		'@stdlib/blas/ext/base/gsort2sh',
		'@stdlib/blas/ext/base/ssortsh'
	]
});

ns.push({
	'alias': 'base.strided.ssorthp',
	'path': '@stdlib/blas/ext/base/ssorthp',
	'value': require( '@stdlib/blas/ext/base/ssorthp' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsorthp',
		'@stdlib/blas/ext/base/gsorthp',
		'@stdlib/blas/ext/base/ssort2hp'
	]
});

ns.push({
	'alias': 'base.strided.ssortins',
	'path': '@stdlib/blas/ext/base/ssortins',
	'value': require( '@stdlib/blas/ext/base/ssortins' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsortins',
		'@stdlib/blas/ext/base/gsortins',
		'@stdlib/blas/ext/base/ssort2ins'
	]
});

ns.push({
	'alias': 'base.strided.ssortsh',
	'path': '@stdlib/blas/ext/base/ssortsh',
	'value': require( '@stdlib/blas/ext/base/ssortsh' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsortsh',
		'@stdlib/blas/ext/base/gsortsh',
		'@stdlib/blas/ext/base/ssort2sh'
	]
});

ns.push({
	'alias': 'base.strided.ssqrt',
	'path': '@stdlib/math/strided/special/ssqrt',
	'value': require( '@stdlib/math/strided/special/ssqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dsqrt',
		'@stdlib/math/strided/special/scbrt',
		'@stdlib/math/strided/special/sqrt',
		'@stdlib/math/strided/special/srsqrt'
	]
});

ns.push({
	'alias': 'base.strided.sstdev',
	'path': '@stdlib/stats/base/sstdev',
	'value': require( '@stdlib/stats/base/sstdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdev',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/sstdevm',
		'@stdlib/stats/base/stdev',
		'@stdlib/stats/base/svariance'
	]
});

ns.push({
	'alias': 'base.strided.sstdevch',
	'path': '@stdlib/stats/base/sstdevch',
	'value': require( '@stdlib/stats/base/sstdevch' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdevch',
		'@stdlib/stats/base/snanstdevch',
		'@stdlib/stats/base/sstdev',
		'@stdlib/stats/base/stdevch',
		'@stdlib/stats/base/svariancech'
	]
});

ns.push({
	'alias': 'base.strided.sstdevpn',
	'path': '@stdlib/stats/base/sstdevpn',
	'value': require( '@stdlib/stats/base/sstdevpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdevpn',
		'@stdlib/stats/base/snanstdevpn',
		'@stdlib/stats/base/sstdev',
		'@stdlib/stats/base/sstdevmpn',
		'@stdlib/stats/base/stdevpn',
		'@stdlib/stats/base/svariancepn'
	]
});

ns.push({
	'alias': 'base.strided.sstdevtk',
	'path': '@stdlib/stats/base/sstdevtk',
	'value': require( '@stdlib/stats/base/sstdevtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdevtk',
		'@stdlib/stats/base/snanstdevtk',
		'@stdlib/stats/base/sstdev',
		'@stdlib/stats/base/stdevtk',
		'@stdlib/stats/base/svariancetk'
	]
});

ns.push({
	'alias': 'base.strided.sstdevwd',
	'path': '@stdlib/stats/base/sstdevwd',
	'value': require( '@stdlib/stats/base/sstdevwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdevwd',
		'@stdlib/stats/base/snanstdevwd',
		'@stdlib/stats/base/sstdev',
		'@stdlib/stats/base/stdevwd',
		'@stdlib/stats/base/svariancewd'
	]
});

ns.push({
	'alias': 'base.strided.sstdevyc',
	'path': '@stdlib/stats/base/sstdevyc',
	'value': require( '@stdlib/stats/base/sstdevyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdevyc',
		'@stdlib/stats/base/snanstdevyc',
		'@stdlib/stats/base/sstdev',
		'@stdlib/stats/base/stdevyc',
		'@stdlib/stats/base/svarianceyc'
	]
});

ns.push({
	'alias': 'base.strided.ssum',
	'path': '@stdlib/blas/ext/base/ssum',
	'value': require( '@stdlib/blas/ext/base/ssum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/sasum',
		'@stdlib/stats/base/smean',
		'@stdlib/blas/ext/base/snansum',
		'@stdlib/blas/ext/base/gsum'
	]
});

ns.push({
	'alias': 'base.strided.ssumkbn',
	'path': '@stdlib/blas/ext/base/ssumkbn',
	'value': require( '@stdlib/blas/ext/base/ssumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsumkbn',
		'@stdlib/blas/ext/base/gsumkbn',
		'@stdlib/blas/ext/base/snansumkbn',
		'@stdlib/blas/ext/base/ssum',
		'@stdlib/blas/ext/base/ssumkbn2',
		'@stdlib/blas/ext/base/ssumors',
		'@stdlib/blas/ext/base/ssumpw'
	]
});

ns.push({
	'alias': 'base.strided.ssumkbn2',
	'path': '@stdlib/blas/ext/base/ssumkbn2',
	'value': require( '@stdlib/blas/ext/base/ssumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsumkbn2',
		'@stdlib/blas/ext/base/gsumkbn2',
		'@stdlib/blas/ext/base/snansumkbn2',
		'@stdlib/blas/ext/base/ssum',
		'@stdlib/blas/ext/base/ssumkbn',
		'@stdlib/blas/ext/base/ssumors',
		'@stdlib/blas/ext/base/ssumpw'
	]
});

ns.push({
	'alias': 'base.strided.ssumors',
	'path': '@stdlib/blas/ext/base/ssumors',
	'value': require( '@stdlib/blas/ext/base/ssumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/gsumors',
		'@stdlib/blas/ext/base/snansumors',
		'@stdlib/blas/ext/base/ssum',
		'@stdlib/blas/ext/base/ssumkbn2',
		'@stdlib/blas/ext/base/ssumpw'
	]
});

ns.push({
	'alias': 'base.strided.ssumpw',
	'path': '@stdlib/blas/ext/base/ssumpw',
	'value': require( '@stdlib/blas/ext/base/ssumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gsumpw',
		'@stdlib/blas/ext/base/snansumpw',
		'@stdlib/blas/ext/base/ssum',
		'@stdlib/blas/ext/base/ssumkbn2',
		'@stdlib/blas/ext/base/ssumors'
	]
});

ns.push({
	'alias': 'base.strided.sswap',
	'path': '@stdlib/blas/base/sswap',
	'value': require( '@stdlib/blas/base/sswap' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dswap',
		'@stdlib/blas/base/gswap',
		'@stdlib/blas/base/scopy',
		'@stdlib/blas/sswap'
	]
});

ns.push({
	'alias': 'base.strided.stdev',
	'path': '@stdlib/stats/base/stdev',
	'value': require( '@stdlib/stats/base/stdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdev',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/sstdev',
		'@stdlib/stats/base/stdevm',
		'@stdlib/stats/base/variance'
	]
});

ns.push({
	'alias': 'base.strided.stdevch',
	'path': '@stdlib/stats/base/stdevch',
	'value': require( '@stdlib/stats/base/stdevch' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdevch',
		'@stdlib/stats/base/nanstdevch',
		'@stdlib/stats/base/sstdevch',
		'@stdlib/stats/base/stdev',
		'@stdlib/stats/base/variancech'
	]
});

ns.push({
	'alias': 'base.strided.stdevpn',
	'path': '@stdlib/stats/base/stdevpn',
	'value': require( '@stdlib/stats/base/stdevpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdevpn',
		'@stdlib/stats/base/nanstdevpn',
		'@stdlib/stats/base/sstdevpn',
		'@stdlib/stats/base/stdev',
		'@stdlib/stats/base/stdevmpn',
		'@stdlib/stats/base/variancepn'
	]
});

ns.push({
	'alias': 'base.strided.stdevtk',
	'path': '@stdlib/stats/base/stdevtk',
	'value': require( '@stdlib/stats/base/stdevtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdevtk',
		'@stdlib/stats/base/nanstdevtk',
		'@stdlib/stats/base/sstdevtk',
		'@stdlib/stats/base/stdev',
		'@stdlib/stats/base/variancetk'
	]
});

ns.push({
	'alias': 'base.strided.stdevwd',
	'path': '@stdlib/stats/base/stdevwd',
	'value': require( '@stdlib/stats/base/stdevwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdevwd',
		'@stdlib/stats/base/nanstdevwd',
		'@stdlib/stats/base/sstdevwd',
		'@stdlib/stats/base/stdev',
		'@stdlib/stats/base/variancewd'
	]
});

ns.push({
	'alias': 'base.strided.stdevyc',
	'path': '@stdlib/stats/base/stdevyc',
	'value': require( '@stdlib/stats/base/stdevyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdevyc',
		'@stdlib/stats/base/nanstdevyc',
		'@stdlib/stats/base/sstdevyc',
		'@stdlib/stats/base/stdev',
		'@stdlib/stats/base/varianceyc'
	]
});

ns.push({
	'alias': 'base.strided.strunc',
	'path': '@stdlib/math/strided/special/strunc',
	'value': require( '@stdlib/math/strided/special/strunc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dtrunc',
		'@stdlib/math/strided/special/sceil',
		'@stdlib/math/strided/special/sfloor',
		'@stdlib/math/strided/special/strunc2',
		'@stdlib/math/strided/special/strunc10',
		'@stdlib/math/strided/special/struncb',
		'@stdlib/math/strided/special/struncn',
		'@stdlib/math/strided/special/sround',
		'@stdlib/math/strided/special/trunc'
	]
});

ns.push({
	'alias': 'base.strided.svariance',
	'path': '@stdlib/stats/base/svariance',
	'value': require( '@stdlib/stats/base/svariance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/base/sstdev',
		'@stdlib/stats/base/svarm',
		'@stdlib/stats/base/variance'
	]
});

ns.push({
	'alias': 'base.strided.svariancech',
	'path': '@stdlib/stats/base/svariancech',
	'value': require( '@stdlib/stats/base/svariancech' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancech',
		'@stdlib/stats/base/snanvariancech',
		'@stdlib/stats/base/sstdevch',
		'@stdlib/stats/base/svariance',
		'@stdlib/stats/base/variancech'
	]
});

ns.push({
	'alias': 'base.strided.svariancepn',
	'path': '@stdlib/stats/base/svariancepn',
	'value': require( '@stdlib/stats/base/svariancepn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancepn',
		'@stdlib/stats/base/snanvariancepn',
		'@stdlib/stats/base/sstdevpn',
		'@stdlib/stats/base/svariance',
		'@stdlib/stats/base/svarmpn',
		'@stdlib/stats/base/variancepn'
	]
});

ns.push({
	'alias': 'base.strided.svariancetk',
	'path': '@stdlib/stats/base/svariancetk',
	'value': require( '@stdlib/stats/base/svariancetk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancetk',
		'@stdlib/stats/base/snanvariancetk',
		'@stdlib/stats/base/sstdevtk',
		'@stdlib/stats/base/svariance',
		'@stdlib/stats/base/variancetk'
	]
});

ns.push({
	'alias': 'base.strided.svariancewd',
	'path': '@stdlib/stats/base/svariancewd',
	'value': require( '@stdlib/stats/base/svariancewd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancewd',
		'@stdlib/stats/base/snanvariancewd',
		'@stdlib/stats/base/sstdevwd',
		'@stdlib/stats/base/svariance',
		'@stdlib/stats/base/variancewd'
	]
});

ns.push({
	'alias': 'base.strided.svarianceyc',
	'path': '@stdlib/stats/base/svarianceyc',
	'value': require( '@stdlib/stats/base/svarianceyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvarianceyc',
		'@stdlib/stats/base/snanvarianceyc',
		'@stdlib/stats/base/sstdevyc',
		'@stdlib/stats/base/svariance',
		'@stdlib/stats/base/varianceyc'
	]
});


// EXPORTS //

module.exports = ns;
