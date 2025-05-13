import { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

export function useIntroSignupForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name cannot be empty';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name cannot be empty';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address cannot be empty';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Looks like this is not an email';
    }

    if (!formData.password) {
      newErrors.password = 'Password cannot be empty';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      // Reset form after successful submission
      setFormData({ firstName: '', lastName: '', email: '', password: '' });
      alert('Success! Your account has been created.');
    }
  };

  return {
    isSubmitting,
    formData,
    errors,
    validateForm,
    handleChange,
    handleSubmit,
  };
}