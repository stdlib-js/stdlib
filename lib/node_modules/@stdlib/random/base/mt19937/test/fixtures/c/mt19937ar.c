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
*
*
* ## Notice
*
* The original C code and copyright notice are from the source implementation
* (see http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/MT2002/CODES/mt19937ar.c).
* The implementation has been modified according to project styles and
* conventions.
*
* ```text
* A C-program for MT19937, with initialization improved 2002/1/26.
* Coded by Takuji Nishimura and Makoto Matsumoto.
*
* Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions
* are met:
*
*  1. Redistributions of source code must retain the above copyright
*     notice, this list of conditions and the following disclaimer.
*
*  2. Redistributions in binary form must reproduce the above copyright
*     notice, this list of conditions and the following disclaimer in the
*     documentation and/or other materials provided with the distribution.
*
* 3. The names of its contributors may not be used to endorse or promote
*    products derived from this software without specific prior written
*    permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
* CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
* EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
* PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
* PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
* LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
* NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*/

#include <stdio.h>

// Period parameters:
#define N 624
#define M 397

#define UPPER_MASK 0x80000000UL // most significant `w-r` bits
#define LOWER_MASK 0x7fffffffUL // least significant `r` bits
#define MATRIX_A 0x9908b0dfUL   // constant vector `a`

static unsigned long mt[ N ]; // the array for the state vector
static int mti = N + 1; // mti==N+1 means `mt[N]` is not initialized

/**
* Initializes `mt[N]` with a seed.
*
* ## Notes
*
* -   See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier.
* -   In the previous versions, MSBs of the seed affect only MSBs of the array `mt[]`.
* -   Modified by Makoto Matsumoto (2002/01/09).
*
* @param s   seed
*/
void init_genrand( unsigned long s ) {
	mt[ 0 ]= s & 0xffffffffUL;
	for ( mti = 1; mti < N; mti++ ) {
		mt[ mti ] = (1812433253UL * (mt[mti-1] ^ (mt[mti-1] >> 30)) + mti);
		mt[ mti ] &= 0xffffffffUL; // for machines having a WORDSIZE > 32 bits
	}
}

/**
* Initializes `mt[N]` with a seed array.
*
* ## Notes
*
* -   Slight change introduced for C++ (2004/2/26).
*
* @param init_key     seed array
* @param key_length   seed array length
*/
void init_by_array( unsigned long *init_key, int key_length ) {
	int i;
	int j;
	int k;

	init_genrand( 19650218UL );

	i = 1;
	j = 0;
	k = ( N > key_length ? N : key_length );
	for ( ; k; k-- ) {
		mt[ i ] = (mt[i] ^ ((mt[i-1] ^ (mt[i-1] >> 30)) * 1664525UL)) + init_key[j] + j; // non-linear
		mt[ i ] &= 0xffffffffUL; // for machines having a WORDSIZE > 32 bits
		i += 1;
		j += 1;
		if ( i >= N ) {
			mt[ 0 ] = mt[ N-1 ];
			i = 1;
		}
		if ( j >= key_length ) {
			j = 0;
		}
	}
	for ( k = N-1; k; k-- ) {
		mt[ i ] = (mt[i] ^ ((mt[i-1] ^ (mt[i-1] >> 30)) * 1566083941UL)) - i; // non-linear
		mt[ i ] &= 0xffffffffUL; // for machines having a WORDSIZE > 32 bits
		i += 1;
		if ( i >= N ) {
			mt[ 0 ] = mt[ N-1 ];
			i = 1;
		}
	}
	mt[ 0 ] = 0x80000000UL; // MSB is 1, assuring non-zero initial array
}

/**
* Generates a random number on interval `[0,0xffffffff]`.
*
* @return random integer
*/
unsigned long genrand_int32() {
	static unsigned long mag01[ 2 ] = { 0x0UL, MATRIX_A }; // mag01[x] = x * MATRIX_A  for x=0,1
	unsigned long y;
	int kk;

	if ( mti >= N ) { // generate N words at one time
		if ( mti == N+1 ) { // if init_genrand() has not been called
			init_genrand( 5489UL ); // a default initial seed is used
		}
		for ( kk = 0; kk < N-M; kk++ ) {
			y = (mt[kk]&UPPER_MASK) | (mt[kk+1]&LOWER_MASK);
			mt[ kk ] = mt[kk+M] ^ (y >> 1) ^ mag01[y & 0x1UL];
		}
		for ( ; kk < N-1; kk++ ) {
			y = (mt[kk]&UPPER_MASK) | (mt[kk+1]&LOWER_MASK);
			mt[ kk ] = mt[kk+(M-N)] ^ (y >> 1) ^ mag01[y & 0x1UL];
		}
		y = (mt[N-1]&UPPER_MASK) | (mt[0]&LOWER_MASK);
		mt[ N-1 ] = mt[M-1] ^ (y >> 1) ^ mag01[y & 0x1UL];
		mti = 0;
	}
	y = mt[ mti++ ];

	/* Tempering */
	y ^= (y >> 11);
	y ^= (y << 7) & 0x9d2c5680UL;
	y ^= (y << 15) & 0xefc60000UL;
	y ^= (y >> 18);

	return y;
}

/**
* Generates a random number on the interval `[0,1)` with 53-bit resolution.
*
* ## Notes
*
* -   Added by Isaku Wada (2002/01/09).
*
* @return random number
*/
double genrand_res53() {
	unsigned long a = genrand_int32()>>5;
	unsigned long b = genrand_int32()>>6;
	return ( (a*67108864.0)+b ) * (1.0/9007199254740992.0);
}
