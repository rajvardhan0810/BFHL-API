const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post('/bfhl', (req, res) => {
    const input = req.body.data;
    const user_id = 'john_doe_17091999';
    const email = 'john@xyz.com';
    const roll_number = 'ABCD123';

    const even_numbers = [];
    const odd_numbers = [];
    const alphabets = [];
    const special_characters = [];

    let sum = 0;
    let concat_alpha = '';

    input.forEach(item => {
        if (!isNaN(item)) {
            const num = parseInt(item);
            if (num % 2 === 0) even_numbers.push(item);
            else odd_numbers.push(item);
            sum += num;
        } else if (/^[a-zA-Z]+$/.test(item)) {
            alphabets.push(item.toUpperCase());
            concat_alpha += item;
        } else {
            special_characters.push(item);
        }
    });

    const reversed = concat_alpha.split('').reverse();
    let concat_string = '';
    reversed.forEach((ch, i) => {
        concat_string += i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase();
    });

    res.status(200).json({
        is_success: true,
        user_id,
        email,
        roll_number,
        odd_numbers,
        even_numbers,
        alphabets,
        special_characters,
        sum: sum.toString(),
        concat_string
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
