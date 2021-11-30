import { createStore } from "https://unpkg.com/browse/redux@4.1.2/es/redux.js";


const initialState = {
    buttonClicked : "no",
    divVisible: "no"
}

function rootReducer(state = initialState, action){
    console.log(action)
    switch(action.type){
        case "BUTTON_CLICKED":
            return {...state, buttonClicked : "yes"};
        case "DIV_VISIBLE":
            return {...state, divVisible : "yes"};
        default:
            return state;
    }
}

const store = createStore(rootReducer);

const button = document.getElementById("root-button");
button.addEventListener("click", function() {
    alert('Hi');
    const buttonClickedAction = {
        type: "BUTTON_CLICKED"
    }
    const divVisibleAction = {
        type: 'DIV_VISIBLE'
    }
    store.dispatch(buttonClickedAction);
    store.dispatch(divVisibleAction);
});

store.subscribe(function() {
    if(store.getState().divVisible === "yes"){
        const div = document.getElementById("root-div");
        div.style.display = "block";
    }
});