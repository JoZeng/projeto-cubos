import "./home.css";
import SideBar from "../../components/sidebar/SideBar";
import Header from "../../components/header/Header";
import HomeContent from "../../components/home/home-content/HomeContent";
import ModalUserEdit from "../../components/modals/modals-sessions/modal-user-edit/ModalUserEdit";
import { ModalUserEditProvider } from "../../components/modals/modals-sessions/modal-user-edit/ModalUserEditContext";
import { useModalStates } from "../../components/modals/modals-states-context/ModalStatesContext";
import HomeContentContextProvider from "../../components/home/home-content/HomeContentContext";

export default function Home() {
  const {
    openModalUserEdit,
    setOpenModalUserEdit,
    handleModalUserEdit,
    closeModalUserEdit,
  } = useModalStates();
  return (
    <div className="home-page">
      <SideBar />
      <div className="home-page-content">
        <Header
          text={"Resumo das cobranças"}
          handleModalUserEdit={handleModalUserEdit}
        />
        <ModalUserEditProvider
          openModal={openModalUserEdit}
          closedModal={setOpenModalUserEdit}
          closedModalButton={closeModalUserEdit}
        >
          <ModalUserEdit />
        </ModalUserEditProvider>
        <hr />
        <HomeContentContextProvider>
          <HomeContent />
        </HomeContentContextProvider>
      </div>
    </div>
  );
}
