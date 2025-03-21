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

!> Wraps `idamax` as a subroutine.
!
! @param {integer} N - number of indexed elements
! @param {Array<double>} dx - input array
! @param {integer} strideX - stride length
! @param {integer} idx - output variable reference
!<
subroutine idamaxsub( N, dx, strideX, idx )
  implicit none
  ! ..
  ! External functions:
  interface
    integer function idamax( N, dx, strideX )
      double precision :: dx(*)
      integer :: strideX, N
    end function idamax
  end interface
  ! ..
  ! Scalar arguments:
  integer :: strideX, N, idx
  ! ..
  ! Array arguments:
  double precision :: dx(*)
  ! ..
  ! Find the maximum absolute value:
  idx = idamax( N, dx, strideX )
  return
end subroutine idamaxsub