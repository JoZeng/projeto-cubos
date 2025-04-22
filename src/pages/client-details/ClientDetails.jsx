// src/pages/ClientDetails/ClientDetails.jsx

import "./client-details.css";
import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/SideBar";
import ModalClientsEdit from "../../components/modals/modals-sessions/modal-clients-edit/ModalClientsEdit";
import ClientDetailsContent from "../../components/clients/content/client-details-content/ClientDetailsContent";
import { ClientDetailsContentContextProvider } from "../../components/clients/content/client-details-content/ClientDetailsContentContext";
import { ModalClientsEditProvider } from "../../components/modals/modals-sessions/modal-clients-edit/ModalClientsEditContext";
import { useModalStates } from "../../components/modals/modals-states-context/ModalStatesContext";
import useRefreshTrigger from "../../hooks/useRefreshTrigger";
import ModalClientsAddCharges from "../../components/modals/modals-sessions/modal-clients-add-charges/ModalClientsAddCharges";
import { ModalClientsAddChargesProvider } from "../../components/modals/modals-sessions/modal-clients-add-charges/ModalClientsAddChargesContext";

export default function ClientDetails() {
  const {
    openModalClientsEdit,
    setOpenModalClientsEdit,
    handleModalClientsEdit,
    closeModalClientsEdit,
    openModalAddCharges,
    setOpenModalAddCharges,
    handleModalAddCharges,
    closeModalAddCharges,
  } = useModalStates();

  const { refreshTrigger, handleUpdateData } = useRefreshTrigger();

  return (
    <div className="clients-details-page">
      <SideBar />
      <div className="clients-details-page-content">
        <Header text={"Cobranças"} text2={"Detalhes do cliente"} />
        <hr />
        <ClientDetailsContentContextProvider
          refreshTrigger={refreshTrigger}
          handleUpdateData={handleUpdateData}
        >
          <ClientDetailsContent
            handleModalClientsEdit={handleModalClientsEdit}
            handleModalAddCharges={handleModalAddCharges}
          />
        </ClientDetailsContentContextProvider>
      </div>
      <ModalClientsAddChargesProvider
        openModal={openModalAddCharges}
        closedModal={setOpenModalAddCharges}
        closedModalButton={closeModalAddCharges}
        onUpdate={handleUpdateData}
      >
        <ModalClientsAddCharges />
      </ModalClientsAddChargesProvider>
      <ModalClientsEditProvider
        openModal={openModalClientsEdit}
        closedModal={setOpenModalClientsEdit}
        closedModalButton={closeModalClientsEdit}
        onUpdate={handleUpdateData}
      >
        <ModalClientsEdit />
      </ModalClientsEditProvider>
    </div>
  );
}
