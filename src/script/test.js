import styles from '../style/test.css';

function creatTest() {
    let greet = document.createElement('div');
    greet.className = styles.root;
    greet.textContent = "Hi there and greetings!";
    return greet;
}

export { creatTest };