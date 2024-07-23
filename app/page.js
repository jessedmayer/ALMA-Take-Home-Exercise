'use client'

import Image from "next/image";
import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { person } from '@jsonforms/examples';
import {
    materialRenderers,
    materialCells,
} from '@jsonforms/material-renderers';



const schema = {
    type: 'object',
    properties: {
        first_name: {
            type: 'string',
            minLength: 1,
            maxLength: 20,
        },
        last_name: {
            type: 'string',
            minLength: 1,
            maxLength: 20,
        },
        email: {
            type: 'string',
            minLength: 1,
            maxLength: 20,
        },
        country: {
            type: 'string',
            minLength: 1,
            maxLength: 20,
        },
        linkedin: {
            type: 'string',
            minLength: 1,
            maxLength: 40,
        },
        visa: {
            type: 'string',
            enum: ['0-1', 'EB-1A', 'EB-2 NIW', 'I dont know'],
        },
        long_input: {
            type: 'string',
            minLength: 300,
            description: 'What is your current status and when does it expire? ' +
                'What is your past immigration history?' +
                'Are you looking for long-term permanent residency or short-term employment visa or both?' +
                'Are there any timeline considerations',
        },
    },
    required: ['first_name', 'last_name', 'email', 'linkedin', 'visa' , 'resume', 'long_input'],
};
const uischema = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/first_name',
        },
        {
            type: 'Control',
            scope: '#/properties/last_name',
        },
        {
            type: 'Control',
            scope: '#/properties/email',
        },
        {
            type: 'Control',
            scope: '#/properties/country',
        },
        {
            type: 'Control',
            scope: '#/properties/linkedin',
        },

        {
            "type": "Label",
            "text": "Visa categories of interest?"
        },

        {
            type: 'VerticalLayout',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/visa',
                },
            ],
        },


        {
            "type": "Label",
            "text": "How can we help you?"
        },

        {
            type: 'VerticalLayout',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/long_input',
                },
            ],
        },

    ],
};
const initialData = {};
export default function Home() {
    const [data, setData] = useState(initialData);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Want to understand your visa options?</h1>
        <h2>Submit the form below and our team of experienced attorneys will
            review your information and send a preliminary assessment of your
            case based on your goals.</h2>

        <JsonForms
            schema={schema}
            uischema={uischema}
            data={data}
            renderers={materialRenderers}
            cells={materialCells}
            onChange={({ errors, data }) => setData(data)}
        />
        <button>Submit</button>

    </main>
  );
}

