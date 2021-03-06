
/**
 * validate input text
 * @param {String} targetName 
 * @param {String} targetValue 
 */

const validation = (targetName, targetValue) => {
  let isValid = false
  let errorMessage = ''
  switch (targetName) {
    case 'email':
      isValid = !!targetValue.match(/[\w-]+@([\w-]+\.)+[\w-]+/i)
      errorMessage = isValid ? '' : 'invalid email'
      break;
    case 'password':
      switch (false) {
        case !!targetValue.match(/(?=.*[a-z])/g):
          errorMessage = 'at least one lower case'
          isValid = false
          break;
        case !!targetValue.match(/(?=.*[A-Z])/g):
          errorMessage = 'at least one Upper case'
          isValid = false
          break;
        case !!targetValue.match(/^\w{7,16}$/g):
          errorMessage = 'length between 6 to 15'
          isValid = false
          break;
        default: isValid = true
      }
      break;
    case 'name':
      if (targetValue.length > 200) {
        errorMessage = 'shorter than 200'
        isValid = false;
      } else {
        isValid = true
      }
      break;
    default: return null
  }
  if (!targetValue) {
    errorMessage = "Required"
    isValid = false
    if (targetName === 'name') {
      errorMessage = ''
      isValid = true
    }
  }
  return {
    targetName: targetName,
    isValid: isValid,
    errorMessage: errorMessage
  }
}
export default validation;