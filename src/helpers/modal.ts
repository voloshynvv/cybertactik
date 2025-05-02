export function createModal({
  trigger,
  modal,
  onClose,
}: {
  trigger: HTMLElement;
  modal: HTMLDialogElement;
  onClose?: () => void;
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
    document.documentElement.classList.remove("lock");

    onClose?.();
  }
}
