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

!> Computes the dot product of single-precision floating-point two vectors with extended accumulation.
!
! ## Notes
!
! * Modified version of reference BLAS level1 routine (version 3.7.0). Updated to "free form" Fortran 95.
!
! ## Authors
!
! * Lawson, C. L., (JPL), Hanson, R. J., (SNLA),
! * Kincaid, D. R., (U. of Texas), Krogh, F. T., (JPL)
! * Univ. of Tennessee
! * Univ. of California Berkeley
! * Univ. of Colorado Denver
! * NAG Ltd.
!
! ## History
!
! | YYMMDD | DESCRIPTION |
! | ------ | ----------- |
! | 791001 | DATE WRITTEN |
! | 890531 | Changed all specific intrinsics to generic. (WRB) |
! | 890831 | Modified array declarations. (WRB) |
! | 890831 | REVISION DATE from Version 3.2 |
! | 891214 | Prologue converted to Version 4.0 format. (BAB) |
! | 920310 | Corrected definition of LX in DESCRIPTION. (WRB) |
! | 920501 | Reformatted the REFERENCES section. (WRB) |
! | 070118 | Reformat to LAPACK style (JL) |
!
! ## References
!
! * Lawson, Charles L., Richard J. Hanson, Fred T. Krogh, and David Ronald Kincaid. 1979. "Algorithm 539: Basic Linear Algebra Subprograms for Fortran Usage \[F1\]." _ACM Transactions on Mathematical Software_ 5 (3). New York, NY, USA: Association for Computing Machinery: 324–25. doi:[10.1145/355841.355848](https://doi.org/10.1145/355841.355848).
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
! @param {real} sb - scalar constant added to the dot product
! @param {Array<real>} sx - first array
! @param {integer} strideX - `sx` stride length
! @param {Array<real>} sy - second array
! @param {integer} strideY - `sy` stride length
! @returns {real} the dot product of `sx` and `sy`
!<
real function sdsdot( N, sb, sx, strideX, sy, strideY )
  implicit none
  ! ..
  ! Scalar arguments:
  integer :: strideX, strideY, N
  real :: sb
  ! ..
  ! Array arguments:
  real, intent(in) :: sx(*), sy(*)
  ! ..
  ! Local scalars:
  double precision :: dtemp
  integer :: mp1, ix, iy, i, m
  ! ..
  ! Intrinsic functions:
  intrinsic mod, real, dble
  ! ..
  dtemp = dble( sb )
  ! ..
  if ( N <= 0 ) then
    sdsdot = real( dtemp )
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
        dtemp = dtemp + ( dble( sx(i) ) * dble( sy(i) ) )
      end do
    end if
    if ( N < M ) then
      sdsdot = real( dtemp )
      return
    end if
    mp1 = m + 1
    do i = mp1, N, 5
      dtemp = dtemp + &
        ( dble( sx(i) ) * dble( sy(i) ) ) + &
        ( dble( sx(i+1) ) * dble( sy(i+1) ) ) + &
        ( dble( sx(i+2) ) * dble( sy(i+2) ) ) + &
        ( dble( sx(i+3) ) * dble( sy(i+3) ) ) + &
        ( dble( sx(i+4) ) * dble( sy(i+4) ) )
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
      dtemp = dtemp + ( dble( sx(ix) ) * dble( sy(iy) ) )
      ix = ix + strideX
      iy = iy + strideY
    end do
  endif
  sdsdot = real( dtemp )
  return
end function sdsdot