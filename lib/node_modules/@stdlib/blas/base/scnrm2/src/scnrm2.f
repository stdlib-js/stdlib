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

!> Computes the L2-norm of a complex single-precision floating-point vector.
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
! @param {Array<complex>} cx - array
! @param {integer} strideX - `cx` stride length
! @returns {real} L2-norm
!<
real function scnrm2( N, cx, strideX )
  implicit none
  ! ..
  ! Define a kind parameter for single precision:
  integer, parameter :: wp = kind( 1.0e0 )
  ! ..
  ! Define constants:
  real( wp ), parameter :: zero = 0.0_wp
  real( wp ), parameter :: one  = 1.0_wp
  real( wp ), parameter :: maxN = huge( 0.0_wp )
  ! ..
  ! Blue's scaling constants:
  real(wp), parameter :: tsml = 1.08420217e-19_wp
  real(wp), parameter :: tbig = 4.50359963e15_wp
  real(wp), parameter :: ssml = 3.77789319e22_wp
  real(wp), parameter :: sbig = 1.32348898e-23_wp
  !..
  ! Scalar arguments:
  integer :: N, strideX
  ! ..
  ! Array arguments:
  complex( wp ) :: cx( * )
  ! ..
  ! Local scalars:
  integer :: i, ix
  logical :: notbig
  real( wp ) :: abig, amed, asml, ax, scl, sumsq, ymax, ymin
  ! ..
  ! Intrinsic functions:
  intrinsic abs, sqrt
  ! ..
  scnrm2 = zero
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
    ax = abs( real( cx( ix ) ) )
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
    ax = abs( aimag( cx( ix ) ) )
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
  scnrm2 = scl * sqrt( sumsq )
  return
end function scnrm2