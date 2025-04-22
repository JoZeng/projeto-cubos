import "./client-details-charge.css";
import iconEdit from "../../../../../assets/iconEdit.svg";
import iconDelete from "../../../../../assets/iconDelete.svg";
import { useClientDetailsContentContext } from "../ClientDetailsContentContext";

export default function ClientDetailsCharge({ handleModalAddCharges }) {
  const { cobrancas } = useClientDetailsContentContext();

  return (
    <div className="client-details-content">
      <div className="client-details-content-main">
        <div className="client-details-charges">
          <div className="client-details-charges-header">
            <p>Cobranças do Cliente</p>
            <button onClick={handleModalAddCharges}>Adicionar Cobranças</button>
          </div>
        </div>
        <div className="client-details-table">
          <div className="client-details-table-header">
            <span>ID</span>
            <span>Vencimento</span>
            <span>Valor</span>
            <span>Status</span>
            <span>Descrição</span>
            <span></span>
          </div>

          {cobrancas.map((cobranca) => (
            <div key={cobranca.id} className="client-details-table-row">
              <span>{cobranca.id}</span>
              <span>
                {new Date(cobranca.vencimento).toLocaleDateString("pt-BR")}
              </span>
              <span>R${cobranca.valor}</span>
              {(cobranca.status === "vencida" && (
                <span className="client-details-charges-outofdate">
                  {" "}
                  {cobranca.status.charAt(0).toUpperCase() +
                    cobranca.status.slice(1)}
                </span>
              )) ||
                (cobranca.status === "pago" && (
                  <span className="client-details-charges-paid">
                    {" "}
                    {cobranca.status.charAt(0).toUpperCase() +
                      cobranca.status.slice(1)}
                  </span>
                )) ||
                (cobranca.status === "pendente" && (
                  <span className="client-details-charges-pending">
                    {" "}
                    {cobranca.status.charAt(0).toUpperCase() +
                      cobranca.status.slice(1)}
                  </span>
                ))}
              <span>{cobranca.descricao}</span>
              <img  src={iconEdit} alt="iconEdit" />
              <img src={iconDelete} alt="iconDelete" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
