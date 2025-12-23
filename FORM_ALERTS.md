# Form Alert System

A clean and simple alert notification system for form submissions and user feedback.

## Features

✅ **Form-Specific Alerts**: Pre-configured messages for different form types
✅ **Loading States**: Show loading alerts during form submission
✅ **Validation Feedback**: Enhanced form validation with visual feedback
✅ **Auto-Dismiss**: Alerts automatically disappear after a set duration
✅ **Progress Indicators**: Visual progress bars for timed alerts
✅ **Responsive Design**: Works perfectly on all device sizes

## Usage

### Basic Form Alerts

```jsx
import { useAlert } from '../contexts/AlertContext';

const MyForm = () => {
  const { formSuccess, formError, loading, removeAlert } = useAlert();

  const handleSubmit = async (formData) => {
    // Show loading alert
    const loadingId = loading('Sending...', 'Please wait while we process your request.');
    
    try {
      // Simulate API call
      await submitForm(formData);
      
      // Remove loading and show success
      removeAlert(loadingId);
      formSuccess('contact'); // Pre-configured success message
      
    } catch (error) {
      // Remove loading and show error
      removeAlert(loadingId);
      formError('network'); // Pre-configured error message
    }
  };
};
```

### Available Form Types

#### Success Messages (`formSuccess`)
- `contact` - Contact form submission
- `newsletter` - Newsletter subscription
- `demo` - Demo request
- `pricing` - Plan selection
- `default` - Generic form submission

#### Error Messages (`formError`)
- `validation` - Form validation errors
- `network` - Network/connection errors
- `server` - Server-side errors
- `general` - Generic errors

### Form Validation

Enhanced form validation with visual feedback:

```jsx
import { validateContactForm, getValidationClasses } from '../utils/formValidation';

const [formData, setFormData] = useState({ name: '', email: '', message: '' });
const [errors, setErrors] = useState({});

const validateForm = () => {
  const validation = validateContactForm(formData);
  setErrors(validation.errors);
  return validation.isValid;
};

// In your JSX
<input
  className={getValidationClasses('email', formData.email, errors)}
  // ... other props
/>
```

## Implementation

### 1. Contact Form (Pricing Page)
- Full name, email, company, message validation
- Loading state during submission
- Success/error feedback
- Visual validation states

### 2. Newsletter Form (Footer)
- Email validation
- Subscription confirmation
- Error handling for invalid emails

## Alert Types

- **Success**: Green gradient with checkmark icon
- **Error**: Red gradient with X icon  
- **Loading**: Purple gradient with spinning icon
- **Info**: Blue gradient with info icon
- **Warning**: Yellow gradient with warning icon

## Customization

All alerts are fully customizable through the `AlertContext`:

```jsx
const { showAlert } = useAlert();

showAlert({
  type: 'success',
  title: 'Custom Title',
  message: 'Custom message',
  duration: 4000,
  showProgress: true
});
```

## Files Structure

```
src/
├── contexts/
│   └── AlertContext.jsx          # Main alert context and logic
├── components/
│   └── AlertDisplay.jsx          # Alert rendering component
├── utils/
│   └── formValidation.js         # Form validation utilities
├── pages/
│   └── Pricing.jsx              # Contact form implementation
└── layouts/
    └── Footer.jsx               # Newsletter form implementation
```

## Benefits

1. **Consistent UX**: Standardized alert messages across all forms
2. **Better Feedback**: Users always know the status of their actions
3. **Enhanced Validation**: Real-time visual feedback for form fields
4. **Professional Feel**: Smooth animations and modern design
5. **Accessibility**: Proper ARIA labels and keyboard navigation
6. **Performance**: Optimized rendering and cleanup

The form alert system provides a professional and user-friendly way to handle all form interactions on the website.