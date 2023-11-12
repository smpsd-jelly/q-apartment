import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }
  async confirmAlert(options?: {title?: string, text?: string, icon?: SweetAlertIcon, confirmText?: string, cancelText?: string}) {
    return await Swal.fire({
      title: (options?.title ? options.title : 'Confirm?'),
      text: (options?.text ? options.text : 'Do you want to confirm this process?'),
      icon: (options?.icon ? options.icon : 'question'),
      showCancelButton: true,
      confirmButtonText: (options?.confirmText ? options.confirmText : 'Yes'),
      cancelButtonText: (options?.confirmText ? options.confirmText : 'No'),
      allowOutsideClick: false,
      allowEscapeKey: false
    })
  }

  async infoAlert(options?: {title?: string, text?: string}) {
    return await Swal.fire({
      title: (options?.title ? options.title : 'Info'),
      text: (options?.text ? options.text : 'More about information'),
      icon: 'info',
      showConfirmButton: true,
      allowEnterKey: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
    })
  }

  async warningAlert(options?: {title?: string, text?: string}) {
    return await Swal.fire({
      title: (options?.title ? options.title : 'Warning'),
      text: (options?.text ? options.text : 'Something went wrong. Please try again.'),
      icon: 'warning',
      showConfirmButton: true,
      allowEnterKey: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
    })
  }

  async successAlert(options?: {title?: string, text?: string, timer?: number}) {
    return await Swal.fire({
      title: (options?.title ? options.title : 'Success'),
      text: (options?.text ? options.text : 'This process is successfully!'),
      icon: 'success',
      showConfirmButton: false,
      timer: (options?.timer ? options.timer : 1500),
      allowEnterKey: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
    })
  }

  async errorAlert(options?: {title?: string, text?: string, timer?: number}) {
    return await Swal.fire({
      title: (options?.title ? options.title : 'Error'),
      text: (options?.text ? options.text : 'Something went wrong. Please try again.'),
      icon: 'error',
      showConfirmButton: false,
      timer: (options?.timer ? options.timer : 1500),
      allowEnterKey: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
    })
  }

  async loadingAlert(options?: {title?: string, text?: string, timer?: number}) {
    let timerInterval: any
    return await Swal.fire({
      title: (options?.title ? options.title : 'Loading'),
      text: (options?.text ? options.text : 'Please wait for loading...'),
      timer: (options?.timer ? options.timer : 1500),
      timerProgressBar: true,
      showConfirmButton: false,
      allowEnterKey: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    })
  }
}
