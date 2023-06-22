function randomizeAnswerOptions(quizzData) {
  const randomizedData = quizzData.map((question) => {
    const { answerOptions } = question;
    const randomizedOptions = shuffleArray(answerOptions);
    return { ...question, answerOptions: randomizedOptions };
  });

  return randomizedData;
}

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

  const quizzData = [
    {
      "question": "What is the largest species of penguin?",
      "answerOptions": [
        {
          "answertext": "Emperor penguin",
          "isCorrect": true
        },
        {
          "answertext": "King penguin",
          "isCorrect": false
        },
        {
          "answertext": "Gentoo penguin",
          "isCorrect": false
        },
        {
          "answertext": "Adelie penguin",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "Which animal is known for its ability to change color to match its surroundings?",
      "answerOptions": [
        {
          "answertext": "Chameleon",
          "isCorrect": true
        },
        {
          "answertext": "Octopus",
          "isCorrect": false
        },
        {
          "answertext": "Cuttlefish",
          "isCorrect": false
        },
        {
          "answertext": "Anole lizard",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "Which animal is the tallest on land?",
      "answerOptions": [
        {
          "answertext": "Giraffe",
          "isCorrect": true
        },
        {
          "answertext": "Elephant",
          "isCorrect": false
        },
        {
          "answertext": "Kangaroo",
          "isCorrect": false
        },
        {
          "answertext": "Ostrich",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "What is the fastest land animal?",
      "answerOptions": [
        {
          "answertext": "Cheetah",
          "isCorrect": true
        },
        {
          "answertext": "Lion",
          "isCorrect": false
        },
        {
          "answertext": "Gazelle",
          "isCorrect": false
        },
        {
          "answertext": "Wildebeest",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "Which animal has the longest lifespan?",
      "answerOptions": [
        {
          "answertext": "Galapagos tortoise",
          "isCorrect": true
        },
        {
          "answertext": "Bowhead whale",
          "isCorrect": false
        },
        {
          "answertext": "Elephant",
          "isCorrect": false
        },
        {
          "answertext": "Blue whale",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "What is the national bird of the United States?",
      "answerOptions": [
        {
          "answertext": "Bald eagle",
          "isCorrect": true
        },
        {
          "answertext": "American robin",
          "isCorrect": false
        },
        {
          "answertext": "Wild turkey",
          "isCorrect": false
        },
        {
          "answertext": "California quail",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "Which animal is known for its ability to mimic human speech?",
      "answerOptions": [
        {
          "answertext": "African grey parrot",
          "isCorrect": true
        },
        {
          "answertext": "Budgerigar",
          "isCorrect": false
        },
        {
          "answertext": "Cockatoo",
          "isCorrect": false
        },
        {
          "answertext": "Amazon parrot",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "What is the largest species of shark?",
      "answerOptions": [
        {
          "answertext": "Whale shark",
          "isCorrect": true
        },
        {
          "answertext": "Great white shark",
          "isCorrect": false
        },
        {
          "answertext": "Tiger shark",
          "isCorrect": false
        },
        {
          "answertext": "Hammerhead shark",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "Which animal is known for its hibernation ability?",
      "answerOptions": [
        {
          "answertext": "Brown bear",
          "isCorrect": true
        },
        {
          "answertext": "Raccoon",
          "isCorrect": false
        },
        {
          "answertext": "Squirrel",
          "isCorrect": false
        },
        {
          "answertext": "Chipmunk",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "Which animal has the longest neck?",
      "answerOptions": [
        {
          "answertext": "Giraffe",
          "isCorrect": true
        },
        {
          "answertext": "Swan",
          "isCorrect": false
        },
        {
          "answertext": "Snake",
          "isCorrect": false
        },
        {
          "answertext": "Flamingo",
          "isCorrect": false
        }
      ]
    }
  ]
  
let newData = randomizeAnswerOptions(quizzData)
export {newData as quizzData}