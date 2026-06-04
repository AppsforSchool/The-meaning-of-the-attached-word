// share modal
let shareModalBtn, shareModal, shareModalClose;
document.addEventListener('DOMContentLoaded', () => {
  // DOM
  shareModalBtn = document.getElementById('share-modal-btn');
  shareModal = document.getElementById('share-modal');
  shareModalClose = document.getElementById('share-modal-close');
  
  // event listener
  shareModalBtn.addEventListener('click', () => {
    shareModal.classList.remove('hidden');
  });
  shareModalClose.addEventListener('click', () => {
    shareModal.classList.add('hidden');
  });
});


// mode buttons
let modeButtons, modeMessage;
document.addEventListener('DOMContentLoaded', () => {
  modeButtons = document.querySelectorAll('.mode-button');
  modeMessage = document.getElementById('mode-message');
  
  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // 選択状態をリセット
      modeButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      if (button.dataset.mode === "normal") {
        modeMessage.textContent = "全ての単語から出題";
      } else {
        modeMessage.textContent = "｢苦手な単語｣から出題";
      }
    });
  });
});

// type buttons
let typeSelectionState = "card";
let typeButtons;
document.addEventListener('DOMContentLoaded', () => {
  typeButtons = document.querySelectorAll('.type-button');
  typeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // 選択状態をリセット
      typeButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      typeSelectionState = button.dataset.type;
    });
  });
});

//qtype buttons
let qtypeSelectionState = "0";
let qtypeButtons;
document.addEventListener('DOMContentLoaded', () => {
  qtypeButtons = document.querySelectorAll('.qtype-button');
  qtypeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // 選択状態をリセット
      qtypeButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      qtypeSelectionState = button.dataset.qtype;
    });
  });
});

 

// count buttons
let countSelectionState = "5";
let countButtons;
document.addEventListener('DOMContentLoaded', () => {
  countButtons = document.querySelectorAll('.count-button');
  countButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // 選択状態をリセット
      countButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      countSelectionState = button.dataset.count;
    });
  });
});

// start button
let startButton;

document.addEventListener('DOMContentLoaded', () => {
  startButton = document.getElementById('start-button');
  startButton.addEventListener('click', () => {
    startButton.disabled = true;
    startButton.textContent = "処理中...";
    const params = new URLSearchParams();
    params.append("count", countSelectionState);
    params.append("qtype", qtypeSelectionState);
    if (typeSelectionState === "card") {
      //console.log(`card.html?${params.toString()}`);
      window.location.href = `card.html?${params.toString()}`;
    } else {
      //console.log(`output.html?${params.toString()}`);
      window.location.href = `output.html?${params.toString()}`;
    }
    startButton.disabled = false;
    startButton.textContent = "スタート！";
  });
});