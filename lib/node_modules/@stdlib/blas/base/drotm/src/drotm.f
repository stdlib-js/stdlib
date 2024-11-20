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

!> Applies a modified Givens plane rotation.
!
! ## Notes
!
! * Modified version of reference BLAS level1 routine (version 3.12.0). Updated to "free form" Fortran 95.
!
! * Apply the modified givens transformation, H, to the 2 by N matrix `(DX**T)`, where `**T` indicates transpose. The elements of `DX` are in `(DX**T)`
!
!   `DX(LX+I*INCX)`, `I = 0` to `N-1`, where `LX = 1` if `INCX .GE. 0`, else `LX = (-INCX)*N`, and similarly for `DY` using using `LY` and `INCY`.
!
!   With `DPARAM(1)=DFLAG`, `H` has one of the following forms..
!
!   ```
!     DFLAG=-1.D0      DFLAG=0.D0      DFLAG=1.D0     DFLAG=-2.D0
!
!     (DH11  DH12)    (1.D0  DH12)    (DH11  1.D0)    (1.D0  0.D0)
!   H=(          )    (          )    (          )    (          )
!     (DH21  DH22),   (DH21  1.D0),   (-1.D0 DH22),   (0.D0  1.D0).
!   ```
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
! @param {Array<double>} dx - first input array
! @param {integer} strideX - `dx` stride length
! @param {Array<double>} dy - second input array
! @param {integer} strideY - `dy` stride length
! @param {Array<double>} dparam - parameters for the modified Givens transformation
!<
subroutine drotm( N, dx, strideX, dy, strideY, dparam )
  implicit none
  ! ..
  ! Internal parameters:
  integer, parameter :: dp=kind(0.0d0)  ! double-precision
  ! ..
  ! Scalar arguments:
  integer :: strideX, strideY, N
  ! ..
  ! Array arguments:
  real(dp) :: dparam(5), dx(*), dy(*)
  ! ..
  ! Local scalars:
  real(dp) :: dflag, dh11, dh12, dh21, dh22, w, z
  integer :: i, kx, ky, nsteps
  ! ..
  dflag = dparam(1)
  if( n <= 0 .OR. ( dflag + 2.0d0 == 0.0d0 ) ) then
    return
  end if
  if( strideX == strideY .AND. strideX > 0 ) then
    nsteps = n * strideX
    if( dflag < 0.0d0 ) then
      dh11 = dparam( 2 )
      dh21 = dparam( 3 )
      dh12 = dparam( 4 )
      dh22 = dparam( 5 )
      do i = 1, nsteps, strideX
        w = dx( i )
        z = dy( i )
        dx( i ) = ( dh11 * w ) + ( dh12 * z )
        dy( i ) = ( dh21 * w ) + ( dh22 * z )
      end do
    else if( dflag == 0.0d0 ) then
      dh12 = dparam( 4 )
      dh21 = dparam( 3 )
      do i = 1, nsteps, strideX
        w = dx( i )
        z = dy( i )
        dx( i ) = w + ( z * dh12 )
        dy( i ) = ( w * dh21 ) + z
      end do
    else
      dh11 = dparam( 2 )
      dh22 = dparam( 5 )
      do i = 1, nsteps, strideX
        w = dx( i )
        z = dy( i )
        dx( i ) = ( dh11 * w ) + z
        dy( i ) = -w + ( dh22 * z )
      end do
    end if
  else
    if( strideX < 0 ) then
      kx = ( ( 1 - n ) * strideX ) + 1
    else
      kx = 1
    end if
    if( strideY < 0 ) then
      ky = ( ( 1 - n ) * strideY ) + 1
    else
      ky = 1
    end if
    if( dflag < 0.0d0 ) then
      dh11 = dparam( 2 )
      dh21 = dparam( 3 )
      dh12 = dparam( 4 )
      dh22 = dparam( 5 )
      do i = 1, n
        w = dx( kx )
        z = dy( ky )
        dx( kx ) = ( dh11 * w ) + ( dh12 * z )
        dy( ky ) = ( dh21 * w ) + ( dh22 * z )
        kx = kx + strideX
        ky = ky + strideY
      end do
    else if( dflag == 0.0d0 ) then
      dh12 = dparam( 4 )
      dh21 = dparam( 3 )
      do i = 1, n
        w = dx( kx )
        z = dy( ky )
        dx( kx ) = w + ( z * dh12 )
        dy( ky ) = ( w * dh21 ) + z
        kx = kx + strideX
        ky = ky + strideY
      end do
    else
      dh11 = dparam( 2 )
      dh22 = dparam( 5 )
      do i = 1, n
        w = dx( kx )
        z = dy( ky )
        dx( kx ) = ( dh11 * w ) + z
        dy( ky ) = -w + ( dh22 * z )
        kx = kx + strideX
        ky = ky + strideY
      end do
    end if
  end if
  return
end subroutine drotm