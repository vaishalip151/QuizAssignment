import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Grid, Checkbox, FormControlLabel } from '@material-ui/core';

import quizApiService from '../Common/ApiService';
import TimerCounter from '../Common/Ui/TimerCounter';

let Interval;

const QuizContainer = () => {
  const [questionList, setQuestionList] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  useEffect(() => {
    getQuestionData();
    Interval = setInterval(() => {
      handleNextQuestion();
    }, 10000);
    return () => {
      handleClearInterval();
    };
  }, []);

  const getQuestionData = () => {
    quizApiService(
      'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy'
    )
      .then(({ data: { response_code, results } }) => {
        let questionData = results.map((data) => {
          data.options = [...data.incorrect_answers, data.correct_answer];
          return data;
        });
        setQuestionList(questionData);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const handleNextQuestion = () => {
    if (questionIndex === 9) {
      history.push(`/thankyou`);
    } else {
      setQuestionIndex((prev) => {
        return prev + 1 < 10 ? prev + 1 : 0;
      });
      setAnswer('');
      setMessage('');
    }
  };

  const handleChange = (ans, correct) => () => {
    setAnswer(ans);
    setMessage(ans === correct);
  };

  const handleClearInterval = () => {
    clearInterval(Interval);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        // justify="left"
        // alignItems="left"

        spacing={3}
      >
        <Grid item xs={12}>
          <Grid container direction="row" spacing={1}>
            <Grid alignContent="flex-start" item xs={12}>
              <div className="timer">
                <TimerCounter keyName={questionIndex} />
              </div>
            </Grid>
          </Grid>

          <div className="pd">
            <div className="fixed">
              <h2>QUIZ</h2>
              <Grid container direction="row" spacing={1}>
                <Grid alignContent="flex-start" item xs={12}>
                  {questionList && questionList.length > 0 && (
                    <h2>
                      {`Ques ${questionIndex + 1}. ${
                        questionList[questionIndex].question
                      }`}
                    </h2>
                  )}
                </Grid>
              </Grid>
              {message && (
                <div className="fontStyle green"> Answer is correct. </div>
              )}
              {!message && answer && (
                <div className="fontStyle red"> Answer is incorrect.</div>
              )}

              <Grid container direction="row" spacing={1}>
                {questionList &&
                  questionList.length > 0 &&
                  questionList[questionIndex].options &&
                  questionList[questionIndex].options.length > 0 &&
                  questionList[questionIndex].options.map((ans, index) => (
                    <Grid alignContent="center" item xs={6} key={index}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={answer === ans}
                            onChange={handleChange(
                              ans,
                              questionList[questionIndex].correct_answer
                            )}
                            // name="checkedB"
                            color="primary"
                          />
                        }
                        label={ans}
                      />
                    </Grid>
                  ))}
              </Grid>
            </div>
            <div>
              <div className="alignCenter">
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  onClick={handleNextQuestion}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default QuizContainer;
