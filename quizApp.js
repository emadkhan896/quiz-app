import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected={} // for storing  answers
    correctAnswer = 0 // for showing No the correct answers 
    isSubmitted = false // to show the result 
    //used to disable the submit button 
     get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
     }

     // for applying dynamic styling to our result 
     get isScoredFull(){
        return `slds-text-heading_large  ${this.myQuestions.length === this.correctAnswer? 
            'slds-text-color_success' : 'slds-text-color_error'}`
     }

     // changehandler called on every click on the options
    changeHandler(event){
        console.log("value", event.target.value)
        console.log("name", event.target.name)

        const {name, value} = event.target
        // const name = event.target.name
        // const value = event.target.value
        this.selected = {...this.selected, [name]:value}
    }

    submitHandler(event){
        event.preventDefault()
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswer = correct.length
        this.isSubmitted = true
        console.log("this.correctAnswer", this.correctAnswer)

    }

    // reset handler 
    resetHandler(){
        this.selected = {}
        this.correctAnswer = 0
        this.isSubmitted = false

    }
    myQuestions = [
        {
            id : "Question1",
            question : "Which of the following is not a template loop ?",
            answers: {
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer : "c"
        },

        {
            id : "Question2",
            question : "Number of components Aura Bundle has ?",
            answers: {
                a:"7",
                b:"8",
                c:"9"
            },
            correctAnswer : "b"
        },

        {
            id : "Question3",
            question : "Which of the file is invalid in LWC component folder ?",
            answers: {
                a:".apex",
                b:".svg",
                c:".js"
            },
            correctAnswer : "a"
        }
    ]
  
}