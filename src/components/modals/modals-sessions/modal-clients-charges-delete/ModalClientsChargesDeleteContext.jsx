import { createContext, useContext, useState, useEffect } from "react";
import api from "../../../../services/api";
import { toast } from "react-toastify";
import { getItem } from "../../../../utils/storage";

export const ModalClientsChargesDeleteContext = createContext();

export const ModalClientsChargesDeleteContextProvider = ({
  children,
  openModal,
  closedModal,
  closedModalButton,
  onUpdate,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const [openModalSucess, setOpenModalSucess] = useState(false);
  const clientName = getItem("clientName");

  useEffect(() => {
    if (openModalSucess) {
      const timer = setTimeout(() => {
        setOpenModalSucess(false);
        setIsSubmittedSuccessfully(false);
        closedModal();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [openModalSucess, closedModal]);

  const handleChargesDelete = async () => {
    const token = getItem("token");
    const chargeId = getItem("cobrancaId");
    if (!token) {
      toast.error("Token não encontrado!");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await api.delete(`/cobrancas/${chargeId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        toast.success("Cobrança deletada com sucesso!");
        setOpenModalSucess(true);
        setIsSubmittedSuccessfully(true);
        if (onUpdate) onUpdate();
      }
    } catch (error) {
      if (error.response?.data?.mensagem) {
        toast.error(error.response.data.mensagem);
      } else {
        toast.error("Erro ao deletar cobrança.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ModalClientsChargesDeleteContext.Provider
      value={{
        openModal,
        closedModal,
        closedModalButton,
        handleChargesDelete,
        isSubmitting,
        isSubmittedSuccessfully,
      }}
    >
      {children}
    </ModalClientsChargesDeleteContext.Provider>
  );
};

export const useModalClientsChargesDeleteContext = () => {
  return useContext(ModalClientsChargesDeleteContext);
};
