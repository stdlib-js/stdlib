!>
! @license Apache-2.0
!
! Copyright (c) 2019 The Stdlib Authors.
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

!> Computes the dot product of two single-precision floating-point vectors.
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
! @param {integer} N - number of values over which to compute the dot product
! @param {Array<real>} sx - first array
! @param {integer} strideX - `sx` stride length
! @param {Array<real>} sy - second array
! @param {integer} strideY - `sy` stride length
! @returns {real} the dot product of `sx` and `sy`
!<
real function sdot( N, sx, strideX, sy, strideY )
  implicit none
  ! ..
  ! Scalar arguments:
  integer :: strideX, strideY, N
  ! ..
  ! Array arguments:
  real, intent(in) :: sx(*), sy(*)
  ! ..
  ! Local scalars:
  real :: stemp
  integer :: mp1, ix, iy, i, m
  ! ..
  ! Intrinsic functions:
  intrinsic mod
  ! ..
  stemp = 0.0e0
  sdot = 0.0e0
  ! ..
  if ( N <= 0 ) then
    return
  end if
  ! ..
  ! If both strides are equal to `1`, use unrolled loops...
  if ( strideX == 1 .AND. strideY == 1 ) then
    m = mod( N, 5 )
   ! ..
    ! If we have a remainder, do a clean-up loop...
    if ( m /= 0 ) then
      do i = 1, m
        stemp = stemp + ( sx( i ) * sy( i ) )
      end do
    end if
    if ( N < M ) then
      sdot = stemp
      return
    end if
    mp1 = m + 1
    do i = mp1, N, 5
      stemp = stemp + &
        ( sx( i ) * sy( i ) ) + &
        ( sx( i+1 ) * sy( i+1 ) ) + &
        ( sx( i+2 ) * sy( i+2 ) ) + &
        ( sx( i+3 ) * sy( i+3 ) ) + &
        ( sx( i+4 ) * sy( i+4 ) )
    end do
  else
    if ( strideX < 0 ) then
      ix = ((1-N)*strideX) + 1
    else
      ix = 1
    endif
    if ( strideY < 0 ) then
      iy = ((1-N)*strideY) + 1
    else
      iy = 1
    endif
    do i = 1, N
      stemp = stemp + ( sx( ix ) * sy( iy ) )
      ix = ix + strideX
      iy = iy + strideY
    end do
  endif
  sdot = stemp
  return
end function sdot