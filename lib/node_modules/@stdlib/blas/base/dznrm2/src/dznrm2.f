!>
! @license Apache-2.0
!
! Copyright (c) 2024 The Stdlib Authors.
!
! Licensed under the Apache License, Version 2.0 (the "License");
! you may not use this file except in compliance with the License.
! You may obtain a copy of the License at
!
!    http://www.apache.org/licenses/LICENSE-2.0
!
! Unless required by applicable law or agreed to in writing, software
! distributed under the License is distributed on an "AS IS" BASIS,
! WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
! See the License for the specific language governing permissions and
! limitations under the License.
!<

!> Computes the L2-norm of a complex double-precision floating-point vector.
!
! ## Notes
!
! * Modified version of reference BLAS level1 routine (version 3.8.0). Updated to "free form" Fortran 95.
!
! ## Authors
!
! * Edward Anderson, Lockheed Martin
! * Weslley Pereira, University of Colorado Denver, USA
!
! ## History
!
! * Original version written on August 2016.
!
! ## License
!
! From <http://netlib.org/blas/faq.html>:
!
! > The reference BLAS is a freely-available software package. It is available from netlib via anonymous ftp and the World Wide Web. Thus, it can be included in commercial software packages (and has been). We only ask that proper credit be given to the authors.
! >
! > Like all software, it is copyrighted. It is not trademarked, but we do ask the following:
! >
! > * If you modify the source for these routines we ask that you change the name of the routine and comment the changes made to the original.
! >
! > * We will gladly answer any questions regarding the software. If a modification is done, however, it is the responsibility of the person who modified the routine to provide support.
!
! @param {integer} N - number of indexed elements
! @param {Array<complex<double>>} zx - array
! @param {integer} strideX - `zx` stride length
! @returns {double} L2-norm
!<
double precision function dznrm2( N, zx, strideX )
  implicit none
  ! ..
  ! Define a kind parameter for single precision:
  integer, parameter :: wp = kind( 1.0d0 )
  ! ..
  ! Define constants:
  real( wp ), parameter :: zero = 0.0_wp
  real( wp ), parameter :: one  = 1.0_wp
  real( wp ), parameter :: maxN = huge( 0.0_wp )
  ! ..
  ! Blue's scaling constants:
  real( wp ), parameter :: tsml = 1.4916681462400413e-154_wp
  real( wp ), parameter :: tbig = 1.9979190722022350e146_wp
  real( wp ), parameter :: ssml = 4.4989137945431964e161_wp
  real( wp ), parameter :: sbig = 1.1113793747425387e-162_wp
  !..
  ! Scalar arguments:
  integer :: N, strideX
  ! ..
  ! Array arguments:
  complex( wp ) :: zx( * )
  ! ..
  ! Local scalars:
  integer :: i, ix
  logical :: notbig
  real( wp ) :: abig, amed, asml, ax, scl, sumsq, ymax, ymin
  ! ..
  ! Intrinsic functions:
  intrinsic abs, sqrt
  ! ..
  dznrm2 = zero
  ! ..
  if ( N <= 0 ) return
  ! ..
  scl = one
  sumsq = zero
  ! ..
  ! Compute the sum of squares in 3 accumulators:
  !     abig -- sums of squares scaled down to avoid overflow
  !     asml -- sums of squares scaled up to avoid underflow
  !     amed -- sums of squares that do not require scaling
  ! Thresholds and multipliers:
  !     tbig -- values bigger than this are scaled down by sbig
  !     tsml -- values smaller than this are scaled up by ssml
  ! ..
  notbig = .true.
  asml = zero
  amed = zero
  abig = zero
  ix = 1
  if ( strideX < 0 ) then
    ix = 1 - ( N - 1 ) * strideX
  end if
  ! ..
  do i = 1, N
    ax = abs( real( zx( ix ) ) )
    if ( ax > tbig ) then
      abig = abig + ( ax * sbig )**2
      notbig = .false.
    else if ( ax < tsml ) then
      if ( notbig ) then
        asml = asml + ( ax * ssml )**2
      end if
    else
      amed = amed + ax**2
    end if
    ax = abs( aimag( zx( ix ) ) )
    if ( ax > tbig ) then
      abig = abig + ( ax * sbig )**2
      notbig = .false.
    else if ( ax < tsml ) then
      if ( notbig ) then
        asml = asml + ( ax * ssml )**2
      end if
    else
      amed = amed + ( ax**2 )
    end if
    ix = ix + strideX
  end do
  ! ..
  ! Combine abig and amed or amed and asml if more than one accumulator was used:
  if ( abig > zero ) then
    ! Combine abig and amed if abig > 0...
    if ( ( amed > zero ) .or. ( amed > maxN ) .or. ( amed /= amed ) ) then
      abig = abig + ( amed * sbig ) * sbig
    end if
    scl = one / sbig
    sumsq = abig
  else if ( asml > zero ) then
    ! Combine amed and asml if asml > 0...
    if ( ( amed > zero ) .or. ( amed > maxN ) .or. ( amed /= amed ) ) then
      amed = sqrt( amed )
      asml = sqrt( asml ) / ssml
      if ( asml > amed ) then
        ymin = amed
        ymax = asml
      else
        ymin = asml
        ymax = amed
      end if
      scl = one
      sumsq = ymax**2 * ( one + ( ymin / ymax )**2 )
    else
      scl = one / ssml
      sumsq = asml
    end if
  else
    ! All values are mid-range...
    scl = one
    sumsq = amed
  end if
  dznrm2 = scl * sqrt( sumsq )
  return
end function dznrm2