export default {
    jump: new KeyboardEvent('keydown', {key: 'Space', keycode: 321}),
    dispatch(event) {
        document.dispatchEvent(this[event]);
    }
}