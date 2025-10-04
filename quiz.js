function checkAnswer() {
  // 1️⃣ تحديد الإجابة الصحيحة
  const correctAnswer = "4";

  // 2️⃣ جلب اختيار المستخدم (radio اللي عليه علامة)
  const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

  // 3️⃣ جلب مكان عرض النتيجة (عنصر الـ feedback)
  const feedback = document.getElementById("feedback");

  // 4️⃣ مقارنة الإجابات
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

// 5️⃣ إضافة event listener للزر
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
