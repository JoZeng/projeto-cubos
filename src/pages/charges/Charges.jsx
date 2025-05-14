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
import ModalUserEdit from "../../components/modals/modals-sessions/modal-user-edit/ModalUserEdit";
import { ModalUserEditProvider } from "../../components/modals/modals-sessions/modal-user-edit/ModalUserEditContext";

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

    openModalUserEdit,
    setOpenModalUserEdit,
    handleModalUserEdit,
    closeModalUserEdit,

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
        <Header text={"Cobranças"} handleModalUserEdit={handleModalUserEdit} />
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

      <ModalUserEditProvider
        openModal={openModalUserEdit}
        closedModal={setOpenModalUserEdit}
        closedModalButton={closeModalUserEdit}
      >
        <ModalUserEdit />
      </ModalUserEditProvider>
    </div>
  );
}
