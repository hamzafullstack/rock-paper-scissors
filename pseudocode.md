# Rock Paper Scissors — Pseudocode

## 1. Get Computer Choice

```text
FUNCTION getComputerChoice
    Generate a random number between 0 and 2

    IF number is 0
        RETURN "rock"
    ELSE IF number is 1
        RETURN "paper"
    ELSE
        RETURN "scissors"
END FUNCTION
```

## 2. Get Human Choice

```text
FUNCTION getHumanChoice
    Ask the player for their choice

    Convert the choice to lowercase

    RETURN the choice
END FUNCTION
```

## 3. Play One Round

```text
FUNCTION playRound(humanChoice, computerChoice)

    IF humanChoice equals computerChoice
        RETURN "Tie"

    ELSE IF humanChoice beats computerChoice
        Increase human score
        RETURN "You win"

    ELSE
        Increase computer score
        RETURN "Computer wins"
END FUNCTION
```

### Winning Rules

```text
rock beats scissors
scissors beats paper
paper beats rock
```

## 4. Play the Game

```text
FUNCTION playGame

    Set human score to 0
    Set computer score to 0

    REPEAT 5 times

        Get human choice
        Get computer choice

        Play one round

        Display the result
        Display current scores

    END REPEAT

    IF human score is greater than computer score
        Display "You win the game"

    ELSE IF computer score is greater than human score
        Display "Computer wins the game"

    ELSE
        Display "The game is a tie"

END FUNCTION
```

## Game Flow

```text
START
  ↓
Get human choice
  ↓
Get computer choice
  ↓
Play round
  ↓
Update score
  ↓
Repeat until 5 rounds are complete
  ↓
Compare final scores
  ↓
Display winner
  ↓
END
```

### Core Logic

```text
Human choice + Computer choice
              ↓
          Compare them
              ↓
       Determine winner
              ↓
        Update score
```
