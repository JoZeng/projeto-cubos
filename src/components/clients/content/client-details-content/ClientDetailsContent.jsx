import "./client-details-content.css";
import ClientDetailsData from "./client-details-data/ClientDetailsDatas";
import ClientDetailsCharge from "./client-details-charges/ClientDetailsCharge";

export default function ClientDetailsContent({
  handleModalClientsEdit,
  handleModalChargesAdd,
  handleModalChargesEdit,
  handleModalChargesDelete,
}) {
  console.log({
    handleModalChargesAdd,
    handleModalChargesEdit,
    handleModalChargesDelete,
  });
  return (
    <div className="client-details">
      <ClientDetailsData handleModalClientsEdit={handleModalClientsEdit} />
      <ClientDetailsCharge
        handleModalChargesAdd={handleModalChargesAdd}
        handleModalChargesEdit={handleModalChargesEdit}
        handleModalChargesDelete={handleModalChargesDelete}
      />
    </div>
  );
}
