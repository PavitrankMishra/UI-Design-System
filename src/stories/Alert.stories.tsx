import React from 'react';
import Alert from '../Components/Alert';

export default {
    title: 'Alert',
    component: Alert,
};

export const ErrorAlert = () => (
    <Alert
        variant="error"
        title="Error"
        description="Something went wrong."
    />
);

export const SuccessAlert = () => (
    <Alert
        variant="success"
        title="Success"
        description="Your changes have been saved."
    />
);

export const InfoAlert = () => (
    <Alert
        variant="info"
        title="Info"
        description="This is some informational text."
    />
);

export const WarningAlert = () => (
    <Alert
        variant="warning"
        title="Warning"
        description="Please check your inputs."
    />
);
