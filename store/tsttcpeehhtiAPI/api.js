import axios from "axios"
const tsttcpeehhtiAPI = axios.create({
  baseURL: "https://tst-tc2302-peehhti-108494.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return tsttcpeehhtiAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return tsttcpeehhtiAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return tsttcpeehhtiAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return tsttcpeehhtiAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return tsttcpeehhtiAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return tsttcpeehhtiAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return tsttcpeehhtiAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return tsttcpeehhtiAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tsttcpeehhtiAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return tsttcpeehhtiAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return tsttcpeehhtiAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return tsttcpeehhtiAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tsttcpeehhtiAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return tsttcpeehhtiAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
