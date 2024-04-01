import { AppState } from "../AppState.js"
import { questionsService } from "../services/QuestionsService.js"
import { setHTML } from "../utils/Writer.js"


export class QuestionsController {
    constructor() {
        AppState.on('questions', this.DrawQuestions)
    }

    ImportQuestions(url) {
        questionsService.ImportQuestions(url)
    }

    DrawQuestions() {
        let QuestionHTML = ''
        AppState.currentQuestion = AppState.questions[Math.floor(Math.random() * AppState.questions.length)]
        QuestionHTML += AppState.currentQuestion.QuestionView
        setHTML('question-space', QuestionHTML)
    }

    CheckAnswer(submittedAnswer) {
        questionsService.CheckAnswer(submittedAnswer)


        if (AppState.questions.length > 1) {
            this.DrawQuestions()
        }
        else {
            let QuestionHTML = `
            <h3 class="text-center">Select New Quiz!</h3>
            `
            setHTML('question-space', QuestionHTML)
        }
    }
}