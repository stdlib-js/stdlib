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

!> Wraps `dsdot` as a subroutine.
!
! @param {integer} N - number of values over which to compute the dot product
! @param {Array<real>} sx - first array
! @param {integer} strideX - `sx` stride length
! @param {Array<real>} sy - second array
! @param {integer} strideY - `sy` stride length
! @param {double} dot - output variable reference
!<
subroutine dsdotsub( N, sx, strideX, sy, strideY, dot )
  implicit none
  ! ..
  ! External functions:
  interface
    double precision function dsdot( N, sx, strideX, sy, strideY )
      integer :: strideX, strideY, N
      real :: sx(*), sy(*)
    end function dsdot
  end interface
  ! ..
  ! Scalar arguments:
  integer :: strideX, strideY, N
  double precision :: dot
  ! ..
  ! Array arguments:
  real :: sx(*), sy(*)
  ! ..
  ! Compute the dot product:
  dot = dsdot( N, sx, strideX, sy, strideY )
  return
end subroutine dsdotsub