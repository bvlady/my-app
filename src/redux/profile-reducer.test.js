import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11},

    ],
};

test('length of posts should be incremented', () => {
    // 1.start data
    let action = addPostActionCreator('it-kamasutra.com' )

    // 2.action
    let newState = profileReducer (state, action)
    //expectation
    expect( newState.posts.length).toBe(5)
});
test('message of new posts should be it-kamasutra.com', () => {
    // 1.start data
    let action = addPostActionCreator('it-kamasutra.com' )

    // 2.action
    let newState = profileReducer (state, action)
    //expectation
    expect( newState.posts[4].message).toBe('it-kamasutra.com')
});
test('after deleting length of message should be decrement', () => {
    // 1.start data
    let action = deletePost(1)

    // 2.action
    let newState = profileReducer (state, action)
    //expectation
    expect( newState.posts.length).toBe(3)
});
test('after deleting length shouldn`t decrement if id incorrect', () => {
    // 1.start data
    let action = deletePost(1000)

    // 2.action
    let newState = profileReducer (state, action)
    //expectation
    expect( newState.posts.length).toBe(4)
});
