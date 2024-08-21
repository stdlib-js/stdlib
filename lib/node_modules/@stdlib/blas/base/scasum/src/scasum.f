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

!> Computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector.
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
! @returns {real} result
!<
real function scasum( N, cx, strideX )
  implicit none
  ! ..
  ! Scalar arguments:
  integer :: N, strideX
  ! ..
  ! Array arguments:
  complex :: cx( * )
  ! ..
  ! Local scalars:
  integer :: i, nix
  real :: stemp
  ! ..
  ! Intrinsic functions:
  intrinsic abs, aimag, real
  ! ..
  scasum = 0.0e0
  stemp = 0.0e0
  ! ..
  if ( N <= 0 .or. strideX <= 0 ) return
  if( strideX == 1 ) then
    do i = 1, N
      stemp = stemp + abs( real( cx( i ) ) ) + abs( aimag( cx( i ) ) )
    end do
  else
    nix = N*strideX
    do i = 1, nix, strideX
      stemp = stemp + abs( real( cx( i ) ) ) + abs( aimag( cx( i ) ) )
    end do
  end if
  scasum = stemp
  return
end function scasum