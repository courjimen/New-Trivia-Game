# Music Trivia Game 🎵

Let's see how well you know your music! This trivia game shows off a connected frontend UI with a backend server that grabs random questions from [openAPI](https://opentdb.com/api_config.php) based on user input.

## Table of Contents
- [Installation](#how-to-install-this-project-locally)
- [Game Instructions](#how-to-play)
- [Demo](#demo)

### How to install this project locally
First clone my project and run this in your terminal:

```bash
git clone https://github.com/courjimen/New-Trivia-Game.git
```
Open in your code editor (I use VS Code) and split the terminal into two separate terminals.

On terminal one:

```bash
cd server
node server.js
```

On terminal two:

```bash
cd client
npm run dev
```
Server should be running on localhost 3000 on terminal one. Follow the link provided in terminal two and it will display the Trivia Game!

### How to Play
1. Complete the form and select your options
2. Choose your answers (try to get all of the right!)
3. Submit your answers to see your final score 🎉

### Demo
On the home page select your preferences:

![](/images/homepage.png)

After clicking "Let's Play" the trivia questions will appear:

![](/images/triviagame.png)

As you go through and answer, the correct/incorrect answers will display in corresponding green/red colors:

![](/images/red.png)

Click "Submit Answers" to view your correct answers and final score!

![](/images/win.png)