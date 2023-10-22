import React from 'react'
const initialState ={
    foo :[1],
    switch:false
};
export default function FooReduce(state =initialState, action) {
   switch (action.type){
       case 'SET_FOO':
           return Object.assign({}, state, {
               foo: action.foo, 
               switch:true
           });
    
           case 'PUSH_FOO':
            return Object.assign({}, state, {
                foo: [
                    ...state.foo,
                    action.foo
                ], 
                switch:!state.switch
            });
            default :
            return state ;
   }
}
// a voiir
// dispatch ( { type: 'SET_FOO', foo: [1, 2] }):
// dispatch ( { type: 'PUSH_FOO', foo: 3 }):
// dispatch ( { type: 'PUSH_FOO', foo: 6}):
