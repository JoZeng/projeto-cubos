import "./charges-content.css";
import { useCharges } from "./ChargesContentContext.jsx";
import { setItem } from "../../../utils/storage.jsx";
import iconEdit from "../../../assets/iconEdit.svg";
import iconDelete from "../../../assets/iconDelete.svg";
import chargesimage from "../../../assets/charges.svg";
import filterimage from "../../../assets/filter.svg";

export default function ChargesContent({
  handleModalChargesEdit,
  handleModalChargesDelete,
}) {
  const {
    charges,
    search,
    setSearch,
    actualPage,
    setActualPage,
    totalPages,
    loading,
    formatDate,
  } = useCharges();
  // const filteredCharges = Array.isArray(charges)
  //   ? search
  //     ? charges.filter(
  //         (charge) =>
  //           charge.cliente_nome?.toLowerCase().includes(search.toLowerCase()) ||
  //           charge.email?.toLowerCase().includes(search.toLowerCase()) ||
  //           charge.cpf?.includes(search)
  //       )
  //     : charges
  //   : [];

  const filteredCharges = charges;
  console.log("charges do contexto:", charges);
  return (
    <div className="charges-content">
      <div className="charges-content-header">
        <div className="charges-content-header-firstsession">
          <img src={chargesimage} alt="Ícone de cobranças" />
          <div>Cobranças</div>
        </div>
        <div className="charges-content-header-secondsession">
          <button>
            <img src={filterimage} alt="Filtro" />
          </button>
          <input
            className="charges-content-header-secondsession-input"
            placeholder="Pesquisa"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="charges-table">
        <div className="charges-table-header">
          <div>Cliente</div>
          <div>ID da Cobrança</div>
          <div>Data de vencimento</div>
          <div>Status</div>
          <div>Descrição</div>
          <div></div>
        </div>
        {filteredCharges.map((charge) => (
          <div key={charge.id} className="charges-table-row">
            <div>{charge.cliente_nome}</div>
            <div>{charge.id}</div>
            <div>{formatDate(charge.vencimento)}</div>

            {(charge.status === "vencida" && (
              <div className="charges-outofdate">
                {" "}
                {charge.status.charAt(0).toUpperCase() + charge.status.slice(1)}
              </div>
            )) ||
              (charge.status === "pago" && (
                <div className="charges-paid">
                  {" "}
                  {charge.status.charAt(0).toUpperCase() +
                    charge.status.slice(1)}
                </div>
              )) ||
              (charge.status === "pendente" && (
                <div className="charges-pending">
                  {" "}
                  {charge.status.charAt(0).toUpperCase() +
                    charge.status.slice(1)}
                </div>
              ))}

            <div>{charge.descricao}</div>
            <img
              onClick={() => {
                handleModalChargesEdit();
                setItem("cobrancaId", charge.id);
              }}
              src={iconEdit}
              alt="iconEdit"
            />
            <img
              onClick={() => {
                handleModalChargesDelete();
                setItem("cobrancaId", charge.id);
              }}
              src={iconDelete}
              alt="iconDelete"
            />
          </div>
        ))}{" "}
      </div>
      <div className="clients-content-pagination">
        <button
          onClick={() => setActualPage((p) => Math.max(p - 1, 1))}
          disabled={actualPage === 1}
        >
          Anterior
        </button>
        <span>
          Página {actualPage} de {totalPages}
        </span>
        <button
          onClick={() => setActualPage((p) => Math.min(p + 1, totalPages))}
          disabled={actualPage === totalPages}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
