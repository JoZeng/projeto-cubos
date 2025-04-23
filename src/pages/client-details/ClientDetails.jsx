import "./client-details.css";
import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/SideBar";
import ModalClientsEdit from "../../components/modals/modals-sessions/modal-clients-edit/ModalClientsEdit";
import ClientDetailsContent from "../../components/clients/content/client-details-content/ClientDetailsContent";
import { ClientDetailsContentContextProvider } from "../../components/clients/content/client-details-content/ClientDetailsContentContext";
import { ModalClientsEditProvider } from "../../components/modals/modals-sessions/modal-clients-edit/ModalClientsEditContext";
import { useModalStates } from "../../components/modals/modals-states-context/ModalStatesContext";
import useRefreshTrigger from "../../hooks/useRefreshTrigger";
import ModalClientsChargesAdd from "../../components/modals/modals-sessions/modal-clients-charges-add/ModalClientsChargesAdd";
import { ModalClientsChargesAddContextProvider } from "../../components/modals/modals-sessions/modal-clients-charges-add/ModalClientsChargesAddContext";
import ModalClientsChargesDelete from "../../components/modals/modals-sessions/modal-clients-charges-delete/ModalClientsChargesDelete";
import { ModalClientsChargesDeleteContextProvider } from "../../components/modals/modals-sessions/modal-clients-charges-delete/ModalClientsChargesDeleteContext";
import ModalClientsChargesEdit from "../../components/modals/modals-sessions/modal-clients-charges-edit/ModalClientsChargesEdit";
import { ModalClientsChargesEditContextProvider } from "../../components/modals/modals-sessions/modal-clients-charges-edit/ModalClientsChargesEditContext";

export default function ClientDetails() {
  const {
    openModalClientsEdit,
    setOpenModalClientsEdit,
    handleModalClientsEdit,
    closeModalClientsEdit,
    openModalChargesAdd,
    setOpenModalChargesAdd,
    handleModalChargesAdd,
    closeModalChargesAdd,
    openModalChargesEdit,
    setOpenModalChargesEdit,
    handleModalChargesEdit,
    closeModalChargesEdit,
    openModalChargesDelete,
    setOpenModalChargesDelete,
    handleModalChargesDelete,
    closeModalChargesDelete,
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
            handleModalChargesAdd={handleModalChargesAdd}
            handleModalChargesDelete={handleModalChargesDelete}
            handleModalChargesEdit={handleModalChargesEdit}
          />
        </ClientDetailsContentContextProvider>
      </div>
      <ModalClientsChargesAddContextProvider
        openModal={openModalChargesAdd}
        closedModal={setOpenModalChargesAdd}
        closedModalButton={closeModalChargesAdd}
        onUpdate={handleUpdateData}
      >
        <ModalClientsChargesAdd />
      </ModalClientsChargesAddContextProvider>
      <ModalClientsEditProvider
        openModal={openModalClientsEdit}
        closedModal={setOpenModalClientsEdit}
        closedModalButton={closeModalClientsEdit}
        onUpdate={handleUpdateData}
      >
        <ModalClientsEdit />
      </ModalClientsEditProvider>

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
