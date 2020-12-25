/**
 * Default values for register form
 */
export const registerDefaultValues = {
  name: '',
  email: '',
  password: '',
  password2: '',
}

/**
 * Rules for register form
 */
export const registerRules = {
  name: {
    required: 'Required!',
    minLength: {
      value: 2,
      message: 'Must be at least 2 characters',
    },
  },
  email: {
    required: 'Required!',
  },
  password: {
    required: 'Required!',
  },
  password2: {
    required: 'Required!',
  },
}

export const isPasswordMatch = (toMatchString: string) => (value: string) =>
  value === toMatchString || 'Passwords do not match'
