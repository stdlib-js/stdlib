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

!> Wraps `dcabs1` as a subroutine.
!
! @param {complex<double>} z - complex number
! @param {double} y - result
!<
subroutine dcabs1sub( z, y )
  implicit none
  ! ..
  ! External functions:
  interface
    double precision function dcabs1( z )
      complex(kind=kind(0.0d0)) :: z
    end function dcabs1
  end interface
  ! ..
  ! Scalar arguments:
  complex(kind=kind(0.0d0)) :: z
  double precision :: y
  ! ..
  ! Compute the sum of the absolute values of the real and imaginary components of a double-precision complex floating-point number:
  y = dcabs1( z )
  return
end subroutine dcabs1sub