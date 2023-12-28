import React from 'react';
import { describe, test, expect } from  'vitest';
import { screen, render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';

const user = userEvent.setup()

describe('<App/>', () => {
    test('should add a new task and remove them', async() =>{
        
        render(<App/>);
        const textAlt = screen.getByText('No hay tareas cargadas')
        expect(textAlt).toBeDefined()

        const input = screen.getByRole('textbox');
        expect(input).toBeDefined()

        const form = screen.getByRole('form');
        expect(form).toBeDefined()

        const button = form.querySelector('button');
        expect(button).toBeDefined()

        const inputText = crypto.randomUUID()
        await user.type(input, inputText);
        await user.click(button)

        act(() => {
            expect(screen.queryByText('No hay tareas cargadas')).toBeNull();
            });

        const list = screen.getByRole('list')
        expect(list).toBeDefined()

        expect(list.childNodes.length).toBe(1)

        const newTask  = screen.getByText(inputText)

        const removeButton = newTask.querySelector('button');

        expect(removeButton).toBeDefined()

        await user.click(removeButton);

        expect(textAlt).toBeDefined()

    })
})