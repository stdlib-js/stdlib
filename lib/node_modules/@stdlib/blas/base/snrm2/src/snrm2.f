!>
! @license Apache-2.0
!
! Copyright (c) 2020 The Stdlib Authors.
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

!> Computes the L2-norm of a single-precision floating-point vector.
!
! ## Notes
!
! * Modified version of reference BLAS level1 routine (version 3.8.0). Updated to "free form" Fortran 95.
!
! ## Authors
!
! * Univ. of Tennessee
! * Univ. of California Berkeley
! * Univ. of Colorado Denver
! * NAG Ltd.
!
! ## History
!
! * Original version written on 25-October-1982.
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
! @param {integer} N - number of values over which to compute the norm
! @param {Array<real>} sx - array
! @param {integer} stride - stride length
! @returns {real} L2-norm
!<
real function snrm2( N, sx, stride )
  implicit none
  !..
  ! Scalar arguments:
  integer :: N, stride
  ! ..
  ! Array arguments:
  real, intent(in) :: sx(*)
  ! ..
  ! Local scalars:
  real :: ax, scale, ssq
  integer :: i
  ! ..
  ! Intrinsic functions:
  intrinsic abs, sqrt
  ! ..
  snrm2 = 0.0e0
  ! ..
  if ( N <= 0 .OR. stride <= 0 ) then
    return
  end if
  !..
  if ( N == 1 ) then
    snrm2 = abs( sx( 1 ) )
    return
  end if
  ! ..
  scale = 0.0e0
  ssq = 1.0e0
  do i = 1, 1+((N-1)*stride), stride
    if ( sx( i ) /= 0.0e0 ) then
      ax = abs( sx( i ) )
      if ( scale < ax ) then
        ssq = 1.0e0 + ( ssq * (scale/ax)**2 )
        scale = ax
      else
        ssq = ssq + (ax/scale)**2
      end if
    end if
  end do
  snrm2 = scale * sqrt( ssq )
end function snrm2