import { notify } from './notifier';
import { order } from './grocer';

export function onSuccess() {
  // implement the onSuccess callback to call notify with a success message
  let msg = {message:'SUCCESS'}
  return notify(msg)
}

export function onError() {
  // implement the onError callback to call notify with an error message
  let err = {message:'ERROR'}
  return notify(err)
}

export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  // implement the orderFromGrocer function to order the query
  order(query, onSuccessCallback, onErrorCallback)
}

export function postOrder(variety, quantity) {
  //implement the postOrder function to create a query and order
  orderFromGrocer(
    {variety, quantity},
    onSuccess,
    onError
  )
}
