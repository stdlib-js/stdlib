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

!> Wraps `scabs1` as a subroutine.
!
! @param {complex} c - complex number
! @param {real} y - result
!<
subroutine scabs1sub( c, y )
  implicit none
  ! ..
  ! External functions:
  interface
    real function scabs1( c )
      complex :: c
    end function scabs1
  end interface
  ! ..
  ! Scalar arguments:
  complex :: c
  real :: y
  ! ..
  ! Compute the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point number:
  y = scabs1( c )
  return
end subroutine scabs1sub