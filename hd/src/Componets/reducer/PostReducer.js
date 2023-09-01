const initialState = {
      post : [],
      recive : []
   
}

export default (state = initialState, { type, payload }) => {
    console.log(payload,"jjj");
  switch (type) {

  case 'POST_MES':
    state.post.push(payload);
       console.log(state.post,"hhhh")
    return { ...state,};

    case 'RECIVE_MES' :

    state.recive.push(payload);
    console.log(state.recive,"bbbbbb")
    return{...state,}

  default:
    return state
  }
}
