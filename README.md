# Word Game

## Joy of React, Project I

In this project, we'll recreate a popular online word game, Wordle:

![Demo showing the finished product, our Wordle clone](docs/wordle-demo.gif)

In Wordle, users have 6 attempts to guess a 5-letter word. You're helped along the way by ruling out letters that aren't in the word, and being told whether the correct letters are in the correct location or not.



## NEW COMPONENT
```html
npm run new-component NameOfTheComponent
```

## Exercise 5: winning and losing

We're so close! We only have one concern left: ending the game.

If the user wins the game, a happy banner should be shown:

![Screenshot of a won game, showing a green success banner](docs/happy-banner.png)

If the user loses the game, by contrast, a sad banner should be shown:

![Screenshot of a won game, showing a red failure banner](docs/sad-banner.png)

The user wins the game when their guessed word is identical to the `answer`. They lose the game if they submit 6 guesses without winning.

```html
<div class="happy banner">
  <p>
    <strong>Congratulations!</strong> Got it in
    <strong>3 guesses</strong>.
  </p>
</div>
```

```html
<div class="sad banner">
  <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
</div>
```

When the game is over, one of these banners should be shown, and the text input should be disabled so that no new guesses can be typed or submitted.

**Acceptance Criteria:**

- If the user wins the game, a happy banner should be shown.
- If the user loses the game, a sad banner should be shown
- When the game is over, the text input should be disabled.
- It's up to you to decide how to structure the banner! Feel free to create new component(s) if you think it's warranted.

---

# Stretch Goals

If you're looking for an additional challenge, give these stretch goals a shot!

Unlike the standard exercises, no solution video is available for these goals, though the raw solution source code is available. See the solutions page on the Course Platform.

Also, feel free to come up with _your own_ stretch goals! If there's a thing you'd like to implement, go for it!!

## Visual Keyboard

In the real Wordle game, a keyboard is shown below the guesses:

![Screenshot of the Wordle game, showing a keyboard below the game board](docs/bottom-keyboard-original.png)

This keyboard is an important game element, since it makes it easy to tell which letters have already been tested.

Here's what the keyboard looked like in my implementation:

![Screenshot of our Wordle clone, showing a keyboard below the game board](docs/bottom-keyboard-clone.png)

**Note: Styling isn't provided for stretch goals.** You'll need to come up with your own CSS. You can add it to `src/styles.css`.

**Relatedly:** When you add a keyboard, it'll likely be pushed "below the fold" on smaller windows. Don't worry about trying to fit everything in the viewport at once.

**Acceptance Criteria:**

- Render 3 rows of letters at the bottom of the screen
- The colors of each letter should match the colors shown in the game board:
  - Correct letters should have a green background and white text
  - Misplaced letters should have a yellow background and white text
  - Incorrect letters should have a dark gray background and white text
  - Unused letters should have a light gray background and black text
- No need to include "Enter" and "Backspace" keys.
- Don't worry too much about the styling, trying to get the alignment to look exactly like a real keyboard.

## Restart button

One of Wordle's hooks is that you can only play 1 game per day: there's a new word for all users every day. As a result, there's no "restart button", you just have to wait until the next day.

In our clone, we aren't picking a new word every day, we're picking a new word when the app first loads.

Update the game so that it can be restarted. Add a "Restart game" button to the banner shown when the user wins or loses.

_HINT:_ This will require moving the `answer` into state. You'll want to do the random word selection inside a callback function, the secondary way to initialize state described here: https://courses.joshwcomeau.com/joy-of-react/02-state/03-use-state#initial-value

**Acceptance Criteria:**

- A "Restart Game" button is shown at the end of the game. You can put this button in the `GameOverBanner`, or wherever else you'd like!
- Clicking the button should select a new correct word and reset all other state.
