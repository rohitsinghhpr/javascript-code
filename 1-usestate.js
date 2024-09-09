function useState(s) {
    let state = s;
    function updateState(new_state) {
        return state = new_state;
    }
    return [state, updateState];
}

let [naam, setName] = useState('Rohit');
console.log(naam);
console.log(setName('singh'));
console.log(naam);