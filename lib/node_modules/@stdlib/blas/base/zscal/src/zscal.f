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

!> Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant.
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
! @param {integer} N - number of indexed elements
! @param {complex<double>} za - scalar constant
! @param {Array<complex<double>>} zx - input array
! @param {integer} strideX - `zx` stride length
!<
subroutine zscal( N, za, zx, strideX )
  implicit none
  ! ..
  ! Scalar arguments:
  complex(kind=kind(0.0d0)) :: za
  integer :: strideX, N
  ! ..
  ! Array arguments:
  complex(kind=kind(0.0d0)) :: zx(*)
  ! ..
  ! Local scalars:
  integer :: ix, i
  ! ..
  if ( N <= 0 .OR. strideX <= 0 ) then
    return
  end if
  ! ..
  if ( strideX == 1 ) then
    do i = 1, N
      zx(i) = za * zx(i)
    end do
  else
    ix = 1
    do i = 1, N
      zx(ix) = za * zx(ix)
      ix = ix + strideX
    end do
  end if
  return
end subroutine zscal