export function createModal({
  trigger,
  modal,
}: {
  trigger: HTMLElement;
  modal: HTMLDialogElement;
}) {
  const closeButton = document.querySelector("#close-modal");

  trigger.addEventListener("click", openModal);

  modal.addEventListener("close", closeModal);
  closeButton?.addEventListener("click", closeModal);

  function openModal() {
    modal.showModal();
    document.documentElement.classList.add("lock");
  }

  function closeModal() {
    modal.close();
  }

  modal.addEventListener("transitioncancel", () => {
    document.documentElement.classList.remove("lock");
  });
}
