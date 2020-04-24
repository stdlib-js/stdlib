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

!> Wraps `ddot` as a subroutine.
!
! @param {integer} N - number of values over which to compute the dot product
! @param {Array<double>} dx - first array
! @param {integer} strideX - `dx` stride length
! @param {Array<double>} dy - second array
! @param {integer} strideY - `dy` stride length
! @param {double} dot - output variable reference
!<
subroutine ddotsub( N, dx, strideX, dy, strideY, dot )
  implicit none
  ! ..
  ! External functions:
  interface
    double precision function ddot( N, dx, strideX, dy, strideY )
      double precision :: dx(*), dy(*)
      integer :: strideX, strideY, N
    end function ddot
  end interface
  ! ..
  ! Scalar arguments:
  integer :: strideX, strideY, N
  double precision :: dot
  ! ..
  ! Array arguments:
  double precision :: dx(*), dy(*)
  ! ..
  ! Compute the dot product:
  dot = ddot( N, dx, strideX, dy, strideY )
  return
end subroutine ddotsub