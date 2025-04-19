import React from "react";
import Typography from "../Components/Typography";

export default {
    title: "Typography",
    component: Typography,
};

export const Typo = () => (
    <div>
        <Typography variant="h1" size="large" className='text-blue-600'>This is a H1 Large</Typography>
        <Typography variant="h2" size="medium">This is a H2 medium</Typography>
        <Typography variant="p" size="small">This is a paragraph small</Typography>
        <Typography variant="span" size="medium" className="text-red-500">This is a Span with custom class</Typography>
    </div>
)