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
! * Apply the modified givens transformation, H, to the 2 by N matrix `(SX**T)`, where `**T` indicates transpose. The elements of `SX` are in `(SX**T)`
!
!   `SX(LX+I*INCX)`, `I = 0` to `N-1`, where `LX = 1` if `INCX .GE. 0`, else `LX = (-INCX)*N`, and similarly for `SY` using using `LY` and `INCY`.
!
!   With `SPARAM(1)=SFLAG`, `H` has one of the following forms..
!
!   ```
!     SFLAG=-1.E0      SFLAG=0.E0      SFLAG=1.E0     SFLAG=-2.E0
!
!     (SH11  SH12)    (1.E0  SH12)    (SH11  1.E0)    (1.E0  0.E0)
!   H=(          )    (          )    (          )    (          )
!     (SH21  SH22),   (SH21  1.E0),   (-1.E0 SH22),   (0.E0  1.E0).
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
! @param {Array<real>} sx - first input array
! @param {integer} strideX - `sx` stride length
! @param {Array<real>} sy - second input array
! @param {integer} strideY - `sy` stride length
! @param {Array<real>} sparam - parameters for the modified Givens transformation
!<
subroutine srotm( N, sx, strideX, sy, strideY, sparam )
  implicit none
  ! ..
  ! Internal parameters:
  integer, parameter :: sp=kind(0.0)  ! real
  ! ..
  ! Scalar arguments:
  integer :: strideX, strideY, N
  ! ..
  ! Array arguments:
  real(sp) :: sparam(5), sx(*), sy(*)
  ! ..
  ! Local scalars:
  real(sp) :: sflag, sh11, sh12, sh21, sh22, w, z
  integer :: i, kx, ky, nsteps
  ! ..
  sflag = sparam(1)
  if ( n <= 0 .OR. ( sflag+2.0e0 == 0.0e0 ) ) then
    return
  end if
  if ( strideX == strideY .AND. strideX > 0 ) then
    nsteps = n*strideX
    if ( sflag < 0.0e0 ) then
      sh11 = sparam( 2 )
      sh21 = sparam( 3 )
      sh12 = sparam( 4 )
      sh22 = sparam( 5 )
      do i = 1, nsteps, strideX
        w = sx( i )
        z = sy( i )
        sx( i ) = ( sh11*w ) + ( sh12*z )
        sy( i ) = ( sh21*w ) + ( sh22*z )
      end do
    else if ( sflag == 0.0e0 ) then
      sh12 = sparam( 4 )
      sh21 = sparam( 3 )
      do i = 1, nsteps, strideX
        w = sx( i )
        z = sy( i )
        sx( i ) = w + ( z*sh12 )
        sy( i ) = ( w*sh21 ) + z
      end do
    else
      sh11 = sparam( 2 )
      sh22 = sparam( 5 )
      do i = 1, nsteps, strideX
        w = sx( i )
        z = sy( i )
        sx( i ) = ( sh11*w ) + z
        sy( i ) = -w + ( sh22*z )
      end do
    end if
  else
    ky = 1
    if ( strideX < 0 ) then
      kx = ( (1-n) * strideX ) + 1
    else
      kx = 1
    end if
    if ( strideY < 0 ) then
      ky = ( (1-n) * strideY ) + 1
    else
      ky = 1
    end if
    if ( sflag < 0.0e0 ) then
      sh11 = sparam( 2 )
      sh21 = sparam( 3 )
      sh12 = sparam( 4 )
      sh22 = sparam( 5 )
      do i = 1, n
        w = sx( kx )
        z = sy( ky )
        sx( kx ) = ( sh11*w ) + ( sh12*z )
        sy( ky ) = ( sh21*w ) + ( sh22*z )
        kx = kx + strideX
        ky = ky + strideY
      end do
    else if ( sflag == 0.0e0 ) then
      sh12 = sparam( 4 )
      sh21 = sparam( 3 )
      do i = 1, n
        w = sx( kx )
        z = sy( ky )
        sx( kx ) = w + ( z*sh12 )
        sy( ky ) = ( w*sh21 ) + z
        kx = kx + strideX
        ky = ky + strideY
      end do
    else
      sh11 = sparam( 2 )
      sh22 = sparam( 5 )
      do i = 1, n
        w = sx( kx )
        z = sy( ky )
        sx( kx ) = ( sh11*w ) + z
        sy( ky ) = -w + ( sh22*z )
        kx = kx + strideX
        ky = ky + strideY
      end do
    end if
  end if
  return
end subroutine srotm