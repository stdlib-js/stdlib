!>
! @license Apache-2.0
!
! Copyright (c) 2025 The Stdlib Authors.
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

!> Scales a double-precision complex floating-point vector by a double-precision floating-point constant.
!
! ## Notes
!
! * Modified version of reference BLAS level1 routine (version 3.9.0). Updated to "free form" Fortran 95.
!
! ## Authors
!
! * Univ. of Tennessee
! * Univ. of California Berkeley
! * Univ. of Colorado Denver
! * NAG Ltd.
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
! @param {double} alpha - scalar constant
! @param {Array<complex<double>>} x - input array
! @param {integer} strideX - `x` stride length
!<
subroutine zdscal( N, alpha, x, strideX )
  implicit none
  ! ..
  ! Scalar arguments:
  integer :: strideX, N
  double precision :: alpha
  ! ..
  ! Array arguments:
  complex(kind=kind(0.0d0)) :: x(*)
  ! ..
  ! Local scalars:
  integer :: i, nstrideX
  ! ..
  ! Intrinsic functions:
  intrinsic dble, cmplx, aimag
  ! ..
  if ( N <= 0 .OR. strideX <= 0 .OR. alpha == 1.0d0 ) then
    return
  end if
  ! ..
  if ( strideX == 1 ) then
    do i = 1, N
      x( i ) = cmplx( alpha*dble(x(i)), alpha*aimag(x(i)), kind=kind(0.0d0) )
    end do
  else
    nstrideX = N * strideX;
    do i = 1, nstrideX, strideX
      x( i ) = cmplx( alpha*dble(x(i)), alpha*aimag(x(i)), kind=kind(0.0d0) )
    end do
  end if
  return
end subroutine zdscal
