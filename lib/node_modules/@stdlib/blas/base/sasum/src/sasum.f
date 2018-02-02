!>
! @license Apache-2.0
!
! Copyright (c) 2018 The Stdlib Authors.
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

!> Computes the sum of absolute values.
!
! ## Notes
!
! * Modified version of reference BLAS level1 routine (version 3.7.0). Updated to "free form" Fortran 95.
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
! * Jack Dongarra, linpack, 3/11/78.
!
!   - modified 3/93 to return if incx .le. 0.
!   - modified 12/3/93, array(1) declarations changed to array(*)
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
! @param {integer} N - number of values to sum
! @param {Array<real>} sx - input array
! @param {integer} stride - stride length
! @returns {real} sum of absolute values
!<
real function sasum( N, sx, stride )
  implicit none
  ! ..
  ! Scalar arguments:
  integer :: stride, N
  ! ..
  ! Array arguments:
  real :: sx(*)
  ! ..
  ! Local scalars:
  real :: stemp
  integer :: nstride, mp1, m, i
  ! ..
  ! Intrinsic functions:
  intrinsic abs, mod
  ! ..
  sasum = 0.0e0
  stemp = 0.0e0
  ! ..
  if ( N <= 0 .OR. stride <= 0 ) then
    return
  end if
  ! ..
  ! If the stride is equal to `1`, use unrolled loops...
  if ( stride == 1 ) then
    m = mod( N, 6 )
    ! ..
    ! If we have a remainder, do a clean-up loop...
    if ( m /= 0 ) then
      do i = 1, m
        stemp = stemp + abs( sx( i ) )
      end do
      if ( N < 6 ) then
        sasum = stemp
        return
      end if
    end if
    mp1 = m + 1
    do i = mp1, N, 6
      stemp = stemp + &
        abs( sx( i ) ) + abs( sx( i+1 ) ) + &
        abs( sx( i+2 ) ) + abs( sx( i+3 ) ) + &
        abs( sx( i+4 ) ) + abs( sx( i+5 ) )
    end do
  else
    nstride = N * stride
    do i = 1, nstride, stride
      stemp = stemp + abs( sx( i ) )
    end do
  end if
  sasum = stemp
  return
end function sasum