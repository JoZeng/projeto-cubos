import "./clients.css";
import SideBar from "../../components/sidebar/SideBar";
import Header from "../../components/header/Header";
import ClientsContent from "../../components/clients/content/client-content/ClientsContent";
import ModalUserEdit from "../../components/modals/modals-sessions/modal-user-edit/ModalUserEdit";
import ModalClientsAdd from "../../components/modals/modals-sessions/modal-clients-add/ModalClientsAdd";
import ModalClientsChargesAdd from "../../components/modals/modals-sessions/modal-clients-charges-add/ModalClientsChargesAdd";
import { useModalStates } from "../../components/modals/modals-states-context/ModalStatesContext";
import { ClientsContentProvider } from "../../components/clients/content/client-content/ClientsContentContext";
import { ModalClientsChargesAddContextProvider } from "../../components/modals/modals-sessions/modal-clients-charges-add/ModalClientsChargesAddContext";
import { ModalClientsAddProvider } from "../../components/modals/modals-sessions/modal-clients-add/ModalClientsAddContext";
import { ModalUserEditProvider } from "../../components/modals/modals-sessions/modal-user-edit/ModalUserEditContext";
import useRefreshTrigger from "../../hooks/useRefreshTrigger";

export default function Clients() {
  const {
    openModaUserEdit,
    setOpenModaUserEdit,
    handleModaUserEdit,
    closeModaUserEdit,

    openModalClientsAdd,
    setOpenModalClientsAdd,
    handleModalClientsAdd,
    closeModalClientsAdd,

    openModalChargesAdd,
    setOpenModalChargesAdd,
    handleModalChargesAdd,
    closeModalChargesAdd,
  } = useModalStates();
  const { refreshTrigger, handleUpdateData } = useRefreshTrigger();
  return (
    <div className="clients-page">
      <SideBar />
      <div className="clients-page-content">
        <Header text={"Cobranças"} handleModalUserEdit={handleModaUserEdit} />
        <hr />
        <ClientsContentProvider
          refreshTrigger={refreshTrigger}
          handleUpdateData={handleUpdateData}
        >
          <ClientsContent
            openModalAddClient={handleModalClientsAdd}
            openModalChargesAdd={handleModalChargesAdd}
          />
        </ClientsContentProvider>
      </div>
      <ModalClientsAddProvider
        openModal={openModalClientsAdd}
        closedModal={setOpenModalClientsAdd}
        closedModalButton={closeModalClientsAdd}
      >
        <ModalClientsAdd />
      </ModalClientsAddProvider>
      <ModalClientsChargesAddContextProvider
        openModal={openModalChargesAdd}
        closedModal={setOpenModalChargesAdd}
        closedModalButton={closeModalChargesAdd}
        onUpdate={handleUpdateData}
      >
        <ModalClientsChargesAdd />
      </ModalClientsChargesAddContextProvider>
      <ModalUserEditProvider
        openModal={openModaUserEdit}
        closedModal={setOpenModaUserEdit}
        closedModalButton={closeModaUserEdit}
      >
        <ModalUserEdit />
      </ModalUserEditProvider>
    </div>
  );
}
