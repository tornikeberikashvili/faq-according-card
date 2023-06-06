const questions = document.querySelectorAll(".questions-div");
questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("show");

    const allAnswer = document.querySelectorAll(".answers");
    allAnswer.forEach((ans) => {
      if (ans !== answer && ans.classList.contains("show")) {
        ans.classList.remove("show");
      }
    });
  });
});
