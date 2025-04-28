import {
  createContext,
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import { getItem } from "../../../utils/storage";
import api from "../../../services/api";

export const ChargesContentContext = createContext();

export const ChargesContentProvider = ({ children, refreshTrigger }) => {
  const [charges, setCharges] = useState([]);
  const [search, setSearch] = useState("");
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const lastRefresh = useRef(null);
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) {
      console.error("Data inválida:", dateString);
      return "Data inválida";
    }

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const fetchCharges = useCallback(async (page = 1) => {
    setLoading(true);
    try {
      const token = getItem("token");
      const response = await api.get(`/cobrancas?pages=${page}&limite=10`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const fetchedCharges = response.data;
      setCharges(fetchedCharges.charges);
      setTotalPages(fetchedCharges.totalPages);
    } catch (error) {
      console.error(
        "Erro ao buscar cobranças:",
        error.response?.data || error.message
      );
      setCharges([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!search.trim()) {
      fetchCharges(actualPage);
    }
  }, [search, actualPage, fetchCharges]);

  useEffect(() => {
    if (refreshTrigger !== lastRefresh.current) {
      lastRefresh.current = refreshTrigger;
      fetchCharges(actualPage);
    }
  }, [refreshTrigger, fetchCharges, actualPage]);

  return (
    <ChargesContentContext.Provider
      value={{
        charges,
        search,
        setSearch,
        actualPage,
        setActualPage,
        totalPages,
        loading,
        navigate,
        formatDate,
      }}
    >
      {children}
    </ChargesContentContext.Provider>
  );
};

export const useCharges = () => {
  const context = useContext(ChargesContentContext);
  if (!context) {
    throw new Error(
      "useCharges deve ser usado dentro de ChargesContentProvider"
    );
  }
  return context;
};
