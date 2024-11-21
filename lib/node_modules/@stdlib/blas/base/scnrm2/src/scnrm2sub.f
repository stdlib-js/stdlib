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

!> Wraps `scnrm2` as a subroutine.
!
! @param {integer} N - number of indexed elements
! @param {Array<complex>} cx - input array
! @param {integer} strideX - `cx` stride length
! @param {real} nrm2 - output variable reference
!<
subroutine scnrm2sub( N, cx, strideX, nrm2 )
  implicit none
  ! ..
  ! External functions:
  interface
    real function scnrm2( N, cx, strideX )
      complex :: cx(*)
      integer :: strideX, N
    end function scnrm2
  end interface
  ! ..
  ! Scalar arguments:
  integer :: strideX, N
  real :: nrm2
  ! ..
  ! Array arguments:
  complex :: cx(*)
  ! ..
  ! Compute the L2-norm:
  nrm2 = scnrm2( N, cx, strideX )
  return
end subroutine scnrm2sub
