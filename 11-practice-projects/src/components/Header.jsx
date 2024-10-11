import QuizLogo from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img src={QuizLogo} alt="Empty quiz paper" />
      <h1>ReactQuiz</h1>
    </header>
  );
};

export default Header;
