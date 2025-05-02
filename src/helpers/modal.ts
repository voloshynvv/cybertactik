import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

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
    disableBodyScroll(modal, { reserveScrollBarGap: true });
  }

  function closeModal() {
    enableBodyScroll(modal);
    modal.close();
  }
}
