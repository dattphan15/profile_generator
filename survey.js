const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Instead of asking the user about what they think of Node.js, we can ask them the following questions, in order:

// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!

// Once all questions are answered, our survey app should output a fully formed paragraph for their online profile, similar to the one shown previously. It should then exit. The user would have to rerun the app to go through the process of generating another profile.

const answers = [];

rl.question('What do you think of Node.js? ', (answer) => {
  answers.push(answer);
  rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
    answers.push(answer);
      rl.question('What\'s an activity you like doing? ', (answer) => {
        answers.push(answer);
          rl.question('What do you listen to while doing that? ', (answer) => {
            answers.push(answer);
              rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
                answers.push(answer);
                  rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
                    answers.push(answer);
                      rl.question('Which sport is your absolute favourite? ', (answer) => {
                        answers.push(answer);
                          rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
                            answers.push(answer);
                            rl.close();
                            
                            const node = answers[0];
                            const name = answers[1];
                            const activity = answers[2];
                            const listen = answers[3];
                            const mealTime = answers[4];
                            const favMeal = answers[5];
                            const sport = answers[6];
                            const power = answers[7];

                            console.log(`What do you think of Node.js? : ${node}`)
                            console.log(`What\'s your name? Nicknames are also acceptable :) : ${name}`)
                            console.log(`What\'s an activity you like doing? : ${activity}`)
                            console.log(`What do you listen to while doing that? : ${listen}`)
                            console.log(`Which meal is your favourite (eg: dinner, brunch, etc. : ${mealTime}`)
                            console.log(`What\'s your favourite thing to eat for that meal? : ${favMeal}`)
                            console.log(`Which sport is your absolute favourite? : ${sport}`)
                            console.log(`What is your superpower? In a few words, tell us what you are amazing at! : ${power}`)

                          })
                        })
                      })
                    })
                  })
                })
              })
});