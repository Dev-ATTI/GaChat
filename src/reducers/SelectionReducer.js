export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            if (!action.bool) {
                return action.payload;
            }
            return action.payload + 100;
        default:
            return state;
    }
};
