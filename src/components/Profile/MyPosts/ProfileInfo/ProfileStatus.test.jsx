import React from 'react'
import {create} from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus component',() => {
    test('status from props shoult be in the stste', () => {
        const component = create(<ProfileStatus status ='it-kamasutra.com' />);
        const instance = component.getInstance()
        expect(instance.state.status).toBe ('it-kamasutra.com')
    });
    test('after creation input shouldn`t be displayed', () => {
        const component = create(<ProfileStatus status ='it-kamasutra.com' />);
        const root = component.root;
        expect (() => {
            let input = root.findByType('input')
        }).toThrow();
    });
    test('input should be displayed in editMode of sss', () => {
        const component = create(<ProfileStatus status ='it-kamasutra.com' />);
        const root = component.root;
        let span = root.findByType('span')
        expect(span.children[0]).toBe('it-kamasutra.com')
    });
    test('input should be displayed in editMode of span', () => {
        const component = create(<ProfileStatus status ='it-kamasutra.com' />);
        const root = component.root;
        let span = root.findByType('span')
        span.props.onDoubleClick();
        let input = root.findByType('input')
        expect(input.props.value).toBe('it-kamasutra.com')
    });
    test('callback should be  called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='it-kamasutra.com' updateStatus={mockCallback}/>)
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    })
});