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

!> Wraps `dnrm2` as a subroutine.
!
! @param {integer} N - number of values over which to compute the norm
! @param {Array<double>} dx - input array
! @param {integer} stride - stride length
! @param {double} nrm2 - output variable reference
!<
subroutine dnrm2sub( N, dx, stride, nrm2 )
  implicit none
  ! ..
  ! External functions:
  interface
    double precision function dnrm2( N, dx, stride )
      double precision :: dx(*)
      integer :: stride, N
    end function dnrm2
  end interface
  ! ..
  ! Scalar arguments:
  integer :: stride, N
  double precision :: nrm2
  ! ..
  ! Array arguments:
  double precision :: dx(*)
  ! ..
  ! Compute the L2-norm:
  nrm2 = dnrm2( N, dx, stride )
  return
end subroutine dnrm2sub