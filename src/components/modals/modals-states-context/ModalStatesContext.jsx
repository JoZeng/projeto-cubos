import { createContext, useContext, useState } from "react";

const ModalStatesContext = createContext();

export default function ModalStatesProvider({ children }) {
  const [openModalUserEdit, setOpenModalUserEdit] = useState(false);
  const handleModalUserEdit = () => setOpenModalUserEdit(true);
  const closeModalUserEdit = () => setOpenModalUserEdit(false);

  const [openModalClientsAdd, setOpenModalClientsAdd] = useState(false);
  const handleModalClientsAdd = () => setOpenModalClientsAdd(true);
  const closeModalClientsAdd = () => setOpenModalClientsAdd(false);

  const [openModalClientsEdit, setOpenModalClientsEdit] = useState(false);
  const handleModalClientsEdit = () => setOpenModalClientsEdit(true);
  const closeModalClientsEdit = () => setOpenModalClientsEdit(false);

  const [openModalChargesAdd, setOpenModalChargesAdd] = useState(false);
  const handleModalChargesAdd = () => setOpenModalChargesAdd(true);
  const closeModalChargesAdd = () => setOpenModalChargesAdd(false);

  const [openModalChargesEdit, setOpenModalChargesEdit] = useState(false);
  const handleModalChargesEdit = () => setOpenModalChargesEdit(true);
  const closeModalChargesEdit = () => setOpenModalChargesEdit(false);

  const [openModalChargesDelete, setOpenModalChargesDelete] = useState(false);
  const handleModalChargesDelete = () => setOpenModalChargesDelete(true);
  const closeModalChargesDelete = () => setOpenModalChargesDelete(false);

  const [refreshData, setRefreshData] = useState(false);

  const handleUpdateData = () => setRefreshData((prev) => !prev);

  return (
    <ModalStatesContext.Provider
      value={{
        openModalUserEdit,
        setOpenModalUserEdit,
        handleModalUserEdit,
        closeModalUserEdit,

        openModalClientsAdd,
        setOpenModalClientsAdd,
        handleModalClientsAdd,
        closeModalClientsAdd,

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

        refreshData,
        handleUpdateData,
      }}
    >
      {children}
    </ModalStatesContext.Provider>
  );
}

export const useModalStates = () => {
  const context = useContext(ModalStatesContext);
  if (!context) {
    throw new Error(
      "useModalStates deve ser usado dentro de ModalStatesProvider"
    );
  }
  return context;
};
