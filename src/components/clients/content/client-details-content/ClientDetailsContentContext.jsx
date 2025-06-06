import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../../../utils/storage";
import api from "../../../../services/api";

export const ClientDetailsContentContext = createContext();

export const ClientDetailsContentContextProvider = ({
  children,
  refreshTrigger,
  handleUpdateData,
}) => {
  const [openModalClientsEdit, setOpenModalClientsEdit] = useState(false);
  const [client, setClient] = useState({});
  const [charges, setCharges] = useState([]);

  const { id } = useParams();

  const fetchClientDetails = useCallback(async () => {
    try {
      const token = getItem("token");
      const response = await api.get(`/clientes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setClient(response.data.cliente);
    } catch (error) {
      console.error(
        "Erro ao carregar detalhes:",
        error.response?.data?.mensagem
      );
    }
  }, [id]);

  const fetchCobrancas = useCallback(async () => {
    try {
      const token = getItem("token");
      const response = await api.get(`/cobrancas/cliente/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (Array.isArray(response.data)) {
        setCharges(response.data);
      } else if (response.data && Array.isArray(response.data.cobrancas)) {
        setCharges(response.data.cobrancas);
      } else {
        setCharges([]);
      }
    } catch (error) {
      if (error.response?.status === 404) {
        console.log(`Nenhuma cobrança encontrada para o cliente ID: ${id}`);
        setCharges([]);
      } else {
        console.error("Erro ao carregar cobranças:", error);
      }
    }
  }, [id]);

  useEffect(() => {
    console.log("useEffect rodou! refreshTrigger:", refreshTrigger);
    if (id) {
      fetchClientDetails();
      fetchCobrancas();
    }
  }, [id, refreshTrigger, fetchClientDetails, fetchCobrancas]);

  return (
    <ClientDetailsContentContext.Provider
      value={{
        openModalClientsEdit,
        setOpenModalClientsEdit,
        client,
        charges,
        handleUpdateData,
      }}
    >
      {children}
    </ClientDetailsContentContext.Provider>
  );
};

export const useClientDetailsContentContext = () => {
  const context = useContext(ClientDetailsContentContext);
  if (!context) {
    throw new Error(
      "useClientContentDetailsContext deve ser usado dentro de ClientDetailsContentContextProvider"
    );
  }
  return context;
};
