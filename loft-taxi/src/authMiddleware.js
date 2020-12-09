import {logIn} from './action'
import {serverLogin} from './api'
import {serverRegistration} from './api'
import {AUTHENTICATE} from './action'
import {REGISTRATION} from './action'
import {logOut} from './action'

export const authMiddleware = (store) => (next) => async (action) =>{
if(action.type===AUTHENTICATE) {
  const {email,password} = action.payload;
  const success = await serverLogin(email,password)
  if(success){
    store.dispatch(logIn())
  }
} else {
  next(action)
}
}


export const regMiddleware = (store) => (next) => async (action) =>{
  if(action.type===REGISTRATION) {
    const {email,password,name,surname} = action.payload;
    const success = await serverRegistration(email,password,name,surname)
    if(success){
      store.dispatch(logOut())
    }
  } else {
    next(action)
  }
     }