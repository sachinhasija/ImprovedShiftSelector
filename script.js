const checks = document.querySelectorAll("input[type='checkbox']");
let previousCheck;
let pc = false;
function shiftCheck(e) {
  let between = false;
  if (e.shiftKey && this.checked) {
    checks.forEach(check => {
      if (pc) {
        if (check === this || check === previousCheck) {
          console.log(between);
          between = !between;
        }

        if (between) {
          check.checked = true;
        }
      }
    });
  }
  previousCheck = this;
  pc = true;
  if (!previousCheck.checked) {
    pc = false;
  }
}
checks.forEach(check => check.addEventListener("click", shiftCheck));
