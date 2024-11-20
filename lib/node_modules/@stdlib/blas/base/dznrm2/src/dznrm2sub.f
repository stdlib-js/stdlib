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

!> Wraps `dznrm2` as a subroutine.
!
! @param {integer} N - number of indexed elements
! @param {Array<complex<double>>} zx - input array
! @param {integer} strideX - `zx` stride length
! @param {double} nrm2 - L2-norm
!<
subroutine dznrm2sub( N, zx, strideX, nrm2 )
  implicit none
  ! ..
  ! External functions:
  interface
    double precision function dznrm2( N, zx, strideX )
      complex(kind=kind(0.0d0)) :: zx(*)
      integer :: strideX, N
    end function dznrm2
  end interface
  ! ..
  ! Scalar arguments:
  integer :: strideX, N
  double precision :: nrm2
  ! ..
  ! Array arguments:
  complex(kind=kind(0.0d0)) :: zx(*)
  ! ..
  ! Compute the L2-norm:
  nrm2 = dznrm2( N, zx, strideX )
  return
end subroutine dznrm2sub
