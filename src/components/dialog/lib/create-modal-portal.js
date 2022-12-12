const PORTAL_DATA_ATTRIBUTE = 'data-fd-vue-dialog-portal'

export default modalName => {
  const portal = document.createElement('DIV')
  portal.setAttribute(PORTAL_DATA_ATTRIBUTE, modalName)
  return portal
}
