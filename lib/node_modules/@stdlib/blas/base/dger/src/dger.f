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

!> Performs the rank 1 operation `A = alpha*x*y^T + A`, where `alpha` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M`-by-`N` matrix.
!
! ## Notes
!
! * Modified version of reference BLAS routine (version 3.12.0). Updated to "free form" Fortran 95.
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
! * Written on 22-October-1986.
!
!   - Jack Dongarra, Argonne National Lab.
!   - Jermey Du Croz, Nag Central Office.
!   - Sven Hammarling, Nag Central Office.
!   - Richard Hanson, Sandia National Labs.
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
! @param {integer} M - number of rows in the matrix `A`
! @param {integer} N - number of columns in the matrix `A`
! @param {double} alpha - scalar constant
! @param {Array<double>} X - an `M` element vector
! @param {integer} strideX - stride length for `X`
! @param {Array<double>} Y - an `N` element vector
! @param {integer} strideY - stride length for `Y`
! @param {Array<double>} A - matrix of coefficients
! @param {integer} LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
!<
subroutine dger( M, N, alpha, X, strideX, Y, strideY, A, LDA )
  implicit none
  ! ..
  ! Internal parameters:
  integer, parameter :: dp=kind(0.0d0) ! double-precision
  ! ..
  ! Scalar arguments:
  real(dp) :: alpha
  integer :: strideX, strideY, LDA, M, N
  ! ..
  ! Array arguments:
  real(dp) :: A(LDA,*), X(*), Y(*)
  ! ..
  ! Local scalars:
  real(dp) :: temp
  integer :: i, info, ix, j, jy, kx
  ! ..
  ! External functions:
  interface
    subroutine xerbla( srname, info )
      character*(*) :: srname
      integer :: info
    end subroutine xerbla
  end interface
  ! ..
  ! Intrinsic functions:
  intrinsic max
  ! ..
  ! Validate input arguments...
  info = 0
  if ( M < 0 ) then
    info = 1
  else if ( N < 0 ) then
    info = 2
  else if ( strideX == 0 ) then
    info = 5
  else if ( strideY == 0 ) then
    info = 7
  else if ( LDA < max( 1, M ) ) then
    info = 9
  end if
  if ( info /= 0 ) then
    call xerbla( 'dger  ', info )
    return
  end if
  ! ..
  ! Check whether we can avoid computation altogether...
  if ( M == 0 .OR. N == 0 .OR. alpha == 0.0d0 ) then
    return
  end if
  ! ..
  if ( strideY > 0 ) then
    jy = 1
  else
    jy = 1 - ( (N-1) * strideY )
  end if
  if ( strideX == 1 ) then
    do j = 1, N
      if ( Y( jy ) /= 0.0d0 ) then
        temp = alpha * Y( jy )
        do i = 1, M
          A( i, j ) = A( i, j ) + ( X( i ) * temp )
        end do
      end if
      jy = jy + strideY
    end do
  else
    if ( strideX > 0 ) then
      kx = 1
    else
      kx = 1 - ( (M-1) * strideX )
    end if
    do j = 1, N
      if ( Y( jy ) /= 0.0d0 ) then
        temp = alpha * Y( jy )
        ix = kx
        do i = 1, M
          A( i, j ) = A( i, j ) + ( X( ix ) * temp )
          ix = ix + strideX
        end do
      end if
      jy = jy + strideY
    end do
  end if
  return
end subroutine dger
