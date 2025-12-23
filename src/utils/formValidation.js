// Enhanced form validation utilities with detailed error messages

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email || !email.trim()) {
    return { isValid: false, message: 'Email address is required' };
  }
  
  if (!emailRegex.test(email)) {
    return { isValid: false, message: 'Please enter a valid email address' };
  }
  
  return { isValid: true, message: '' };
};

export const validateName = (name) => {
  if (!name || !name.trim()) {
    return { isValid: false, message: 'Name is required' };
  }
  
  if (name.trim().length < 2) {
    return { isValid: false, message: 'Name must be at least 2 characters long' };
  }
  
  if (name.trim().length > 50) {
    return { isValid: false, message: 'Name must be less than 50 characters' };
  }
  
  return { isValid: true, message: '' };
};

export const validateCompany = (company) => {
  if (!company || !company.trim()) {
    return { isValid: false, message: 'Company name is required' };
  }
  
  if (company.trim().length < 2) {
    return { isValid: false, message: 'Company name must be at least 2 characters long' };
  }
  
  return { isValid: true, message: '' };
};

export const validateMessage = (message) => {
  if (!message || !message.trim()) {
    return { isValid: false, message: 'Message is required' };
  }
  
  if (message.trim().length < 10) {
    return { isValid: false, message: 'Message must be at least 10 characters long' };
  }
  
  if (message.trim().length > 1000) {
    return { isValid: false, message: 'Message must be less than 1000 characters' };
  }
  
  return { isValid: true, message: '' };
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  
  if (!phone || !phone.trim()) {
    return { isValid: false, message: 'Phone number is required' };
  }
  
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
  
  if (!phoneRegex.test(cleanPhone)) {
    return { isValid: false, message: 'Please enter a valid phone number' };
  }
  
  return { isValid: true, message: '' };
};

// Comprehensive form validation
export const validateContactForm = (formData) => {
  const errors = {};
  let isValid = true;
  
  // Validate name
  const nameValidation = validateName(formData.name);
  if (!nameValidation.isValid) {
    errors.name = nameValidation.message;
    isValid = false;
  }
  
  // Validate email
  const emailValidation = validateEmail(formData.email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.message;
    isValid = false;
  }
  
  // Validate company
  const companyValidation = validateCompany(formData.company);
  if (!companyValidation.isValid) {
    errors.company = companyValidation.message;
    isValid = false;
  }
  
  // Validate message
  const messageValidation = validateMessage(formData.message);
  if (!messageValidation.isValid) {
    errors.message = messageValidation.message;
    isValid = false;
  }
  
  return { isValid, errors };
};

// Newsletter validation
export const validateNewsletterForm = (email) => {
  const emailValidation = validateEmail(email);
  return {
    isValid: emailValidation.isValid,
    errors: emailValidation.isValid ? {} : { email: emailValidation.message }
  };
};

// Real-time validation helper
export const getFieldValidationState = (fieldName, value, errors) => {
  const hasError = errors[fieldName];
  const isEmpty = !value || !value.trim();
  
  if (hasError) {
    return 'error';
  } else if (!isEmpty) {
    return 'success';
  } else {
    return 'default';
  }
};

// Get validation classes for input styling
export const getValidationClasses = (fieldName, value, errors) => {
  const state = getFieldValidationState(fieldName, value, errors);
  
  const baseClasses = 'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition-colors';
  
  switch (state) {
    case 'error':
      return `${baseClasses} border-red-500 focus:border-red-500 bg-red-50`;
    case 'success':
      return `${baseClasses} border-green-500 focus:border-green-500 bg-green-50`;
    default:
      return `${baseClasses} border-gray-300 focus:border-indigo-500`;
  }
};