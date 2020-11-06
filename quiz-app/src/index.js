import React , { Component } from "react";
import ReactDom from "react-dom";
import "./assets/style.css";
import quizService from "./quizService"
import QuestionBox from './components/QuestionBox'

class Quizzy extends Component{
	state ={
		questionBank : []
	};
	getQuestions = () => {
		quizService().then(question => {
			this.setState({
				questionBank: question
			});
		});
	};
	componentDidMount() {
		this.getQuestions();
	}
	render(){
		return(
		<div className = "container">
			<div className = "title">Quizzy</div>
			{this.state.questionBank.length > 0 &&
				this.state.questionBank.map(
				({question,answers,correct,questionId}) => 
				(
					<QuestionBox question={question} options={answers} key={questionId} />
				)
			)}
		</div>
	)};
}

ReactDom.render(<Quizzy />, document.getElementById("root"));