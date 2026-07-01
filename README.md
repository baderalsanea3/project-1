# Project Name 
## Ballon d'Or Quiz Game 

A simple quiz game built with **HTML, CSS, and JavaScript** that tests your knowledge of Ballon d'Or winners across different years.

## Description

The user starts on a category card for "Ballon d'Or". Clicking the Play button reveals the quiz. Each question has 4 answer choices — picking the correct one turns it green and auto-advances to the next question, while a wrong pick turns it red. On the final question, a GAME OVER message is shown.

## User stories

- A start card that transitions into the quiz when **Play** is clicked.
- Dynamic rendering of questions and choices from a data array **questions**.
- Correct answers are highlighted **green**, wrong answers red, immediately on click.
- **Automatic advance** to the next question 2 seconds after a correct answer.
- **Flip animation** on the question box.
- **GAME OVER** message displayed on reaching the last question.
- Simple responsive styling with hover **effects on buttons and cards**.

## Screenshots
![alt text](<Screenshot 2026-07-01 150423.png>)
![alt text](<Screenshot 2026-07-01 150521.png>)


## Future Enhancements

- Fix the animation retrigger logic in increaseLevel (currently uses classList with #question, which is invalid — an ID selector, not a class).
- Add a restart/play-again button after "GAME OVER".
- Add more categories and question sets beyond Ballon d'Or.


## Technologies Used

- **HTML** for page structure.
- **CSS** for styling and animations (@keyframes flipAnimation).
- **JavaScript** for game logic.

## credits

Personal educational project — free to use and extend.