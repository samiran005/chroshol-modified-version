const slideBtn = document.querySelectorAll(".slide--btn");
const chrosuol = document.querySelector(".chrosuol");
const slides = document.querySelectorAll(".slide");
const radios = document.querySelectorAll(".chrosuol-container > input[type='radio']");
const chrosuolContainer = document.querySelector(".chrosuol-container");

let slideNo = 1;
let marginLeft = 0;

// for radio buttons--------------------------------
for (let radio of radios) {
    radio.addEventListener("click", () => {
        slideNo = Number(radio.dataset.no);
        marginLeft = -100 * slideNo;
        chrosuol.style.transition = "margin-left 2s";
        chrosuol.style.marginLeft = `${marginLeft}%`;
    })
}

// for slide buttons-----------------------------
for (let btn of slideBtn) {
    btn.addEventListener("click", () => {
        if (btn.dataset.change === "left") {
            slideNo--;
            if (slideNo < 0) return; //for bug fix
            marginLeft = -100 * slideNo;
            chrosuol.style.transition = "margin-left 2s";
            chrosuol.style.marginLeft = `${marginLeft}%`;
            radios[slideNo].checked = true;
        } else if (btn.dataset.change === "right") {
            slideNo++;
            if (slideNo > slides.length - 1) return; //for bug fix
            marginLeft = -100 * slideNo;
            chrosuol.style.transition = "margin-left 2s";
            chrosuol.style.marginLeft = `${marginLeft}%`;
            radios[slideNo].checked = true;
        }
    })
}

// for loop of images elution--------------------------------   
chrosuol.ontransitionend = e => {
    if (marginLeft === (-100 * slides.length) + 100) {
        // bagging by end
        chrosuol.style.transition = "none";
        chrosuol.style.marginLeft = `${-100}%`;
        slideNo = 1;
        radios[slideNo].checked = true;
    }
    if (marginLeft === 0) {
        // end by start
        chrosuol.style.transition = "none";
        chrosuol.style.marginLeft = `${(-100 * slides.length) + 200}%`;
        slideNo = 4;
        radios[slideNo].checked = true;
    }
}