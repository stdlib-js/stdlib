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

!> Wraps `snrm2` as a subroutine.
!
! @param {integer} N - number of values over which to compute the norm
! @param {Array<real>} sx - input array
! @param {integer} stride - stride length
! @param {real} nrm2 - output variable reference
!<
subroutine snrm2sub( N, sx, stride, nrm2 )
  implicit none
  ! ..
  ! External functions:
  interface
    real function snrm2( N, sx, stride )
      integer :: stride, N
      real :: sx(*)
    end function snrm2
  end interface
  ! ..
  ! Scalar arguments:
  integer :: stride, N
  real :: nrm2
  ! ..
  ! Array arguments:
  real :: sx(*)
  ! ..
  ! Compute the L2-norm:
  nrm2 = snrm2( N, sx, stride )
  return
end subroutine snrm2sub