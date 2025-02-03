body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f9;
}

.calculator {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
}

.display {
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    font-size: 32px; /* Увеличенный шрифт */
    font-weight: bold; /* Жирный шрифт */
    text-align: right;
    font-family: 'Courier New', monospace;
    margin-bottom: 20px;
    height: 60px; /* Увеличенная высота */
    overflow-x: auto;
    white-space: nowrap;
}

.history {
    font-size: 14px;
    color: #888;
    text-align: right;
    margin-bottom: 10px;
    height: 40px;
    overflow-y: auto;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

.button {
    background-color: #e0e0e0;
    border: none;
    border-radius: 5px;
    font-size: 24px; /* Увеличенный шрифт */
    font-weight: bold; /* Жирный шрифт */
    cursor: pointer;
    transition: background-color 0.3s, transform 0.1s;
    height: 70px; /* Увеличенная высота */
    display: flex;
    justify-content: center;
    align-items: center;
}

.button:hover {
    background-color: #d0d0d0;
}

.button:active {
    background-color: #c0c0c0;
    transform: scale(0.95);
}

.button.operator {
    background-color: #ff9500;
    color: white;
}

.button.operator:hover {
    background-color: #e68a00;
}

.button.clear {
    background-color: #ff3b30;
    color: white;
}

.button.clear:hover {
    background-color: #e63329;
}

.button.equal {
    background-color: #34c759;
    color: white;
    grid-column: span 2;
}

.button.equal:hover {
    background-color: #2da94f;
}

.button.zero {
    grid-column: span 2;
}

@media (max-width: 480px) {
    .calculator {
        width: 90%; /* Адаптация под маленькие экраны */
        padding: 15px;
    }

    .display {
        font-size: 28px; /* Уменьшенный шрифт для маленьких экранов */
        height: 50px;
    }

    .button {
        font-size: 20px; /* Уменьшенный шрифт для маленьких экранов */
        height: 60px;
    }
}
