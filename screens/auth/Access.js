import React, { useEffect, useState } from "react"
import AccessComponent from "../../components/auth/Access"
import { useDispatch, useSelector } from "react-redux"
import { changeField, login, initializeType } from "../../store/auth"

const Access = ({ navigation }) => {
  //const dispatch = useDispatch()
  const dispatch = useDispatch()
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    // auth: auth.auth,
    // authError: auth.authError,
    // user: user.user,
  }))
  const onSubmit = () => {
    const { email, password } = form
    console.log(form)

    //console.log(`onSubmit`, email, password)

    dispatch(login({ email, password }))
    console.log(`loginSubmit 요깅!`, email, password)
  }

  const onChangeEmail = (value) => {
    dispatch(
      changeField({
        form: "login",
        key: "email",
        value: value,
      }),
    )
  }
  const onChangePassword = (value) => {
    dispatch(
      changeField({
        form: "login",
        key: "password",
        value: value,
      }),
    )
  }

  //console.log(useEmail);

  useEffect(() => {
    console.log(`auth useEffect`)
    if (authError) {
      console.log(`err`, authError)
    }
    if (auth) {
      console.log(`성공`, auth)
    }
  }, [auth, authError])

  useEffect(() => {
    console.log(`user useEffect`)
    if (user) {
      console.log(`user`, user)
    }
  }, [user])

  useEffect(() => {
    dispatch(initializeType("login"))
  }, [dispatch])

  return <AccessComponent type="login" onSubmit={onSubmit} navigation={navigation} form={form} onChangeEmail={onChangeEmail} user={user} onChangePassword={onChangePassword} />
}
Access.navigationOptions = {
  header: null,
}
export default Access
