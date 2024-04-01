import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"
import { Pop } from "../utils/Pop.js"


class QuestionsService {
    CheckAnswer(submittedAnswer) {

        if (submittedAnswer == AppState.currentQuestion.answer) {
            Pop.toast("You Got It Correct!", "success", "center", 2000)
        }
        else {
            Pop.toast("Wrong :( </br></br> The Answer Was " + AppState.currentQuestion.answer, "info", "center", 3000)
        }
        let currQuestIndex = AppState.questions.findIndex(question => question == AppState.currentQuestion)

        AppState.questions.splice(currQuestIndex, 1)
    }

    async ImportQuestions(url) {
        const response = await fetch(url)

        const pojos = await response.json()

        const questions = pojos.results.map(pojo => new Question(pojo))

        AppState.questions = questions

        console.log(questions)
    }

}

export const questionsService = new QuestionsService