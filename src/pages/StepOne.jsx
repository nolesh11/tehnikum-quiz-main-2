import React from "react";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Span } from "../components/Span";

const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <Span spanText="Скидка за прохождение опроса:" />
              <Span spanText="15%" />
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <Heading text="1. Занимательный вопрос" headingType="h2" />
            <Input
              isRequired
              id="answer"
              inputPlaceholder="Ваш ответ"
              errorMessage="Введите номер в правильном формате например"
            />
            <Button buttonText="Далее" buttonType="button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
