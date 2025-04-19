import React from 'react';
import Checkbox from '../Components/Checkbox';

export default {
    title: 'Checkbox',
    component: Checkbox,
};

export const Default = () => (
    <Checkbox label="Accept Terms & Conditions" id="terms" />
);

export const Checked = () => (
    <Checkbox label="Subscribe to Newsletter" id="newsletter" defaultChecked />
);

export const Disabled = () => (
    <Checkbox label="I agree" id="disabled" disabled />
);

export const WithCustomID = () => (
    <Checkbox label="Remember me" id="remember-me" />
);
