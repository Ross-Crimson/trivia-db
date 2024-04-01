

export class Question {
    constructor(data) {
        this.category = data.category
        this.question = data.question
        this.answer = data.correct_answer
        this.options = data.incorrect_answers
        this.randomizedQuestions = this.RandomizedQuestions
    }

    get QuestionView() {
        return `
        <div id="listed-question" class="row justify-content-center my-2">
            <div class="col-8 card text-center p-5">
                ${this.question}
            </div>
        </div>
        <div class="row text-center">
            <div class="col-6 my-2 mx-auto">
                <button onclick="app.QuestionsController.CheckAnswer('${this.randomizedQuestions[0]}')" class="btn btn-primary">${this.randomizedQuestions[0]}</button>
            </div>
            <div class="col-6 my-2 mx-auto">
                <button onclick="app.QuestionsController.CheckAnswer('${this.randomizedQuestions[1]}')" class="btn btn-primary">${this.randomizedQuestions[1]}</button>
            </div>
            <div class="col-6 my-2 mx-auto">
                <button onclick="app.QuestionsController.CheckAnswer('${this.randomizedQuestions[2]}')" class="btn btn-primary">${this.randomizedQuestions[2]}</button>
            </div>
            <div class="col-6 my-2 mx-auto">
                <button onclick="app.QuestionsController.CheckAnswer('${this.randomizedQuestions[3]}')" class="btn btn-primary">${this.randomizedQuestions[3]}</button>
            </div>
        </div>
        `
    }

    get RandomizedQuestions() {
        let newQuestions = []
        this.options.forEach(option => newQuestions.push(option))
        newQuestions.push(this.answer)

        return newQuestions.sort(() => Math.random() - 0.5)
    }
}