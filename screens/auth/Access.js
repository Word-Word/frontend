import React, { useEffect } from "react"
import AccessComponent from "../../components/auth/Access"
import { useDispatch, useSelector } from "react-redux"
import { signUp, login } from "../../store/auth"

// const login = () => {
//   setIsLoading(true)
//   // Simulate an API call
//   setTimeout(() => {
//     LayoutAnimation.easeInEaseOut()
//     this.setState({
//       isLoading: false,
//       isEmailValid: this.validateEmail(email) || this.emailInput.shake(),
//       isPasswordValid: password.length >= 8 || this.passwordInput.shake(),
//     })
//   }, 1500)
// }

// const signUp = () => {
//   const { email, password, passwordConfirmation } = this.state
//   this.setState({ isLoading: true })
//   // Simulate an API call
//   setTimeout(() => {
//     LayoutAnimation.easeInEaseOut()
//     this.setState({
//       isLoading: false,
//       isEmailValid: this.validateEmail(email) || this.emailInput.shake(),
//       isPasswordValid: password.length >= 8 || this.passwordInput.shake(),
//       isConfirmationValid: password === passwordConfirmation || this.confirmationInput.shake(),
//     })
//   }, 1500)
// }
const validateEmail = (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return re.test(email)
}
const Access = ({navigation}) => {
  const dispatch = useDispatch()
  const { type, auth, authError } = useSelector(({ auth }) => ({
    type: auth.signUp,
    auth: auth.auth,
    authError: auth.authError,
  }))
  const signUpSubmit = (email, password, passwordConfirmation) => {
    if (password !== passwordConfirmation) {
      return
    }
    dispatch(signUp({ email, password, passwordConfirmation }))
    console.log(`signUpSubmit 요깅!`, email, password, passwordConfirmation)
  }
  const loginSubmit = (email, password) => {
    dispatch(login({ email, password }))
    console.log(`loginSubmit 요깅!`, email, password)
  }

  useEffect(() => {
    console.log(`useEffect`)

    if (authError) {
      console.log(`err`, authError)
    }
    if (auth) {
      console.log(`성공`)
    }
  }, [auth, authError])
  return <AccessComponent signUpSubmit={signUpSubmit} loginSubmit={loginSubmit} navigation={navigation} />
}
Access.navigationOptions = {
  header: null,
}
export default Access
