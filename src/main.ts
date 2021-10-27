import { saveAs } from "file-saver";
import { generateFile } from "./file-generator";
import calendar from "./calendar.json";

(function () {
  window.onload = () => {
    const terms = document.getElementById("terms");
    calendar.terms.forEach((term: any, index: number) => {
      let opt = document.createElement("option");
      opt.setAttribute("value", String(index));
      opt.innerHTML = term.name;
      terms?.appendChild(opt);
    });
    const form: HTMLFormElement | null = document.querySelector("form");
    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault;
        const data = new FormData(form);
        const blob: Blob = generateFile(data);
        saveAs(blob, "test_file.txt");
      };
    }
  };
})();
