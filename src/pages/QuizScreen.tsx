import { useState } from "react";


export default function QuizScreen(){

    const questions = [
        {
            question: 'HTML stands for ________',
            options: ['HyperText Markup Language', 'Hyperlink Markup Language', 'Hyper Text Modul Language', 'Hyperlink Markup Language'],
            correctAnswer: 'HyperText Markup Language'
        },
        {
            question: 'Which tag is used to create a hyperlink?',
            options: ['<a>', '<img>', '<dl>', '<link>'],
            correctAnswer: '<a>'
        },
        {
            question: 'Which of the following table tags is used to create a table row?',
            options: ['<th>', '<td>', '<tr>', '<table>'],
            correctAnswer: '<tr>'
        },
        {
            question: 'Which tag is used to make a text bold?',
            options: ['<strong>', '<bold>', '<b>', '<em>'],
            correctAnswer: '<strong>'
        },
        {
            question: 'Which HTML tag is used to create a horizontal rule (a thematic break)?',
            options: ['<hr>', '<br>', '<line>', '<divider>'],
            correctAnswer: '<br>'
        },
    ]

    

    const [currentIndex, setCurrentIndex] = useState(0)
    const [marks, setMarks] = useState(0)

    const checkAnswer =  (a: any, b: any) => {
        if(a == b){
            setMarks(marks + 1)
        }
        if (currentIndex + 1 == questions.length){
            alert(`Quiz is completed and your marks are: ${marks} `)
            setCurrentIndex(0)
            setMarks(0)
        }
        else{
            setCurrentIndex(currentIndex + 1)
        }
    }

        return<>
            <div className="p-2">
                <div className="container">
                    <div className="p-2 mb-2 bg-light rounded shadow">
                        <p className="text-center">Question {currentIndex + 1}/{questions.length}</p>
                        <h3>Q{currentIndex + 1}: {questions[currentIndex].question}</h3>
                    </div>

                    <div className="row options">
                        {questions[currentIndex].options.map((x ,i) => 
                            <div key={i} className="col-md-4 p-2">
                                <button
                                    onClick={() => checkAnswer(x, questions[currentIndex].correctAnswer)}
                                    className="btn btn-danger w-100 rounded-2"
                                > {x} </button>
                            </div>)}                       
                    </div>

                    <div className="p-2 text-center ">
                        <button onClick={() => {
                            setCurrentIndex(currentIndex + 1)
                        }} className="btn btn-success rounded-2 text-center mt-2 mb-2">Skip</button>
                        <p className="text-center">Total Marks are: {marks}</p>
                    </div>
                </div>
            </div>
        
        
        </>
        
    }




