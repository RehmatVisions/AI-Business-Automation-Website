import React, { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};

export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  const showAlert = (alertProps) => {
    const id = Date.now() + Math.random();
    const alert = { 
      id, 
      duration: 5000,
      position: 'top-right',
      showProgress: true,
      allowClose: true,
      ...alertProps 
    };
    
    setAlerts(prev => [...prev, alert]);
    
    // Auto remove if duration is set
    if (alert.duration > 0) {
      setTimeout(() => {
        removeAlert(id);
      }, alert.duration);
    }
    
    return id;
  };

  const removeAlert = (id) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  const clearAllAlerts = () => {
    setAlerts([]);
  };

  // Form-specific alerts
  const formSuccess = (formType = 'form') => {
    const messages = {
      contact: {
        title: 'Message Sent Successfully!',
        message: "Thank you for reaching out. We'll get back to you within 24 hours."
      },
      newsletter: {
        title: 'Successfully Subscribed!',
        message: 'Welcome to our newsletter community. Stay tuned for updates!'
      },
      demo: {
        title: 'Demo Request Submitted!',
        message: 'Our team will contact you soon to schedule your personalized demo.'
      },
      pricing: {
        title: 'Plan Selection Confirmed!',
        message: 'Redirecting to secure payment processing...'
      },
      default: {
        title: 'Form Submitted Successfully!',
        message: 'Your information has been received and processed.'
      }
    };

    const alertData = messages[formType] || messages.default;
    return showAlert({
      type: 'success',
      title: alertData.title,
      message: alertData.message,
      duration: 5000,
      showProgress: true
    });
  };

  const formError = (errorType = 'general') => {
    const messages = {
      validation: {
        title: 'Please Check Your Input',
        message: 'Some fields contain errors. Please review and try again.'
      },
      network: {
        title: 'Connection Error',
        message: 'Unable to submit form. Please check your connection and try again.'
      },
      server: {
        title: 'Server Error',
        message: 'Something went wrong on our end. Please try again later.'
      },
      general: {
        title: 'Submission Failed',
        message: 'Unable to process your request. Please try again.'
      }
    };

    const alertData = messages[errorType] || messages.general;
    return showAlert({
      type: 'error',
      title: alertData.title,
      message: alertData.message,
      duration: 6000
    });
  };

  const loading = (title, message) => {
    return showAlert({
      type: 'loading',
      title,
      message,
      duration: 0,
      allowClose: false,
      showProgress: false
    });
  };

  const error = (title, message) => {
    return showAlert({
      type: 'error',
      title,
      message,
      duration: 6000
    });
  };

  const value = {
    alerts,
    showAlert,
    removeAlert,
    clearAllAlerts,
    formSuccess,
    formError,
    loading,
    error
  };

  return (
    <AlertContext.Provider value={value}>
      {children}
    </AlertContext.Provider>
  );
};