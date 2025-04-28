import "./charges.css";
import SideBar from "../../components/sidebar/SideBar";
import Header from "../../components/header/Header";
import ChargesContent from "../../components/charges/charges-content/ChargesContent";
import { ChargesContentProvider } from "../../components/charges/charges-content/ChargesContentContext";
import { useModalStates } from "../../components/modals/modals-states-context/ModalStatesContext";
import { ModalClientsChargesEditContextProvider } from "../../components/modals/modals-sessions/modal-clients-charges-edit/ModalClientsChargesEditContext";
import ModalClientsChargesEdit from "../../components/modals/modals-sessions/modal-clients-charges-edit/ModalClientsChargesEdit";
import ModalClientsChargesDelete from "../../components/modals/modals-sessions/modal-clients-charges-delete/ModalClientsChargesDelete";
import { ModalClientsChargesDeleteContextProvider } from "../../components/modals/modals-sessions/modal-clients-charges-delete/ModalClientsChargesDeleteContext";

export default function Charges() {
  const {
    openModalChargesEdit,
    setOpenModalChargesEdit,
    handleModalChargesEdit,
    closeModalChargesEdit,

    openModalChargesDelete,
    setOpenModalChargesDelete,
    handleModalChargesDelete,
    closeModalChargesDelete,

    handleUpdateData,
  } = useModalStates();
  console.log({
    handleModalChargesEdit,
    handleModalChargesDelete,
  });
  return (
    <div className="charges-page">
      <SideBar />
      <div className="charges-page-content">
        <Header text={"Cobranças"} />
        <hr />
        <ChargesContentProvider>
          <ChargesContent
            handleModalChargesEdit={handleModalChargesEdit}
            handleModalChargesDelete={handleModalChargesDelete}
          />
        </ChargesContentProvider>
      </div>
      <ModalClientsChargesEditContextProvider
        openModal={openModalChargesEdit}
        closedModal={setOpenModalChargesEdit}
        closedModalButton={closeModalChargesEdit}
        onUpdate={handleUpdateData}
      >
        <ModalClientsChargesEdit />
      </ModalClientsChargesEditContextProvider>
      <ModalClientsChargesDeleteContextProvider
        openModal={openModalChargesDelete}
        closedModal={setOpenModalChargesDelete}
        closedModalButton={closeModalChargesDelete}
        onUpdate={handleUpdateData}
      >
        <ModalClientsChargesDelete />
      </ModalClientsChargesDeleteContextProvider>
    </div>
  );
}
