import ModalContent from "../ModalContent";
import { useModalClientsChargesDeleteContext } from "./ModalClientsChargesDeleteContext";

export default function ModalClientsChargesDelete() {
  const { openModal, closedModalButton, closedModal, handleChargesDelete } =
    useModalClientsChargesDeleteContext();

  return (
    <div>
      <ModalContent
        openModalChargesDelete={openModal}
        closedModalButton={closedModalButton}
        closedModal={closedModal}
        handleChargesDelete={handleChargesDelete}
      />
    </div>
  );
}
